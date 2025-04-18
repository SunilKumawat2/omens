import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Common_Images_Transport from '../../common/common_imges_transport/Common_Images_Transport';

const Customer_Feedback = (product_details_list) => {
    console.log("product_details_list_product_details_list", product_details_list?.data?.product_reviews)
    const Product_reviews = product_details_list?.data?.product_reviews

    const slidesToShow = Product_reviews?.length < 1 ? Product_reviews?.length : 1;
    const settings = {
        infinite: Product_reviews?.length > 1,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: Product_reviews?.length > 1,
        autoplaySpeed: 2000,
        arrows: Product_reviews?.length > 1,
        variableWidth: true, // Allow slides to take their content width
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Product_reviews?.length < 1 ? Product_reviews?.length : 1,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Product_reviews?.length < 1 ? Product_reviews?.length : 1,
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
        <div>
            {
                Product_reviews?.length > 0 && (
                    <div className="w-[400px]">
                        <div className="single-add-more p-5 my-[40px] bg-[#F3F3F3]">
                            <h2 className="text-2xl font-bold mb-5">
                                Customer <span className="text-[#9F2225]">Feedback</span>
                            </h2>
                            <Slider {...settings}>
                                {/* Slide 1 */}
                                {
                                    Product_reviews?.map((Product_reviews_result) => {
                                        return (
                                            <div className="gi-add-more-slider flex">
                                                <div className="gi-t-review-item mb-[25px] pb-[25px] border-b-[1px] border-solid border-[#eee]">
                                                    <div className="gi-t-review-avtar basis-[50px] grow-0 shrink-0 mr-[15px]">
                                                        <img
                                                            src={Common_Images_Transport?.user1}
                                                            alt="user"
                                                            className="max-w-full rounded-[5px] w-20"
                                                        />
                                                    </div>
                                                    <div className="gi-t-review-content">
                                                        <div className="gi-t-review-top flex flex-col mb-[10px]">
                                                            <div className="my-5">
                                                                <h4 className="gi-t-review-name font-medium text-[18px] text-[#000]">
                                                                    {Product_reviews_result?.user?.name}
                                                                </h4>
                                                                {/* <p>India</p> */}
                                                            </div>
                                                            <div className="gi-t-review-rating flex">
                                                                {[...Array(Product_reviews_result?.rating)].map((_, i) => (
                                                                    <i key={i} className="gicon gi-star text-[#f27d0c] text-[14px] mr-[3px]" />))}
                                                                <i className="gicon gi-star-o text-[#b2b2b2] text-[14px]" />
                                                            </div>
                                                        </div>
                                                        <div className="gi-t-review-bottom">
                                                            <h5 className="font-medium text-[16px] text-[#000]">{Product_reviews_result?.review}</h5>
                                                            {/* <p className="text-[14px] text-[#777] mt-3">
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s...
                                                    </p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default Customer_Feedback