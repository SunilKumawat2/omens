import React, { useState } from 'react'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import { IMG_BASE_URL } from '../../../../config/Config';

const Our_Celebrity = (home_data) => {
    const our_celebrity_list = home_data?.data?.our_celebrity;
    const [isOpen_Custom_video, set_Is_Open_Custom_Video] = useState(false);


    const Handle_Is_Open_Custom_video = () => {
        set_Is_Open_Custom_Video(!isOpen_Custom_video);
    };

    const getYouTubeVideoId = (url) => {
        const match = url?.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\s]+)/)
            || url?.match(/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^&\s]+)/);
        return match ? match[1] : '';
    };


    return (
        <>
            <section className="gi-deal-section px-5 py-[40px] max-[767px]:py-[30px] wow fadeInUp" data-wow-duration="2s">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="w-full flex flex-wrap overflow-hidden">
                        <div className="gi-deal-section w-full">
                            <div className="gi-products">
                                <div className="section-title mb-[20px] relative z-[5]" data-aos="fade-up" data-aos-duration="2000"
                                    data-aos-delay="200">
                                    <div
                                        className="gi-tab-title w-full mb-8 text-center">
                                        <div className="section-detail ">
                                            <h2
                                                className="gi-title mb-[0] text-[25px] font-semibold text-[#4B5966] relative inline p-[0] capitalize leading-[1] font-Poppins max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
                                                Our Celebrity Customers</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="gi-deal-block" data-aos="fade-up" data-aos-duration="2000"
                                    data-aos-delay="300">
                                    <div
                                        className="custome_jewellery grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {
                                            our_celebrity_list?.map((our_celebrity_result) => {
                                                return (
                                                    <>
                                                        <div className="celebritylist">
                                                            <div className="gi-products bg-no-repeat text-center bg-cover h-[300px] rounded-lg overflow-hidden"
                                                                style={{
                                                                    backgroundImage: `url(${IMG_BASE_URL}${our_celebrity_result?.image})`, // Add your image URL here
                                                                }}>
                                                                <div
                                                                    className="bg-gradient-to-t relative from-[#000] opacity-0 hover:opacity-100 p-5 flags h-full">
                                                                    <a onClick={Handle_Is_Open_Custom_video}>
                                                                        <div
                                                                            className="absolute w-12 rounded-full leading-[52px] h-12 bg-white m-auto left-0 right-0 top-0 bottom-0">
                                                                            <i className="fi-brands-youtube text-red-700"></i>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="celebritytitle px-3 py-3">
                                                                <h5
                                                                    className="gi-pro-stitle font-normal text-[#3B4959] text-[16px] font-semibold leading-[1.2] capitalize">{our_celebrity_result?.title} </h5>
                                                            </div>
                                                        </div>
                                                        {
                                                            isOpen_Custom_video && (
                                                                <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
                                                                    {/* <!-- Modal Content --> */}
                                                                    <div className="bg-white rounded-lg shadow-lg w-[600px]">
                                                                        {/* <!-- Modal Header --> */}
                                                                        <div className="flex justify-between items-center p-3">
                                                                            <h2 className="text-lg m-0 font-semibold text-gray-800">Our Celebrity Video</h2>
                                                                            <button className="text-[#9F2225] hover:text-gray-800 text-[25px]" onClick={Handle_Is_Open_Custom_video}>
                                                                                &times;</button>
                                                                        </div>

                                                                        {/* <!-- Modal Body --> */}
                                                                        <div className="text-gray-700">
                                                                            <div className="youtube-video-container">
                                                                                <iframe
                                                                                    width="100%"
                                                                                    height="400"
                                                                                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(our_celebrity_result?.youtube_url)}`}
                                                                                    title="YouTube video player"
                                                                                    frameBorder="0"
                                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                                    allowFullScreen
                                                                                ></iframe>
                                                                            </div>

                                                                        </div>


                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    </>
                                                )
                                            })
                                        }
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

export default Our_Celebrity