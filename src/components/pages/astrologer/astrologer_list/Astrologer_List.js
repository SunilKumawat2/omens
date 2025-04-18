import React, { useEffect, useState } from 'react'
import Header from "../../../common/header/Header"
import Kundli_Main_Banner from '../../kundli/kundli_main_bannner/Kundli_Main_Banner'
import Home_Private_Confidential from '../../home_page_components/home_private_confidential/Home_Private_Confidential'
import Footer from '../../../common/footer/Footer'
import { User_Authentication } from '../../../../user_authentication/User_Authentication'
import { Get_Astrologer_List } from '../../../../api/astrologer/Astrologer'
import Loader from '../../../../loader/Loader'
import { IMG_BASE_URL } from '../../../../config/Config'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Astrologer_List = () => {
    const token = User_Authentication()
    const navigate = useNavigate();
    const [is_loading, set_Is_Loading] = useState(false);
    const [astro_list, set_Astro_List] = useState([]);
    const [astro_list_filter, set_Astro_List_Filter] = useState([]);
    console.log("astro_list", astro_list_filter)

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const [is_Open_skill, set_is_Open_Skills] = useState(true);
    const [is_Open_Langauge, set_Is_Open_Langauge] = useState(false);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState([]);
    const [minPrice, setMinPrice] = useState("0");
    const [maxPrice, setMaxPrice] = useState("");

    // Calculate total pages safely
    const totalPages = Math.ceil(astro_list?.length / productsPerPage) || 1;

    // Calculate the products to display on the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProduct = astro_list?.slice(startIndex, startIndex + productsPerPage) || [];

    // Pagination controls
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

    const toggle_skills_accordtion = () => {
        set_is_Open_Skills(!is_Open_skill);
    };
    const toggle_langauge_accordtion = () => {
        set_Is_Open_Langauge(!is_Open_Langauge);
    };
    console.log("toggle_skills_accordtion", is_Open_skill)


    // <------------ handle origin Checkbox Change ----------->
    const handle_skill_checkbox_change = (originName) => {
        setSelectedSkills((prevSelected) =>
            prevSelected?.includes(originName)
                ? prevSelected?.filter((name) => name !== originName)
                : [...prevSelected, originName]
        );
    };
    // Comma-separated list of selected IDs
    const selectedSkillsString = selectedSkills.join(',');

    // <------------ handle origin Checkbox Change ----------->
    const handle_language_checkbox_change = (originName) => {
        setSelectedLanguage((prevSelected) =>
            prevSelected?.includes(originName)
                ? prevSelected?.filter((name) => name !== originName)
                : [...prevSelected, originName]
        );
    };
    // Comma-separated list of selected IDs
    const selectedLanguagesString = selectedLanguage.join(',');

    // Handle changes to price inputs
    const handlePriceChange = (type, value) => {
        const price = Math.max(0, Math.min(100000, Number(value)));
        if (type === "min") setMinPrice(Math.min(price, maxPrice));
        if (type === "max") setMaxPrice(Math.max(price, minPrice));
    };

    const Handle_Get_astro_list = async () => {
        set_Is_Loading(true);
        try {
            // Pass the parameters to the API function
            const response = await Get_Astrologer_List("1", { skills: selectedSkillsString, languages: selectedLanguagesString, min_amount: minPrice, max_amount: maxPrice });
            if (response?.data?.status == "200") {
                set_Astro_List(response?.data?.data?.astrolist);
                set_Astro_List_Filter(response?.data?.data);
                set_Is_Loading(false);
            } else if (response?.response?.data?.status == "500") {
                set_Is_Loading(false);
            }
            else {
                set_Is_Loading(false);

            }
        } catch (error) {
            set_Is_Loading(false);
        }
    };


    useEffect(() => {
        Handle_Get_astro_list()
    }, [])

    // Scroll to the top of the page when the component is rendered
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        Handle_Get_astro_list();
    }, [selectedSkillsString, selectedLanguagesString, minPrice, maxPrice]);

    return (
        <div>
            {/* <-------- Header section's ----------> */}
            <Header />
            {/*  */}
            <Kundli_Main_Banner />
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <>
                        <section className="gi-category py-[40px] max-[767px]:py-[30px] bg-[#F0F4F8]">
                            <div
                                className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                                <div className="flex flex-wrap w-full">
                                    <div className="gi-shop-rightside min-[992px]:order-[6] min-[768px]:order-[-1] min-[992px]:w-[75%] min-[768px]:w-full w-full px-[12px]">
                                        <div className="gi-pro-list-top flex items-center justify-between text-[14px] mb-[15px]">
                                            <div className="min-[768px]:w-[50%] w-full gi-grid-list">
                                                <h2 className="text-[#4b5966] block text-[22px] leading-[33px] font-semibold mb-[10px] mx-auto leading-[0] capitalize">All Astrologer List</h2>
                                            </div>
                                        </div>

                                        {/* <!-- Shop content Start --> */}
                                        <div className="shop-pro-content">
                                            <div className="shop-pro-inner mx-[-12px]">
                                                <div className="flex flex-wrap w-full">
                                                    {currentProduct?.map((astro_list_result) => {
                                                        return (
                                                            <Link to={`/astrologer-details/${astro_list_result?.id}`} className="min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] max-[575px]:w-[50%] max-[575px]:mx-auto mb-6 grid_call_chat">
                                                                <div className="gi-product-content bg-white" >
                                                                    <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out overflow-hidden rounded-[5px] shadow-xl">
                                                                        <div className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
                                                                            <div className="astro_bg">

                                                                                <div className="flex justify-between items-center">
                                                                                    <Link to={`/astrologer-details/${astro_list_result?.id}`} className="mx-[5px] text-center grid  grid-flow-row auto-rows-max gap-2 items-center justify-center text-[15px]">
                                                                                        Call
                                                                                        <img src={Common_Images_Transport?.call_icon} className="m-auto"
                                                                                            alt="" />
                                                                                    </Link>
                                                                                    <h6
                                                                                        className="gi-pro-stitle text-center font-normal text-[#000] text-[14px] font-semibold leading-[1.2] mt-4 capitalize">
                                                                                        Rs.{astro_list_result?.minute_rate}/min</h6>
                                                                                    <Link to={`/astrologerdetails/${astro_list_result?.id}`}
                                                                                        className="mx-[5px] text-center grid  grid-flow-row auto-rows-max gap-2 items-center justify-center text-[15px]">
                                                                                        Chat
                                                                                        <img src={Common_Images_Transport?.chat_icon} className="m-auto"
                                                                                            alt="" />
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                            <div className="gi-pro-image overflow-hidden">

                                                                                <a href="#"
                                                                                    className="image productimg relative block overflow-hidden pointer-events-none">
                                                                                    {
                                                                                        astro_list_result?.profile_image != null ? (
                                                                                            <img className="main-image rounded-full m-auto  w-[120px] h-[120px] transition-all duration-[0.3s] ease delay-[0s]"
                                                                                                src={`${IMG_BASE_URL}${astro_list_result?.profile_image}`} alt="astrologer" />

                                                                                        ) : (

                                                                                            <img className="main-image rounded-full m-auto  w-[120px] h-[120px] transition-all duration-[0.3s] ease delay-[0s]"
                                                                                                src={Common_Images_Transport?.user_logo} alt="astrologer" />
                                                                                        )
                                                                                    }
                                                                                </a>

                                                                            </div>
                                                                        </div>
                                                                        <div className="gi-pro-content h-full p-3 pb-5 relative z-[10]  text-center">
                                                                            <div
                                                                                className="gi-pro-rat-price pb-2 flex d-flex justify-center gap-2 items-center">
                                                                                <span className="gi-pro-rating opacity-[0.7] relative">
                                                                                    <i className="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                                    <i className="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                                    <i className="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                                    <i className="gicon gi-star text-[16px] text-[#777] mr-[3px] float-left mr-[3px]"></i>
                                                                                    <i className="gicon gi-star text-[16px] text-[#777] mr-[3px] float-left mr-[3px]"></i>
                                                                                </span>
                                                                                <span>4.5</span>
                                                                            </div>
                                                                            <a href="#">
                                                                                <h5 className="gi-pro-stitle font-normal text-[#3B4959] text-[18px] font-semibold leading-[1.2] capitalize">{astro_list_result?.name}</h5>
                                                                            </a>
                                                                            {/* <div className="mt-2">
                                                                                <div className="skills-container">
                                                                                    {astro_list_result?.skills && (
                                                                                        <span className="whitespace-nowrap inline-block text-gray-900 hover:text-white border border-gray-300 hover:bg-gray-900 rounded-full text-sm px-3 py-1 text-center mt-2">
                                                                                            {astro_list_result.skills.split(',')[0].trim()}
                                                                                        </span>
                                                                                    )}
                                                                                    {astro_list_result?.skills?.split(',').length > 1 && (
                                                                                        <span className="inline-block text-gray-500 text-sm ml-2">...</span>
                                                                                    )}
                                                                                </div>

                                                                                <div className="language-container">
                                                                                    {astro_list_result?.language && (
                                                                                        <span
                                                                                            className="whitespace-nowrap inline-block text-gray-900 hover:text-white border border-gray-300 hover:bg-gray-900 rounded-full text-sm px-3 py-1 text-center mt-2"
                                                                                        >
                                                                                            {astro_list_result.language.split(',')[0].trim()}
                                                                                        </span>
                                                                                    )}
                                                                                    {astro_list_result?.language?.split(',').length > 1 && (
                                                                                        <span className="inline-block text-gray-500 text-sm ml-2">...</span>
                                                                                    )}
                                                                                </div>
                                                                                <span
                                                                                    className="whitespace-nowrap inline-block text-gray-900 hover:text-white border border-gray-300 hover:bg-gray-900 rounded-full text-sm px-3 py-1 text-center mt-2">
                                                                                    {astro_list_result?.experience}</span>
                                                                            </div> */}
                                                                            <div className="mt-2">
                                                                                <div className="skills-container">
                                                                                    {astro_list_result?.skills && (
                                                                                        <span
                                                                                            className="line-clamp-1 text-gray-900 text-sm text-center mt-2"
                                                                                        >
                                                                                            Skills: <span className='text-gray-900 font-medium'>{astro_list_result?.skills}</span>
                                                                                        </span>
                                                                                    )}
                                                                                    {/* {astro_list_result?.skills?.split(',')?.length > 1 && (
                                                                    <span className="inline-block text-gray-500 text-sm ml-2">...</span>
                                                                )} */}
                                                                                </div>
                                                                                <div className="language-container">
                                                                                    {/* {astro_list_result?.language && ( */}
                                                                                    <span
                                                                                        className="line-clamp-1 text-gray-900 text-sm text-center mt-1 mb-2"
                                                                                    >
                                                                                        Language: <span className='text-gray-900 font-medium'>{astro_list_result?.language}</span>
                                                                                    </span>
                                                                                    {/* )} */}
                                                                                    {/* {astro_list_result?.language?.split(',')?.length > 1 && (
                                                                    <span className="inline-block text-gray-500 text-sm ml-2">...</span>
                                                                )} */}
                                                                                </div>
                                                                                <span
                                                                                    className="text-gray-900 text-sm px-3 py-1 text-center mt-2">Exp.<span className='font-bold'>{astro_list_result?.experience}</span></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        )
                                                    })
                                                    }
                                                </div>
                                            </div>
                                            {/* <!-- Pagination Start --> */}
                                            <div className="gi-pro-pagination pt-[15px] pb-[15px] flex justify-between items-center border-t-[1px] border-solid border-[#eee] max-[575px]:flex-col">
                                                <span className="text-[14px] text-[#777] max-[575px]:mb-[10px]">Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, astro_list?.length)} of {astro_list?.length} item(s)</span>
                                                <ul className="gi-pro-pagination-inner flex">
                                                    <li>
                                                        <button onClick={handlePrev} className="next w-auto px-[13px] text-[#fff] m-1 p-2 bg-[#e17d7d] leading-[30px] h-[32px] bg-red-500 flex text-center align-top text-[16px] justify-center items-center rounded-[5px]">
                                                            Prev
                                                        </button>
                                                    </li>

                                                    {[...Array(totalPages).keys()].map((page) => (
                                                        <li key={page} className="inline-block float-left mr-[5px]">
                                                            <button
                                                                onClick={() => handlePageChange(page + 1)}
                                                                className={`transition-all duration-[0.3s] m-1 p-2 ease-in-out w-[32px] h-[32px] font-light 
                                                                        text-[#777] leading-[32px] bg-[#e17d7d] flex text-center align-top 
                                                                        text-[16px] justify-center items-center rounded-[5px]
                                                                         ${currentPage === page + 1 ? 'active bg-red-500 text-white' : 'bg-gray-300 text-white'}`}>
                                                                {page + 1}
                                                            </button>
                                                        </li>
                                                    ))}
                                                    <li>
                                                        <button onClick={handleNext} className="next w-auto px-[13px] text-[#fff] m-1 p-2 bg-[#e17d7d] leading-[30px] h-[32px] bg-red-500 flex text-center align-top text-[16px] justify-center items-center rounded-[5px]">
                                                            Next
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gi-shop-sidebar md:sticky top-[24px] min-[992px]:w-[25%] min-[768px]:w-full w-full max-[991px]:mt-[30px] px-[12px]">
                                        <div id="shop_sidebar">
                                            <div className="gi-sidebar-wrap p-[15px] rounded-[5px] shadow-lg">
                                                {/* Sidebar Category Block */}
                                                <div className="gi-sidebar-block mb-4">
                                                    <div className="gi-sb-title border-b border-gray-200 pb-4">
                                                        <div className="text-red-700 text-lg mb-4 flex justify-between items-center cursor-pointer">
                                                            <span><i className="fi-rr-filter mr-2"></i> Filter</span>
                                                            {/* Accordion Arrow */}
                                                            <span
                                                                className={`transform transition-transform ${is_Open_skill ? "rotate-180" : ""}`}
                                                                onClick={toggle_skills_accordtion}
                                                            >

                                                            </span>
                                                        </div>
                                                        <h3
                                                            className="gi-sidebar-title font-semibold text-gray-700 flex justify-between text-[17px] leading-tight cursor-pointer"
                                                            onClick={toggle_skills_accordtion}
                                                        >
                                                            Skills <i class="gicon gi-angle-down"></i>
                                                        </h3>
                                                    </div>
                                                    {/* Accordion Content */}
                                                    <div
                                                        className={`gi-sb-block-content mt-4 transition-[max-height,opacity] duration-300 ease-in-out ${is_Open_skill ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                                                            }`}
                                                    >
                                                        <ul>
                                                            {astro_list_filter?.filter_by?.skills?.map((origin_result) => {
                                                                return (
                                                                    <li key={origin_result?.id}>
                                                                        <div className="gi-sidebar-block-item py-[15px] flex flex-row relative">
                                                                            <input
                                                                                type="checkbox"
                                                                                className="w-full h-full absolute opacity-0 cursor-pointer z-10"
                                                                                checked={selectedSkills?.includes(origin_result?.skill)}
                                                                                onChange={() => handle_skill_checkbox_change(origin_result?.skill)}
                                                                            />
                                                                            <p className="w-full text-[#777] text-[14px] leading-[20px] capitalize cursor-pointer flex justify-between pl-[30px]">
                                                                                <span>{origin_result?.skill}</span>
                                                                            </p>
                                                                            <span
                                                                                className={`checked absolute top-1/2 left-0 h-4 w-4 border
                                                                                     bg-white transition-transform transform -translate-y-1/2 rounded
                                                                                      ${selectedSkills?.includes(origin_result?.skill) ? "bg-red-500 border-red-500" : ""
                                                                                    }`}
                                                                            ></span>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>


                                                </div>
                                                {/* Sidebar Category Block */}
                                                <div className="gi-sidebar-block mb-4">
                                                    <div className="gi-sb-title border-b border-gray-200 pb-4">
                                                        
                                                        <h3
                                                            className="gi-sidebar-title font-semibold text-gray-700 flex justify-between text-[17px] leading-tight cursor-pointer"
                                                            onClick={toggle_langauge_accordtion}
                                                        >
                                                            Language <i class="gicon gi-angle-down"></i>
                                                        </h3>
                                                    </div>
                                                    {/* Accordion Content */}
                                                    <div
                                                        className={`gi-sb-block-content mt-4 transition-[max-height,opacity] duration-300 ease-in-out ${is_Open_Langauge ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                                                            }`}
                                                    >
                                                        <ul>
                                                            {astro_list_filter?.filter_by?.languages?.map((origin_result) => {
                                                                return (
                                                                    <li key={origin_result?.id}>
                                                                        <div className="gi-sidebar-block-item py-[15px] flex flex-row relative">
                                                                            <input
                                                                                type="checkbox"
                                                                                className="w-full h-full absolute opacity-0 cursor-pointer z-10"
                                                                                checked={selectedLanguage.includes(origin_result?.language)}
                                                                                onChange={() => handle_language_checkbox_change(origin_result?.language)}
                                                                            />
                                                                            <p className="w-full text-[#777] text-[14px] leading-[20px] capitalize cursor-pointer flex justify-between pl-[30px]">
                                                                                <span>{origin_result?.language}</span>
                                                                            </p>
                                                                            <span
                                                                                className={`checked absolute top-1/2 left-0 h-4 w-4 border bg-white transition-transform transform -translate-y-1/2 rounded ${selectedLanguage.includes(origin_result?.language) ? "bg-red-500 border-red-500" : ""
                                                                                    }`}
                                                                            ></span>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>


                                                </div>
                                                <div className="gi-sidebar-block mb-4">
                                                    <div className="gi-sb-title border-b border-solid border-gray-200 pb-4">
                                                        <h3 className="gi-sidebar-title font-semibold text-gray-800 text-lg">
                                                            Filter By Price
                                                        </h3>
                                                    </div>
                                                    <div className="gi-sb-block-content mt-5">
                                                        <div className="gi-price-filter flex flex-col">
                                                            <div className="gi-price-input mb-4">
                                                                <div className="flex justify-between text-gray-600 text-sm">
                                                                    <span>Min: {minPrice}</span>
                                                                    <span>Max: {maxPrice}</span>
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <input type="range" className="w-full cursor-pointer text-red-700" min="0" max="100000" step="1" value={minPrice} onChange={(e) => handlePriceChange("min", e.target.value)} />
                                                                    <input type="range" className="w-full cursor-pointer ml-2 text-red-700" min="0" max="100000" step="1" value={maxPrice} onChange={(e) => handlePriceChange("max", e.target.value)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </section>
                        {/* <--------- Home_Private_Confidential --------> */}
                        <Home_Private_Confidential />
                        {/* <-------- Footer section's -------> */}
                        <Footer />
                    </>
                )
            }

        </div>
    )
}

export default Astrologer_List