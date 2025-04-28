import React, { useEffect } from 'react'
import Header from '../../../common/header/Header'
import Footer from '../../../common/footer/Footer'
import Kundli_Main_Banner from '../kundli_main_bannner/Kundli_Main_Banner'
import Kundli_Common_Section from '../kundli_common_section/Kundli_Common_Section'
import Kundli_Faq from '../kundli_faq/Kundli_Faq'
import Home_Private_Confidential from '../../home_page_components/home_private_confidential/Home_Private_Confidential'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'

const Kundli_Matching = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div>
            {/* <--------- Header section's -----------> */}
            <Header/>
            {/* <------------ Kundli_Main_Banner ---------> */}
            <Kundli_Main_Banner/>
            {/* <!--  Free Kundli section --> */}
            <section className="gi-category py-[40px] max-[767px]:py-[30px] bg-[#F0F4F8]">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full md:flex lg:flex bg-white p-5 gap-6">
                            <div className="kundliimg flex">
                                <img src={Common_Images_Transport?.ku_ma} className="max-w-[200px]" alt="" />
                            </div>
                            <div className="kundli_info">
                                <h4 className="text-[22px] mb-2 font-semibold text-[#3B4959]">Kundli Matching</h4>
                                <p className="text-gray-400">Looking for your free Kundli from expert astrologers? Then you have
                                    come to the right place. The online free kundali available on Astrotalk is a 100% free and
                                    authentic free Kundli that has been prepared after consulting more than 50 expert
                                    astrologers on board. The free kundli is such that it can give you a glimpse into various
                                    aspects of your life such as your career, love life, marriage, business and much more. The
                                    online kundli prepared by the free Kundali software here is no less than any traditional
                                    Kundli and can also be used for purposes like matching making, kundali matching for marriage
                                    or simply making future predictions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="kundli_form w-full mt-6">
                        <form accept="#" method="post">
                            <div className="flex flex-wrap w-full">
                                <div
                                    className="min-[992px]:w-[50%%] flex min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full max-[575px]:w-[50%] max-[575px]:mx-auto pr-6">
                                    <div className="bg-white w-full">
                                        <h4 className="mb-2 font-semibold text-[#3B4959] p-4 border-b flex items-center gap-4"><img src={Common_Images_Transport?.boys_icon} alt="" /> Enter Boy's Details</h4>
                                        <div className="py-5 pl-6 pr-6">
                                            <div className="input-grid flex space-x-2.5 mb-6">
                                                <div className="w-full">
                                                    <div className="input-com "><label
                                                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                                                        Name*</label>
                                                        <div
                                                            className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                            <input placeholder="Name"
                                                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                type="text" value="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="w-1/2 h-full">
                                                    <div className="input-com "><label
                                                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Gender</label>
                                                        <div
                                                            className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                            <select
                                                                className="input-field w-full placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]">
                                                                <option>Select</option>
                                                                <option>Male</option>
                                                                <option>Female</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>

                                            <div className="input-grid flex space-x-2.5 mb-6">
                                                <div className="w-1/2 h-full">
                                                    <div className="input-com "><label
                                                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Birth
                                                        Date and Time Details</label>
                                                        <div
                                                            className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                            <input placeholder="datetime-local"
                                                                className="input-field w-full placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                type="datetime-local" value="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 h-full">
                                                    <div className="input-com "><label
                                                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Birth
                                                        Place*</label>
                                                        <div
                                                            className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                            <input placeholder="Birth Place*"
                                                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                type="text" value="" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="min-[992px]:w-[50%] flex min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full max-[575px]:w-[50%] max-[575px]:mx-auto">
                                    <div className="bg-white w-full">
                                        <h4 className="mb-2 font-semibold text-[#3B4959] p-4 border-b flex items-center gap-4"><img src={Common_Images_Transport?.girl_icon} alt="" /> Enter Girl's Details</h4>
                                        <div className="py-5 pl-6 pr-6">
                                            <div className="input-grid flex space-x-2.5 mb-6">
                                                <div className=" w-full">
                                                    <div className="input-com "><label
                                                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                                                        Name*</label>
                                                        <div
                                                            className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                            <input placeholder="Name"
                                                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                type="text" value="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="w-1/2 h-full">
                                                    <div className="input-com "><label
                                                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Gender</label>
                                                        <div
                                                            className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                            <select
                                                                className="input-field w-full placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]">
                                                                <option>Select</option>
                                                                <option>Male</option>
                                                                <option>Female</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>

                                            <div className="input-grid flex space-x-2.5 mb-6">
                                                <div className="w-1/2 h-full">
                                                    <div className="input-com "><label
                                                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Birth
                                                        Date and Time Details</label>
                                                        <div
                                                            className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                            <input placeholder="datetime-local"
                                                                className="input-field w-full placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                type="datetime-local" value="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 h-full">
                                                    <div className="input-com "><label
                                                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Birth
                                                        Place*</label>
                                                        <div
                                                            className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                            <input placeholder="Birth Place*"
                                                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                type="text" value="" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="input-grid mt-5 w-full">

                                    <div className="w-full text-center">
                                        <div className="input-com "><button type="button"
                                            className="w-[300px] h-[45px] bg-[#9F2225] text-white text-sm">Match Kundli</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="flex flex-wrap w-full pt-8">
                        <div className="w-full">

                            <div className="kundli_info">
                                <h4 className="text-[22px] mb-2 font-semibold text-[#3B4959]">Finding The Right Partner Through Kundli Matching</h4>
                                <p className="text-gray-400 mb-3">This free Janam Kundali by date of birth and time is effective only when you have exact information. Usually, people make mistake by putting wrong birth time, which eventually gives them the incorrect Kundali with absolutely irrelevant predictions. Check your Kundli chart now and prepare yourself for the upcoming adventures.
                                </p>
                                <p className="text-gray-400 mb-3">Online Janam Kundli is easy to make. All you need is to put the
                                    right information and click on the submit button. Kundli prediction has its roots back from
                                    the Vedic times. We have made sure that our free Kundali chart does every justice to the
                                    Vedic tradition.</p>
                                <p className="text-gray-400 mb-3">AstroSage's free Kundli software provides more than 50 pages
                                    report, which covers almost all the aspects of your life. Kundli download is also not very
                                    difficult. Just find the download pdf button in your left options after making your detailed
                                    Kundali and click on it.</p>
                                <p className="text-gray-400 mb-3">If you manage to find a good website, checking Janam Kundli online
                                    is always a good idea. After all, astrology is like mathematics, and computer has lesser
                                    chances of making mathematical errors.</p>
                                <p className="text-gray-400 mb-3">If you manage to find a good website, checking Janam Kundli online
                                    is always a good idea. After all, astrology is like mathematics, and computer has lesser
                                    chances of making mathematical errors.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            {/* <----------- Kundli_Common_Section ------------> */}
            <Kundli_Common_Section/>
            {/* <------- Kundli FAQ'S section's ----------> */}
            <Kundli_Faq/>
            {/* <------- Private_Confidential section's ----------> */}
            <Home_Private_Confidential/>
            {/* <---------- Footer section's ------------> */}
            <Footer/>
        </div>
    )
}

export default Kundli_Matching