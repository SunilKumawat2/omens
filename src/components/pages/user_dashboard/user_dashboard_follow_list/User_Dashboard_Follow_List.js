import React, { useEffect, useState } from 'react'
import Header from '../../../common/header/Header'
import User_Dashbaord_Common_Section from '../user_dashboard_common_section/User_Dashbaord_Common_Section'
import { User_Authentication } from '../../../../user_authentication/User_Authentication';
import Loader from '../../../../loader/Loader';
import { IMG_BASE_URL } from '../../../../config/Config';
import { Get_follow_Astro } from '../../../../api/astrologer/Astrologer';

const User_Dashboard_Follow_List = () => {
    const [isLoading, setIsLoading] = useState([]);
    const [get_user_Follow_List, set_user_Follow_List] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;

    // Calculate total pages safely
    const totalPages = Math.ceil(get_user_Follow_List?.length / productsPerPage) || 1;

    // Calculate the products to display on the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentFollowList = get_user_Follow_List?.slice(startIndex, startIndex + productsPerPage) || [];

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
        const handle_get_user_booked_pooja_list = async () => {
            setIsLoading(true)
            try {
                const token = User_Authentication();
                if (!token) {
                    setIsLoading(false);
                    throw new Error("User token not found");
                }
                const response = await Get_follow_Astro({ Authorization: `Bearer ${token}` })
                if (response?.data?.status == "200") {
                    set_user_Follow_List(response?.data?.data)
                    setIsLoading(false)
                }
                else if (response?.response?.data?.status == "500") {
                    setIsLoading(false)
                }
            }
            catch (error) {
                setIsLoading(false)
            }
        }
        handle_get_user_booked_pooja_list();
    }, [])
    console.log("get_user_Follow_List", get_user_Follow_List)

    return (
        <div>
            {/* <----------- Header section's ------------> */}
            <Header />
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <section className="gi-faq py-[40px] max-[767px]:py-[30px] gi-wishlist">
                        <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                            <div className="container-x mx-auto">
                                <div className="w-full my-10">
                                    <div className="w-full bg-white shadow-xl p-5">
                                        <div className="my_account w-full flex space-x-10">
                                            <User_Dashbaord_Common_Section />
                                            {
                                                currentFollowList?.length > 0 ? (
                                                    <div className="flex-1">
                                                        <div className=" w-full">
                                                            <h1 className="font-bold text-[24px] text-qblack mb-4">Follow List
                                                            </h1>
                                                            <div
                                                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6">
                                                                {
                                                                    get_user_Follow_List?.map((get_booked_pooja_list_result) => {
                                                                        return (
                                                                            <div className="border rounded-lg p-4 bg-white">
                                                                                <div className="flex justify-between items-center">
                                                                                    <div className="flex gap-3 items-center">
                                                                                        <img src={`${IMG_BASE_URL}${get_booked_pooja_list_result?.astro?.profile_image}`}
                                                                                            className="rounded-md h-16 w-16"
                                                                                            alt="" />
                                                                                        {/* <div>
                                                                                            <h5 className="text-lg font-medium text-black line-clamp-1">{get_booked_pooja_list_result?.astro?.name}</h5>
                                                                                            <p class="text-gray-500 text-sm clamped-text">{get_booked_pooja_list_result?.astro?.short_description}</p>
                                                                                        </div> */}
                                                                                    </div>

                                                                                </div>

                                                                                <div className="shadow rounded-md p-4 mt-3">
                                                                                    <div className="grid grid-cols-2 gap-4">

                                                                                        <div>
                                                                                            <span className="text-sm text-gray-400">Astrologer Name</span>
                                                                                            <h5 className="text-[14px] text-[#0F1726] font-medium">{get_booked_pooja_list_result?.astro?.name}</h5>
                                                                                        </div>
                                                                                        <div>
                                                                                            <span className="text-sm text-gray-400">Language</span>
                                                                                            <h5 className="text-[14px] text-[#0F1726] font-medium">{get_booked_pooja_list_result?.astro?.language}</h5>
                                                                                        </div>



                                                                                        <div>
                                                                                            <span className="text-sm text-gray-400">Hourly</span>
                                                                                            <h5 className="text-[14px] text-red-700 font-medium">Rs.{get_booked_pooja_list_result?.astro?.hourly_rate}/-</h5>
                                                                                        </div>
                                                                                        <div>
                                                                                            <span className="text-sm text-gray-400">Minutes</span>
                                                                                            <h5 className="text-[14px] text-red-700 font-medium">Rs.{get_booked_pooja_list_result?.astro?.minute_rate}/-</h5>
                                                                                        </div>
                                                                                        <div>
                                                                                            <span className="text-sm text-gray-400">Skills</span>
                                                                                            <h5 className="text-[14px] text-gray-700 font-medium">{get_booked_pooja_list_result?.astro?.skills}</h5>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className='m-auto text-center'>
                                                        <h4>No bookings Pooja available at the moment</h4>
                                                    </div>
                                                )
                                            }
                                           
                                        </div>
                                         {/* <!-- Pagination Start --> */}
                                         <div className="gi-pro-pagination pt-[15px] pb-[15px] flex justify-between items-center border-t-[1px] border-solid border-[#eee] max-[575px]:flex-col">
                                                <span className="text-[14px] text-[#777] max-[575px]:mb-[10px]">Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, get_user_Follow_List?.length)} of {get_user_Follow_List?.length} item(s)</span>
                                                <ul className="gi-pro-pagination-inner flex">
                                                    <li>
                                                        <button onClick={handlePrev} className="next w-auto px-[13px] text-[#fff] m-1 p-2 bg-[#5caf90] leading-[30px] h-[32px] bg-red-500 flex flex text-center align-top text-[16px] justify-center items-center rounded-[5px]">
                                                            Prev
                                                        </button>
                                                    </li>

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

                                                    <li>
                                                        <button onClick={handleNext} className="next w-auto px-[13px] text-[#fff] m-1 p-2 bg-[#5caf90] leading-[30px] h-[32px]  bg-red-500 flex flex text-center align-top text-[16px] justify-center items-center rounded-[5px]">
                                                            Next
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                )
            }
        </div>
    )
}

export default User_Dashboard_Follow_List