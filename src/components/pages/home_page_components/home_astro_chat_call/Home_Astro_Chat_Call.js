import React from 'react'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMG_BASE_URL } from '../../../../config/Config';
import { Link, useNavigate } from 'react-router-dom';

const Home_Astro_Chat_Call = (home_data) => {
    const navigate = useNavigate();
    const live_astro = home_data?.data?.live_astro
    console.log("Home_Astro_Chat_Call_home_data", live_astro)
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: (
            <button
                style={{
                    left: "10px",
                    zIndex: 1,
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(0,0,0,0.5)",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    cursor: "pointer",
                }}
                className="slick-prev"
            >
                &#10094;
            </button>
        ),
        nextArrow: (
            <button
                style={{
                    right: "10px",
                    zIndex: 1,
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(0,0,0,0.5)",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    cursor: "pointer",
                }}
                className="slick-next"
            >
                &#10095;
            </button>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div>
            <section className="gi-product-tab gi-products py-[40px] pb-[100px] bg-[#F6F6F6] max-[767px]:py-[30px] wow fadeInUp"
                data-wow-duration="2s">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="gi-tab-title w-full inline-flex justify-between px-[12px] max-[991px]:flex-col items-center">
                        <div className="gi-main-title">
                            <div className="section-title mb-[20px] pb-[20px] flex ">
                                <div className="section-detail">
                                    <h2
                                        className="gi-title mb-[0] text-[25px] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-Poppins tracking-[0.01rem]">
                                        Consult Astrologer on <span className="text-[#9F2225]">Call & Chat</span></h2>
                                    <p className="mt-[10px] text-[14px] text-[#777] leading-[18px] font-light">13000+ Best
                                        Astrologers from India for Online Consultation</p>
                                </div>
                            </div>
                        </div>

                        <div className="gi-pro-tab max-[991px]:mt-[-20px] max-[991px]:mb-[30px]">
                            <Link to="/astrologer_list"
                                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">See
                                All Astrologers</Link>
                        </div>

                    </div>

                    <div className="w-full mb-[-24px]">
                        {/* <Slider {...settings}> */}
                        <div
                            className="custome_jewellery grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 px-[15px]">
                            {
                                live_astro?.map((astro_list_result) => {
                                    return (
                                        <Link to={`/astrologer_details/${astro_list_result?.id}`} className="grid_call_chat w-full h-[350px]">
                                            <div className="gi-product-content">
                                                <div
                                                    className="gi-product-inner transition-all duration-[0.3s] ease-in-out overflow-hidden rounded-[5px] bg-white shadow-xl">
                                                    <div
                                                        className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
                                                        <div className="astro_bg">
                                                            <div className="flex justify-between items-center">
                                                                <Link to={`/astrologer_details/${astro_list_result?.id}`}
                                                                    className="mx-[5px] text-center grid  grid-flow-row auto-rows-max gap-2 items-center justify-center text-[15px]">
                                                                    Call
                                                                    <img src={Common_Images_Transport?.call_icon} className="m-auto" alt="" />
                                                                </Link>
                                                                <h6
                                                                    className="gi-pro-stitle text-center font-normal text-[#000] text-[14px] font-semibold leading-[1.2] mt-4 capitalize">
                                                                    Rs.{astro_list_result?.minute_rate}/min</h6>
                                                                <Link to={`/astrologer_details/${astro_list_result?.id}`}
                                                                    className="mx-[5px] text-center grid  grid-flow-row auto-rows-max gap-2 items-center justify-center text-[15px]">
                                                                    Chat
                                                                    <img src={Common_Images_Transport?.chat_icon} className="m-auto" alt="" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="gi-pro-image overflow-hidden">

                                                            <Link to={`/astrologer_details/${astro_list_result?.id}`} className="image productimg relative block overflow-hidden ">
                                                                {
                                                                    astro_list_result?.profile_image != null ? (
                                                                        <img className="main-images transition-all m-auto rounded-full h-[120px] w-[120px] duration-[0.3s] ease delay-[0s]"
                                                                            src={`${IMG_BASE_URL}${astro_list_result?.profile_image}`} alt="astrologer" />
                                                                    ) : (
                                                                        <img className="main-images transition-all m-auto rounded-full h-[120px] w-[120px] duration-[0.3s] ease delay-[0s]"
                                                                            src={Common_Images_Transport?.user_logo} alt="astrologer" />
                                                                    )
                                                                }
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div className="gi-pro-content h-full p-3 pb-5 relative z-[10]  text-center">
                                                        <div className="gi-pro-rat-price pb-2 flex d-flex justify-center gap-2 items-center">
                                                            <span className="gi-pro-rating opacity-[0.7] relative">
                                                                <i
                                                                    className="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                <i
                                                                    className="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                <i
                                                                    className="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                <i
                                                                    className="gicon gi-star text-[16px] text-[#777] mr-[3px] float-left mr-[3px]"></i>
                                                                <i
                                                                    className="gicon gi-star text-[16px] text-[#777] mr-[3px] float-left mr-[3px]"></i>
                                                            </span>
                                                            <span>4.5</span>
                                                        </div>
                                                        <Link to={`/astrologer_details/${astro_list_result?.id}`}>
                                                            <h5
                                                                className="gi-pro-stitle font-normal text-[#3B4959] text-[18px] font-semibold leading-[1.2] capitalize">{astro_list_result?.name}</h5>
                                                        </Link>
                                                        <div className="mt-2">
                                                            <div className="skills-container">
                                                                {astro_list_result?.skills && (
                                                                    <span
                                                                        className="whitespace-nowrap inline-block text-gray-900 hover:text-white border 
            border-gray-300 hover:bg-gray-900 rounded-full text-sm px-3 py-1 text-center mt-2"
                                                                    >
                                                                        {astro_list_result?.skills?.split(',')[0]?.trim()}
                                                                    </span>
                                                                )}
                                                                {astro_list_result?.skills?.split(',')?.length > 1 && (
                                                                    <span className="inline-block text-gray-500 text-sm ml-2">...</span>
                                                                )}
                                                            </div>

                                                            <div className="language-container">
                                                                {astro_list_result?.language && (
                                                                    <span
                                                                        className="whitespace-nowrap inline-block text-gray-900 hover:text-white border 
            border-gray-300 hover:bg-gray-900 rounded-full text-sm px-3 py-1 text-center mt-2"
                                                                    >
                                                                        {astro_list_result?.language?.split(',')[0]?.trim()}
                                                                    </span>
                                                                )}
                                                                {astro_list_result?.language?.split(',')?.length > 1 && (
                                                                    <span className="inline-block text-gray-500 text-sm ml-2">...</span>
                                                                )}
                                                            </div>

                                                            <span
                                                                className="whitespace-nowrap inline-block text-gray-900 hover:text-white border border-gray-300 hover:bg-gray-900 rounded-full text-sm px-3 py-1 text-center mt-2">{astro_list_result?.experience}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        {/* </Slider> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home_Astro_Chat_Call