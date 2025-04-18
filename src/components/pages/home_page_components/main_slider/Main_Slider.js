import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMG_BASE_URL } from "../../../../config/Config";
import { Link } from "react-router-dom";

const Main_Slider = (home_data) => {
  const Get_Main_Slider = home_data?.data?.sliders || [];

  // Track current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: Get_Main_Slider.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: Get_Main_Slider.length > 1,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "20px", width: "100%", marginBottom: "10px" }}>
        <ul className="slick-dots flex justify-center"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
          i === currentSlide ? "bg-red-500 scale-110" : "bg-gray-400"
        }`}
      ></div>
    ),
  };

  return (
    <section className="section gi-hero w-full max-w-full overflow-hidden relative">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <div className="gi-main-content w-full md:px-[12px] p-3">
          {/* Hero Slider Start */}
          <div className="gi-slider-content h-full relative">
            <Slider {...settings}>
              {Get_Main_Slider?.length > 0 ? (
                Get_Main_Slider.map((slide, index) => (
                  <div key={index} className="relative">
                    <Link to="/astrologer-list" className="w-full">
                      <img
                        src={`${IMG_BASE_URL}${slide?.image}`}
                        className="rounded-[5px] w-full"
                        alt={`Banner ${index + 1}`}
                      />
                    </Link>
                  </div>
                ))
              ) : (
                <div>
                  <p className="text-center">No slides available</p>
                </div>
              )}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main_Slider;
