import React from 'react'
import Header from '../../../common/header/Header'
import Kundli_Main_Banner from '../kundli_main_bannner/Kundli_Main_Banner'
import Kundli_Common_Section from '../kundli_common_section/Kundli_Common_Section'
import Kundli_Faq from '../kundli_faq/Kundli_Faq'
import Home_Private_Confidential from '../../home_page_components/home_private_confidential/Home_Private_Confidential'
import Footer from '../../../common/footer/Footer'
import Similar_Daily_Horoscope_Details from './Similar_Daily_Horoscope_Details'

const Daily_Horoscope_Details = () => {
    return (
        <div>
            {/* <---------- header section's --------------> */}
            <Header />
            {/*<---------- Kundli Main Banner ---------------->  */}
            <Kundli_Main_Banner />
            <section className="gi-category py-[40px] max-[767px]:py-[30px] bg-[#F0F4F8]">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">


                    <div className="kundli_form w-full mt-6">
                        <div className="flex flex-wrap w-full">
                            <div
                                className="min-[992px]:w-[66.33%] flex min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full max-[575px]:w-[50%] max-[575px]:mx-auto pr-6">
                                <div className="bg-white p-6">
                                    <div className="w-full">
                                        <h4 className="text-2xl mb-2 font-semibold text-[#3B4959]">Create Online Janam Kundli</h4>
                                        <p className="text-gray-400 mb-3">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                            since
                                            the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                            type
                                            specimen book. It has survived not only five centuries, but also the leap into
                                            electronic typesetting, remaining essentially unchanged. It was popularised in the
                                            1960s
                                            with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                            recently
                                            with desktop publishing software like Aldus PageMaker including versions of Lorem
                                            Ipsum.</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="bg-white border border-gray-200 rounded p-5">
                                            <h4 className="text-lg mb-2 font-semibold text-[#3B4959]">Health and well being</h4>
                                            <p className="text-gray-400 mb-3 line-clamp-6">Lorem Ipsum is simply dummy text of the
                                                printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, when an unknown printer took a galley of type
                                                and scrambled it to make a type specimen book. It has survived not only five
                                                centuries, but also the leap into electronic typesetting, remaining essentially
                                                unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                                containing Lorem Ipsum passages, and more recently with desktop publishing
                                                software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <a href="#" className="font-semibold text-gray-500 ">Read More..</a>
                                        </div>
                                        <div className="bg-white border border-gray-200 rounded p-5">
                                            <h4 className="text-lg mb-2 font-semibold text-[#3B4959]">Love and Relationship</h4>
                                            <p className="text-gray-400 mb-3 line-clamp-6">Lorem Ipsum is simply dummy text of the
                                                printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, when an unknown printer took a galley of type
                                                and scrambled it to make a type specimen book. It has survived not only five
                                                centuries, but also the leap into electronic typesetting, remaining essentially
                                                unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                                containing Lorem Ipsum passages, and more recently with desktop publishing
                                                software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <a href="#" className="font-semibold text-gray-500 ">Read More..</a>
                                        </div>
                                        <div className="bg-white border border-gray-200 rounded p-5">
                                            <h4 className="text-lg mb-2 font-semibold text-[#3B4959]">Profession</h4>
                                            <p className="text-gray-400 mb-3 line-clamp-6">Lorem Ipsum is simply dummy text of the
                                                printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, when an unknown printer took a galley of type
                                                and scrambled it to make a type specimen book. It has survived not only five
                                                centuries, but also the leap into electronic typesetting, remaining essentially
                                                unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                                containing Lorem Ipsum passages, and more recently with desktop publishing
                                                software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <a href="#" className="font-semibold text-gray-500 ">Read More..</a>
                                        </div>
                                        <div className="bg-white border border-gray-200 rounded p-5">
                                            <h4 className="text-lg mb-2 font-semibold text-[#3B4959]">Travel</h4>
                                            <p className="text-gray-400 mb-3 line-clamp-6">Lorem Ipsum is simply dummy text of the
                                                printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, when an unknown printer took a galley of type
                                                and scrambled it to make a type specimen book. It has survived not only five
                                                centuries, but also the leap into electronic typesetting, remaining essentially
                                                unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                                containing Lorem Ipsum passages, and more recently with desktop publishing
                                                software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <a href="#" className="font-semibold text-gray-500 ">Read More..</a>
                                        </div>
                                        <div className="bg-white border border-gray-200 rounded p-5">
                                            <h4 className="text-lg mb-2 font-semibold text-[#3B4959]">Emotions</h4>
                                            <p className="text-gray-400 mb-3 line-clamp-6">Lorem Ipsum is simply dummy text of the
                                                printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, when an unknown printer took a galley of type
                                                and scrambled it to make a type specimen book. It has survived not only five
                                                centuries, but also the leap into electronic typesetting, remaining essentially
                                                unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                                containing Lorem Ipsum passages, and more recently with desktop publishing
                                                software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <a href="#" className="font-semibold text-gray-500 ">Read More..</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <------------ Similar Daily Horoscope Details section's ------------> */}
                            <Similar_Daily_Horoscope_Details/>
                        </div>
                    </div>


                </div>
            </section>
            {/* <------ Kundli Common Section --------------->*/}
            <Kundli_Common_Section />

            {/* <----------- Kundli Faq section's ----------->*/}
            <Kundli_Faq />

            {/* <---------------- Private Confidential ----------> */}
            <Home_Private_Confidential />

            {/* <------------ Footer section's ----------------> */}
            <Footer />
        </div>
    )
}

export default Daily_Horoscope_Details