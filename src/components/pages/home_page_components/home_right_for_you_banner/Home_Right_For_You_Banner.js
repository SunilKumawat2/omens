import React from 'react'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'

const Home_Right_For_You_Banner = () => {
  return (
    <div>
         <section className="gi-deal-section py-[40px] max-[767px]:py-[30px] bg-no-repeat bg-cover wow fadeInUp"
        data-wow-duration="2s"  style={{
            backgroundImage: `url(${Common_Images_Transport?.expert_bg})`, // Add your image URL here
        }}>
        <div
            className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
                <div className="gi-deal-section w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="section-title my-auto pb-[20px] z-[5]" data-aos="fade-up" data-aos-duration="2000"
                            data-aos-delay="200">
                            <div className="section-detail">
                                <p className="mt-[10px] text-[16px] text-[#fff] leading-[18px]">Not Sure Which Gem Is</p>
                                <h1
                                    className="gi-title  text-[40px] font-semibold text-[#fff] my-8 capitalize leading-[1] font-Poppins max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
                                    Right For You?</h1>
                                <p className="mt-[10px] text-[20px] text-[#fff] leading-[18px]">Connect with our Expert and
                                    find the best stone for you.</p>
                            </div>

                        </div>

                        <div className="w-full">
                            <img src={Common_Images_Transport?.user7} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home_Right_For_You_Banner