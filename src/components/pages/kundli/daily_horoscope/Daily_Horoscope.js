import React, { useEffect } from 'react'
import Header from '../../../common/header/Header'
import Kundli_Main_Banner from '../kundli_main_bannner/Kundli_Main_Banner'
import Kundli_Common_Section from '../kundli_common_section/Kundli_Common_Section'
import Kundli_Faq from '../kundli_faq/Kundli_Faq'
import Home_Private_Confidential from '../../home_page_components/home_private_confidential/Home_Private_Confidential'
import Footer from '../../../common/footer/Footer'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import Similar_Daily_Horoscope from './Similar_Daily_Horoscope'

const Daily_Horoscope = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            {/* <----------- Header section's -----------> */}
            <Header />
            {/* <--------- Kundli Main Banner section's ----------> */}
            <Kundli_Main_Banner />
            <section className="gi-category py-[40px] max-[767px]:py-[30px] bg-[#F0F4F8]">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full min-[992px]:w-[50%] md:pr-8">
                            <div className="kundliimg">
                                <img src={Common_Images_Transport?.daily_horoscope2} className="w-full" alt="" />
                            </div>

                        </div>

                        <div className="w-full min-[992px]:w-[50%] my-auto">

                            <div className="kundli_info">
                                <h4 className="text-[22px] mb-2 font-semibold text-[#3B4959]">Daily Horoscope</h4>
                                <p className="text-gray-400 mb-4">Looking for today's horoscope? Or yesterday's? Well, on Astrotalk
                                    we
                                    have covered everything right from Daily horoscope to weekly to monthly horoscope. What is
                                    the use of one's Daily horoscope you may ask? Well, as per our astrologers, the daily
                                    horoscope is one of the ways that you can use to plan out your day. As per astrology, our
                                    day to day life is influenced by the movements of planets, as they constantly shift their
                                    positions from one sign to another. The movement can bring both positive and negative
                                    influences in one's life, and you knowing such things in advance helps you in safeguarding
                                    yourself from the uncertainties.</p>
                                <p className="text-gray-400">So reading Today's horoscope is like a healthy habit one can consider
                                    adopting as it shall help in changing the outcomes of your life. The daily horoscope on
                                    Astrotalk is prepared by expert astrologers and thus is very insightful. The daily horoscope
                                    not only tells you what's coming for you in the future but also allows you remedies that you
                                    can adopt to tackle anything negative. The Today's horoscope is </p>

                            </div>
                        </div>
                    </div>

                    {/* <---------- Similar Daily Horoscope section's ----------> */}
                    <Similar_Daily_Horoscope />

                </div>
            </section>

            {/* <-------- Kundli Common section's -------------> */}
            <Kundli_Common_Section />

            {/* <-------- Kundli faq section's -------------> */}
            <Kundli_Faq />

            {/* <--------- Home_Private_Confidential -------------> */}
            <Home_Private_Confidential />

            {/* <-------------- Footer section's ------------> */}
            <Footer />
        </div>
    )
}

export default Daily_Horoscope