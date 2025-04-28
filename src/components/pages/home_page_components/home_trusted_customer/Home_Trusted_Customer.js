import React from 'react'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'

const Home_Trusted_Customer = () => {
  return (
    <div>
         <section className="gi-deal-section py-[40px] max-[767px]:py-[30px] wow fadeInUp" data-wow-duration="2s">
        <div
            className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
                <div className="gi-deal-section w-full">
                    <div className="gi-products">
                        <div className="section-title mb-[20px] relative text-center pb-[20px] z-[5]" data-aos="fade-up"
                            data-aos-duration="2000" data-aos-delay="200">
                            <div className="section-detail">
                                <h2
                                    className="gi-title mb-[0] text-[25px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-Poppins max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
                                    Trusted by 1Lac+ Customers</h2>
                                <p className="mt-[10px] text-[14px] text-[#777] leading-[18px]">OVER 100,000+ SMILES AND
                                    COUNTING</p>
                            </div>

                        </div>
                        <div className="gi-deal-block mx-[-12px]" data-aos="fade-up" data-aos-duration="2000"
                            data-aos-delay="300">
                            <div className="trusted_user grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 px-[15px]">
                                <div className="trusted_user_list border border-[#eee] rounded-lg">
                                    <img src={Common_Images_Transport?.trusted_user_0} className="w-full" alt="" />
                                </div>
                                <div className="trusted_user_list border border-[#eee] rounded-lg">
                                    <img src={Common_Images_Transport?.trusted_user_0} className="w-full" alt="" />
                                </div>
                                <div className="trusted_user_list border border-[#eee] rounded-lg">
                                    <img src={Common_Images_Transport?.trusted_user_0} className="w-full" alt="" />
                                </div>

                                <div className="trusted_user_list border border-[#eee] rounded-lg">
                                    <img src={Common_Images_Transport?.trusted_user_0} className="w-full" alt="" />
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

export default Home_Trusted_Customer