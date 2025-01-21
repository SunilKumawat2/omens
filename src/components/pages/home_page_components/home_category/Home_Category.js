import React from 'react'
import { IMG_BASE_URL } from '../../../../config/Config'
import { Link, useNavigate } from 'react-router-dom'

const Home_Category = (home_data) => {
    const navigate = useNavigate()
    const category_list = home_data?.data?.category
    console.log("Home_Category", home_data?.data?.category)

    // const Navigate_Sub_Category_List = () => {
    //     navigate("/sub_category_list", {
    //         state: {

    //         }
    //     })
    // }
    return (
        <section className="bg-[#F6F6F6] gi-deal-section py-[20px] max-[767px]:py-[20px] wow fadeInUp" data-wow-duration="2s">
            <div
                className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
                    <div className="gi-deal-section w-full">
                        <div className="gi-products">
                            <div className="gi-tab-title w-full inline-flex justify-between max-[991px]:flex-col items-center"
                                data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
                                <div className="section-detail">
                                    <h2
                                        className="gi-title mb-[0] text-[20px] font-semibold text-[#4B5966] relative inline p-[0] capitalize leading-[1] font-Poppins max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
                                        Gemstone and Jewellery Category</h2>
                                </div>
                                <div className="flex items-center gap-5">
                                    {
                                        category_list?.map((category_list_result) => {
                                            return (
                                                <>
                                                    <p 
                                                     onClick={() => navigate("/sub_category_list", { state: { category_list_result: category_list_result } })}
                                                        className="btn bg-white p-2 px-3 flex gap-3 border hover:bg-black rounded-lg hover:text-white items-center cursor-pointer">
                                                        <img src={`${IMG_BASE_URL}${category_list_result?.image}`} width="40" height="40" alt="" />{category_list_result?.title}</p>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home_Category