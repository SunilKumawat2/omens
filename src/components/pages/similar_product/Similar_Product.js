import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Common_Images_Transport from '../../common/common_imges_transport/Common_Images_Transport';
import { Link } from 'react-router-dom';
const Similar_Product = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,  
        autoplaySpeed: 2000, 
        arrows: true,
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
            <section className="gi-deal-section py-[40px] max-[767px]:py-[30px]">
                <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
                        <div className="gi-deal-section w-full">
                            <div className="gi-products text-center">
                                <div className="section-title mb-[20px] relative text-center md:pb-[20px] z-[5]" data-aos="fade-up"
                                    data-aos-duration="2000" data-aos-delay="200">
                                    <div className="section-detail">
                                        <h2
                                            className="gi-title mb-[0] text-[25px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
                                            Similar Products</h2>
                                        <p className="mt-[10px] text-[14px] text-[#777] leading-[18px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>

                                </div>

                                <div className="gi-deal-block mt-5 mx-[-12px]">
                                    {/* Slick Slider */}
                                    <Slider {...settings}>
                                        {/* Product Card 1 */}
                                        <div className="gi-product-content h-full m-3 md:my-3 md:m-0">
                                            <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer overflow-hidden rounded-[5px] shadow-xl pt-4">
                                                <div className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
                                                    <div className="gi-pro-image overflow-hidden">
                                                        <Link className="image productimg7 relative block overflow-hidden">
                                                            <img className="main-image w-32 md:w-10 transition-all duration-[0.3s] ease delay-[0s] h-32 md:h-40"
                                                                src={Common_Images_Transport?.product_images1} alt="Product" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="gi-pro-content h-full p-[20px] pt-[0] relative z-[10] flex flex-col text-center">
                                                    <h5 className="gi-pro-stitle font-normal text-[#999] text-[16px] font-semibold leading-[1.2] capitalize">
                                                        Yellow Sapphire
                                                    </h5>
                                                    <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                                                        <span className="gi-price">
                                                            <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px]">Rs.8,700</span>
                                                        </span>
                                                    </div>
                                                    <Link className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                                        View More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Product Card 2 */}
                                        <div className="gi-product-content h-full m-3 md:my-3 md:m-0">
                                            <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer overflow-hidden rounded-[5px] shadow-xl pt-4">
                                                <div className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
                                                    <div className="gi-pro-image overflow-hidden">
                                                        <Link className="image productimg7 relative block overflow-hidden">
                                                            <img className="main-image w-32 md:w-10 transition-all duration-[0.3s] ease delay-[0s] h-32 md:h-40"
                                                                src={Common_Images_Transport?.product_images2} alt="Product" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="gi-pro-content h-full p-[20px] pt-[0] relative z-[10] flex flex-col text-center">
                                                    <h5 className="gi-pro-stitle font-normal text-[#999] text-[16px] font-semibold leading-[1.2] capitalize">
                                                        Blue Sapphire
                                                    </h5>
                                                    <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                                                        <span className="gi-price">
                                                            <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px]">Rs.12,500</span>
                                                        </span>
                                                    </div>
                                                    <Link className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                                        View More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Card 3 */}
                                        <div className="gi-product-content h-full m-3 md:my-3 md:m-0">
                                            <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer overflow-hidden rounded-[5px] shadow-xl pt-4">
                                                <div className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
                                                    <div className="gi-pro-image overflow-hidden">
                                                        <a href="product-details.html" className="image productimg7 relative block overflow-hidden">
                                                            <img className="main-image w-32 md:w-10 transition-all duration-[0.3s] ease delay-[0s] h-32 md:h-40"
                                                                src={Common_Images_Transport?.product_images3} alt="Product" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="gi-pro-content h-full p-[20px] pt-[0] relative z-[10] flex flex-col text-center">
                                                    <h5 className="gi-pro-stitle font-normal text-[#999] text-[16px] font-semibold leading-[1.2] capitalize">
                                                        Blue Sapphire
                                                    </h5>
                                                    <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                                                        <span className="gi-price">
                                                            <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px]">Rs.12,500</span>
                                                        </span>
                                                    </div>
                                                    <Link className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                                        View More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Card 4 */}
                                        <div className="gi-product-content h-full m-3 md:my-3 md:m-0">
                                            <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer overflow-hidden rounded-[5px] shadow-xl pt-4">
                                                <div className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
                                                    <div className="gi-pro-image overflow-hidden">
                                                        <Link className="image productimg7 relative block overflow-hidden">
                                                            <img className="main-image w-32 md:w-10 transition-all duration-[0.3s] ease delay-[0s] h-32 md:h-40"
                                                                src={Common_Images_Transport?.product_images4} alt="Product" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="gi-pro-content h-full p-[20px] pt-[0] relative z-[10] flex flex-col text-center">
                                                    <h5 className="gi-pro-stitle font-normal text-[#999] text-[16px] font-semibold leading-[1.2] capitalize">
                                                        Blue Sapphire
                                                    </h5>
                                                    <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                                                        <span className="gi-price">
                                                            <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px]">Rs.12,500</span>
                                                        </span>
                                                    </div>
                                                    <Link className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                                        View More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Add more products as needed */}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Similar_Product