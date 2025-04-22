import React, { useEffect, useState } from 'react'
import Header from '../../../common/header/Header'
import Footer from '../../../common/footer/Footer'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import { Link, useParams } from 'react-router-dom'
import { Get_Home_Page } from '../../../../api/global/Global'
import { IMG_BASE_URL } from '../../../../config/Config'
import Loader from '../../../../loader/Loader'

const Home_Letest_Post_Details = () => {
    const get_letest_blog_result_id = localStorage.getItem("letest_blog_result_id");
    //  const { id } = useParams();
    const [is_loading, set_Is_Loading] = useState(false)
    const [letest_post_details, set_Letest_Post_Details] = useState([]);

    useEffect(() => {
        const Handle_Get_Home_Data = async () => {
            set_Is_Loading(true)
            try {
                const response = await Get_Home_Page()
                const blogs = response?.data?.data?.blog || [];
                const matchedPost = blogs?.find((blog) => blog?.id === parseInt(get_letest_blog_result_id));
                set_Letest_Post_Details(matchedPost)
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
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="gi-breadcrumb mb-[40px] bg-center bg-no-repeat bg-cover"
                            style={{
                                backgroundImage: `url(${Common_Images_Transport?.product_bg})`, // Add your image URL here
                            }}>
                            <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
                                <div className="flex flex-wrap w-full">
                                    <div className="w-full px-[12px]">
                                        <div className="flex flex-wrap m-0 py-[35px]">
                                            <div className="min-[768px]:w-[50%] w-full">
                                                <h2 className="gi-breadcrumb-title text-white block text-3xl leading-[22px] font-semibold my-[0] mx-auto capitalize max-[767px]:mb-[5px] max-[767px]:text-center">
                                                    Blog Details</h2>
                                                <ul className="gi-breadcrumb-list mt-5">
                                                    <li className="gi-breadcrumb-item inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize">
                                                        <Link to="/" className="relative text-white"><i className="fi-rr-home text-[#fff]"></i> Home</Link>
                                                    </li>
                                                    <li className="gi-breadcrumb-item inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize">
                                                        <span className="relative text-white">/ Blog Details</span>
                                                    </li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Blog section --> */}
                        <section className="gi-blog py-[40px] max-[767px]:py-[30px]">
                            <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
                                <div className="flex flex-wrap w-full">
                                    <div className="min-[992px]:w-[100%] w-full px-[12px]">
                                        {/* <!-- Blog content Start --> */}
                                        <div className="gi-blogs-content">
                                            <div className="gi-blogs-inner">
                                                <div className="gi-single-blog-item">
                                                    <div className="single-blog-info">
                                                        <figure className="blog-img mb-[16px] h-[500px] overflow-hidden">
                                                            <a href="#">
                                                                <img src={`${IMG_BASE_URL}${letest_post_details?.image}`} alt="blog imag" className="w-full h-full object-cover rounded-[5px]" />
                                                            </a>
                                                        </figure>
                                                        <div className="single-blog-detail">
                                                            <label className="mb-[15px] text-[#999] inline-block">Author - <a href="#" className="text-[#999] hover:text-[#5caf90]">{letest_post_details?.author_name}</a></label>
                                                            <h3 className="text-[22px] font-semibold text-[#4b5966] leading-[1.2] mb-[6px] max-[767px]:text-[20px] max-[575px]:text-[19px]">Marketing Guide: 5 Steps to Success.</h3>
                                                            <p className="gi-text text-[#777] text-[14px] mb-[16px]">{letest_post_details?.short_description}</p>
                                                            <p className="text-[#777] text-[14px] mb-[16px]">{letest_post_details?.long_description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        {/* <!--Blog content End --> */}
                                    </div>

                                </div>
                            </div>
                        </section>
                        {/*  */}
                        <Footer />
                    </>
                )
            }
        </div>
    )
}

export default Home_Letest_Post_Details