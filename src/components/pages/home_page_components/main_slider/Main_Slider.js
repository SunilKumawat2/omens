import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IMG_BASE_URL } from '../../../../config/Config';
import { Link } from 'react-router-dom';

const Main_Slider = (home_data) => {
  const Get_Main_Slider = home_data?.data?.sliders
  console.log("Main_Slider_home_data", Get_Main_Slider)

  // Slick Slider settings
  const settings = {
    infinite: Get_Main_Slider?.length > 1, // Disable infinite if there's only one slide
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: Get_Main_Slider?.length > 1, // Autoplay only if more than 1 slide
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section className="section gi-hero h-full w-full max-[992px]:my-[10px] max-[1199px]:relative">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <div className="gi-main-content w-full px-[12px]">
          {/* Hero Slider Start */}
          <div className="gi-slider-content h-full">
            <Slider {...settings}>
              {Get_Main_Slider?.length > 0 ? (
                Get_Main_Slider?.map((Get_Main_Slider_Result, index) => (
                  <div key={index}>
                    <Link to="/astrologer_list" className="w-full">
                      <img
                        src={`${IMG_BASE_URL}${Get_Main_Slider_Result?.image}`}
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
