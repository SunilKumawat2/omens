import React from 'react'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'

const Home_Private_Confidential = () => {
  return (
    <section
    className="gi-service-section text-[#fff] bg-gradient-to-r from-[#9F2225] to-[#FFB500] py-[40px] max-[767px]:py-[30px]">
    <div
        className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="w-full flex flex-wrap mt-[-12px] mb-[-12px]">

            <div className="min-[992px]:w-[33.33%] min-[576px]:w-[33.33%] w-full wow fadeInUp" data-wow-delay=".4s">
                <div
                    className="gi-ser-inner transition-all duration-[0.3s] ease delay-[0s] h-full flex gap-5 items-center justify-center text-center">
                    <div className="gi-service-image">
                        <img src={Common_Images_Transport?.private_confidential} alt="" />
                    </div>
                    <div className="gi-service-desc">
                        <h3 className="font-Poppins text-[18px] font-medium max-[575px]:text-[16px]">
                            Private & Confidential</h3>

                    </div>
                </div>
            </div>
            <div className="min-[992px]:w-[33.33%] min-[576px]:w-[33.33%] w-full wow fadeInUp border-l-2 border-r-2"
                data-wow-delay=".4s">
                <div
                    className="gi-ser-inner transition-all duration-[0.3s] ease delay-[0s] h-full flex gap-5 items-center justify-center text-center">
                    <div className="gi-service-image">
                        <img src={Common_Images_Transport?.verified_astrologers} alt="" />
                    </div>
                    <div className="gi-service-desc">
                        <h3 className="font-Poppins text-[18px] font-medium max-[575px]:text-[16px]">
                            Verified Astrologers</h3>

                    </div>
                </div>
            </div>
            <div className="min-[992px]:w-[33.33%] min-[576px]:w-[33.33%] w-full wow fadeInUp" data-wow-delay=".4s">
                <div
                    className="gi-ser-inner transition-all duration-[0.3s] ease delay-[0s] h-full flex gap-5 items-center justify-center text-center">
                    <div className="gi-service-image">
                        <img src={Common_Images_Transport?.secure_payments} alt="" />
                    </div>
                    <div className="gi-service-desc">
                        <h3 className="font-Poppins text-[18px] font-medium max-[575px]:text-[16px]">
                            Secure Payments</h3>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Home_Private_Confidential