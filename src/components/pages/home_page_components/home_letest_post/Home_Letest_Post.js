import React from 'react'
import { IMG_BASE_URL } from '../../../../config/Config'
import { Link } from 'react-router-dom'

const Home_Letest_Post = (home_data) => {
    const letest_blog = home_data?.data?.blog
    console.log();
    
    return (
        <div>
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
                            <Link to="/blogs"
                                className="bg-red-800 text-white text-sm px-5 py-2 mt-3 mt-md-0 mt-lg-0 rounded-lg text-center dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">See
                                View All</Link>
                        </div>
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-[12px]">
                            {
                                letest_blog?.slice(0, 4)?.map((letest_blog_result) => {
                                    return (
                                        <div onClick={() => localStorage.setItem("letest_blog_result_id", letest_blog_result?.id)}>
                                            <Link to={`/blog/${letest_blog_result?.slug}`}>
                                                <div className="gi-blog-item">
                                                    <div
                                                        className="blog-info transition-all duration-[0.3s] ease-in-out w-full mb-[24px] bg-[#fff] rounded-[5px]">
                                                        <figure className="blog-img w-full h-auto m-[0] relative overflow-hidden rounded-[5px]">
                                                            <a href="#">
                                                                <img
                                                                    src={`${IMG_BASE_URL}${letest_blog_result?.image}`}
                                                                    alt="imag"
                                                                    className="transition-all duration-[0.3s] ease-in-out rounded-[5px] w-full h-[250px] object-contain bg-white"
                                                                />
                                                            </a>



                                                        </figure>
                                                        <div className="detail w-full m-[0]">

                                                            <h3 className="mt-[10px] mb-[8px] p-[0] leading-[26px]"><a href="#"
                                                                className="font-Poppins text-[#4b5966] text-[17px] font-medium leading-[22px] line-clamp-1">{letest_blog_result?.title}</a></h3>
                                                            <p className="line-clamp-2" dangerouslySetInnerHTML={{ __html: letest_blog_result?.long_description }} />
                                                            <div className="more-info mt-[8px]">
                                                                <a href="#" className="transition-all duration-[0.3s] ease-in-out text-[#DE9553] text-[13px] flex items-center hover:bg-[#fff] hover:text-[#9F2225]">Read
                                                                    More<i className="fi-rr-angle-double-small-right transition-all duration-[0.3s] ease-in-out ml-[5px] text-[#DE9553] text-[13px] flex"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home_Letest_Post