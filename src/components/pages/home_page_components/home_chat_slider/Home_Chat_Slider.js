import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // Slick Slider settings
  const settings = {
    // dots: true, 
    infinite: true,
    speed: 500,           
    slidesToShow: 4,      
    slidesToScroll: 1,    
    autoplay: true,       
    autoplaySpeed: 3000,  
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, 
        settings: {
          slidesToShow: 1,
          dots: true, 
        },
      },
    ],
  };

  return (
    <section className="gi-category body-bg py-[40px] max-[767px]:py-[10px] wow fadeInUp" data-wow-duration="2s">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="w-full flex flex-wrap px-[12px] mb-[-15px]">
          <div className="min-[1200px]:w-full basis-auto max-w-full border-content-color">
            <Slider {...settings}>
              <div className="gi-cat-box transition-all duration-[0.3s] ease-in-out p-[5px] md:p-[15px] lg:p-[15px] rounded-[5px] relative bg-[#fff6ec]">
                <Link to="/astrologer_list">
                <div className="gi-cat-icon h-full p-[15px] flex flex-col items-center justify-center bg-[#fff] relative rounded-[5px] z-[5]">
                  <img src={Common_Images_Transport?.Chat_astro} className="w-90" alt="" />
                  <div className="gi-cat-detail text-center">
                    <Link to="/astrologer_list">
                      <h4 className="gi-cat-title m-[0] max-[480px]:text-[12px] text-[14px] md:text-[15px] leading-[22px] font-semibold text-[#4b5966] capitalize font-Poppins">
                        Chat with Astro
                      </h4>
                    </Link>
                  </div>
                </div>
                </Link>
              </div>
              <Link to="/numerology">
              <div className="gi-cat-box transition-all duration-[0.3s] ease-in-out p-[5px] md:p-[15px] lg:p-[15px] rounded-[5px] relative bg-[#e2fde2]">
                <div className="gi-cat-icon h-full p-[15px] flex flex-col items-center justify-center bg-[#fff] relative rounded-[5px] z-[5]">
                  <img src={Common_Images_Transport?.chat_numerology} className="w-90" alt="" />
                  <div className="gi-cat-detail text-center">
                    <Link to="/astrologer_list">
                      <h4 className="gi-cat-title m-[0] max-[575px]:text-[12px] text-[14px] md:text-[15px] leading-[22px] font-semibold text-[#4b5966] capitalize font-Poppins">
                        Chat with Numerology
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
              </Link>
              <Link to="/astrologer_list">
              <div className="gi-cat-box transition-all duration-[0.3s] ease-in-out p-[5px] md:p-[15px] lg:p-[15px] rounded-[5px] relative bg-[#ffeae9]">
                <div className="gi-cat-icon h-full p-[15px] flex flex-col items-center justify-center bg-[#fff] relative rounded-[5px] z-[5]">
                  <span className="gi-lbl px-[5px] absolute top-[0] right-[0] bg-[#9F2225] text-[#fff] text-[12px] font-semibold rounded-bl-[5px] rounded-tr-[5px]">15%</span>
                  <img src={Common_Images_Transport?.counsellor} className="w-90" alt="" />
                  <div className="gi-cat-detail text-center">
                    <Link to="/astrologer_list">
                      <h4 className="gi-cat-title m-[0] max-[575px]:text-[12px] text-[14px] md:text-[15px] leading-[22px] font-semibold text-[#4b5966] capitalize font-Poppins">
                        Talk with Counsellor
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
              </Link>
              <Link to="/festivals">
              <div className="gi-cat-box transition-all duration-[0.3s] ease-in-out p-[5px] md:p-[15px] lg:p-[15px] rounded-[5px] relative bg-[#ecf0ff]">
                <div className="gi-cat-icon h-full p-[15px] flex flex-col items-center justify-center bg-[#fff] relative rounded-[5px] z-[5]">
                  <img src={Common_Images_Transport?.festival_year} className="w-90" alt="" />
                  <div className="gi-cat-detail text-center">
                    <a href="#">
                      <h4 className="gi-cat-title m-[0] max-[575px]:text-[12px] text-[14px] md:text-[15px] leading-[22px] font-semibold text-[#4b5966] capitalize font-Poppins">
                        Festival this Year
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
              </Link>
              <Link to="/daily_panchang">
              <div className="gi-cat-box transition-all duration-[0.3s] ease-in-out p-[5px] md:p-[15px] lg:p-[15px] rounded-[5px] relative bg-[#f9f9d9]">
                <div className="gi-cat-icon h-full p-[15px] flex flex-col items-center justify-center bg-[#fff] relative rounded-[5px] z-[5]">
                  <img src={Common_Images_Transport?.punchang} alt="" />
                  <div className="gi-cat-detail text-center">
                    <Link to="/daily_panchang">
                      <h4 className="gi-cat-title m-[0] max-[575px]:text-[12px] text-[14px] md:text-[15px] leading-[22px] font-semibold text-[#4b5966] capitalize font-Poppins">
                        Panchang
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
              </Link>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
