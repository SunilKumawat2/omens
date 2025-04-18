import React, { useEffect, useState } from 'react'
import { Get_Faqs } from '../../../../api/global/Global';

const Kundli_Faq = () => {
    // State to track the active accordion
    const [is_loading,set_Is_Loading] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0);
    const [get_faqs_list, set_Get_Faqs_List] = useState([])

    useEffect(() => {
        Handle_Get_Faqs();
    }, [])

    const Handle_Get_Faqs = async () => {
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
        catch (error) {
            console.log("error", error)
            set_Is_Loading(false)
        }
    }

    // Function to handle accordion toggle
    const toggleAccordition = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div>
            {/* <!-- Faq section --> */}
            <section className="gi-faq py-[40px] max-[767px]:py-[30px]">
                <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="section-title-2 w-full mb-[20px] pb-[20px] flex flex-col justify-center text-center px-[12px] items-center">
                        <h2 className="gi-title mb-[0] font-manrope text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="w-full flex flex-wrap">
                        <div className="min-[992px]:w-[80%] m-auto w-full px-[12px] max-[991px]:mt-[30px]">
                            <div className="gi-accordion style-1">
                                {get_faqs_list?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="gi-accordion-item border-[#eee] overflow-hidden mb-[10px]"
                                    >
                                        <h4
                                            onClick={() => toggleAccordition(index)}
                                            className={`gi-accordion-header m-[0] py-[15px] pl-[20px] pr-[35px] bg-[#F0F4F8] text-[#4b5966] text-[16px] leading-[28px] cursor-pointer font-medium relative tracking-[0.01rem] max-[767px]:text-[15px] ${activeIndex === index ? "bg-[#dbe7f0]" : ""
                                                }`}
                                        >
                                            {item?.title}
                                        </h4>
                                        <div
                                            className={`gi-accordion-body px-[20px] pb-[20px] text-[14px] text-[#7B8794] leading-[24px] bg-[#F0F4F8] ${activeIndex === index ? "block" : "hidden"
                                                }`}
                                        >
                                            {item?.description}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Faq section End --> */}
        </div>
    )
}

export default Kundli_Faq