import React, { useEffect, useState } from 'react'
import Header from '../../common/header/Header'
import Home_Astro_Chat_Call from '../home_page_components/home_astro_chat_call/Home_Astro_Chat_Call'
import Home_Private_Confidential from '../home_page_components/home_private_confidential/Home_Private_Confidential'
import Footer from '../../common/footer/Footer'
import { Get_About_us, Get_Home_Page } from '../../../api/global/Global'
import Loader from '../../../loader/Loader'
import Common_Images_Transport from '../../common/common_imges_transport/Common_Images_Transport'

const About_Us = () => {
    const [is_loading, set_Is_Loading] = useState(false)
    const [home_data, set_Home_Data] = useState([]);
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

    useEffect(() => {
        const Handle_Get_Home_Data = async () => {
            set_Is_Loading(true)
            try {
                const response = await Get_Home_Page()
                set_Home_Data(response?.data?.data)
                set_Is_Loading(false)
            } catch (error) {
                set_Is_Loading(false)
                console.log("error", error)
            }
        }
        Handle_Get_Home_Data()
    }, [])
    console.log("home_data", home_data)
    return (
        <div>
            {/*  */}
            <Header />
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <>
                        <section className="gi-about py-[40px] max-[767px]:py-[30px]">
                            <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
                                <div className="flex flex-wrap">
                                    <div className="min-[1200px]:w-[50%] min-[768px]:w-full px-[12px]">
                                        <div className="gi-about-img">
                                            <img src={Common_Images_Transport?.about} className="v-img w-full rounded-[5px]" alt="about" />

                                        </div>
                                    </div>
                                    <div className="min-[1200px]:w-[50%] min-[768px]:w-full px-[12px]">
                                        <div className="gi-about-detail h-full flex flex-col justify-center max-[1199px]:mt-[30px]">
                                            <div className="section-title pt-[0] flex flex-col mb-[20px]">
                                                <h2 className="mb-[15px] font-manrope text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">{about_us_details?.title}</h2>

                                            </div>
                                            <p className="text-[#777] text-[14px] font-normal mb-[16px]" dangerouslySetInnerHTML={{ __html: about_us_details?.description }}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*  */}
                        <Home_Astro_Chat_Call data={home_data} />
                        {/*  */}
                        <Home_Private_Confidential />
                        {/*  */}
                        <Footer />
                    </>
                )
            }

        </div>
    )
}

export default About_Us