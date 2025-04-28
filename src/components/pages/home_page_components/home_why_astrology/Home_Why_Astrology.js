import React, { useEffect, useState } from 'react'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import { Get_About_us } from '../../../../api/global/Global';
import { Link, useNavigate } from 'react-router-dom';

const Home_Why_Astrology = () => {
    const navigate = useNavigate();
    const [about_us_details, set_About_Us_Details] = useState({});

    useEffect(() => {
        const Handle_Get_About_Us = async () => {
            try {
                const response = await Get_About_us();
                set_About_Us_Details(response?.data?.data?.about_us)
            }
            catch (error) {

            }
        }
        Handle_Get_About_Us();
    }, [])
    return (
        <div>
            <section className="gi-deal-section py-[40px] max-[767px]:py-[30px] bg-no-repeat bg-cover wow fadeInUp"
                data-wow-duration="2s">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
                        <div className="gi-deal-section w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="section-title my-auto pb-[20px] pr-[50px] z-[5] order-2 md:order-1 lg:order-1"
                                    data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
                                    <div className="section-detail">

                                        <h1
                                            className="gi-title  text-[40px] font-semibold text-[#4C5159] capitalize leading-[1] font-Poppins max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
                                            {about_us_details?.title}</h1>


                                        <p className="mt-[30px] text-[14px] text-[#4C5159] leading-[22px]" dangerouslySetInnerHTML={{ __html:about_us_details?.description}}/>
                                        <button type='button' onClick={()=>navigate("/about-us")}
                                            className="mt-[10px] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-[#9F2225] dark:hover:bg-red-700 dark:focus:ring-red-900">View
                                            More</button>
                                    </div>

                                </div>

                                <div className="w-full order-1 md:order-2 lg:order-2 mb-5 md:mb-0">
                                    <img src={Common_Images_Transport?.about} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home_Why_Astrology