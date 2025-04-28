import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport';
import { IMG_BASE_URL } from '../../../../config/Config';

const Astrologer_Gallery_Profile = ({ data }) => {
    const astro_details_list_slider = data?.astrolist?.profile_images || [];
    console.log("astro_details_list_slider", astro_details_list_slider);

    const slidesToShow = astro_details_list_slider?.length < 3 ? astro_details_list_slider?.length : 3;

    const settings = {
        infinite: astro_details_list_slider?.length > 1,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: astro_details_list_slider?.length > 1,
        autoplaySpeed: 2000,
        arrows: astro_details_list_slider?.length > 1,
        variableWidth: false, 
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: astro_details_list_slider?.length < 3 ? astro_details_list_slider?.length : 3,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: astro_details_list_slider?.length < 2 ? astro_details_list_slider?.length : 2,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                },
            },
        ],
    };

    // Zoom modal state
    const [zoomImage, setZoomImage] = React.useState(null);

    // Function to open the zoom modal
    const handleImageClick = (image) => {
        setZoomImage(image);
    };

    // Function to close the zoom modal
    const closeZoomModal = () => {
        setZoomImage(null);
    };

    return (
        <div>
            {astro_details_list_slider.length > 0 ? (
                <div className="aboutinfo border-t border-[#eee] mt-4 pt-4">
                    <h5 className="gi-pro-stitle font-normal mb-2 text-[#3B4959] text-[20px] font-semibold leading-[1.2] capitalize">
                        Gallery
                    </h5>
                    <div className="w-full">
                        <div className="astrologer_gallery z-0">
                            <Slider {...settings}>
                                {astro_details_list_slider.map((astro_details_list_slider_result, index) => (
                                    <div key={index} className="astro_gallery">
                                        <img src={`${IMG_BASE_URL}${astro_details_list_slider_result?.image_file}`} className="w-full max-w-[250px] h-[250px] rounded cursor-pointer object-cover"
                                            alt="Astrologer"
                                            onClick={() =>
                                                handleImageClick(`${IMG_BASE_URL}${astro_details_list_slider_result?.image_file}`)
                                            }
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    {/* Zoom Modal */}
                    {zoomImage && (
                        <div
                            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
                            onClick={closeZoomModal}
                        >
                            <div className="relative">
                                <img src={zoomImage} alt="Zoomed" className="w-full h-auto max-h-[350px] rounded object-contain" />
                                <button className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full" onClick={closeZoomModal}>
                                    ✕
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <p className="text-center text-gray-500">No images available</p>
            )}
        </div>
    );
};

export default Astrologer_Gallery_Profile;
