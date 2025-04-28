import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMG_BASE_URL } from '../../../../config/Config';

const Our_Celebrity = ({ data }) => {
    const our_celebrity_list = data?.our_celebrity;
    const [isOpen_Custom_video, set_Is_Open_Custom_Video] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);

    const Handle_Is_Open_Custom_video = (videoUrl) => {
        setActiveVideo(videoUrl);
        set_Is_Open_Custom_Video(!isOpen_Custom_video);
    };

    const getYouTubeVideoId = (url) => {
        const match = url?.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\s]+)/)
            || url?.match(/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^&\s]+)/);
        return match ? match[1] : '';
    };

    const slidesToShow = our_celebrity_list?.length < 4 ? our_celebrity_list?.length : 4;

    const settings = {
        infinite: our_celebrity_list?.length > slidesToShow,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        autoplay: our_celebrity_list?.length > 1,
        autoplaySpeed: 3000,
        arrows: our_celebrity_list?.length > 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: our_celebrity_list?.length < 3 ? our_celebrity_list?.length : 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: our_celebrity_list?.length < 2 ? our_celebrity_list?.length : 2,
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
        <>
            <section className="gi-deal-section px-5 py-[40px] max-[767px]:py-[30px] wow fadeInUp" data-wow-duration="2s">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1320px]">
                    <div className="w-full">
                        <div className="section-title mb-[20px]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
                            <div className="gi-tab-title w-full mb-8 text-center">
                                <h2 className="gi-title text-[25px] font-semibold text-[#4B5966] font-Poppins capitalize">
                                    Our Celebrity Customers
                                </h2>
                            </div>
                        </div>

                        <div className="gi-deal-block z-0" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
                            <Slider {...settings} className="w-full">
                                {our_celebrity_list?.map((our_celebrity_result, index) => (
                                    <div className="px-2" key={index}>
                                        <div className="celebritylist">
                                            <div
                                                className="gi-products bg-no-repeat text-center bg-cover h-[300px] rounded-lg overflow-hidden"
                                                style={{
                                                    backgroundImage: `url(${IMG_BASE_URL}${our_celebrity_result?.image})`,
                                                }}
                                            >
                                                <div className="bg-gradient-to-t relative from-[#000] opacity-0 hover:opacity-100 p-5 flags h-full">
                                                    <button onClick={() => Handle_Is_Open_Custom_video(our_celebrity_result?.youtube_url)} className="absolute w-12 h-12 rounded-full bg-white flex items-center justify-center m-auto left-0 right-0 top-0 bottom-0">
                                                        <i className="fi-brands-youtube text-red-700 text-lg" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="celebritytitle px-3 py-3">
                                                <h5 className="gi-pro-stitle text-[#3B4959] text-[16px] font-semibold capitalize">
                                                    {our_celebrity_result?.title}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isOpen_Custom_video && activeVideo && (
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-[600px] max-w-full">
                        <div className="flex justify-between items-center p-3">
                            <h2 className="text-lg font-semibold text-gray-800">Our Celebrity Video</h2>
                            <button
                                className="text-[#9F2225] hover:text-gray-800 text-[25px]"
                                onClick={() => Handle_Is_Open_Custom_video(null)}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="text-gray-700">
                            <div className="youtube-video-container">
                                <iframe
                                    width="100%"
                                    height="400"
                                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(activeVideo)}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Our_Celebrity;
