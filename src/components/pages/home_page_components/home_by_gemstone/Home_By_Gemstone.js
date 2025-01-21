import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import { IMG_BASE_URL } from "../../../../config/Config";

const GemstoneCarousel = (home_data) => {
  const navigate = useNavigate();
  const gemstone_product = home_data?.data?.gemstone_product || [];
  console.log("GemstoneCarousel_home_data", gemstone_product);

  // Dynamically adjust slidesToShow based on number of products, but limit minimum width per card
  const slidesToShow = gemstone_product?.length < 4 ? gemstone_product?.length : 4;

  const settings = {
    infinite: gemstone_product?.length > 1,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: gemstone_product?.length > 1,
    autoplaySpeed: 2000,
    arrows: gemstone_product?.length > 1,
    variableWidth: true, // Allow slides to take their content width
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: gemstone_product?.length < 3 ? gemstone_product?.length : 3,
          variableWidth: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: gemstone_product?.length < 2 ? gemstone_product?.length : 2,
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

  return (
    <section className="gi-deal-section py-[40px] max-[767px]:py-[30px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
          <div className="gi-deal-section w-full">
            <div className="gi-products">
              <div className="gi-tab-title w-full inline-flex justify-between max-[991px]:flex-col items-center">
                <div className="section-detail">
                  <h2 className="gi-title mb-[0] text-[25px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-Poppins max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
                    Buy Gemstone As Per Your Stars
                  </h2>
                  <p className="mt-[10px] text-[14px] text-[#777] leading-[18px]">Products of trusted excellence</p>
                </div>
                <div onClick={() => {
                  navigate("/home_view_all_product", {
                    state: {
                      gemstone_product: gemstone_product,
                      category_id: gemstone_product && gemstone_product[0]?.cat_id,
                    },
                  });
                }}>
                  <Link className="bg-red-800 text-white text-sm py-2 px-5 mt-5 mt-md-0 mt-lg-0 inline-block rounded-lg text-center dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                    See View All
                  </Link>
                </div>
              </div>

              <div className="gi-deal-block mt-5 mx-[-12px]">
                <Slider {...settings}>
                  {gemstone_product?.length > 0 ? (
                    gemstone_product?.map((product_list_result, index) => {
                      const isOutOfStock = product_list_result?.current_stock <= 0; // Check if product is out of stock

                      return (
                        <div
                          onClick={() => {
                            if (!isOutOfStock) {
                              navigate("/product_details", {
                                state: {
                                  product_list_result,
                                  category_id: product_list_result?.cat_id,
                                  subcategory_id: product_list_result?.sub_id,
                                }
                              });
                            }
                          }}
                          key={index}
                          className={`gi-product-content h-full m-3 md:my-3 md:m-0 ${isOutOfStock ? "opacity-50 pointer-events-none" : ""}`}
                          style={{ width: "330px" }} // Set a fixed width for each slide
                        >
                          <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer overflow-hidden rounded-[5px] shadow-xl pt-4">
                            <div className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
                              <div className="gi-pro-image overflow-hidden">
                                <Link className="image productimg7 relative block overflow-hidden">
                                  {
                                   product_list_result?.product_images && product_list_result?.product_images[0]?.file_type === "image" ? (
                                      <img
                                        className="main-image w-32 md:w-10 transition-all duration-[0.3s] ease delay-[0s] h-32 md:h-40"
                                        src={`${IMG_BASE_URL}${product_list_result?.product_images[0]?.image_url}`}
                                        alt="Product"
                                      />
                                    ) : (
                                      <video controls className="main-image w-32 md:w-10 transition-all duration-[0.3s] ease delay-[0s] h-32 md:h-40">
                                        <source src={product_list_result?.product_images[0]?.video_url} type="video/mp4" />
                                      </video>
                                    )
                                  }
                                </Link>
                                {isOutOfStock && (
                                  <div className="absolute top-2 right-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                                    Out of Stock
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="gi-pro-content h-full p-[20px] pt-[0] relative z-[10] flex flex-col text-center">
                              <h5 className="gi-pro-stitle font-normal text-[#999] text-[16px] font-semibold leading-[1.2] capitalize overflow-hidden whitespace-nowrap text-ellipsis">
                                {product_list_result?.name}
                              </h5>

                              <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                                <span className="gi-price">
                                  <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px]">
                                    Rs.{product_list_result?.purchase_price}
                                  </span>
                                </span>
                              </div>

                              <button
                                type="button"
                                className={`text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 
                              focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3 dark:border-gray-600 
                              dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 ${isOutOfStock ? "cursor-not-allowed" : ""}`}
                                disabled={isOutOfStock}
                              >
                                {isOutOfStock ? "Not Available" : "View More"}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })

                  ) : (
                    <p>No products available</p>
                  )}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GemstoneCarousel;


