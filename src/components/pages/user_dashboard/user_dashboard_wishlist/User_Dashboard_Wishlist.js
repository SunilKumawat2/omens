import React, { useEffect, useState } from 'react'
import Header from '../../../common/header/Header'
import User_Dashbaord_Common_Section from '../user_dashboard_common_section/User_Dashbaord_Common_Section'
import { Add_To_Fav, get_favourite_product_list } from '../../../../api/category_product/Category_Product';
import { User_Authentication } from '../../../../user_authentication/User_Authentication';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Loader from '../../../../loader/Loader';
import { IMG_BASE_URL } from '../../../../config/Config';

const User_Dashboard_Wishlist = () => {
    const date = new Date();
    const [is_loading, set_Is_Loading] = useState(false)
    const [wishlist, set_WishList] = useState([]);
    const Get_user_is_active = localStorage.getItem("user_is_active")
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    // Calculate total pages safely
    const totalPages = Math.ceil(wishlist?.length / productsPerPage) || 1;

    // Calculate the products to display on the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProduct = wishlist?.slice(startIndex, startIndex + productsPerPage) || [];

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

    const handle_get_favourite_product_list = async () => {
        try {
            const token = User_Authentication();
            if (!token) {
                toast("User token not found")
                set_Is_Loading(false)
                throw new Error("User token not found");
            }
            const response = await get_favourite_product_list({ Authorization: `Bearer ${token}` });
            set_WishList(response?.data?.data?.favourite);
            if (response?.data?.status == "200") {

            }
        }
        catch (error) {

        }
    }

    // <--------- Add To Favorite --------->
    const Handle_add_to_favorite = async (cat_id, sub_id, id) => {
        set_Is_Loading(true)
        const data = {
            cat_id: cat_id,
            subcat_id: sub_id,
            product_id: id
        }
        try {
            const token = User_Authentication();
            if (!token) {
                toast("User not login here")
                set_Is_Loading(false);
                throw new Error("User token not found");
            }
            if (!Get_user_is_active) {
                set_Is_Loading(false);
                toast("User not login here")
                return
            }
            const response = await Add_To_Fav(data, { Authorization: `Bearer ${token}` })
            console.log("response", response)
            if (response?.data?.status == "200") {
                handle_get_favourite_product_list({ Authorization: `Bearer ${token}` })
                set_Is_Loading(false)
                toast("remove the product from wishlist !!")
            }
            else if (response?.response?.data?.status == "500") {
                set_Is_Loading(false)
                toast(response?.response?.data?.message)
            }
        }
        catch (error) {
            console.log("error", error)
            set_Is_Loading(false)
        }
    }

    // Format the date
    const formattedDate = (isoString) => {
        const date = new Date(isoString);
        const dateOptions = {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        };
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date);
        const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
        return `${formattedDate} | ${formattedTime}`;
    };

    useEffect(() => {
        handle_get_favourite_product_list();
    }, [])
    return (
        <div>
            {/* <----------- Header section's ------------> */}
            <Header />
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            {/* <--------- user Wishlist section's ----------> */}
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <>
                        <section className="gi-faq py-[40px] max-[767px]:py-[30px] gi-wishlist">
                            <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                                <div className="section-title-2 w-full mb-[20px] pb-[20px] flex flex-col justify-center items-center">
                                    <h2 className="gi-title mb-[0] text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">Product <span className="text-[#9D2326]">Wishlist</span></h2>
                                    <p className="max-w-[400px] mt-[15px] text-[14px] text-[#777] text-center leading-[23px]">Your product wish is our first priority.</p>
                                </div>
                                <div className="container-x mx-auto">
                                    <div className="w-full my-10">  

                                        <div className="w-full bg-white shadow-xl p-5">

                                            <div className="my_account w-full md:flex md:space-x-10">
                                                <User_Dashbaord_Common_Section />
                                                <div className="flex-1 md:w-[70%]">
                                                    <div className="item-body dashboard-wrapper w-full">
                                                        <div className="relative w-full overflow-x-auto sm:rounded-lg">
                                                            {
                                                                wishlist?.length > 0 ? (
                                                                    <>
                                                                        <table className="table w-full mb-[1rem]">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th scope="col" className="p-[0.5rem] text-left text-[#4b5966]">ID</th>
                                                                                    <th scope="col" className="p-[0.5rem] text-left text-[#4b5966]">Image</th>
                                                                                    <th scope="col" className="p-[0.5rem] text-left text-[#4b5966]">Name</th>
                                                                                    <th scope="col" className="p-[0.5rem] text-left text-[#4b5966]">Date</th>
                                                                                    <th scope="col"  className="p-[0.5rem] text-left text-[#4b5966]">Price</th>
                                                                                    <th scope="col" className="p-[0.5rem] text-left text-[#4b5966]">Status</th>
                                                                                    <th scope="col" className="p-[0.5rem] text-left text-[#4b5966]">Actions</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody className="wish-empt border-t-[3px] border-solid border-[#eee] border-solid border-[#dee2e6]">
                                                                                {
                                                                                    currentProduct?.map((wishlist_result,index) => {
                                                                                        return (
                                                                                            <tr className="pro-gl-content">
                                                                                                <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]"><span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">{index + 1}</span></td>
                                                                                                <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]"><img className="prod-img h-[58px] w-[58px]" src={`${IMG_BASE_URL}${wishlist_result?.product?.single_image?.image_url}`} alt="product image" /></td>
                                                                                                <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]"><span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">{wishlist_result?.product?.name}</span></td>
                                                                                                <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]"><span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">{formattedDate(wishlist_result?.created_at)}</span></td>
                                                                                                <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]"><span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">Rs.{wishlist_result?.product?.purchase_price}</span></td>
                                                                                                {
                                                                                                    wishlist_result?.product?.current_stock > 0 ? (
                                                                                                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]"><span className="max-[767px]:text-[14px] py-[14px] flex text-[#5caf90] tracking-[0.02rem]">Available</span></td>
                                                                                                    ) : (
                                                                                                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]"><span className="max-[767px]:text-[14px] py-[14px] flex text-red-600 tracking-[0.02rem]">Out of Stock</span></td>
                                                                                                    )
                                                                                                }
                                                                                                <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                                                                                                    <span className="tbl-btn py-[14px] flex text-[#777]"
                                                                                                        onClick={() => Handle_add_to_favorite(wishlist_result?.cat_id, wishlist_result?.subcat_id, wishlist_result?.product_id)}>
                                                                                                        <a className="gi-btn-2 add-to-cart w-[30px] h-[30px] inline-flex items-center 
                                                                                            justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#9D2326] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]" href="javascript:void(0)" title="Add To Cart">
                                                                                                            <i className="fi-rr-shopping-basket leading-[10px]"></i>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                </td>
                                                                                            </tr>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </tbody>
                                                                        </table>
                                                                        {/* <!-- Pagination Start --> */}
                                                                        <div className="gi-pro-pagination pt-[15px] pb-[15px] flex justify-between items-center border-t-[1px] border-solid border-[#eee] max-[575px]:flex-col">
                                                                            <span className="text-[14px] text-[#777] max-[575px]:mb-[10px]">Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, currentProduct?.length)} of {currentProduct?.length} Product(s)</span>
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
                                                                    </>
                                                                ) : (
                                                                    <div className='text-center'>
                                                                        <h5>not any wishlist here</h5>
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
                        </section>
                    </>
                )
            }
        </div>
    )
}

export default User_Dashboard_Wishlist