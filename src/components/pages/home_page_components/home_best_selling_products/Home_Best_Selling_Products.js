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
                                <li
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
                                </li>
                                <li
                                    className={`inline-block align-top text-[14px] text-[#777] uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px] mr-[50px] max-[991px]:mr-[30px] max-[480px]:mr-[20px]}`}>
                                    <a 
                                        className={`nav-link activ_tab flex items-center relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]`}
                                        href="#snack">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M20.7083 24.1551C21.027 23.971 21.1367 23.5632 20.9523 23.2442L20.5357 22.5228L20.5355 22.5225C20.3513 22.2043 19.9438 22.0938 19.6249 22.2787C19.3062 22.4627 19.1965 22.8705 19.3808 23.1894C19.3808 23.1895 19.3809 23.1895 19.3809 23.1896L19.7975 23.9111L19.7976 23.9113C19.9214 24.1251 20.1456 24.2444 20.3753 24.2444C20.4884 24.2444 20.6034 24.2157 20.7083 24.1551ZM20.7083 24.1551L20.5841 23.9401L20.7083 24.1551C20.7083 24.1551 20.7083 24.1551 20.7083 24.1551ZM12.2024 23.9111L12.2023 23.9112C12.0785 24.1252 11.8542 24.2444 11.6245 24.2444C11.5113 24.2444 11.3964 24.2156 11.2916 24.1552L11.2915 24.1551C10.9728 23.971 10.8632 23.5633 11.0475 23.2444C11.0475 23.2443 11.0475 23.2443 11.0475 23.2443L11.4641 22.5228C11.6481 22.2039 12.056 22.094 12.375 22.2787L12.2024 23.9111ZM12.2024 23.9111L12.619 23.1896M12.2024 23.9111L12.619 23.1896M12.619 23.1896C12.619 23.1895 12.619 23.1895 12.619 23.1894M12.619 23.1896L12.619 23.1894M12.619 23.1894C12.8033 22.8706 12.6937 22.463 12.3753 22.2789L12.619 23.1894ZM15.3333 15.0653V15.8371C14.5941 15.6183 13.7537 15.8414 13.2307 16.5229C12.6102 17.3311 12.7427 18.4704 13.4386 19.1756L13.4387 19.1757L15.1304 20.8882L15.1315 20.8893C15.6124 21.3703 16.3874 21.3703 16.8684 20.8893L16.8694 20.8882L18.5611 19.1757L18.5612 19.1756C19.2571 18.4703 19.3897 17.3311 18.7691 16.5229C18.2462 15.8414 17.4057 15.6183 16.6666 15.8371V15.0653C17.1309 14.8677 17.4916 14.4729 17.6366 13.9815C21.1547 13.2229 23.7499 10.0631 23.7499 6.41667C23.7499 6.04857 23.4517 5.75 23.0833 5.75C22.7148 5.75 22.4166 6.04857 22.4166 6.41667C22.4166 9.39005 20.3288 11.9762 17.4815 12.6511C17.1869 12.1386 16.6338 11.7917 15.9999 11.7917C15.366 11.7917 14.8129 12.1386 14.5183 12.6511C11.671 11.9762 9.58325 9.39005 9.58325 6.41667C9.58325 6.04857 9.28505 5.75 8.91659 5.75C8.54812 5.75 8.24992 6.04857 8.24992 6.41667C8.24992 10.0631 10.8451 13.2229 14.3632 13.9815C14.5083 14.4729 14.8689 14.8677 15.3333 15.0653ZM16.4177 18.937L16.4167 18.938C16.3063 19.0513 16.1588 19.1125 15.9999 19.1125C15.841 19.1125 15.6935 19.0513 15.5831 18.938L15.5821 18.937L14.6956 18.038C14.6955 18.0378 14.6953 18.0377 14.6952 18.0376C14.6297 17.97 14.6308 17.8644 14.6975 17.7976C14.759 17.7362 14.8668 17.7337 14.935 17.8011C14.9352 17.8013 14.9354 17.8016 14.9356 17.8018L15.8215 18.7043L15.9999 18.8861L16.1783 18.7043L17.0642 17.8018C17.0644 17.8016 17.0646 17.8013 17.0648 17.8011C17.1314 17.7353 17.2361 17.7342 17.3034 17.7987C17.3691 17.8656 17.3697 17.9704 17.3046 18.0376C17.3045 18.0377 17.3044 18.0379 17.3043 18.038L16.4177 18.937ZM9.72146 19.625L9.72126 19.6246C9.53687 19.3065 9.12883 19.1966 8.81058 19.381C8.81048 19.381 8.81037 19.3811 8.81027 19.3811L7.36702 20.2142L7.36696 20.2142C7.04819 20.3984 6.93861 20.8059 7.12291 21.125L7.12302 21.1252C7.2468 21.3391 7.471 21.4583 7.70075 21.4583C7.81382 21.4583 7.92878 21.4297 8.03365 21.3691C8.03368 21.3691 8.03372 21.3691 8.03376 21.3691L9.47735 20.5358L9.47741 20.5358C9.79618 20.3516 9.90576 19.9441 9.72146 19.625ZM23.9661 21.3691L23.9662 21.3691C24.0709 21.4296 24.1858 21.4583 24.299 21.4583C24.5287 21.4583 24.753 21.3391 24.8768 21.1252L24.8769 21.125C25.0612 20.806 24.9517 20.3984 24.6328 20.2142L24.6328 20.2142L23.1891 19.3809L23.189 19.3808C22.8701 19.197 22.4626 19.306 22.2783 19.625C22.094 19.9441 22.2036 20.3516 22.5224 20.5358L22.5224 20.5358L23.9661 21.3691ZM15.9999 13.875C15.7934 13.875 15.6249 13.7066 15.6249 13.5C15.6249 13.2934 15.7934 13.125 15.9999 13.125C16.2065 13.125 16.3749 13.2934 16.3749 13.5C16.3749 13.7066 16.2065 13.875 15.9999 13.875ZM16.6666 25.5833V23.9167C16.6666 23.5486 16.3684 23.25 15.9999 23.25C15.6315 23.25 15.3333 23.5486 15.3333 23.9167V25.5833C15.3333 25.9514 15.6315 26.25 15.9999 26.25C16.3684 26.25 16.6666 25.9514 16.6666 25.5833ZM24.7499 16.6667C25.1184 16.6667 25.4166 16.3681 25.4166 16C25.4166 15.6319 25.1184 15.3333 24.7499 15.3333H23.9166C23.5481 15.3333 23.2499 15.6319 23.2499 16C23.2499 16.3681 23.5481 16.6667 23.9166 16.6667H24.7499ZM7.24992 16.6667H8.08325C8.45172 16.6667 8.74992 16.3681 8.74992 16C8.74992 15.6319 8.45172 15.3333 8.08325 15.3333H7.24992C6.88145 15.3333 6.58325 15.6319 6.58325 16C6.58325 16.3681 6.88145 16.6667 7.24992 16.6667Z"
                                                fill="#000"
                                            />
                                        </svg>
                                        Pendants
                                    </a>
                                </li>
                                <li
                                    className={`inline-block align-top text-[14px] text-[#777] uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px] mr-[50px] max-[991px]:mr-[30px] max-[480px]:mr-[20px]}`}>
                                    <a 
                                        className={`nav-link activ_tab flex items-center relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]`}
                                        href="#snack">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M24.3333 16.1533V12.5675C25.3642 11.9325 26 11.1325 26 10.1667C26 7.43082 20.9692 6 16 6C11.0308 6 6 7.43082 6 10.1667C6 11.1325 6.63668 11.9325 7.66668 12.5675V16.1533C6.69918 16.4983 6 17.415 6 18.5C6 19.8783 7.12168 21 8.5 21C9.87918 21 11 19.8783 11 18.5C11 17.415 10.3017 16.4983 9.33332 16.1533V13.3416C10.9741 13.92 13.0475 14.25 15.1666 14.3183V16.9175C13.5367 17.25 12.25 18.5367 11.9175 20.1667H11.8333C11.3733 20.1667 11 20.54 11 21C11 21.46 11.3733 21.8333 11.8333 21.8333H11.9175C12.25 23.4633 13.5367 24.75 15.1667 25.0825V25.1667C15.1667 25.6267 15.54 26 16 26C16.4608 26 16.8333 25.6267 16.8333 25.1667V25.0825C18.4633 24.75 19.7508 23.4633 20.0825 21.8333H20.1667C20.6275 21.8333 21 21.46 21 21C21 20.54 20.6275 20.1667 20.1667 20.1667H20.0825C19.7508 18.5367 18.4633 17.25 16.8333 16.9175V14.3183C18.9533 14.25 21.0266 13.92 22.6666 13.3416V16.1533C21.6992 16.4983 21 17.415 21 18.5C21 19.8783 22.1217 21 23.5 21C24.8792 21 26 19.8783 26 18.5C26 17.415 25.3017 16.4983 24.3333 16.1533ZM18.3558 20.1958C17.9666 20.2666 17.6666 20.5908 17.6666 21C17.6666 21.4092 17.9666 21.7333 18.3558 21.8042C18.1058 22.5334 17.5333 23.1059 16.8041 23.3559C16.7341 22.9667 16.4091 22.6667 16 22.6667C15.5908 22.6667 15.2666 22.9667 15.1958 23.3559C14.4666 23.1059 13.895 22.5334 13.645 21.8042C14.0333 21.7334 14.3333 21.4092 14.3333 21C14.3333 20.5908 14.0333 20.2667 13.645 20.1958C13.895 19.4666 14.4666 18.8941 15.1958 18.6441C15.2666 19.0333 15.5908 19.3333 16 19.3333C16.41 19.3333 16.7341 19.0333 16.8041 18.6441C17.5333 18.8942 18.1058 19.4667 18.3558 20.1958ZM16 12.6667C10.9908 12.6667 7.66668 11.1617 7.66668 10.1667C7.66668 9.17168 10.9909 7.66668 16 7.66668C21.01 7.66668 24.3333 9.17168 24.3333 10.1667C24.3333 11.1617 21.01 12.6667 16 12.6667Z"
                                                fill="#000"
                                            />
                                        </svg>
                                        Bracelet
                                    </a>
                                </li>
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
                                <div className="tab-pro-pane z-0" id="snack">
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



