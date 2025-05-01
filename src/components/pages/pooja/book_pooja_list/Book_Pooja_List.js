import React, { useEffect, useState } from 'react'
import Header from '../../../common/header/Header'
import Kundli_Main_Banner from '../../kundli/kundli_main_bannner/Kundli_Main_Banner'
import Footer from '../../../common/footer/Footer'
import { Get_Pooja_List, Get_Pooja_List_Category_id } from '../../../../api/pooja/Pooja'
import Loader from '../../../../loader/Loader'
import { IMG_BASE_URL } from '../../../../config/Config'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Book_Pooja_List = () => {
    const navigate = useNavigate()
    const [pooja_list, set_Pooja_List] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    console.log("ksdfjdf", selectedCategoryId)
    const [selectedDate, setSelectedDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    });

    const [currentPage, setCurrentPage] = useState(0);

    const categoriesPerPage = 6;

    const poojaCategories = pooja_list?.pooja_category || [];
    const totalPages = Math.ceil(poojaCategories.length / categoriesPerPage);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const displayedCategories = poojaCategories.slice(
        currentPage * categoriesPerPage,
        (currentPage + 1) * categoriesPerPage
    );

    // Generate the next 30 days
    const generateDates = () => {
        const dates = [];
        const today = new Date();
        for (let i = 0; i < 30; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            dates.push(date);
        }
        return dates;
    };

    const dates = generateDates();

    useEffect(() => {
        const Handle_Get_Pooja_List = async () => {
            setIsLoading(true);
            try {
                const response = await Get_Pooja_List();
                if (response?.data?.status == "200") {
                    setIsLoading(false);
                    set_Pooja_List(response?.data?.data);
                    setSelectedCategoryId(response?.data?.data?.pooja_category[0]?.id);
                } else if (response?.response?.data?.status == "500") {
                    setIsLoading(false);
                }
                else {
                    setIsLoading(false);
                }
            } catch (error) {
                setIsLoading(false);
                console.error("Error fetching pooja list:", error);
            }
        };
        Handle_Get_Pooja_List();
    }, []);

    useEffect(() => {
        if (selectedCategoryId === null) {
            console.log("Category ID is not set yet. Skipping API call.");
            return;
        }
        const Handle_Get_Pooja_List_By_Category = async () => {
            setIsLoading(true);
            try {
                const response = await Get_Pooja_List_Category_id({
                    category_id: selectedCategoryId,
                    pooja_date: selectedDate
                });
                if (response?.data?.status == "200") {
                    setIsLoading(false);
                    set_Pooja_List(response?.data?.data);
                } else if (response?.response?.data?.status == "500") {
                    setIsLoading(false);
                }
                else {
                    setIsLoading(false);
                }
            } catch (error) {
                setIsLoading(false);
                console.error("Error fetching pooja list by category:", error);
            }
        };
        Handle_Get_Pooja_List_By_Category();
    }, [selectedCategoryId, selectedDate]);

    useEffect(() => {
        if (pooja_list?.pooja_category?.length > 0) {
            if (selectedCategoryId === null) {
                setSelectedCategoryId(pooja_list.pooja_category[0].id);
            }
        }
    }, [pooja_list]);

    const handleDateClick = (date) => {
        const formattedDate = date.toISOString().split('T')[0];
        setSelectedDate(formattedDate);
    };

    // Handle category click
    const handleCategoryClick = (categoryId) => {
        setSelectedCategoryId(categoryId);
    };
    console.log(pooja_list);

    return (
        <div>
            {/*  */}
            <Header />
            {/*  */}
            <Kundli_Main_Banner />
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <section className="gi-blog-section py-[40px] max-[767px]:py-[30px] wow fadeInUp"
                        style={{ visibility: "visible", animationName: "fadeInUp" }}>
                        <div
                            className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                            <div className="w-full flex flex-wrap mb-[-24px]">
                                <div
                                    className="section-title w-full flex justify-between  z-[5] max-[575px]:flex-col px-[12px]">
                                    <div className="section-detail">
                                        <h2
                                            className="gi-title mb-[0] text-[25px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
                                            Book <span className="text-[#9F2225]">Pooja</span></h2>
                                        <div>
                                        </div>

                                    </div>
                                    <div className="w-full flex items-center justify-center">
                                        {/* Left Arrow (Only show on first category) */}
                                        {currentPage > 0 && (
                                            <button onClick={handlePrev} className="mr-3 text-gray-500 hover:text-gray-800">
                                                <FaArrowCircleLeft size={24} />
                                            </button>
                                        )}

                                        {/* Category List */}
                                        <div className="px-3 flex flex-wrap gap-3 mb-6">
                                            {displayedCategories && displayedCategories?.map((category) => (
                                                <a
                                                    key={category.id}
                                                    href="#"
                                                    className={`border border-gray-200 px-4 py-2 rounded-lg hover:text-white hover:bg-[#333] flex items-center justify-start h-full transition-all ${selectedCategoryId === category.id ? "text-white bg-[#9D2326]" : "text-gray-600"
                                                        }`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleCategoryClick(category.id);
                                                    }}
                                                >
                                                    <img
                                                        src={`${IMG_BASE_URL}${category.image}`}
                                                        className="w-[30px] h-[30px] mr-2 rounded-md"
                                                        alt={category.title}
                                                    />
                                                    <span className="text-sm">{category.title}</span>


                                                </a>
                                            ))}
                                        </div>

                                        {/* Right Arrow (Only show on last category) */}
                                        {currentPage < totalPages - 1 && (
                                            <button onClick={handleNext} className="ml-3 text-gray-500 hover:text-gray-800">
                                                <FaArrowCircleRight size={24} />
                                            </button>
                                        )}
                                    </div>
                                    <div className="header-search min-w-[300px] relative max-[1399px]:min-w-[500px] max-[1199px]:min-w-[400px] max-[991px]:p-0 max-[767px]:min-w-[350px] max-[480px]:min-w-[300px] max-[320px]:min-w-full">
                                        {/* <form className="gi-search-group-form relative flex border-[1px] border-solid border-[#eee] items-center rounded-[5px]" action="#">
                                            <input className="form-control gi-search-bar block w-full min-h-[50px] 
                                            h-[50px] max-[991px]:h-[40px] max-[991px]:min-h-[40px] px-[15px] text-[13px] 
                                            font-normal leading-[1] text-[#777] bg-transparent outline-[0] border-[0] 
                                            tracking-[0.6px]" placeholder="Search..." type="text" />
                                            <button type="submit" className="search_submit relative flex items-center justify-center w-[48px] h-[40px] basis-[48px]">
                                                <i className="fi-rr-search text-[#4b5966] h-[18px] w-[18px] transition-all duration-[0.3s] ease-in-out"></i>
                                            </button>
                                        </form> */}
                                    </div>
                                </div>
                                <div className="px-[12px] p-[10px] overflow-x-auto whitespace-nowrap mb-6 scrollable-container">
                                    {dates.map((date, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className={`border border-gray-200 px-4 py-2 rounded-full hover:text-white hover:bg-[#333] ${selectedDate === date.toISOString().split('T')[0] ? "text-white bg-[#9D2326]" : "text-gray-600"}`} onClick={() => handleDateClick(date)}>
                                            {date.toLocaleDateString('en-US', {
                                                day: 'numeric',
                                                month: 'short',
                                            })}
                                        </a>
                                    ))}
                                </div>
                                {
                                    pooja_list?.pooja_list?.length > 0 ? (
                                        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-[12px]">
                                            {
                                                pooja_list?.pooja_list?.map((pooja_list_result) => {
                                                    return (
                                                        <div className="gi-blog-item w-[300px]" onClick={() => {
                                                            // Store data in localStorage
                                                            localStorage.setItem(
                                                                "poojaDetails",
                                                                JSON.stringify({
                                                                    id: pooja_list_result?.id,
                                                                    category_id: pooja_list_result?.category_id,
                                                                })
                                                            );

                                                            // Navigate to the next page
                                                            navigate("/book-pooja-details");
                                                        }}>
                                                            <div
                                                                className="blog-info transition-all duration-[0.3s] ease-in-out w-full bg-[#fff] shadow-lg rounded-[5px] w-full ">
                                                                <figure className="blog-img w-full h-56 m-[0] relative overflow-hidden rounded-[5px]">
                                                                    <Link><img src={`${IMG_BASE_URL}${pooja_list_result?.image}`} alt="imag"
                                                                        className="transition-all duration-[0.3s] ease-in-out rounded-[5px] h-full w-full" /></Link>
                                                                    {/* <span className="flags bg-[#FFCF00] flex flex-col p-[5px] px-4 text-sm rounded-full absolute bottom-[10px] left-[10px] z-[2]">
                                                                Removes All Obstacles
                                                            </span> */}
                                                                </figure>
                                                                <div className="detail w-full p-4 pt-0">
                                                                    <h3 className="mt-[10px] mb-[8px] p-[0] leading-[26px]"><Link to="/book-pooja-details"
                                                                        className="font-Poppins text-[#0F1726] text-[18px] font-semibold leading-[22px] line-clamp-1 overflow-hidden text-ellipsis">{pooja_list_result?.title}</Link></h3>
                                                                    <p className="line-clamp-1 text-[#4C5159] overflow-hidden text-ellipsis leading-5 my-3">{pooja_list_result?.short_description}</p>
                                                                    <div className='flex justify-between'>
                                                                    <p className="text-sm text-[#4C5159]">{pooja_list_result.pooja_date
                                                                    }</p>
                                                                    <p className="text-sm text-[#4C5159]">{pooja_list_result.from_time

                                                                    } to {pooja_list_result.
                                                                        to_time
                                                                        

                                                                    }</p>
                                                                    </div>
                                                                    
                                                                    <div className="more-info border-t pt-3 mt-3 flex justify-between items-center">
                                                                        <div className="flex gap-3 items-center">
                                                                            <img src={`${IMG_BASE_URL}${pooja_list_result?.astro?.profile_image}`} className="rounded-full w-12 h-12" alt="" />
                                                                            <span className="font-medium text-sm">{pooja_list_result?.astro?.name}</span>
                                                                        </div>
                                                                        
                                                                        {/* <Link className="transition-all p-2 px-5 rounded-full w-32 justify-center border border-gray-200 duration-[0.3s] ease-in-out text-[#DE9553] text-[13px] flex items-center hover:bg-[#fff] hover:text-[#9D2326]">Book Now</Link> */}
                                                                    </div>
                                                                    <Link
                                                                            className={`h-[40px] block leading-[40px] text-center text-[14px]  px-[25px] transition-all duration-[0.3s] ease-in-out relative rounded-full items-center font-semibold tracking-[0.02rem] border-[0] bg-[#9F2225] text-[#fff] hover:bg-[#333] hover:text-[#fff] mt-3`}>
                                                                            <i className="fi-rr-shopping-bag mr-3 transition-all duration-[0.3s] ease-in-out leading-[0]"></i>
                                                                            Book Now
                                                                        </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    ) : (
                                        <div>
                                            <h3>No Pooja lists are available at the moment</h3>
                                        </div>
                                    )
                                }


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

export default Book_Pooja_List