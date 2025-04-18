import React, { useEffect } from 'react'
import Header from '../../common/header/Header'
import Home_Private_Confidential from '../home_page_components/home_private_confidential/Home_Private_Confidential'
import Footer from '../../common/footer/Footer'
import Common_Images_Transport from '../../common/common_imges_transport/Common_Images_Transport'

const Astrotalk_Reviews = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div>
            {/*  */}
            <Header />
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
                                            className="gi-title mb-[0] text-[25px] font-semibold text-[#4b5966] relative inline p-[0]  leading-[1] font-Poppins max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
                                            Astrotalk Reviews</h2>
                                        <p className="mt-[10px] text-[14px] text-[#777] leading-[18px]">Here about us from our customers</p>
                                    </div>

                                </div>
                                <div className="flex flex-wrap w-full">
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        <div className="gi-t-review-item p-[25px] shadow-lg">
                                            <div className="gi-t-review-avtar basis-[50px] grow-[0] shrink-[0] mr-[15px]">
                                                <img src={Common_Images_Transport?.user1} alt="user" className="max-w-full rounded-[5px]" />
                                            </div>
                                            <div className="gi-t-review-content">
                                                <div className="gi-t-review-top flex flex-col mb-[10px]">
                                                    <div className="gi-t-review-name text-[18px] font-bold mt-[10px] leading-[1.5] block text-[#4b5966]">Mariya Lykra</div>

                                                </div>
                                                <div className="gi-t-review-bottom">
                                                    <p className="w-full text-[14px] text-[#777] font-normal">Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s, when an unknown
                                                        printer took a galley of type and scrambled it to make a
                                                        type specimen.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gi-t-review-item p-[25px] shadow-lg">
                                            <div className="gi-t-review-avtar basis-[50px] grow-[0] shrink-[0] mr-[15px]">
                                                <img src={Common_Images_Transport?.user1} alt="user" className="max-w-full rounded-[5px]" />
                                            </div>
                                            <div className="gi-t-review-content">
                                                <div className="gi-t-review-top flex flex-col mb-[10px]">
                                                    <div className="gi-t-review-name text-[18px] font-bold mt-[10px] leading-[1.5] block text-[#4b5966]">Mariya Lykra</div>

                                                </div>
                                                <div className="gi-t-review-bottom">
                                                    <p className="w-full text-[14px] text-[#777] font-normal">Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s, when an unknown
                                                        printer took a galley of type and scrambled it to make a
                                                        type specimen.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gi-t-review-item p-[25px] shadow-lg">
                                            <div className="gi-t-review-avtar basis-[50px] grow-[0] shrink-[0] mr-[15px]">
                                                <img src={Common_Images_Transport?.user1} alt="user" className="max-w-full rounded-[5px]" />
                                            </div>
                                            <div className="gi-t-review-content">
                                                <div className="gi-t-review-top flex flex-col mb-[10px]">
                                                    <div className="gi-t-review-name text-[18px] font-bold mt-[10px] leading-[1.5] block text-[#4b5966]">Mariya Lykra</div>

                                                </div>
                                                <div className="gi-t-review-bottom">
                                                    <p className="w-full text-[14px] text-[#777] font-normal">Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s, when an unknown
                                                        printer took a galley of type and scrambled it to make a
                                                        type specimen.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gi-t-review-item p-[25px] shadow-lg">
                                            <div className="gi-t-review-avtar basis-[50px] grow-[0] shrink-[0] mr-[15px]">
                                                <img src={Common_Images_Transport?.user1} alt="user" className="max-w-full rounded-[5px]" />
                                            </div>
                                            <div className="gi-t-review-content">
                                                <div className="gi-t-review-top flex flex-col mb-[10px]">
                                                    <div className="gi-t-review-name text-[18px] font-bold mt-[10px] leading-[1.5] block text-[#4b5966]">Mariya Lykra</div>

                                                </div>
                                                <div className="gi-t-review-bottom">
                                                    <p className="w-full text-[14px] text-[#777] font-normal">Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s, when an unknown
                                                        printer took a galley of type and scrambled it to make a
                                                        type specimen.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gi-t-review-item p-[25px] shadow-lg">
                                            <div className="gi-t-review-avtar basis-[50px] grow-[0] shrink-[0] mr-[15px]">
                                                <img src={Common_Images_Transport?.user1} alt="user" className="max-w-full rounded-[5px]" />
                                            </div>
                                            <div className="gi-t-review-content">
                                                <div className="gi-t-review-top flex flex-col mb-[10px]">
                                                    <div className="gi-t-review-name text-[18px] font-bold mt-[10px] leading-[1.5] block text-[#4b5966]">Mariya Lykra</div>

                                                </div>
                                                <div className="gi-t-review-bottom">
                                                    <p className="w-full text-[14px] text-[#777] font-normal">Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s, when an unknown
                                                        printer took a galley of type and scrambled it to make a
                                                        type specimen.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gi-t-review-item p-[25px] shadow-lg">
                                            <div className="gi-t-review-avtar basis-[50px] grow-[0] shrink-[0] mr-[15px]">
                                                <img src={Common_Images_Transport?.user1} alt="user" className="max-w-full rounded-[5px]" />
                                            </div>
                                            <div className="gi-t-review-content">
                                                <div className="gi-t-review-top flex flex-col mb-[10px]">
                                                    <div className="gi-t-review-name text-[18px] font-bold mt-[10px] leading-[1.5] block text-[#4b5966]">Mariya Lykra</div>

                                                </div>
                                                <div className="gi-t-review-bottom">
                                                    <p className="w-full text-[14px] text-[#777] font-normal">Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s, when an unknown
                                                        printer took a galley of type and scrambled it to make a
                                                        type specimen.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  */}
            <Home_Private_Confidential />
            {/*  */}
            <Footer />
        </div>
    )
}

export default Astrotalk_Reviews