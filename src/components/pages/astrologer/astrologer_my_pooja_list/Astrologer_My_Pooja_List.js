import React, { useEffect, useState } from 'react'
import Astrologer_after_Login_Header from '../astrologer_after_login_header/Astrologer_after_Login_Header'
import Astrologer_Footer from '../astrologer_footer/Astrologer_Footer'
import { Astologer_Get_Pooja, Astologer_Delete_Pooja } from '../../../../api/astrologer/Astrologer';
import { User_Authentication } from '../../../../user_authentication/User_Authentication';
import Loader from '../../../../loader/Loader';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { IMG_BASE_URL } from '../../../../config/Config';
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport';

const Astrologer_My_Pooja_List = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [get_pooja_list, set_Get_Pooja_List] = useState([]);
    const [expandedId, setExpandedId] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);



    const handleToggle = (id) => {
        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    };

    const formatTime = (time) => {
        const [hours, minutes] = time.split(":");
        const intHours = parseInt(hours, 10);
        const ampm = intHours >= 12 ? "pm" : "am";
        const formattedHours = intHours % 12 || 12;
        return `${formattedHours}:${minutes} ${ampm}`;
    };

    // <------- delete my pooja list ---------->
    const Handle_delete_my_pooja = async (id) => {
        const formdata = new FormData();
        formdata.append("id", id);
        try {
            const token = User_Authentication();
            if (!token) {
                setIsLoading(false);
                toast("Token not found");
                throw new Error("User token not found");
            }
            const response = await Astologer_Delete_Pooja(formdata, {
                Authorization: `Bearer ${token}`,
            });

            console.log("response", response?.response?.data);
            if (response?.data?.status == "200") {
                set_Get_Pooja_List((prevList) =>
                    prevList.filter((pooja) => pooja.id !== id)
                );
                setIsLoading(false);
            } else if (response?.response?.data?.status == "500") {
                toast.error(response?.response?.data?.message);
            }
        } catch (error) {
            console.log("error", error);
        }
    };


    useEffect(() => {
        const Handle_Astro_Get_Pooja_List = async () => {
            setIsLoading(true)
            try {
                const token = User_Authentication();
                if (!token) {
                    setIsLoading(false);
                    toast("token not found's")
                    throw new Error("User token not found");
                }
                const response = await Astologer_Get_Pooja({ Authorization: `Bearer ${token}` })
                if (response?.data?.status == "200") {
                    set_Get_Pooja_List(response?.data?.data?.pooja_list)
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
        Handle_Astro_Get_Pooja_List()
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
                            <div
                                className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                                <div className="gi-tab-title w-full inline-flex justify-between px-[12px] max-[991px]:flex-col items-center">
                                    <div className="gi-main-title">
                                        <div className="section-title mb-[20px] pb-[20px] flex ">
                                            <div className="section-detail">
                                                <h2
                                                    className="gi-title mb-[0] text-[25px] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px] font-semibold text-[#4b5966] relative inline p-[0]  leading-[1] font-Poppins tracking-[0.01rem]">
                                                    My Pooja List</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mb-[-24px]">
                                    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6 px-[15px]">
                                        {
                                            get_pooja_list?.map((get_pooja_list_result) => {
                                                return (
                                                    <div className="border rounded-lg p-4 bg-white">
                                                        <div className="flex justify-between items-center">
                                                            <div className="flex gap-3 items-center">
                                                                <img src={`${IMG_BASE_URL}${get_pooja_list_result?.image}`} className="rounded-md h-16 w-16" alt="" />
                                                                <div>
                                                                    <h5 className="text-lg font-medium text-black">{get_pooja_list_result?.title}</h5>
                                                                    {/* <p class="text-[#EDA801] text-sm clamped-text">
                                                                        {get_pooja_list_result?.short_description}</p> */}

                                                                </div>
                                                            </div>
                                                            <div
                                                                className="deletebtn cursor-pointer"
                                                                onClick={() => {
                                                                    setDeleteId(get_pooja_list_result?.id);
                                                                    setShowConfirmModal(true);
                                                                }}
                                                            >
                                                                <a href="#"><img src={Common_Images_Transport?.delete_icon} alt="" /></a>
                                                            </div>

                                                        </div>

                                                        <div className=" rounded-md p-4 mt-3">
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div>
                                                                    <span className="text-sm text-gray-400">Category</span>
                                                                    <h5 className="text-[14px] text-[#0F1726] font-medium">{get_pooja_list_result?.category?.title}</h5>
                                                                </div>
                                                                <div>
                                                                    <span className="text-sm text-gray-400">Date</span>
                                                                    <h5 className="text-[14px] text-[#0F1726] font-medium">{get_pooja_list_result?.pooja_date}</h5>
                                                                </div>

                                                                <div>
                                                                    <span className="text-sm text-gray-400">Time</span>
                                                                    <h5 className="text-[14px] text-[#0F1726] font-medium">
                                                                        {formatTime(get_pooja_list_result?.from_time)} to {formatTime(get_pooja_list_result?.to_time)}
                                                                    </h5>
                                                                </div>
                                                                <div>
                                                                    <span className="text-sm text-gray-400">Duration</span>
                                                                    <h5 className="text-[14px] text-[#0F1726] font-medium">{get_pooja_list_result?.duration}</h5>
                                                                </div>
                                                                <div>
                                                                    <span className="text-sm text-gray-400">Price</span>
                                                                    <h5 className="text-[14px] text-[#0F1726] font-medium">Rs.{get_pooja_list_result?.price}/-</h5>
                                                                </div>


                                                            </div>

                                                        </div>
                                                        <div className="description text-gray-400 font-medium mt-3">
                                                            <div>
                                                                <p className={`${expandedId == get_pooja_list_result?.id ? "" : "clamped-text"}`}>
                                                                    {get_pooja_list_result?.description}
                                                                </p>
                                                                {get_pooja_list_result?.description?.length > 100 && (
                                                                    <button
                                                                        className="text-red-800 mt-2"
                                                                        onClick={() => handleToggle(get_pooja_list_result?.id)}
                                                                    >
                                                                        {expandedId == get_pooja_list_result?.id ? "View Less" : "View More"}
                                                                    </button>
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
                        </section>
                        {showConfirmModal && (
                            <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                <div className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-sm text-center">
                                    <h2 className="text-lg font-semibold mb-2">Are you sure?</h2>
                                    <p className="text-gray-600 mb-4">Do you want to delete this pooja?</p>
                                    <div className="flex justify-center gap-3">
                                        <button
                                            onClick={() => setShowConfirmModal(false)}
                                            className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded"
                                        >
                                            Close
                                        </button>
                                        <button
                                            onClick={() => {
                                                Handle_delete_my_pooja(deleteId);
                                                setShowConfirmModal(false);
                                            }}
                                            className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/*  */}
                        <Astrologer_Footer />
                    </>

                )
            }
        </div>
    )
}

export default Astrologer_My_Pooja_List