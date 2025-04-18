import React from 'react'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'

const Home_Shop_By_Collection = () => {
  return (
    <div>
        <section className="gi-deal-section py-[40px] max-[767px]:py-[30px] wow fadeInUp" data-wow-duration="2s">
        <div className="flex flex-wrap justify-between items-center mx-auto">
            <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
                <div className="gi-deal-section w-full">
                    <div className="gi-products">
                        <div className="section-title mb-[20px] relative text-center pb-[20px] z-[5]" data-aos="fade-up"
                            data-aos-duration="2000" data-aos-delay="200">
                            <div className="section-detail">
                                <h2
                                    className="gi-title mb-[0] text-[25px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-Poppins max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
                                    Shop By Collection</h2>
                                <p className="mt-[10px] text-[14px] text-[#777] leading-[18px]">A Range of Exquisite
                                    Products</p>
                            </div>

                        </div>
                        <div className="gi-deal-block mx-[-12px]" data-aos="fade-up" data-aos-duration="2000"
                            data-aos-delay="300">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                <div className="gi-products bg-no-repeat text-center bg-cover h-[400px] md:h-[600px] overflow-hidden relative"
                                     style={{
                                        backgroundImage: `url(${Common_Images_Transport?.collection1})`, // Add your image URL here
                                    }}>
                                    <div className=" p-5 flags h-full">
                                        <a href="#" className="absolute bottom-5 left-0 w-full px-5">
                                            <div className="bg-[#00000038] backdrop-blur-xl p-5 text-white rounded">
                                                <h4 className="inset-center mb-[15px] text-lg md:text-2xl text-white">
                                                    Earrings</h4>
                                                <span className="underline ">Shop Now</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="gi-products bg-no-repeat text-center bg-cover h-[400px] md:h-[600px] overflow-hidden relative"
                                       style={{
                                        backgroundImage: `url(${Common_Images_Transport?.collection1})`, // Add your image URL here
                                    }}>
                                    <div className=" p-5 flags h-full">
                                        <a href="#" className="absolute bottom-5 left-0 w-full px-5">
                                            <div className="bg-[#00000038] backdrop-blur-xl p-5 text-white rounded">
                                                <h4 className="inset-center mb-[15px] text-lg md:text-2xl text-white">
                                                    Engagement Rings
                                                </h4>
                                                <span className="underline ">Shop Now</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="gi-products bg-no-repeat text-center bg-cover h-[400px] md:h-[600px] overflow-hidden relative"
                                     style={{
                                        backgroundImage: `url(${Common_Images_Transport?.collection1})`, // Add your image URL here
                                    }}>
                                    <div className=" p-5 flags h-full">
                                        <a href="#" className="absolute bottom-5 left-0 w-full px-5">
                                            <div className="bg-[#00000038] backdrop-blur-xl p-5 text-white rounded">
                                                <h4 className="inset-center mb-[15px] text-lg md:text-2xl text-white">
                                                    Gemstone Brooches
                                                </h4>
                                                <span className="underline ">Shop Now</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
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

export default Home_Shop_By_Collection