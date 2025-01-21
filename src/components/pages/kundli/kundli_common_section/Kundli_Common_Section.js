import React from 'react'
import { Link } from 'react-router-dom'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'

const Kundli_Common_Section = () => {
  return (
    <div>
        <section
                className="gi-service-section text-[#fff] bg-gradient-to-r from-[#9F2225] to-[#FFB500] py-[40px] max-[767px]:py-[30px]">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="w-full flex flex-wrap mt-[-12px] mb-[-12px]">

                        <div className="min-[992px]:w-[20%] min-[576px]:w-[50%] w-full wow fadeInUp" data-wow-delay=".4s">
                            <div
                                className="gi-ser-inner transition-all duration-[0.3s] ease delay-[0s] text-center">
                                <Link to="/free_kundli">
                                    <div className="gi-service-image mb-3">
                                        <img src={Common_Images_Transport?.free_kundli2} className="m-auto w-32 rounded-full border border-white border-2" alt="" />
                                    </div>
                                    <div className="gi-service-desc">
                                        <h3 className="font-Poppins text-[18px] font-medium max-[575px]:text-[16px]">
                                            Free Kundali</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="min-[992px]:w-[20%] min-[576px]:w-[50%] w-full wow fadeInUp" data-wow-delay=".4s">
                            <div
                                className="gi-ser-inner transition-all duration-[0.3s] ease delay-[0s] text-center">
                                <Link to="/kundli_matching">
                                    <div className="gi-service-image mb-3">
                                        <img src={Common_Images_Transport?.ku_ma} className="m-auto w-32 rounded-full border border-white border-2" alt="" />
                                    </div>
                                    <div className="gi-service-desc">
                                        <h3 className="font-Poppins text-[18px] font-medium max-[575px]:text-[16px]">
                                            Kundli Matching</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="min-[992px]:w-[20%] min-[576px]:w-[50%] w-full wow fadeInUp" data-wow-delay=".4s">
                            <div
                                className="gi-ser-inner transition-all duration-[0.3s] ease delay-[0s] text-center">
                                <Link to="/daily_panchang">
                                    <div className="gi-service-image mb-3">
                                        <img src={Common_Images_Transport?.panchange} className="m-auto w-32 rounded-full border border-white border-2" alt="" />
                                    </div>
                                    <div className="gi-service-desc">
                                        <h3 className="font-Poppins text-[18px] font-medium max-[575px]:text-[16px]">
                                            Panchange</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="min-[992px]:w-[20%] min-[576px]:w-[50%] w-full wow fadeInUp" data-wow-delay=".4s">
                            <div
                                className="gi-ser-inner transition-all duration-[0.3s] ease delay-[0s] text-center">
                                <Link to="/daily_horoscope">
                                    <div className="gi-service-image mb-3">
                                        <img src={Common_Images_Transport?.daily_horoscope} className="m-auto w-32 rounded-full border border-white border-2" alt="" />
                                    </div>
                                    <div className="gi-service-desc">
                                        <h3 className="font-Poppins text-[18px] font-medium max-[575px]:text-[16px]">
                                            Daily Horoscope</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="min-[992px]:w-[20%] min-[576px]:w-[50%] w-full wow fadeInUp" data-wow-delay=".4s">
                            <div
                                className="gi-ser-inner transition-all duration-[0.3s] ease delay-[0s] text-center">
                                <Link to="/love_calculator">
                                    <div className="gi-service-image mb-3">
                                        <img src={Common_Images_Transport?.love_calculater} className="m-auto w-32 rounded-full border border-white border-2" alt="" />
                                    </div>
                                    <div className="gi-service-desc">
                                        <h3 className="font-Poppins text-[18px] font-medium max-[575px]:text-[16px]">
                                            Love Calculater</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    </div>
  )
}

export default Kundli_Common_Section