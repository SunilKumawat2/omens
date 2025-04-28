import React, { useEffect, useState } from 'react'
import Astrologer_after_Login_Header from '../astrologer_after_login_header/Astrologer_after_Login_Header'
import { Link, useNavigate } from 'react-router-dom'
import Astrologer_Footer from '../astrologer_footer/Astrologer_Footer'
import { Astro_Book_pooja_Order_List, Pooja_Status_Update } from '../../../../api/pooja/Pooja'
import { User_Authentication } from '../../../../user_authentication/User_Authentication'
import Loader from '../../../../loader/Loader'
import { IMG_BASE_URL } from '../../../../config/Config'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Astrologer_New_Pooja_Process_List = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [astro_get_new_booking_list, set_Astro_Get_New_Booking_List] = useState([]);

    const Handle_Astro_Book_New_pooja_Order_List = async () => {
        setIsLoading(true)
        try {
            const token = User_Authentication();
            if (!token) {
                setIsLoading(false);
                throw new Error("User token not found");
            }
            const status = "1";
            const response = await Astro_Book_pooja_Order_List(
                { status },
                { Authorization: `Bearer ${token}` }
            );
            if (response?.data?.status == "200") {
                set_Astro_Get_New_Booking_List(response?.data?.data);
                setIsLoading(false)
            }
            else if (response?.response?.data?.status == "500") {
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
            console.error("Error fetching new bookings:", error);
        }
    };

    const Handle_Accept_New_Pooja_List = async (id) => {
        setIsLoading(true)
        const data = {
            id,
            status: 2
        }
        try {
            const token = User_Authentication();
            if (!token) {
                setIsLoading(false);
                throw new Error("User token not found");
            }
            const response = await Pooja_Status_Update(data, { Authorization: `Bearer ${token}` })
            if (response?.data?.status == "200") {
                setIsLoading(false);
                setIsModalOpen(false)
                Handle_Astro_Book_New_pooja_Order_List({ Authorization: `Bearer ${token}` })
            }
            else if (response?.response?.data?.status == "500") {
                setIsLoading(false);
            }
        }
        catch (error) {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        Handle_Astro_Book_New_pooja_Order_List();
    }, []);

    const formatTime = (time) => {
        const [hours, minutes] = time.split(":");
        const intHours = parseInt(hours, 10);
        const ampm = intHours >= 12 ? "pm" : "am";
        const formattedHours = intHours % 12 || 12;
        return `${formattedHours}:${minutes} ${ampm}`;
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            {/*  */}
            <Astrologer_after_Login_Header />
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <section className="gi-product-tab gi-products py-[30px] pb-[60px] max-[767px]:py-[30px] wow fadeInUp"
                            data-wow-duration="2s">
                            <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                                <div className="gi-tab-title w-full inline-flex justify-between px-[12px] max-[991px]:flex-col items-center">
                                    <div className="gi-main-title w-full">
                                        <div className="section-title mb-[20px] pb-[20px] w-full ">
                                            <div className="gi-pro-tab">
                                                <ul className="nav-tabs processingbg flex flex-wrap max-[991px]:justify-start" id="myproTab">
                                                    <li
                                                        className="inline-block align-top text-[14px] active text-[#777] uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px] mr-[20px] max-[991px]:mr-[30px] max-[480px]:mr-[20px]">
                                                        <Link className="nav-link activ_tab relative active font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                                                            to="/astrologer-new-Pooja-process-list">
                                                            New</Link>
                                                    </li>
                                                    <li
                                                        className="inline-block align-top text-[14px] text-[#777] uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px] mr-[20px] max-[991px]:mr-[30px] max-[480px]:mr-[20px]">
                                                        <Link className="nav-link activ_tab relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                                                            to="/astrologer-pooja-process">
                                                            Process</Link>
                                                    </li>
                                                    <li
                                                        className="inline-block align-top text-[14px] text-[#777] uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px]">
                                                        <Link className="nav-link activ_tab relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                                                            to="/astrologer-pooja-complete-list">
                                                            Complete</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    astro_get_new_booking_list?.pooja_list?.length > 0 ? (
                                        <div className="w-full mb-[-24px]">
                                            <div className="tab-content" id="myproTabContent">

                                                <div className="tab-pro-pane" id="snack">
                                                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6 px-[15px]">
                                                        {
                                                            astro_get_new_booking_list?.pooja_list?.map((astro_get_new_booking_list_result) => {
                                                                return (
                                                                    <div className="border rounded-lg p-4 bg-white">
                                                                        <div className="flex justify-between items-center">
                                                                            <div className="flex gap-3 items-center">
                                                                                <img src={`${IMG_BASE_URL}${astro_get_new_booking_list_result?.image}`} className="rounded-md h-16 w-16"
                                                                                    alt="" />
                                                                                <div>
                                                                                    <h5 className="text-lg font-medium text-black">{astro_get_new_booking_list_result?.title}</h5>
                                                                                    <p class="text-gray-500 text-sm clamped-text">{astro_get_new_booking_list_result?.short_description}</p>
                                                                                </div>
                                                                            </div>

                                                                        </div>

                                                                        <div className="shadow rounded-md p-4 mt-3">
                                                                            <div className="grid grid-cols-2 gap-4">

                                                                                <div>
                                                                                    <span className="text-sm text-gray-400">Name</span>
                                                                                    <h5 className="text-[14px] text-[#0F1726] font-medium">{astro_get_new_booking_list_result?.user?.name}</h5>
                                                                                </div>
                                                                                <div>
                                                                                    <span className="text-sm text-gray-400">Booking Date</span>
                                                                                    <h5 className="text-[14px] text-[#0F1726] font-medium">{astro_get_new_booking_list_result?.pooja_date}</h5>
                                                                                </div>

                                                                                <div>
                                                                                    <span className="text-sm text-gray-400">Pooja Timing</span>
                                                                                    <h5 className="text-[14px] text-[#0F1726] font-medium"> {formatTime(astro_get_new_booking_list_result?.from_time)} to {formatTime(astro_get_new_booking_list_result?.to_time)}</h5>
                                                                                </div>

                                                                                <div>
                                                                                    <span className="text-sm text-gray-400">Amount</span>
                                                                                    <h5 className="text-[14px] text-red-700 font-medium">Rs.{astro_get_new_booking_list_result?.price}/-</h5>
                                                                                </div>

                                                                                <div>
                                                                                    <a href="#" onClick={() => setIsModalOpen(true)}
                                                                                        className="bg-red-800 text-white text-sm py-2 px-5
                                                                                     inline-block rounded-full text-center dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Accept</a>
                                                                                </div>

                                                                                {/* Modal */}
                                                                                {isModalOpen && (
                                                                                    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                                                                                        <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
                                                                                            {/* Modal Content */}
                                                                                            <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
                                                                                            <p className="mb-4">Do you want to accept the pooja?</p>
                                                                                            <div className="flex justify-end gap-4">
                                                                                                <button onClick={() => setIsModalOpen(false)} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg">Close</button>
                                                                                                <button onClick={() => { Handle_Accept_New_Pooja_List(astro_get_new_booking_list_result?.id) }} className="bg-red-800 text-white py-2 px-4 rounded-lg">Accept</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                )}

                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='m-auto text-center'>
                                            <h4>No new pooja bookings available at the moment</h4>
                                        </div>
                                    )
                                }

                            </div>
                        </section>
                        {/*  */}
                        <Astrologer_Footer />
                    </>
                )
            }
        </div>
    )
}

export default Astrologer_New_Pooja_Process_List