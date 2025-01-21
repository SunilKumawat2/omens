import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IMG_BASE_URL } from '../../../config/Config'
import Footer from '../../common/footer/Footer'
import Header from '../../common/header/Header'
import { Get_Home_Page } from '../../../api/global/Global'
import Loader from '../../../loader/Loader'

const All_Letest_Post = () => {
    const [is_loading, set_Is_Loading] = useState(false)
    const [home_data, set_Home_Data] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12; 

    const totalPages = Math.ceil(home_data?.blog?.length / productsPerPage) || 1;

    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProduct = home_data?.blog?.slice(startIndex, startIndex + productsPerPage) || [];

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

    // Scroll to the top of the page when the component is rendered
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            {/*  */}
            <Header />
            {/*  */}
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <section className="gi-blog-section py-[40px] max-[767px]:py-[30px] wow fadeInUp">
                        <div
                            className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                            <div className="w-full flex flex-wrap mb-[-24px]">
                                <div className="section-title w-full mb-[20px] pb-[20px] flex justify-between pb-[20px] z-[5] max-[575px]:flex-col px-[12px]">
                                    <div className="section-detail">
                                        <h2
                                            className="gi-title mb-[0] text-[25px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-Poppins max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
                                            Latest <span className="text-[#9F2225]">Posts</span></h2>
                                        <p className="max-w-[400px] mt-[10px] text-[14px] text-[#777] leading-[18px]">Explore our award
                                            winning blogs</p>
                                    </div>
                                </div>
                                <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-[12px]">
                                    {
                                        currentProduct?.map((letest_blog_result) => {
                                            return (
                                                <Link to={`/letest_post_details/${letest_blog_result?.id}`}>
                                                    <div className="gi-blog-item">
                                                        <div
                                                            className="blog-info transition-all duration-[0.3s] ease-in-out w-full mb-[24px] bg-[#fff] rounded-[5px]">
                                                            <figure className="blog-img w-full h-auto m-[0] relative overflow-hidden rounded-[5px]">
                                                                <a href="#"><img src={`${IMG_BASE_URL}${letest_blog_result?.image}`} alt="imag"
                                                                    className="transition-all duration-[0.3s] ease-in-out rounded-[5px] h-full w-full" /></a>
                                                            </figure>
                                                            <div className="detail w-full m-[0]">

                                                                <h3 className="mt-[10px] mb-[8px] p-[0] leading-[26px]"><a href="#"
                                                                    className="font-Poppins text-[#4b5966] text-[17px] font-medium leading-[22px]">{letest_blog_result?.title}</a></h3>
                                                                <p className="line-clamp-2">{letest_blog_result?.short_description}</p>
                                                                <div className="more-info mt-[8px]">
                                                                    <a href="#" className="transition-all duration-[0.3s] ease-in-out text-[#DE9553] text-[13px] flex items-center hover:bg-[#fff] hover:text-[#9F2225]">Read
                                                                        More<i className="fi-rr-angle-double-small-right transition-all duration-[0.3s] ease-in-out ml-[5px] text-[#DE9553] text-[13px] flex"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                                {/* <!-- Pagination Start --> */}
                                <div className="gi-pro-pagination pt-[15px] pb-[15px] flex justify-between items-center border-t-[1px] border-solid border-[#eee] max-[575px]:flex-col">
                                    <span className="text-[14px] text-[#777] max-[575px]:mb-[10px]">Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, currentProduct?.length)} of {currentProduct?.length} Product(s)</span>
                                    <ul className="gi-pro-pagination-inner flex">
                                        {currentPage > 1 && (
                                            <li>
                                                <button
                                                    onClick={handlePrev}
                                                    className="next w-auto px-[13px] text-[#fff] m-1 p-2 bg-[#5caf90] leading-[30px] h-[32px] bg-red-500 flex text-center align-top text-[16px] justify-center items-center rounded-[5px]"
                                                >
                                                    Prev
                                                </button>
                                            </li>
                                        )}
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
                                        {currentPage < totalPages && (
                                            <li>
                                                <button
                                                    onClick={handleNext}
                                                    className="next w-auto px-[13px] text-[#fff] m-1 p-2 bg-[#5caf90] leading-[30px] h-[32px] bg-red-500 flex text-center align-top text-[16px] justify-center items-center rounded-[5px]"
                                                >
                                                    Next
                                                </button>
                                            </li>
                                        )}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
            {/*  */}
            <Footer />
        </div>
    )
}

export default All_Letest_Post