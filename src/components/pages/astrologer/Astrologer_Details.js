import React, { useEffect, useState } from 'react'
import Header from '../../common/header/Header'
import Kundli_Main_Banner from '../kundli/kundli_main_bannner/Kundli_Main_Banner'
import Home_Private_Confidential from '../home_page_components/home_private_confidential/Home_Private_Confidential'
import Footer from '../../common/footer/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { User_Authentication } from '../../../user_authentication/User_Authentication'
import { Add_follow_Astro, Get_Astrologer_Details, Get_Web_Astrologer_Details } from '../../../api/astrologer/Astrologer'
import Loader from '../../../loader/Loader'
import { AGORA_APP_ID, IMG_BASE_URL } from '../../../config/Config'
import Common_Images_Transport from '../../common/common_imges_transport/Common_Images_Transport'
import Astrologer_Gallery_Profile from './astrologer_list/Astrologer_Gallery_Profile'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Agora_Generate_Token, Chat_Token } from '../../../api/agora/Agora'
import AgoraRTC from "agora-rtc-sdk-ng";

const Astrologer_Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [is_voice_call_loading, setIs_Voice_Call_Loading] = useState(false);
    const [is_video_call_loading, setIs_Video_Call_Loading] = useState(false);
    const [is_Chat_loading, setIs_Chat_Loading] = useState(false);
    const [astro_details_list, set_Astro_Details_List] = useState([]);
    const [is_chat_assistant, set_Is_Chat_Assistant] = useState(false)
    const [is_loading, set_Is_Loading] = useState(false);
    const Get_user_is_active = localStorage.getItem("user_is_active")

    // <-------- Handle Generate voice call agora token ------------>
    const Handle_Generate_voice_call_agora_token = async () => {
        setIs_Voice_Call_Loading(true);
        const token = User_Authentication();
        if (!token) {
            setIs_Voice_Call_Loading(false);
            throw new Error("User token not found");
        }

        try {
            const response = await Agora_Generate_Token(
                { type: "audio", receiver_id: id }, // 26 Your receiver_id can change based on your requirements
                { Authorization: `Bearer ${token}` }
            );
            console.log("response_response", response?.data?.data);
            setIs_Voice_Call_Loading(false);
            return response?.data?.data;
        } catch (error) {
            setIs_Voice_Call_Loading(false);
            console.error("Error generating token:", error);
            throw error;
        }
    };

    // <-------- Handle Generate voice call agora token ------------>
    const Handle_Generate_video_call_agora_token = async () => {
        setIs_Video_Call_Loading(true);
        const token = User_Authentication();
        if (!token) {
            setIs_Video_Call_Loading(false);
            throw new Error("User token not found");
        }

        try {
            const response = await Agora_Generate_Token(
                { type: "video", receiver_id: id }, // 26 Your receiver_id can change based on your requirements
                { Authorization: `Bearer ${token}` }
            );
            console.log("response_response", response?.data?.data);
            setIs_Video_Call_Loading(false);
            return response?.data?.data;
        } catch (error) {
            setIs_Video_Call_Loading(false);
            console.error("Error generating token:", error);
            throw error;
        }
    };

    // <-------- Handle Generate voice call agora token ------------>
    const Handle_Generate_chat_agora_token = async () => {
        setIs_Chat_Loading(true);
        const data = {
            chat_uiid:"sunil_Kumawat_26"
        }
        const token = User_Authentication();
        if (!token) {
            setIs_Chat_Loading(false);
            throw new Error("User token not found");
        }
        try {
            const response = await Chat_Token(data, { Authorization: `Bearer ${token}` });
            console.log("response_response", response?.data?.data);
            setIs_Chat_Loading(false);
            return response?.data?.data;
        } catch (error) {
            setIs_Chat_Loading(false);
            console.error("Error generating token:", error);
            throw error;
        }
    };

    //<------ Handle call button for the voice call ------------->
    const handle_voice_call_click = async () => {
        setIs_Voice_Call_Loading(true);
        try {
            const { channel, sender_token, sender_id, call_duration } = await Handle_Generate_voice_call_agora_token();
            localStorage.setItem("channel", channel)
            localStorage.setItem("sender_token", sender_token)
            localStorage.setItem("sender_id", sender_id)
            {
                call_duration >= 1 ? (
                    navigate(`/Voice_Call?channel=${channel}&sender_token=${sender_token}&sender_id=${sender_id}&appid=${process.env.REACT_APP_AGORA_APP_ID}&astro_details_list=${astro_details_list?.astrolist?.name}&receiver_id=${id}`)
                ) : (
                    alert("insufficient balance in your wallet !")
                )
            }

            // Initialize Agora RTC client
            const rtcClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
            await rtcClient.join(AGORA_APP_ID, channel, sender_token, sender_id);
            const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
            await rtcClient.publish(audioTrack);

            console.log("Joined the Agora channel and published local audio track.");
        } catch (error) {
            console.error("Error joining channel or publishing audio:", error);
        } finally {
            setIs_Voice_Call_Loading(false);
        }
    };

    //<------ Handle call button for the voice call ------------->
    const handle_chat_click = async () => {
        setIs_Voice_Call_Loading(true);
        try {
            const { channel, sender_token, sender_id, call_duration } = await Handle_Generate_chat_agora_token();
            localStorage.setItem("channel", channel)
            localStorage.setItem("sender_token", sender_token)
            localStorage.setItem("sender_id", sender_id)
            {
                call_duration >= 1 ? (
                    navigate(`/Voice_Call?channel=${channel}&sender_token=${sender_token}&sender_id=${sender_id}&appid=${process.env.REACT_APP_AGORA_APP_ID}&astro_details_list=${astro_details_list?.astrolist?.name}&receiver_id=${id}`)
                ) : (
                    alert("insufficient balance in your wallet !")
                )
            }

            // Initialize Agora RTC client
            const rtcClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
            await rtcClient.join(AGORA_APP_ID, channel, sender_token, sender_id);
            const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
            await rtcClient.publish(audioTrack);

            console.log("Joined the Agora channel and published local audio track.");
        } catch (error) {
            console.error("Error joining channel or publishing audio:", error);
        } finally {
            setIs_Voice_Call_Loading(false);
        }
    };

    //<------ Handle call button for the voice call ------------->
    const handle_video_call_click = async () => {
        setIs_Video_Call_Loading(true);
        try {
            // Generate token and other necessary details for the video call
            const { channel, sender_token, sender_id } = await Handle_Generate_video_call_agora_token();

            // Store the generated values in localStorage for later use
            localStorage.setItem("channel", channel);
            localStorage.setItem("sender_token", sender_token);
            localStorage.setItem("sender_id", sender_id);

            // Navigate to the video call page with query params
            navigate(`/agora_video_call?channel=${channel}&sender_token=${sender_token}&sender_id=${sender_id}&appid=${process.env.REACT_APP_AGORA_APP_ID}&astro_details_list=${astro_details_list?.astrolist?.name}`);

            // Initialize Agora RTC client for video call
            const rtcClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

            // Join the Agora channel using the provided token and user ID
            await rtcClient.join(AGORA_APP_ID, channel, sender_token, sender_id);

            // Create and publish local video and audio tracks
            const [audioTrack, videoTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
            await rtcClient.publish([audioTrack, videoTrack]);

            console.log("Joined the Agora channel and published local audio and video tracks.");
        } catch (error) {
            console.error("Error joining channel or publishing audio/video:", error);
        } finally {
            setIs_Video_Call_Loading(false);
        }
    };

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
                                                <div className="min-[992px]:w-[100%] min-[768px]:w-[50%] min-[576px]:w-[100%] max-[420px]:w-full px-[12px] max-[575px]:w-[100%] max-[575px]:mx-auto mb-6 grid_call_chat">
                                                    <div className="gi-product-content overflow-hidden rounded-[5px] shadow-xl p-6 bg-white">
                                                        <div className="gi-product-inner md:flex lg:flex gap-3 transition-all duration-[0.3s] ease-in-out ">
                                                            <div className="gi-pro-image overflow-hidden">

                                                                <a href="#"
                                                                    className="image productimg relative block overflow-hidden pointer-events-none">
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
                                                                        className="whitespace-nowrap inline-block text-gray-900 m-2 hover:text-white border border-gray-300 hover:bg-gray-900 rounded-full text-sm px-3 py-1 text-center mt-2">
                                                                        {astro_details_list?.astrolist?.skills}</span>
                                                                    <span
                                                                        className="whitespace-nowrap inline-block text-gray-900 m-2 hover:text-white border border-gray-300 hover:bg-gray-900 rounded-full text-sm px-3 py-1 text-center mt-2">
                                                                        {astro_details_list?.astrolist?.language}</span>
                                                                    <span
                                                                        className="whitespace-nowrap inline-block text-gray-900 m-2 hover:text-white border border-gray-300 hover:bg-gray-900 rounded-full text-sm px-3 py-1 text-center mt-2">
                                                                        {astro_details_list?.astrolist?.experience}</span>
                                                                </div>
                                                                <div className="flex gap-4 mt-6 justify-between w-full">
                                                                    <div className="inline-block">
                                                                        <button onClick={handle_chat_click} data-modal-id="modal1"
                                                                            className="modal-link m-2 text-[#9F2225] hover:text-white border border-[#9F2225] hover:bg-[#9F2225] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-[#9F2225] dark:text-[#9F2225] dark:hover:text-white dark:hover:bg-[#9F2225] dark:focus:ring-red-900">
                                                                            <i className="fi-rr-comment transition-all duration-[0.3s] ease-in-out mr-2"></i>
                                                                            Free Chat</button>
                                                                        <button onClick={handle_voice_call_click} data-modal-id="modal1" className={`${is_voice_call_loading ? "opacity-50 cursor-not-allowed" : ""} modal-link m-2 text-[#fff] text-white border border-[#9F2225] bg-[#9F2225] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-[#9F2225] dark:hover:text-white dark:hover:bg-[#9F2225] dark:focus:ring-red-900`}>
                                                                            <i className="fi-rr-phone-call transition-all duration-[0.3s] ease-in-out mr-2"></i>
                                                                            {is_voice_call_loading ? "Joining..." : "Start Call"}</button>

                                                                        {/* <button onClick={handle_video_call_click} data-modal-id="modal1" className={`${is_video_call_loading ? "opacity-50 cursor-not-allowed" : ""} modal-link m-2 text-[#fff] text-white border border-green-700 bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-[#9F2225] dark:hover:text-white dark:hover:bg-green-700 dark:focus:ring-green-900`}>
                                                                            <i className="fi-rr-video-camera text-white ease-in-out mr-2"></i>
                                                                            {is_video_call_loading ? "Joining..." : "Video Call"}
                                                                        </button> */}

                                                                        {/* <Agora_Provider>
                                                                            <h1>Agora Voice Call</h1>
                                                                            <Join_Channel onJoinStatusChange={setIsJoined} />
                                                                            {isJoined && <Controls isMuted={isMuted} onMuteStatusChange={setIsMuted} />}
                                                                            <Status isJoined={isJoined} isMuted={isMuted} />
                                                                        </Agora_Provider> */}
                                                                    </div>
                                                                    <div className="inline-block" onClick={() => Handle_Add_follow_Astro(astro_details_list?.astrolist?.id)}>
                                                                        {
                                                                            astro_details_list?.astrolist?.is_favourite == true ? (
                                                                                <Link
                                                                                    className="text-[#fff] text-white border border-[#FFB800] bg-[#FFB800] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-[#FFB800] dark:hover:text-white dark:hover:bg-[#9F2225] dark:focus:ring-red-900">
                                                                                    UnFollow</Link>
                                                                            ) : (

                                                                                <Link
                                                                                    className="text-[#fff] text-white border border-[#FFB800] bg-green-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-[#FFB800] dark:hover:text-white dark:hover:bg-[#9F2225] dark:focus:ring-red-900">
                                                                                    Follow</Link>
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