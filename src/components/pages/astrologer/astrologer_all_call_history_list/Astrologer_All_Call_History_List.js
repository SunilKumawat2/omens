import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { User_Authentication } from '../../../../user_authentication/User_Authentication';
import { get_astro_call_history } from '../../../../api/astrologer/Astrologer';
import Astrologer_after_Login_Header from '../astrologer_after_login_header/Astrologer_after_Login_Header';
import Astrologer_Footer from '../astrologer_footer/Astrologer_Footer';
import Loader from '../../../../loader/Loader';

const Astrologer_All_Call_History_List = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [get_astrologer_call_history_list, set_Astrologer_call_history_list] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    // Calculate total pages safely
    const totalPages = Math.ceil(get_astrologer_call_history_list?.length / productsPerPage) || 1;

    // Calculate the products to display on the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProduct = get_astrologer_call_history_list?.slice(startIndex, startIndex + productsPerPage) || [];

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

    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short', // "Jan"
            day: '2-digit', // "24"
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true // Convert to 12-hour format (AM/PM)
        });
    };


    const handle_get_astrologer_call_history = async () => {
        try {
            setIsLoading(true);
            const token = User_Authentication();
            if (!token) {
                setIsLoading(false);
                toast("Token not found");
                throw new Error("User token not found");
            }
            const response = await get_astro_call_history({ Authorization: `Bearer ${token}` });
            if (response?.data?.status == "200") {
                set_Astrologer_call_history_list(response?.data?.data?.history);
            } else if (response?.data?.status == "400") {
                toast.error(response?.response?.data?.message)
                console.log("Unexpected API Response:", response);
            }
        } catch (error) {
            console.error("API Error:", error.response?.data || error.message);
        } finally {
            setIsLoading(false); // Stop loading after request
        }
    };

    // Call function inside useEffect
    useEffect(() => {
        handle_get_astrologer_call_history();
    }, []);

    return (
        <>
            {/*  */}
            <Astrologer_after_Login_Header />
            {
                isLoading ? <Loader/> :
            <section className="gi-product-tab gi-products py-[30px] pb-[60px] max-[767px]:py-[30px] wow fadeInUp"
                data-wow-duration="2s">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="gi-tab-title w-full inline-flex justify-between px-[12px] max-[991px]:flex-col items-center">
                        <div className="gi-main-title">
                            <div className="section-title mb-[20px] pb-[20px] flex ">
                                <div className="section-detail">
                                    <h2 className="gi-title mb-[0] text-[25px] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px] font-semibold text-[#4b5966] relative inline p-[0]  leading-[1] font-Poppins tracking-[0.01rem]">
                                        Calling History</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mb-[-24px]">
                        <div
                            className="custome_jewellery grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6 px-[15px]">
                            {
                                currentProduct?.map((get_astrologer_call_history_list_result) => {
                                    return (
                                        <>
                                            <div className="border rounded-lg p-4 bg-white">
                                                <div className="flex justify-between">

                                                </div>
                                                <div className="shadow rounded-md p-4 mt-3">
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <span className="text-sm text-gray-400">Call Type</span>
                                                            {
                                                                get_astrologer_call_history_list_result?.type == "audio" ? (
                                                                    <h5 className="text-[14px] text-[#0F1726] font-medium">Audio</h5>
                                                                ) : (
                                                                    <h5 className="text-[14px] text-[#0F1726] font-medium">Video</h5>
                                                                )
                                                            }
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-400">Sender Name</span>
                                                            <h5 className="text-[14px] text-[#0F1726] font-medium">{get_astrologer_call_history_list_result?.sender?.name}</h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-400">Receiver Name</span>
                                                            <h5 className="text-[14px] text-[#0F1726] font-medium">{get_astrologer_call_history_list_result?.receiver?.name}</h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-400">Amount</span>
                                                            <h5 className="text-[14px] text-[#0F1726] font-medium">Rs. {get_astrologer_call_history_list_result?.amount} -/</h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-400">Call Duration</span>
                                                            <h5 className="text-[14px] text-[#0F1726] font-medium">{get_astrologer_call_history_list_result?.call_duration} min</h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-400"> Call Status</span>
                                                            <h5 className="text-[14px] text-[#0F1726] font-medium">{get_astrologer_call_history_list_result?.status}</h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-400">Call Start Time</span>
                                                            <h5 className="text-[14px] text-[#0F1726] font-medium">
                                                                {formatDateTime(get_astrologer_call_history_list_result?.call_start_time)}
                                                            </h5>


                                                        </div>

                                                        <div>
                                                            <span className="text-sm text-gray-400">Call End Time</span>
                                                            <h5 className="text-[14px] text-[#0F1726] font-medium">
                                                                {formatDateTime(get_astrologer_call_history_list_result?.call_end_time)}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                            {/* <div className="border rounded-lg p-4 bg-white">
                            <div className="flex justify-between">
                                <div>
                                    <h5 className="text-lg font-medium text-black">Repeat Indian</h5>
                                    <p className="text-[#EDA801] text-sm">Loyal User offer(30%)</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <h5 className="text-lg font-medium text-black">Rs. 45.0</h5>
                                    <a href="#"><img src="../assets/img/icons/report_icon2.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="shadow rounded-md p-4 mt-3">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-sm text-gray-400">Order ID</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">#75487545</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Name</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">Rahul Sharma</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Gender</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">Male</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">DOB</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">14/07/1995</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Pob</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">Sundargarh, Odisha, India</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Order Time</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">6 October 24, 3:55Am</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Duration</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">10 Minutes</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Rate</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">Rs. 8.5/Minute</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Status</span>
                                        <h5 className="text-[14px] text-green-800 font-medium">Complete</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Order</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">Omens User</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">User Type</span>
                                        <h5 className="text-[14px] text-red-600 font-medium">Loyal User</h5>
                                    </div>
                                    <div>
                                        <a href="#"
                                            className="text-red-700 hover:text-white border border-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 inline-block">Open
                                            Kundli</a>
                                    </div>


                                </div>
                                <div>
                                    <span
                                        className="whitespace-nowrap inline-block text-gray-900 hover:text-white border hover:bg-gray-900 rounded-full text-sm px-5 py-2 text-center mt-2">Assistant
                                        Chat</span>
                                    <span
                                        className="whitespace-nowrap inline-block text-gray-900 hover:text-white border hover:bg-gray-900 rounded-full text-sm px-5 py-2 text-center mt-2">Suggest
                                        Remedy</span>
                                </div>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4 bg-white">
                            <div className="flex justify-between">
                                <div>
                                    <h5 className="text-lg font-medium text-black">Repeat Indian</h5>
                                    <p className="text-[#EDA801] text-sm">Loyal User offer(30%)</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <h5 className="text-lg font-medium text-black">Rs. 45.0</h5>
                                    <a href="#"><img src="../assets/img/icons/report_icon2.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="shadow rounded-md p-4 mt-3">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-sm text-gray-400">Order ID</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">#75487545</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Name</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">Rahul Sharma</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Gender</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">Male</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">DOB</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">14/07/1995</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Pob</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">Sundargarh, Odisha, India</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Order Time</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">6 October 24, 3:55Am</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Duration</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">10 Minutes</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Rate</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">Rs. 8.5/Minute</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Status</span>
                                        <h5 className="text-[14px] text-green-800 font-medium">Complete</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Order</span>
                                        <h5 className="text-[14px] text-[#0F1726] font-medium">Omens User</h5>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">User Type</span>
                                        <h5 className="text-[14px] text-red-600 font-medium">Loyal User</h5>
                                    </div>
                                    <div>
                                        <a href="#"
                                            className="text-red-700 hover:text-white border border-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 inline-block">Open
                                            Kundli</a>
                                    </div>
                                </div>
                                <div>
                                    <span
                                        className="whitespace-nowrap inline-block text-gray-900 hover:text-white border hover:bg-gray-900 rounded-full text-sm px-5 py-2 text-center mt-2">Assistant
                                        Chat</span>
                                    <span
                                        className="whitespace-nowrap inline-block text-gray-900 hover:text-white border hover:bg-gray-900 rounded-full text-sm px-5 py-2 text-center mt-2">Suggest
                                        Remedy</span>
                                </div>
                            </div>
                        </div> */}


                        </div>
                    </div>
                    {/* <!-- Pagination Start --> */}
                    <div className="mt-5 w-full px-4 gi-pro-pagination pt-[15px] pb-[15px] flex justify-between items-center  max-[575px]:flex-col">
                        <span className="text-[14px] text-[#777] max-[575px]:mb-[10px]">Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, get_astrologer_call_history_list?.length)} of {get_astrologer_call_history_list?.length} Call history(s)</span>
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
            </section>

            }
            {/*  */}
            <Astrologer_Footer />
        </>
    )
}

export default Astrologer_All_Call_History_List