import React, { useEffect, useState } from 'react'
import Loader from '../../../loader/Loader';
import { Get_Privacy_Policy } from '../../../api/global/Global';

const App_Privacy_Policy = () => {
    const [is_loading, set_Is_Loading] = useState(false)
    const [privacy_policy_data, set_Privacy_Policy_Data] = useState([]);

    // <----------- ftech the Privacy policy ------------>
    useEffect(() => {
        const Handle_Get_Privacy_Policy = async () => {
            set_Is_Loading(true)
            try {
                const response = await Get_Privacy_Policy()
                set_Privacy_Policy_Data(response?.data?.data?.policy)
                set_Is_Loading(false)
            } catch (error) {
                console.log("error", error)
                set_Is_Loading(false)
            }
        }
        Handle_Get_Privacy_Policy();
    }, [])

    // Scroll to the top of the page when the component is rendered
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <section className="gi-terms-conditions py-[40px] max-[767px]:py-[30px]">
                        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                            <div className="section-title-2 w-full mb-[20px] pb-[20px] flex flex-col justify-center items-center">
                                <h2 className="gi-title mb-[0] font-manrope text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">{privacy_policy_data?.title}</h2>
                            </div>
                            <div className="w-full flex flex-wrap">
                                <div className="min-[992px]:w-[100%] w-full px-[12px]">
                                    <div className="gi-common-wrapper p-[30px] border-[1px] border-solid border-[#eee] max-w-[1140px] my-[0] mx-auto bg-[#fff] rounded-[5px]">
                                        <div className="gi-cgi-block w-full">
                                            <div className="gi-cgi-block-inner">
                                                <p className="mb-[30px] text-[#777] text-[14px] font-normal leading-[28px] tracking-[0.02rem]"><div dangerouslySetInnerHTML={{ __html: privacy_policy_data?.description }} /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default App_Privacy_Policy