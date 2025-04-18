import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMG_BASE_URL } from '../../../../config/Config';

const Book_Pooja_Details_Testimonals = (pooja_reviews) => {
    console.log("pooja_reviews", pooja_reviews?.data)
    // Slick settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    function formatDate(dateString) {
        if (!dateString || isNaN(Date.parse(dateString))) {
            return 'Invalid Date';
        }

        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);

        // Format the time part
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';

        // Format hours to 12-hour format
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;

        return `${formattedDate} AT ${formattedTime}`;
    }


    return (
        <div>
            <section className="gi-deal-section py-[40px] max-[767px]:py-[30px] wow fadeInUp" data-wow-duration="2s">
                <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
                        <div className="gi-deal-section w-full">
                            <div className="gi-products">
                                <div className="section-title mb-[20px] relative text-center md:pb-[20px] z-[5]" data-aos="fade-up"
                                    data-aos-duration="2000" data-aos-delay="200">
                                    <div className="section-detail">
                                        <h2 className="gi-title mb-[0] text-[25px] font-semibold text-[#4b5966] relative inline p-[0] 
                                        capitalize leading-[1] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">Customer Testimonials</h2>
                                    </div>
                                </div>
                                <div className="gi-deal-block mx-[-12px]" data-aos="fade-up" data-aos-duration="2000"
                                    data-aos-delay="300">
                                    <div className="customer_testimonials gi-product-slidersdfg px-5">
                                        <Slider {...settings}>
                                            {
                                                pooja_reviews?.data?.map((pooja_review_result) => {
                                                    return (
                                                        <div className="gi-t-review-item p-5 gap-3 border border-gray-200 rounded my-4 h-[200px] w-full">
                                                            <div className="gi-t-review-content">
                                                                <div className="gi-t-review-top flex items-center mb-[10px]">
                                                                    <div className="gi-t-review-avtars basis-[70px] grow-[0] shrink-[0] mr-[10px]">
                                                                        <img src={`${IMG_BASE_URL}${pooja_review_result?.users?.profile_image}`}
                                                                            alt="user" className="max-w-full rounded-full w-16" />
                                                                    </div>
                                                                    <div className="w-full">
                                                                        <h4 className="gi-t-review-name font-medium text-[18px] m-[0] leading-[1.5] block text-[#000]">{pooja_review_result?.users?.name}</h4>
                                                                        <div className="flex justify-between items-center">
                                                                            <div className="gi-t-review-rating flex">
                                                                                {[...Array(pooja_review_result?.rating)].map((_, i) => (
                                                                                    <i key={i} className="gicon gi-star text-[#f27d0c] text-[14px] mr-[3px]" />))}
                                                                                <i className="gicon gi-star-o text-[#b2b2b2] text-[14px]" />
                                                                            </div>
                                                                            <div className="text-sm text-gray-500"> {formatDate(pooja_review_result?.created_at)}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="gi-t-review-bottom">
                                                                    <p className="w-full text-[14px] text-[#777] font-normal line-clamp-5 mt-3">{pooja_review_result?.review}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Slider>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Book_Pooja_Details_Testimonals