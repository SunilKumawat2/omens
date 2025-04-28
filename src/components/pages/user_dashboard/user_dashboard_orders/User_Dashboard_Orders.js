import React, { useEffect, useState } from 'react'
import Footer from '../../../common/footer/Footer'
import Header from '../../../common/header/Header'
import User_Dashbaord_Common_Section from '../user_dashboard_common_section/User_Dashbaord_Common_Section'
import { Link } from 'react-router-dom'
import { User_Authentication } from '../../../../user_authentication/User_Authentication'
import { Get_Order_List } from '../../../../api/category_product/Category_Product'
import Loader from '../../../../loader/Loader'
import { format } from "date-fns";
const User_Dashboard_Orders = () => {
        const [is_loading, set_Is_Loading] = useState(false)
        const [order_list, set_order_list] = useState([]);

        const [currentPage, setCurrentPage] = useState(1);
        const productsPerPage = 10;

        // Calculate total pages safely
        const totalPages = Math.ceil(order_list?.length / productsPerPage) || 1;

        // Calculate the products to display on the current page
        const startIndex = (currentPage - 1) * productsPerPage;
        const currentProduct = order_list?.slice(startIndex, startIndex + productsPerPage) || [];

        // Pagination controls
        const handlePageChange = (page) => {
                setCurrentPage(page);
        };

        const handleNext = () => {
                if (currentPage < totalPages) {
                        setCurrentPage(currentPage + 1);
                }
        };

        const handlePrev = () => {
                if (currentPage > 1) {
                        setCurrentPage(currentPage - 1);
                }
        };

        useEffect(() => {
                const Handle_Get_Order_list = async () => {
                        set_Is_Loading(true)
                        try {
                                const token = User_Authentication();
                                if (!token) {
                                        set_Is_Loading(false);
                                        throw new Error("User token not found");
                                }
                                const response = await Get_Order_List({ Authorization: `Bearer ${token}` })
                                if (response?.data?.status == "200") {
                                        set_Is_Loading(false)
                                        set_order_list(response?.data?.data?.orderlist)
                                }
                                else if (response?.response?.data?.status == "500") {
                                        set_Is_Loading(false)
                                }
                        }
                        catch (error) {
                                set_Is_Loading(false)
                        }
                }
                Handle_Get_Order_list();
        }, [])
        const formatDate = (dateString) => {
                const date = new Date(dateString); // Convert ISO string to Date object
                return format(date, "MMM dd, yyyy hh:mm a"); // Format to "Dec 13, 2024 10:24 AM"
        };
        return (
                <div>
                        {/* <--------- Header section's ------------> */}
                        <Header />
                        {/* <----------- Dashboard Order list here -----------> */}
                        {
                                is_loading ? (
                                        <Loader />
                                ) : (

                                        <div className="bg-[#f8f8f8] py-8">
                                                <div
                                                        className=" mx-auto min-[1300px]:max-w-[1240px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                                                        <div className="myaccount-section w-full">
                                                                <div className="container-x mx-auto">
                                                                        <div className="w-full my-10">

                                                                                <div className="w-full bg-white shadow-xl p-5">

                                                                                        <div className="my_account w-full md:flex md:space-x-10">
                                                                                                <User_Dashbaord_Common_Section />
                                                                                                <div className="flex-1 md:w-[70%]">
                                                                                                        <h1 className="font-bold text-[24px] text-qblack mb-4">Order List
                                                                                                        </h1>
                                                                                                        <div className="item-body dashboard-wrapper w-full">
                                                                                                                <div className="relative w-full overflow-x-auto sm:rounded-lg">

                                                                                                                        <table className="table-autow-full custome_tab text-sm text-left text-gray-500 dark:text-gray-400">
                                                                                                                                <tbody>
                                                                                                                                        <tr
                                                                                                                                                className="text-base text-qgray whitespace-nowrap px-2 border-b default-border-bottom ">
                                                                                                                                                <th className="py-2 text-sm whitespace-nowrap">Order Id</th>
                                                                                                                                                <th className="py-2 text-sm whitespace-nowrap">Pay. Status</th>
                                                                                                                                                <th className="py-2 text-sm whitespace-nowrap">Pay. Type</th>
                                                                                                                                                <th className="py-2 text-sm whitespace-nowrap">Tran. ID</th>
                                                                                                                                                <th className="py-2 text-sm whitespace-nowrap">Date</th>
                                                                                                                                                <th className="py-2 text-sm whitespace-nowrap">Status</th>
                                                                                                                                                <th className="py-2 text-sm whitespace-nowrap">Amount</th>
                                                                                                                                                <th className="py-2 text-sm whitespace-nowrap">Action</th>
                                                                                                                                        </tr>
                                                                                                                                        {
                                                                                                                                                currentProduct?.map((order_list_result) => {
                                                                                                                                                        return (

                                                                                                                                                                <tr className="bg-white border-b hover:bg-gray-50">
                                                                                                                                                                        <td className="py-2"><span
                                                                                                                                                                                className="text-sm text-qgray">{order_list_result?.orderNo}</span></td>
                                                                                                                                                                        <td className="py-2"><span
                                                                                                                                                                                className="text-sm text-qgray  whitespace-nowrap">{order_list_result?.payment_status}</span></td>
                                                                                                                                                                        <td className="py-2"><span
                                                                                                                                                                                className="text-sm text-qgray  whitespace-nowrap">{order_list_result?.payment_type}</span></td>
                                                                                                                                                                        <td className="py-2"><span
                                                                                                                                                                                className="text-sm text-qgray  whitespace-nowrap">{order_list_result?.transaction_id}</span></td>
                                                                                                                                                                        <td className="py-2"><span
                                                                                                                                                                                className="text-sm text-qgray  whitespace-nowrap">{formatDate(order_list_result?.created_at)}</span></td>
                                                                                                                                                                        <td className="py-2">
                                                                                                                                                                                {
                                                                                                                                                                                        order_list_result?.status == "1" ? (
                                                                                                                                                                                                <span className="text-sm rounded text-white-500 bg-yellow-200 p-2">Order</span>
                                                                                                                                                                                        ) : order_list_result?.status == "2" ? (
                                                                                                                                                                                                <span className="text-sm rounded text-white-500 bg-blue-200 p-2">Processed</span>
                                                                                                                                                                                        ) : order_list_result?.status == "3" ? (
                                                                                                                                                                                                <span className="text-sm rounded text-white-500 bg-blue-500 p-2">Ready to Pickup</span>
                                                                                                                                                                                        ) : order_list_result?.status == "4" ? (
                                                                                                                                                                                                <h5 className="text-sm rounded text-white-500 bg-info-200 p-2">Shipped</h5>
                                                                                                                                                                                        ) : order_list_result?.status == "5" ? (
                                                                                                                                                                                                <h5 className="text-sm rounded text-white-500 bg-green-200 p-2">Delivered</h5>
                                                                                                                                                                                        ) : order_list_result?.status == "6" ? (
                                                                                                                                                                                                <h5 className="text-sm rounded text-white-500 bg-red-200 p-2">Cancelled</h5>
                                                                                                                                                                                        ) : (
                                                                                                                                                                                                null
                                                                                                                                                                                        )
                                                                                                                                                                                }
                                                                                                                                                                        </td>
                                                                                                                                                                        <td className="text-center py-2 px-2"><span
                                                                                                                                                                                className="text-sm text-qblack whitespace-nowrap px-2 ">Rs.{(order_list_result?.final_amount || 0) + (order_list_result?.shipping_cost)}/-</span>
                                                                                                                                                                        </td>
                                                                                                                                                                        <td className="text-center py-2"><Link to={`/user-orders-details/${order_list_result?.id}`}
                                                                                                                                                                                className="w-[116px] h-[46px] text-sm text-black">View
                                                                                                                                                                                Details</Link></td>
                                                                                                                                                                </tr>
                                                                                                                                                        )
                                                                                                                                                })
                                                                                                                                        }
                                                                                                                                </tbody>
                                                                                                                        </table>
                                                                                                                        {/* <!-- Pagination Start --> */}
                                                                                                                        <div className="gi-pro-pagination pt-[15px] pb-[15px] flex justify-between items-center border-t-[1px] border-solid border-[#eee] max-[575px]:flex-col">
                                                                                                                                <span className="text-[14px] text-[#777] max-[575px]:mb-[10px]">Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, order_list?.length)} of {order_list?.length} Product(s)</span>
                                                                                                                                <ul className="gi-pro-pagination-inner flex">
                                                                                                                                        {currentPage > 1 && (
                                                                                                                                                <li>
                                                                                                                                                        <button
                                                                                                                                                                onClick={handlePrev}
                                                                                                                                                                className="next w-auto px-[13px] text-[#fff] m-1 p-2 bg-[#5caf90] leading-[30px] h-[32px] bg-red-500 flex text-center align-top text-[16px] justify-center items-center rounded-[5px]"
                                                                                                                                                        >
                                                                                                                                                                Prev
                                                                                                                                                        </button>
                                                                                                                                                </li>
                                                                                                                                        )}
                                                                                                                                        {[...Array(totalPages).keys()].map((page) => (
                                                                                                                                                <li key={page} className="inline-block float-left mr-[5px]">
                                                                                                                                                        <button
                                                                                                                                                                onClick={() => handlePageChange(page + 1)}
                                                                                                                                                                className={`transition-all duration-[0.3s] m-1 p-2 ease-in-out w-[32px] h-[32px] font-light 
                    text-[#777] leading-[32px] bg-[#eee] flex text-center align-top 
                    text-[16px] justify-center items-center rounded-[5px]
                    ${currentPage === page + 1 ? 'active bg-red-500 text-white' : 'bg-gray-300 text-white'}`}
                                                                                                                                                        >
                                                                                                                                                                {page + 1}
                                                                                                                                                        </button>
                                                                                                                                                </li>
                                                                                                                                        ))}
                                                                                                                                        {currentPage < totalPages && (
                                                                                                                                                <li>
                                                                                                                                                        <button
                                                                                                                                                                onClick={handleNext}
                                                                                                                                                                className="next w-auto px-[13px] text-[#fff] m-1 p-2 bg-[#5caf90] leading-[30px] h-[32px] bg-red-500 flex text-center align-top text-[16px] justify-center items-center rounded-[5px]"
                                                                                                                                                        >
                                                                                                                                                                Next
                                                                                                                                                        </button>
                                                                                                                                                </li>
                                                                                                                                        )}
                                                                                                                                </ul>

                                                                                                                        </div>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                )
                        }
                        {/* <-------- footer section's --------------> */}
                        <Footer />
                </div>
        )
}

export default User_Dashboard_Orders