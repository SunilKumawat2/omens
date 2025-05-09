import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/Firebase"; // Firestore instance
import Header from '../../common/header/Header'
import Kundli_Main_Banner from '../kundli/kundli_main_bannner/Kundli_Main_Banner'
import Home_Private_Confidential from '../home_page_components/home_private_confidential/Home_Private_Confidential'
import Footer from '../../common/footer/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { User_Authentication } from '../../../user_authentication/User_Authentication'
import { Add_follow_Astro, Get_Astrologer_Details, Get_Web_Astrologer_Details } from '../../../api/astrologer/Astrologer'
import Loader from '../../../loader/Loader'
import { AGORA_APP_CHAT_APP_KEY, AGORA_APP_ID, IMG_BASE_URL } from '../../../config/Config'
import Common_Images_Transport from '../../common/common_imges_transport/Common_Images_Transport'
import Astrologer_Gallery_Profile from './astrologer_list/Astrologer_Gallery_Profile'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Agora_Generate_Token, Chat_Token } from '../../../api/agora/Agora'
import AgoraRTC from "agora-rtc-sdk-ng";
// import WebIM from "agora-chat";
import AC from 'agora-chat';
import axios from 'axios';

const Astrologer_Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [is_Chat_loading, setIs_Chat_Loading] = useState(false);
    const [astro_details_list, set_Astro_Details_List] = useState([]);
    const [is_chat_assistant, set_Is_Chat_Assistant] = useState(false)
    const [is_loading, set_Is_Loading] = useState(false);
    const Get_user_is_active = localStorage.getItem("user_is_active")

    const handle_chat_click = ()=>{
        navigate("/download_app")
    }


    //    <--------- get the astologer details pages ------------->
    const Handle_Get_Astrologer_details = async () => {
        set_Is_Loading(true);
        try {
            if (Get_user_is_active) {
                const token = User_Authentication();
                if (!token) {
                    set_Is_Loading(false);
                    throw new Error("User token not found");
                }
                const response = await Get_Astrologer_Details(
                    "1", id,
                    { Authorization: `Bearer ${token}` }
                );
                console.log("products_products_111111", response);
                set_Astro_Details_List(response?.data?.data)
                localStorage.setItem("astrologer_profile_image", response?.data?.data?.astrolist?.profile_image)
                localStorage.setItem("astrologer_name", response?.data?.data?.astrolist?.name)
            } else {
                const response = await Get_Web_Astrologer_Details("1", id,);
                console.log("products_products_222222", response);
                set_Astro_Details_List(response?.data?.data)
            }
        } catch (error) {
            console.error(error);
        } finally {
            set_Is_Loading(false);
        }
    };

    // <---------- add the astrologer in the follow list -------->
    const Handle_Add_follow_Astro = async (id) => {
        set_Is_Loading(true)
        const data = {
            astro_id: id
        }
        try {
            const token = User_Authentication();
            console.log("token", token)
            if (!token) {
                set_Is_Loading(false);
                toast("user not login here ")
                throw new Error("User token not found");
            }
            const response = await Add_follow_Astro(data, { Authorization: `Bearer ${token}` })
            if (response?.data?.status == "200") {
                set_Is_Loading(false)
                toast(response?.data?.message)
                Handle_Get_Astrologer_details("1", id, { Authorization: `Bearer ${token}` })
            }
            else if (response?.response?.data?.status == "500") {
                set_Is_Loading(false)
                toast(response?.response?.data?.message)
            }
        }
        catch (error) {
            set_Is_Loading(false)
        }
    }

    useEffect(() => {
        Handle_Get_Astrologer_details()
    }, []);

    // Scroll to the top of the page when the component is rendered
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* <------ Header section's ---------> */}
            <Header />
            {/*  */}
            <Kundli_Main_Banner />
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <section className="gi-category py-[40px] max-[767px]:py-[30px] bg-[#F0F4F8]">
                        <div
                            className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                            <div className="flex flex-wrap w-full">
                                <div className="gi-shop-rightside min-[992px]:order-[6] min-[768px]:order-[-1] min-[992px]:w-[67%] min-[768px]:w-full w-full px-[12px]">
                                    {/* <!-- Shop content Start --> */}
                                    <div className="shop-pro-content">
                                        <div className="shop-pro-inner mx-[-12px]">
                                            <div className="flex flex-wrap w-full">
                                                <div className="min-[992px]:w-[100%] min-[768px]:w-[100%] min-[576px]:w-[100%] max-[420px]:w-full px-[12px] max-[575px]:w-[100%] max-[575px]:mx-auto mb-6 grid_call_chat">
                                                    <div className="gi-product-content  overflow-hidden rounded-[5px] shadow-xl p-6 bg-white">
                                                        <div className="gi-product-inner md:flex lg:flex gap-3 transition-all duration-[0.3s] ease-in-out ">
                                                            <div className="gi-pro-image w-[140px]">

                                                                <a href="#"
                                                                    className="image productimg relative block pointer-events-none">
                                                                    {
                                                                        astro_details_list?.astrolist?.profile_image != null ? (
                                                                            <img className="main-image rounded-full m-auto  w-[120px] h-[120px] transition-all duration-[0.3s] ease delay-[0s]"
                                                                                src={`${IMG_BASE_URL}${astro_details_list?.astrolist?.profile_image}`} alt="astrologer" />

                                                                        ) : (

                                                                            <img className="main-image rounded-full m-auto  w-[120px] h-[120px] transition-all duration-[0.3s] ease delay-[0s]"
                                                                                src={Common_Images_Transport?.user_logo} alt="astrologer" />
                                                                        )
                                                                    }
                                                                </a>

                                                            </div>
                                                            <div className="gi-pro-content w-full h-full p-3 pb-5 relative z-[10]">
                                                                <div className="flex justify-between">
                                                                    <a href="#">
                                                                        <h5
                                                                            className="gi-pro-stitle font-normal text-[#3B4959] text-[22px] font-semibold leading-[1.2] capitalize">
                                                                            {astro_details_list?.astrolist?.name}</h5>
                                                                    </a>
                                                                    <h6
                                                                        className="gi-pro-stitle text-center font-normal text-[#000] text-[16px] font-semibold leading-[1.2] capitalize">
                                                                        Rs.{astro_details_list?.astrolist?.minute_rate}/min</h6>
                                                                </div>
                                                                <div className="gi-pro-rat-price pt-2 flex d-flex gap-2 items-center">
                                                                    <span className="gi-pro-rating opacity-[0.7] relative">
                                                                        <i className="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                        <i className="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                        <i
                                                                            className="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                        <i
                                                                            className="gicon gi-star text-[16px] text-[#777] mr-[3px] float-left mr-[3px]"></i>
                                                                        <i
                                                                            className="gicon gi-star text-[16px] text-[#777] mr-[3px] float-left mr-[3px]"></i>
                                                                    </span>
                                                                    <span>4.5</span>
                                                                </div>

                                                                <div className="mt-2">
                                                                    <span
                                                                        className="whitespace-nowrap inline-block text-gray-500 mt-2 mr-4">
                                                                       Skills: <span className='text-gray-900 font-medium'>{astro_details_list?.astrolist?.skills}</span></span>
                                                                    <span
                                                                        className="whitespace-nowrap inline-block text-gray-500 mt-2 mr-4">
                                                                        language: <span className='text-gray-900 font-medium'>{astro_details_list?.astrolist?.language}</span></span>
                                                                    <span
                                                                        className="whitespace-nowrap inline-block text-gray-500 mt-2">
                                                                       Exp.: <span className='text-gray-900 font-medium'>{astro_details_list?.astrolist?.experience}</span></span>
                                                                </div>
                                                                <div className="flex gap-4 mt-6 justify-between w-full">
                                                                    <div className="inline-block">
                                                                       
                                                                        <button onClick={handle_chat_click} data-modal-id="modal1"
                                                                            className={`${is_Chat_loading ? "opacity-50 cursor-not-allowed" : ""} modal-link m-2 text-[#fff] text-white border border-[#9F2225] bg-[green] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-[green] dark:hover:text-white dark:hover:bg-[green] dark:focus:ring-red-900`}>
                                                                            <i className="fi-rr-comment transition-all duration-[0.3s] ease-in-out mr-2"></i>
                                                                            Free Chat</button>
                                                                        <button onClick={handle_chat_click} data-modal-id="modal1"
                                                                            className={`${is_Chat_loading ? "opacity-50 cursor-not-allowed" : ""} modal-link m-2 text-[#fff] text-white border bg-[#9F2225] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:text-white dark:hover:bg-[#9F2225] dark:focus:ring-red-900`}>
                                                                            <i className="fi-rr-comment transition-all duration-[0.3s] ease-in-out mr-2"></i>
                                                                            Audio Call</button>
                                                                        <button onClick={handle_chat_click} data-modal-id="modal1"
                                                                            className={`${is_Chat_loading ? "opacity-50 cursor-not-allowed" : ""} modal-link m-2 text-[#fff] text-white border border-[#9F2225] bg-[#FFB500] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-[#FFB500] dark:hover:text-white dark:hover:bg-[#9F2225] dark:focus:ring-red-900`}>
                                                                            <i className="fi-rr-comment transition-all duration-[0.3s] ease-in-out mr-2"></i>
                                                                            Vido Call</button>
                                                                    </div>
                                                                    <div className="inline-block" onClick={() => Handle_Add_follow_Astro(astro_details_list?.astrolist?.id)}>
                                                                        {
                                                                            astro_details_list?.astrolist?.is_favourite == true ? (
                                                                                <Link className="text-[#fff] text-white bg-[#FFB800] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:text-white dark:hover:bg-[#9F2225] dark:focus:ring-red-900">UnFollow</Link>
                                                                            ) : (
                                                                                <Link className="text-[#fff] text-white bg-green-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:text-white dark:hover:bg-[#9F2225] dark:focus:ring-red-900">Follow</Link>
                                                                            )
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="aboutinfo border-t border-[#eee] mt-4 pt-4">
                                                            <h5 className="gi-pro-stitle font-normal mb-2 text-[#3B4959] text-[20px] font-semibold leading-[1.2] capitalize">
                                                                About us</h5>
                                                            <p className="text-[#9C9C9C] leading-[1.8]">{astro_details_list?.astrolist?.astrodetail?.about_us}</p>
                                                        </div>
                                                        <Astrologer_Gallery_Profile data={astro_details_list} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--Shop content End --> */}
                                </div>
                                {/* <!-- Sidebar Area Start --> */}
                                <div
                                    className="gi-shop-sidebar sticky top-[24px] min-[768px]:order-[6] min-[992px]:w-[33%] min-[768px]:w-full w-full max-[991px]:mt-[30px] px-[12px]">
                                    <div id="shop_sidebar">
                                        <div className="bg-[#FFF9F1] shadow">
                                            <div className="p-5">
                                                <h5 className="gi-pro-stitle font-normal text-[#3B4959] text-[18px] font-medium leading-[1.2] capitalize">
                                                    Rating & Reviews</h5>
                                                <div className="flex gap-5 pt-3 items-center">
                                                    <div className="bg-white rounded-full p-4"><i
                                                        className="gicon gi-star text-[25px] text-[#FFB800] float-left"></i></div>
                                                    <div>
                                                        <h1 className="gi-pro-stitle font-normal text-[#3B4959] text-[20px] font-semibold leading-[1.2] capitalize">
                                                            Rating & Reviews</h1>
                                                        <span
                                                            className="gi-pro-stitle font-normal text-[#9C9C9C] text-[14px] leading-[1.2] capitalize">
                                                            852 Trustpilot Review</span>
                                                    </div>
                                                </div>
                                                <a href='#' data-modal-id="modal2" onClick={() => set_Is_Chat_Assistant(true)}
                                                    className="modal-link border border-gray-300 text-gray-500 text-center p-2 text-sm w-[100%] left inline-block mt-3 rounded">Chat
                                                    with Assistant?</a>

                                                {/*  */}
                                                {
                                                    is_chat_assistant && (
                                                        <div id="modal2" class="custom-modal">
                                                            <div class="custom-modal-dialog">
                                                                <div class="custom-modal-content">
                                                                    <span class="close-modal" onClick={() => set_Is_Chat_Assistant(false)}>X</span>
                                                                    <div class="custom-modal-body">
                                                                        <div class="custom-modal-inner">
                                                                            {/* <!-- Content here --> */}
                                                                            <p class="text-gray-500">You can chat with astrologer’s assistant only when you have taken a paid session with the astrologer.</p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    )
                                                }
                                            </div>
                                            <div className="bg-white">
                                                <div
                                                    className="gi-t-review-item p-5 border-b-[1px] border-solid border-[#eee]">
                                                    <div className="gi-t-review-content">
                                                        <div className="gi-t-review-top flex items-center mb-[10px]">
                                                            <div className="gi-t-review-avtars basis-[70px] grow-[0] shrink-[0] mr-[10px]">
                                                                <img src={Common_Images_Transport?.user1} alt="user"
                                                                    className="max-w-full rounded-full w-16" />
                                                            </div>
                                                            <div className="w-full">
                                                                <h4
                                                                    className="gi-t-review-name font-medium text-[18px] m-[0] leading-[1.5] block text-[#000]">
                                                                    Priyank</h4>
                                                                <div className="flex justify-between items-center">
                                                                    <div className="gi-t-review-rating mt-2">
                                                                        <i
                                                                            className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                                                        <i
                                                                            className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                                                        <i
                                                                            className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                                                        <i
                                                                            className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                                                        <i
                                                                            className="gicon gi-star-o inline-block text-[#b2b2b2] float-left text-[14px] mr-[3px]"></i>
                                                                    </div>
                                                                    <div className="text-sm text-gray-500">15 Jan, 2024 AT 06:30 PM</div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="gi-t-review-bottom">

                                                            <p className="w-full text-[14px] text-[#777] font-normal line-clamp-5 mt-3">
                                                                Lorem Ipsum is
                                                                Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting
                                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                                since the 1500s, when an unknown printer took a galley of type and
                                                                scrambled it to make a type specimen book. It has survived not only five
                                                                centuries, but also the leap into electronic typesetting, remaining
                                                                essentially unchanged. It was popularised in the 1960s
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gi-t-review-item p-5 border-b-[1px] border-solid border-[#eee]">
                                                    <div className="gi-t-review-content">
                                                        <div className="gi-t-review-top flex items-center mb-[10px]">
                                                            <div className="gi-t-review-avtars basis-[70px] grow-[0] shrink-[0] mr-[10px]">
                                                                <img src={Common_Images_Transport?.user1} alt="user"
                                                                    className="max-w-full rounded-full w-16" />
                                                            </div>
                                                            <div className="w-full">
                                                                <h4
                                                                    className="gi-t-review-name font-medium text-[18px] m-[0] leading-[1.5] block text-[#000]">
                                                                    Priyank</h4>
                                                                <div className="flex justify-between items-center">
                                                                    <div className="gi-t-review-rating mt-2">
                                                                        <i
                                                                            className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                                                        <i
                                                                            className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                                                        <i
                                                                            className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                                                        <i
                                                                            className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                                                                        <i
                                                                            className="gicon gi-star-o inline-block text-[#b2b2b2] float-left text-[14px] mr-[3px]"></i>
                                                                    </div>
                                                                    <div className="text-sm text-gray-500">15 Jan, 2024 AT 06:30 PM</div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="gi-t-review-bottom">

                                                            <p className="w-full text-[14px] text-[#777] font-normal line-clamp-5 mt-3">
                                                                Lorem Ipsum is
                                                                Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting
                                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                                since the 1500s, when an unknown printer took a galley of type and
                                                                scrambled it to make a type specimen book. It has survived not only five
                                                                centuries, but also the leap into electronic typesetting, remaining
                                                                essentially unchanged. It was popularised in the 1960s
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                )
            }
            {/*<------- Home_Private_Confidential -------->  */}
            <Home_Private_Confidential />
            {/* <---------- Footer ----------> */}
            <Footer />
        </div>
    )
}

export default Astrologer_Details