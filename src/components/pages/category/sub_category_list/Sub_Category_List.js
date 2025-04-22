import React, { useEffect, useState } from 'react'
import Header from '../../../common/header/Header'
import Category_Main_Banner from '../category_main_banner/Category_Main_Banner'
import { useLocation, useNavigate } from 'react-router-dom'
import { Sub_Category_List } from '../../../../api/category_product/Category_Product'
import { IMG_BASE_URL } from '../../../../config/Config'
import Loader from '../../../../loader/Loader'

const Category_List = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { category_list_result } = location?.state || {};
    const [is_loading, set_Is_Loading] = useState(false);
    const [sub_category_data, set_Sub_Category_Data] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
const get_category_list_result_slug = localStorage.getItem("category_list_result_slug")
    // Ensure sub_category_data is always a valid array
    const validSubCategoryData = Array.isArray(sub_category_data) ? sub_category_data : [];

    // Calculate total pages safely
    const totalPages = Math.ceil(validSubCategoryData?.length / productsPerPage);

    // Calculate products for current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentSubCategory = validSubCategoryData?.slice(startIndex, startIndex + productsPerPage);

    // Handle pagination (next, prev, page number click)
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const Handle_Get_Sub_Category_List = async () => {
        set_Is_Loading(true)
        const data = {
            cat_id: category_list_result?.id
        }
        try {
            const response = await Sub_Category_List(data)
            set_Sub_Category_Data(response?.data?.data?.sub_category)
            set_Is_Loading(false)
        }
        catch (error) {
            console.log("error", error)
            set_Is_Loading(false)
        }

    }
    useEffect(() => {
        Handle_Get_Sub_Category_List();
    }, [])
    return (
        <div>
            {/* <----- Header section's ---------> */}
            <Header />
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <>
                        {/* <------ Category main banner section's --------> */}
                        <Category_Main_Banner data={category_list_result} />
                        <section className="gi-category py-[40px] max-[767px]:py-[0px]">
                            <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                                <div className="flex flex-wrap w-full">
                                    <div className="gi-shop-rightside min-[992px]:w-[100%] max-[767px]:pt-[30px] min-[992px]:w-[100%] min-[768px]:w-full w-full px-[12px]">
                                        <div className="gi-pro-list-top md:flex items-center justify-between text-[14px] mb-[15px]">
                                            <div className="min-[768px]:w-[50%] w-full gi-grid-list">
                                                <h2 className="text-[#4b5966] block text-[22px] max-[767px]:text-[18px] leading-[33px] font-semibold mb-[10px] mx-auto leading-[0] capitalize">List of All {category_list_result?.title}</h2>
                                            </div>
                                        </div>
                                        <div className="shop-pro-content">
                                            <div className="shop-pro-inner mx-[-12px]">
                                                <div className="flex flex-wrap w-full">
                                                    {currentSubCategory?.map((sub_category_result) => (
                                                        <div key={sub_category_result?.id} onClick={() =>
                                                            navigate(`/${get_category_list_result_slug}/${sub_category_result?.slug}`, {
                                                                state: { sub_category_result, category_id: category_list_result?.id },
                                                            })
                                                        } className="min-[992px]:w-[25%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] gi-product-box max-[575px]:w-[50%] max-[575px]:mx-auto pro-gl-content mb-6">
                                                            <div className="gi-product-content h-full">
                                                                <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer overflow-hidden rounded-[5px] shadow-xl pt-4">
                                                                    <div className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
                                                                        <div className="gi-pro-image overflow-hidden">
                                                                            <a href="#" className="image productimg7 relative block overflow-hidden pointer-events-none">
                                                                                <img className="main-image w-[100%] h-[200px] transition-all duration-[0.3s] ease delay-[0s]"
                                                                                    src={`${IMG_BASE_URL}${sub_category_result?.image}`} alt="Product" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gi-pro-content h-full p-[30px] pt-[0] relative z-[10] flex flex-col text-center">
                                                                        <h5 className="gi-pro-stitle font-normal text-[#0F1726] text-[16px] font-semibold leading-[1.2] capitalize">{sub_category_result?.title}</h5>

                                                                        <div className="flex flex-col mt-2 justify-center gap-4 items-center">
                                                                            <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">View More</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Pagination Controls */}
                                            <div className="gi-pro-pagination pt-[15px] pb-[15px] flex justify-between items-center border-t-[1px] border-solid border-[#eee] max-[575px]:flex-col">
                                                <span className="text-[14px] text-[#777] max-[575px]:mb-[10px]">Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, sub_category_data?.length)} of {sub_category_data?.length} item(s)</span>
                                                <ul className="gi-pro-pagination-inner flex">
                                                    <li>
                                                        <button onClick={handlePrev} className="next w-auto px-[13px] text-[#fff] m-1 p-2 bg-red-600 leading-[30px] h-[32px] bg-red-500 flex flex text-center align-top text-[16px] justify-center items-center rounded-[5px]">
                                                            Prev
                                                        </button>
                                                    </li>

                                                    {[...Array(totalPages).keys()].map((page) => (
                                                        <li key={page} className="inline-block float-left mr-[5px]">
                                                            <button
                                                                onClick={() => handlePageChange(page + 1)}
                                                                className={`transition-all duration-[0.3s] m-1 p-2 ease-in-out w-[32px] h-[32px] font-light 
                                                                    text-[#777] leading-[32px] bg-[#eee] flex text-center align-top 
                                                                    text-[16px] justify-center items-center rounded-[5px]
                                                                     ${currentPage === page + 1 ? 'active bg-red-500 text-white' : 'bg-gray-300 text-white'}`}
                                                            >
                                                                {page + 1}
                                                            </button>
                                                        </li>
                                                    ))}

                                                    <li>
                                                        <button onClick={handleNext} className="next w-auto px-[13px] text-[#fff] m-1 p-2 bg-red-600 leading-[30px] h-[32px] bg-red-500 flex flex text-center align-top text-[16px] justify-center items-center rounded-[5px]">
                                                            Next
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )
            }
        </div>
    )
}

export default Category_List