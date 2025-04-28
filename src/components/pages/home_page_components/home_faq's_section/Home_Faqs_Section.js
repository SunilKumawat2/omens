import React, { useEffect, useState } from 'react'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import { Get_Faqs } from '../../../../api/global/Global';

const Home_Faqs_Section = () => {
    // State to track the active accordion
    const [activeIndex, setActiveIndex] = useState(0);
    const [is_loading, set_Is_Loading] = useState(false);
    const [get_faqs_list, set_Get_Faqs_List] = useState([])

    const Hnadle_Get_Faqs = async () => {
        set_Is_Loading(true)
        try {
            const response = await Get_Faqs();
            set_Get_Faqs_List(response?.data?.data?.faq);
            if (response?.data?.status == "200") {
                set_Is_Loading(false)
            }
            else if (response?.response?.data?.status == "500") {
                set_Is_Loading(false)
            }
        }
        catch(error) {
            console.log("error", error)
            set_Is_Loading(false)
        }
    }

    // Function to handle accordion toggle
    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    useEffect(() => {
        Hnadle_Get_Faqs();
    }, [])

    // Data for accordion items
    const accordionData = [
        { title: 'What Is The Duration For Online Astrology Consultation?', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { title: 'Can Astrology Predictions Be Changed?', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.' },
    ];
    return (
        <div>
            <section className="gi-faq py-[40px] max-[767px]:py-[30px]">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div
                        className="section-title-2 w-full mb-[20px] pb-[20px] flex flex-col justify-center text-center px-[12px] items-center">
                        <h2
                            className="gi-title mb-[0] font-Poppins text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">
                            FAQ'S About Astrology</h2>
                        <p className="max-w-[400px] mt-[15px] text-[14px] text-[#777] text-center leading-[23px]">Why Is Astrology
                            So Accurate?</p>
                    </div>

                    <div className="w-full flex flex-wrap">
                        <div className="min-[992px]:w-[50%] w-full px-[12px]">
                            <div className="gi-accordion style-1">
                                <div className="w-full md:pr-8">
                                    <img src={Common_Images_Transport?.faq} className="w-full rounded-lg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="min-[992px]:w-[50%] w-full px-[12px] max-[991px]:mt-[30px]">
                            <div className="gi-accordion style-1">
                                {get_faqs_list?.map((item, index) => (
                                    <div key={index} className="border border-[#eee] rounded overflow-hidden mb-4"> {/* Added mb-4 for margin-bottom */}
                                        <h4
                                            className="gi-accordion-header py-4 px-6 bg-[#F6F6F6] text-[#4b5966] text-[16px] cursor-pointer font-medium tracking-[0.01rem] flex justify-between items-center"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            {item?.title}
                                            <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                                ▼
                                            </span>
                                        </h4>
                                        <div className={`gi-accordion-body px-6 pb-4 text-[#7B8794] text-[14px] leading-[24px] bg-[#F6F6F6] transition-all duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}>
                                            {item?.description}
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home_Faqs_Section