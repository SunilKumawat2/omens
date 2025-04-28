import React from 'react'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import { Link } from 'react-router-dom'

const Category_Main_Banner = (category_list_result) => {
    const category_title = category_list_result?.data?.title
    console.log("category_title_main",category_title)
    return (
        <div className="gi-breadcrumb mb-[40px] bg-center bg-no-repeat bg-cover"
        style={{
            backgroundImage: `url(${Common_Images_Transport?.product_bg})`, // Add your image URL here
        }}>
            <div
                className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
                <div className="flex flex-wrap w-full">
                    <div className="w-full px-[12px]">
                        <div className="flex flex-wrap m-0 py-[35px]">
                            <div className="min-[768px]:w-[50%] w-full">
                                <h2
                                    className="gi-breadcrumb-title text-white block text-3xl leading-[22px] font-semibold my-[0] mx-auto capitalize max-[767px]:mb-[5px] max-[767px]:text-center">
                                    {category_title}</h2>
                                <ul className="gi-breadcrumb-list mt-5">
                                    <li
                                        className="gi-breadcrumb-item inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize">
                                        <Link to="/" className="relative text-white"><i
                                            className="fi-rr-home text-[#fff]"></i> Home</Link>
                                    </li>
                                    <li
                                        className="gi-breadcrumb-item inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize">
                                        <span className="relative text-white">/ {category_title}</span>
                                    </li>
                                    <li
                                        className="gi-breadcrumb-item text-white inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize active">
                                        / {category_title}</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Category_Main_Banner