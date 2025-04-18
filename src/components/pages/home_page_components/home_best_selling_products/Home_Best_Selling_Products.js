import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IMG_BASE_URL } from "../../../../config/Config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home_Best_Selling_Products = (home_data) => {
    const Best_Selling_Products = home_data?.data?.best_selling_product;
    const navigate = useNavigate();

    const slidesToShowProduct = Best_Selling_Products?.length < 4 ? Best_Selling_Products?.length : 4;

    const productSliderSettings = {
        infinite: Best_Selling_Products?.length > slidesToShowProduct,
        speed: 500,
        slidesToShow: slidesToShowProduct,
        slidesToScroll: 1,
        autoplay: Best_Selling_Products?.length > 1,
        autoplaySpeed: 2500,
        arrows: Best_Selling_Products?.length > 1,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Best_Selling_Products?.length < 3 ? Best_Selling_Products?.length : 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Best_Selling_Products?.length < 2 ? Best_Selling_Products?.length : 2,
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
            <section className="gi-product-tab gi-products py-[40px] max-[767px]:py-[30px] wow fadeInUp" data-wow-duration="2s">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="gi-tab-title w-full inline-flex justify-between px-[12px] max-[991px]:flex-col items-center">
                        <div className="gi-main-title">
                            <div className="section-title mb-md-[20px] pb-[20px] flex flex-start">
                                <div className="section-detail">
                                    <h2 className="gi-title mb-[0] text-[25px] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-Poppins tracking-[0.01rem]">
                                        Best selling Products</h2>
                                    <p className="max-w-[400px] mt-[10px] text-[14px] text-[#777] leading-[18px] font-light">Our
                                        fashion jewellery is inspired</p>
                                </div>
                            </div>
                        </div>



                        <div className="gi-pro-tab">
                            <ul className="flex flex-wrap max-[991px]:justify-start">
                                {/* <li
                                    className={`inline-block align-top text-[14px] text-[#777] uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px] mr-[50px] max-[991px]:mr-[30px] max-[480px]:mr-[20px]}`}>
                                    <a 
                                        className={`nav-link activ_tab flex items-center relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]`}
                                        href="#snack">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M17.3067 20.7767C15.7233 19.77 14.6667 18.006 14.6667 15.9947C14.6667 15.8453 14.688 15.7013 14.7 15.5547C16.28 16.562 17.3333 18.326 17.3333 20.3333C17.3333 20.484 17.3193 20.63 17.3067 20.7767ZM20.8973 8.35667C20.71 8.34333 20.5233 8.328 20.3333 8.328C20.144 8.328 19.9607 8.35133 19.7753 8.36467L18.528 6.61933L18.9 5.99933H21.7667L22.1387 6.61933L20.8973 8.35667ZM23.0213 8.82333L24.1473 7.24867C24.2605 7.0899 24.3248 6.90159 24.3325 6.70679C24.3402 6.512 24.2909 6.3192 24.1907 6.152L23.1907 4.48533C23.1018 4.33731 22.9762 4.21481 22.8259 4.12977C22.6757 4.04472 22.506 4.00001 22.3333 4H18.3333C18.1607 4.00001 17.991 4.04472 17.8408 4.12977C17.6905 4.21481 17.5649 4.33731 17.476 4.48533L16.476 6.152C16.3758 6.3192 16.3265 6.512 16.3342 6.70679C16.3419 6.90159 16.4062 7.0899 16.5193 7.24867L17.648 8.828C16.0684 9.4229 14.7277 10.52 13.832 11.9507C14.502 12.124 15.1407 12.3727 15.7373 12.6927C16.7673 11.2633 18.4413 10.328 20.3333 10.328C23.458 10.328 26 12.87 26 15.9947C26 19.1193 23.458 21.6613 20.3333 21.6613C19.9617 21.6608 19.5911 21.6239 19.2267 21.5513C19.2913 21.1533 19.3333 20.7487 19.3333 20.3333C19.3333 16.106 15.894 12.6667 11.6667 12.6667C7.43933 12.6667 4 16.106 4 20.3333C4 24.5613 7.43933 28 11.6667 28C14.41 28 16.814 26.5467 18.1693 24.3753C17.5071 24.2046 16.8677 23.9553 16.2647 23.6327C15.2353 25.0633 13.56 25.9993 11.6667 25.9993C8.542 25.9993 6 23.458 6 20.3327C6 17.2087 8.542 14.666 11.6667 14.666C12.0473 14.666 12.4187 14.706 12.7787 14.778C12.7079 15.1798 12.6704 15.5867 12.6667 15.9947C12.6667 20.2213 16.106 23.6613 20.3333 23.6613C24.5607 23.6613 28 20.2213 28 15.9947C28 12.714 25.9253 9.916 23.0213 8.824V8.82333Z"
                                                fill="#000"
                                            />
                                        </svg>
                                        Rings
                                    </a>
                                </li> */}
                            </ul>


                        </div>
                        <div onClick={() => {
                            navigate("/all-best-selling-product", {
                                state: {
                                    gemstone_product: Best_Selling_Products,
                                    category_id: Best_Selling_Products && Best_Selling_Products[0]?.cat_id,
                                },
                            });
                        }}> <Link
                            className="bg-red-800 mt-4 mt-md-0 mt-lg-0 text-white text-sm py-2 px-5 rounded-lg text-center dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                View All</Link></div>
                    </div>

                    <div className="w-full mb-[-24px] px-[15px]">
                        <div className="col">
                            <div className="tab-content" id="myproTabContent">
                                <div className="tab-pro-pane" id="snack">
                                    <Slider {...productSliderSettings} className="w-full px-[5px]">
                                        {Best_Selling_Products?.map((product_list_result) => {
                                            const isOutOfStock = product_list_result?.current_stock <= 0;
                                            return (
                                                <div key={product_list_result?.id} className="px-2">
                                                    <div
                                                        onClick={() =>
                                                            navigate(`/product/${product_list_result?.slug}`, {
                                                                state: {
                                                                    product_list_result,
                                                                    category_id: product_list_result?.cat_id,
                                                                    subcategory_id: product_list_result?.sub_id,
                                                                },
                                                            })
                                                        }
                                                        className={`gi-product-content h-full ${isOutOfStock ? "opacity-50 pointer-events-none" : ""}`}
                                                    >
                                                        <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer overflow-hidden rounded-[5px] shadow-xl pt-4">
                                                            <div className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
                                                                <div className="gi-pro-image overflow-hidden">
                                                                    <a className="image productimg7 relative block overflow-hidden">
                                                                        {product_list_result?.product_images &&
                                                                            product_list_result?.product_images[0]?.file_type === "image" ? (
                                                                            <img
                                                                                className="main-image w-32 md:w-10 transition-all duration-[0.3s] ease delay-[0s] h-32 md:h-40"
                                                                                src={`${IMG_BASE_URL}${product_list_result?.product_images[0]?.image_url}`}
                                                                                alt="Product"
                                                                            />
                                                                        ) : (
                                                                            <video controls className="main-image w-32 md:w-10 transition-all duration-[0.3s] ease delay-[0s] h-32 md:h-40">
                                                                                <source
                                                                                    src={product_list_result?.product_images[0]?.video_url}
                                                                                    type="video/mp4"
                                                                                />
                                                                            </video>
                                                                        )}
                                                                    </a>
                                                                    {isOutOfStock && (
                                                                        <div className="absolute top-2 right-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                                                                            Out of Stock
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            <div className="gi-pro-content h-full p-[15px] md:p-[25px] md:pt-[20px] relative z-[10] flex flex-col text-center">
                                                                <a href="#">
                                                                    <h5 className="gi-pro-stitle font-normal text-[#0F1726] text-[16px] font-semibold leading-[1.2] capitalize truncate overflow-hidden whitespace-nowrap">
                                                                        {product_list_result?.name}
                                                                    </h5>
                                                                </a>

                                                                <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                                                                    <span className="gi-price">
                                                                        <span className="new-price text-[#4b5966] font-medium text-[16px]">
                                                                            Rs.{product_list_result?.purchase_price}/-
                                                                        </span>
                                                                    </span>
                                                                </div>

                                                                <button
                                                                    type="button"
                                                                    className={`text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 
                              focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3 dark:border-gray-600 
                              dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 ${isOutOfStock ? "cursor-not-allowed" : ""
                                                                        }`}
                                                                    disabled={isOutOfStock}
                                                                >
                                                                    {isOutOfStock ? "Not Available" : "View More"}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
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

export default Home_Best_Selling_Products



