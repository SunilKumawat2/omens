import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import { IMG_BASE_URL } from "../../../../config/Config";

const GemstoneCarousel = (home_data) => {
  const navigate = useNavigate();
  const category_list = Array.isArray(home_data?.data?.category) ? home_data?.data?.category : [];
  console.log("GemstoneCarousel_home_data", category_list);

  const slidesToShow = category_list?.length < 4 ? category_list?.length : 4;

  const settings = {
    infinite: category_list?.length > 1,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: category_list?.length > 1,
    autoplaySpeed: 2000,
    arrows: category_list?.length > 1,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: category_list?.length < 3 ? category_list?.length : 3,
          variableWidth: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: category_list?.length < 2 ? category_list?.length : 2,
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
                    {/* Buy Gemstone As Per Your Stars */} Gemstone and Jewellery Category
                  </h2>
                  <p className="mt-[10px] text-[14px] text-[#777] leading-[18px]">Products of trusted excellence</p>
                </div>
                {/* <div onClick={() => {
                  navigate("/all-best-selling-product", {
                    state: {
                      category_list: category_list,
                      category_id: category_list && category_list[0]?.cat_id,
                    },
                  });
                }}>
                  <Link className="bg-red-800 text-white text-sm py-2 px-5 mt-5 mt-md-0 mt-lg-0 inline-block rounded-lg text-center dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                    See View All
                  </Link>
                </div> */}
              </div>

              <div className="gi-deal-block mt-5 mx-[-12px]">
                {/* <Slider {...settings}>
                  {category_list?.length > 0 ? (
                    category_list?.map((product_list_result, index) => {
                      const isOutOfStock = product_list_result?.current_stock <= 0;
                      const hasImages = Array.isArray(product_list_result?.product_images) && product_list_result?.product_images?.length > 0;
                      const firstMedia = hasImages ? product_list_result?.product_images[0] : null;

                      return (
                        <div
                          onClick={() => {
                            if (!isOutOfStock) {
                              navigate("/product-details", {
                                state: {
                                  product_list_result,
                                  category_id: product_list_result?.cat_id,
                                  subcategory_id: product_list_result?.sub_id,
                                },
                              });
                            }
                          }}
                          onClick={() => navigate(`/${product_list_result?.slug}`, { state: { product_list_result: product_list_result } })}
                          key={index}
                          className={`gi-product-content h-full m-3 md:my-3 md:m-0 ${isOutOfStock ? "opacity-50 pointer-events-none" : ""}`}
                          style={{ width: "330px" }}
                        >
                          <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer overflow-hidden rounded-[5px] shadow-xl pt-4">
                            <div className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
                              <div className="gi-pro-image overflow-hidden">
                                <Link className="image productimg7 relative block overflow-hidden">
                                  {firstMedia && firstMedia.file_type === "image" ? (
                                  <img
                                    className="main-image w-32 md:w-10 transition-all duration-[0.3s] ease delay-[0s] h-32 md:h-40"
                                    src={`${IMG_BASE_URL}${product_list_result.image}`}
                                    alt="Product"
                                  />
                                  ) : firstMedia && firstMedia.file_type === "video" ? (
                                    <video controls className="main-image w-32 md:w-10 transition-all duration-[0.3s] ease delay-[0s] h-32 md:h-40">
                                      <source src={firstMedia.video_url} type="video/mp4" />
                                    </video>
                                  ) : (
                                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                                      No Image
                                    </div>
                                  )}
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
                                {product_list_result?.title}
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
                </Slider> */}
                <div className="gi-deal-block mt-5 mx-[-12px]">
                  <Slider {...settings}>
                    {category_list?.length > 0 ? (
                      category_list.map((category_list_result, index) => (
                        <div
                          key={index}
                          className="gi-product-content h-full m-3 md:my-3 md:m-0"
                          // style={{ width: "330px" }}
                          onClick={() =>{
                            navigate(`/${category_list_result?.slug}`, {
                              state: { category_list_result },
                            })
                            localStorage.setItem("category_list_result_slug", category_list_result?.slug);
                          }
                         
                          }
                        >
                          <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer overflow-hidden rounded-[5px] shadow-xl pt-4">
                            <div className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
                              <div className="gi-pro-image overflow-hidden flex justify-center items-center">
                                <img
                                  className="main-image w-32 md:w-40 h-32 md:h-40 object-cover rounded-full"
                                  src={`${IMG_BASE_URL}${category_list_result?.image}`}
                                  alt={category_list_result?.title}
                                />
                              </div>
                            </div>

                            <div className="gi-pro-content h-full p-[20px] pt-[0] relative z-[10] flex flex-col text-center">
                              <h5 className="gi-pro-stitle font-normal text-[#333] text-[16px] font-semibold leading-[1.2] capitalize overflow-hidden whitespace-nowrap text-ellipsis">
                                {category_list_result?.title}
                              </h5>

                              <button
                                type="button"
                                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 
                focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3 dark:border-gray-600 
                dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                              >
                                View More
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No categories available</p>
                    )}
                  </Slider>
                </div>


              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GemstoneCarousel;


