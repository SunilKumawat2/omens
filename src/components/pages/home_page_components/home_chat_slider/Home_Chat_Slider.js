import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Common_Images_Transport from "../../../common/common_imges_transport/Common_Images_Transport";
import { Link } from "react-router-dom";

const HeroSection = () => {
  // Slick Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280, // Large Screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // Laptops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile Phones
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="gi-category bg-gray-100 py-12 md:py-10 lg:py-12 overflow-hidden">
      <div className="container mx-auto max-w-screen-xl">
        <div className="w-full px-6 lg:px-8">
          <Slider {...settings} className="flex items-center gap-4 lg:gap-6 z-0">
            {/* Chat with Astro */}
            <div className="p-4 rounded-lg bg-[#fff6ec] shadow-lg">
              <Link to="/astrologer-list">
                <div className="p-6 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">
                  <img
                    src={Common_Images_Transport?.Chat_astro}
                    className="w-full max-w-[90px] object-contain"
                    alt="Chat with Astro"
                  />
                  <h4 className="mt-3 text-center text-sm md:text-base font-semibold text-gray-700">
                    Chat with Astro
                  </h4>
                </div>
              </Link>
            </div>

            {/* Chat with Numerology */}
            <div className="p-4 rounded-lg bg-[#e2fde2] shadow-lg">
              <Link to="/numerology">
                <div className="p-6 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">
                  <img
                    src={Common_Images_Transport?.chat_numerology}
                    className="w-full max-w-[90px] object-contain"
                    alt="Chat with Numerology"
                  />
                  <h4 className="mt-3 text-center text-sm md:text-base font-semibold text-gray-700">
                    Chat with Numerology
                  </h4>
                </div>
              </Link>
            </div>

            {/* Talk with Counsellor */}
            {/* <div className="p-4 rounded-lg bg-[#ffeae9] shadow-lg relative">
              <Link to="/astrologer-list">
                <div className="p-6 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">
                  <span className="absolute top-2 right-2 px-2 py-1 bg-[#9F2225] text-white text-xs font-semibold rounded-md">
                    15% Off
                  </span>
                  <img
                    src={Common_Images_Transport?.counsellor}
                    className="w-full max-w-[90px] object-contain"
                    alt="Talk with Counsellor"
                  />
                  <h4 className="mt-3 text-center text-sm md:text-base font-semibold text-gray-700">
                    Talk with Counsellor
                  </h4>
                </div>
              </Link>
            </div> */}
            <div className="p-4 rounded-lg bg-[#ffeae9] shadow-lg relative">
              <Link to="/numerology">
                <div className="relative">
                  {/* Move the span here */}
                  <span className="absolute top-1 right-2 px-2 py-1 bg-[#9F2225] text-white text-xs font-semibold rounded-md z-10">
                    15% Off
                  </span>

                  <div className="p-6 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">
                    <img
                      src={Common_Images_Transport?.chat_numerology}
                      className="w-full max-w-[90px] object-contain"
                      alt="Chat with Numerology"
                    />
                    <h4 className="mt-3 text-center text-sm md:text-base font-semibold text-gray-700">
                      Talk with Counsellor
                    </h4>
                  </div>
                </div>
              </Link>
            </div>


            {/* Festival this Year */}
            <div className="p-4 rounded-lg bg-[#ecf0ff] shadow-lg">
              <Link to="/festivals">
                <div className="p-6 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">
                  <img
                    src={Common_Images_Transport?.festival_year}
                    className="w-full max-w-[90px] object-contain"
                    alt="Festival this Year"
                  />
                  <h4 className="mt-3 text-center text-sm md:text-base font-semibold text-gray-700">
                    Festival this Year
                  </h4>
                </div>
              </Link>
            </div>

            {/* Panchang */}
            <div className="p-4 rounded-lg bg-[#f9f9d9] shadow-lg">
              <Link to="/daily-panchang">
                <div className="p-6 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">
                  <img
                    src={Common_Images_Transport?.punchang}
                    className="w-full max-w-[90px] object-contain"
                    alt="Panchang"
                  />
                  <h4 className="mt-3 text-center text-sm md:text-base font-semibold text-gray-700">
                    Panchang
                  </h4>
                </div>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
