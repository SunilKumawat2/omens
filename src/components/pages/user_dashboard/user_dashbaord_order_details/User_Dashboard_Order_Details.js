import React, { useEffect, useState } from 'react'
import User_Dashbaord_Common_Section from '../user_dashboard_common_section/User_Dashbaord_Common_Section'
import Header from '../../../common/header/Header'
import Footer from '../../../common/footer/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { Get_Order_Details } from '../../../../api/category_product/Category_Product'
import { User_Authentication } from '../../../../user_authentication/User_Authentication'
import Loader from '../../../../loader/Loader'
import { IMG_BASE_URL } from '../../../../config/Config'

const User_Dashboard_Order_Details = () => {
    const navigate = useNavigate();
    const { id: orderId } = useParams();
    const [is_loading, set_Is_Loading] = useState(false)
    const [order_details, set_order_details] = useState([])
    const [activeTab, setActiveTab] = useState("0");

    // Status codes and labels
    const statuses = [
        { code: 1, label: "Order" },
        { code: 2, label: "Processed" },
        { code: 3, label: "Ready to Pickup" },
        { code: 4, label: "Shipped" },
        { code: 5, label: "Delivered" },
        { code: 6, label: "Cancelled" },
    ];

    // Current status code
    const currentStatus = order_details?.order?.status;

  // Function to determine status color
const getStatusClass = (statusCode, currentStatus) => {
    if (currentStatus == 6) {
        return "border-red-600 after:bg-red-600 text-red-600";
    } else if (statusCode <= currentStatus) {
        return "border-green-600 after:bg-green-600 text-green-600";
    } else {
        return "border-gray-300 after:bg-gray-300 text-gray-500";
    }
};
// Filter statuses
let displayedStatuses;
if (currentStatus == 6) {
    displayedStatuses = statuses?.filter(s => s.code == 1 || s.code == 6); // Show only "Order" → "Cancelled"
} else {
    displayedStatuses = statuses?.filter(s => s.code != 6); // Show full timeline without "Cancelled"
}



    useEffect(() => {
        const Handle_Get_Order_Details = async () => {
            set_Is_Loading(true);
            try {
                const token = User_Authentication();
                if (!token) {
                    set_Is_Loading(false);
                    throw new Error("User token not found");
                }
                // Pass `orderId` as a simple value
                const response = await Get_Order_Details(orderId, { Authorization: `Bearer ${token}` });

                if (response?.data?.status == "200") {
                    set_order_details(response?.data?.data);
                } else if (response?.response?.data?.status == "500") {
                    set_order_details(response?.data?.data);
                }
            } catch (error) {
                console.error("Error fetching order details:", error);
            } finally {
                set_Is_Loading(false);
            }
        };

        if (orderId) {
            Handle_Get_Order_Details();
        } else {
            console.error("Order ID is missing from the URL.");
        }
    }, [orderId]);

    return (
        <div>
            {/* <-------- Header section's ------------> */}
            <Header />
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <div className="bg-[#f8f8f8] py-8">
                        <div
                            className=" mx-auto min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                            <div className="myaccount-section w-full">
                                <div className="container-x mx-auto">
                                    <div className="w-full my-10">
                                        <div className="w-full bg-white shadow-xl p-5">
                                            <div className="my_account w-full flex space-x-10">
                                                <User_Dashbaord_Common_Section />
                                                <div className="flex-1">
                                                    <div className="max-sm:p-5">
                                                        <h1 className="font-bold text-[24px] text-qblack mb-4">Order Details
                                                        </h1>

                                                        {
                                                            order_details?.order?.order_details?.map((order_details_result) => {
                                                                return (
                                                                    <>
                                                                        <div className="flex items-center border-b border-black/5 pb-5 mb-7.5">
                                                                            <div className="w-20 h-auto border border-border p-2.5 rounded-lg">
                                                                                <img src={`${IMG_BASE_URL}${order_details_result?.product_image?.image_url}`} alt="" />
                                                                            </div>
                                                                            <div className="clearfix ml-5">
                                                                                <div className="p-2 text-white rounded-md uppercase text-center leading-[1] inline-block text-xs font-medium">
                                                                                    {
                                                                                        order_details?.order?.status == "1" ? (
                                                                                            <h5 className="text-[14px] text-white-500 font-medium bg-yellow-600 p-2 text-white rounded-md uppercase text-center leading-[1] inline-block text-xs font-medium">Awaiting</h5>
                                                                                        ) : order_details?.order?.status == "2" ? (
                                                                                            <h5 className="text-[14px] text-white-500 font-medium bg-blue-600 p-2 text-white rounded-md uppercase text-center leading-[1] inline-block text-xs font-medium">Processed</h5>
                                                                                        ) : order_details?.order?.status == "3" ? (
                                                                                            <h5 className="text-[14px] text-white-500 font-medium bg-black-600 p-2 text-white rounded-md uppercase text-center leading-[1] inline-block text-xs font-medium">Ready to Pickup</h5>
                                                                                        ) : order_details?.order?.status == "4" ? (
                                                                                            <h5 className="text-[14px] text-white-500 font-medium bg-yellow-600 p-2 text-white rounded-md uppercase text-center leading-[1] inline-block text-xs font-medium">Shipped</h5>
                                                                                        ) : order_details?.order?.status == "5" ? (
                                                                                            <h5 className="text-[14px] text-white-500 font-medium bg-green-600 p-2 text-white rounded-md uppercase text-center leading-[1] inline-block text-xs font-medium">Delivered</h5>
                                                                                        ) : order_details?.order?.status == "6" ? (
                                                                                            <h5 className="text-[14px] text-white-500 font-medium bg-red-600 p-2 text-white rounded-md uppercase text-center leading-[1] inline-block text-xs font-medium">Cancelled</h5>
                                                                                        ) : (
                                                                                            null
                                                                                        )
                                                                                    }</div>
                                                                                <h4 className="text-lg font-semibold">Order {order_details?.order?.orderNo}</h4>
                                                                            </div>

                                                                        </div>
                                                                        <div className="flex-wrap flex sm:mb-6 mb-2">
                                                                            <div className="sm:w-1/2 w-full pt-4">
                                                                                <div className="mb-3.6">
                                                                                    <span className="text-gray-400 font-normal">Item</span>
                                                                                    <h6 className="text-2sm">{order_details_result?.name}</h6>
                                                                                </div>
                                                                            </div>
                                                                            <div className="sm:w-1/2 w-full pt-4">
                                                                                <div className="mb-3.6">
                                                                                    <span className="text-gray-400 font-normal">SKU</span>
                                                                                    <h6 className="text-2sm">{order_details_result?.sku}</h6>
                                                                                </div>
                                                                            </div>
                                                                            <div className="sm:w-1/2 w-full pt-4">
                                                                                <div className="mb-3.6">
                                                                                    <span className="text-gray-400 font-normal">Colors</span>
                                                                                    <h6 className="text-2sm">{order_details_result?.colors?.name}</h6>
                                                                                </div>
                                                                            </div>

                                                                            <div className="sm:w-1/2 w-full pt-4">
                                                                                <div className="mb-3.6">
                                                                                    <span className="text-gray-400 font-normal">Address</span>
                                                                                    <h6 className="text-2sm">{order_details?.order?.shipping_address}</h6>
                                                                                </div>
                                                                            </div>
                                                                            {
                                                                                order_details_result?.producttype?.name != null && (
                                                                                    <div className="sm:w-1/2 w-full pt-4">
                                                                                        <div className="mb-3.6">
                                                                                            <span className="text-gray-400 font-normal">Select for</span>
                                                                                            <h6 className="text-2sm">{order_details_result?.producttype?.name}</h6>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            }

                                                                        </div>
                                                                        {
                                                                            order_details?.order?.status == "5" && (
                                                                                <li onClick={() => {
                                                                                    navigate("/add_productreview", {
                                                                                        state: {
                                                                                            order_details_result: order_details_result?.product_id
                                                                                        }
                                                                                    })
                                                                                }}
                                                                                    className="mr-[5px] inline-block bg-[#9F2225] text-white">
                                                                                    <button
                                                                                        className="py-[8px] px-[28px] m-[0] text-[15px] font-medium transition-all duration-[300ms] linear hover:bg-[#9F2225] hover:text-white focus:outline-none">
                                                                                        Give Review
                                                                                    </button>
                                                                                </li>

                                                                            )
                                                                        }
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                        <div className="gi-single-pro-tab-nav w-full m-auto relative block text-center">
                                                            <ul className="nav-tabs inline-block w-full border-b-2 border-[#eee]" id="singleprotab">

                                                                <li
                                                                    className={`mr-[5px] inline-block ${activeTab == "0" ? "bg-[#9F2225] text-white" : "text-[#4b5966]"}`}>
                                                                    <button onClick={() => setActiveTab("0")}
                                                                        className="py-[8px] px-[28px] m-[0] text-[15px] font-medium transition-all duration-[300ms] linear hover:bg-[#9F2225] hover:text-white focus:outline-none">
                                                                        Order History
                                                                    </button>
                                                                </li>
                                                                <li
                                                                    className={`mr-[5px] inline-block ${activeTab == "1" ? "bg-[#9F2225] text-white" : "text-[#4b5966]"}`}>
                                                                    <button
                                                                        onClick={() => setActiveTab("1")} className="py-[8px] px-[28px] m-[0] text-[15px] font-medium transition-all duration-[300ms] linear hover:bg-[#9F2225] hover:text-white focus:outline-none">
                                                                        Receiver
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="tab-content transition-all w-full overflow-hidden bg-[#fff] text-left text-[#202020] text-[18px] tracking-[0] leading-[1.6] rounded-[5px]"
                                                            id="singleTabContent">
                                                            {
                                                                activeTab == "0" && (
                                                                    <div id="gi-spt-nav-details" className="tab-single-pane">
                                                                        <div className="gi-single-pro-tab-desc py-5">
                                                                            <div className="widget-timeline style-1">
                                                                            <ul className="relative after:top-5 after:bottom-12 after:absolute after:content-[''] after:w-[1px] after:left-2.5 after:border-r after:border-dashed after:border-black/15">
        {displayedStatuses && displayedStatuses?.map((status) => (
            <li className="relative mb-3.6" key={status.code}>
                <div
                    className={`rounded-full left-0 absolute top-2.5 size-5 border p-1 bg-white ${getStatusClass(
                        status.code,
                        currentStatus
                    )} after:content-[''] after:size-2.5 after:rounded-full after:block`}
                ></div>
                <div className="p-2.5 pl-3.6 relative block ml-10">
                    <a className="timeline-panel" href="javascript:void(0);">
                        <h6 className={`mb-0 text-[15px] font-medium ${getStatusClass(status.code, currentStatus)}`}>
                            {status.label}
                        </h6>
                    </a>
                </div>
            </li>
        ))}
    </ul>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                            {
                                                                activeTab == "1" && (
                                                                    <div id="gi-spt-nav-info" className="tab-single-pane">
                                                                        <div className="gi-single-pro-tab-moreinfo">
                                                                            {/* <h5 className="text-green-500 py-4">Thank you Your order has been received</h5> */}
                                                                            <ul className="tracking-receiver">
                                                                                <li className="mb-2 text-sm text-gray-400 mt-4 mb-2">Order Number : <span className="text-title text-black font-bold">{order_details?.order?.orderNo}</span></li>
                                                                                {/* <li className="mb-2 text-sm text-gray-400">Date : <span className="text-title text-black font-bold">17/04/2024, 02:34pm</span></li> */}
                                                                                <li className="mb-2 text-sm text-gray-400">Total : <span className="text-title text-black font-bold">Rs.{(order_details?.order?.final_amount || 0) + (order_details?.order?.shipping_cost)}</span></li>
                                                                                <li className="mb-2 text-sm text-gray-400">Payment Methods : <span className="text-title text-black font-bold">{order_details?.order?.payment_type}</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }


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
            {/* <------- Footer section's ---------------> */}
            <Footer />
        </div>
    )
}

export default User_Dashboard_Order_Details