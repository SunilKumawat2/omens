import React, { useState, useEffect } from 'react'
import Header from '../../../common/header/Header'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Get_Pooja_List_app_Details, Get_Pooja_List_Details } from '../../../../api/pooja/Pooja';
import Loader from '../../../../loader/Loader';
import { IMG_BASE_URL } from '../../../../config/Config';
import Book_Pooja_Details_Testimonals from './Book_Pooja_Details_Testimonals';
import Home_Private_Confidential from "../../home_page_components/home_private_confidential/Home_Private_Confidential"
import Footer from "../../../common/footer/Footer"
import { User_Authentication } from '../../../../user_authentication/User_Authentication';

const Book_Pooja_Details = () => {
    const navigate = useNavigate();
    const [pooja_list, set_Pooja_List] = useState([]);
    console.log("Customer_Testimonials", pooja_list?.pooja_reviews)
    const [isLoading, setIsLoading] = useState(false)
    const Get_user_is_active = localStorage.getItem("user_is_active")
    // useEffect(() => {
    //     const Handle_Get_Pooja_List = async () => {
    //         setIsLoading(true);
    //         try {
    //             const storedData = localStorage.getItem("poojaDetails");
    //             if (storedData) {
    //                 const { id, category_id } = JSON.parse(storedData);
    //                 const response = await Get_Pooja_List_Details({ id, category_id });
    //                 if (response?.data?.status == "200") {
    //                     setIsLoading(false);
    //                     set_Pooja_List(response?.data?.data);
    //                 } else if (response?.response?.data?.status == "500") {
    //                     setIsLoading(false);
    //                 }
    //             } else {
    //                 console.error("No pooja details found in localStorage");
    //                 setIsLoading(false);
    //             }
    //         } catch (error) {
    //             setIsLoading(false);
    //             console.error("Error fetching pooja list:", error);
    //         }
    //     };

    //     Handle_Get_Pooja_List();
    // }, []);

    useEffect(() => {
        const Handle_Get_Pooja_List = async () => {
            setIsLoading(true);
            try {
                const storedData = localStorage.getItem("poojaDetails");

                if (!storedData) {
                    console.error("No pooja details found in localStorage");
                    return;
                }

                const { id, category_id } = JSON.parse(storedData);

                let response;

                if (Get_user_is_active) {
                    const token = User_Authentication();
                    if (!token) {
                        throw new Error("User token not found");
                    }

                    response = await Get_Pooja_List_app_Details(
                        id,
                        category_id,
                        { Authorization: `Bearer ${token}` }
                    );
                    console.log("Authenticated Pooja List Response:", response);
                } else {
                    response = await Get_Pooja_List_Details({ id, category_id });
                    console.log("Guest Pooja List Response:", response);
                }

                if (response?.data?.status == "200") {
                    set_Pooja_List(response.data.data);
                } else if (response?.response?.data?.status == "500") {
                    console.warn("Server returned 500 status");
                }

            } catch (error) {
                console.error("Error fetching pooja list:", error);
            } finally {
                setIsLoading(false);
            }
        };

        Handle_Get_Pooja_List();
    }, []);




    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0, hasExpired: false });

    const calculateTimeLeft = () => {
        const targetTime = new Date(`${pooja_list?.pooja_list?.pooja_date}T${pooja_list?.pooja_list?.from_time}`);
        const currentTime = new Date();
        const diffInMilliseconds = targetTime - currentTime;

        if (diffInMilliseconds > 0) {
            const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
            const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diffInMilliseconds % (1000 * 60)) / 1000);
            return { hours, minutes, seconds, hasExpired: false };
        }

        return { hours: 0, minutes: 0, seconds: 0, hasExpired: true }; // If time is up, mark as expired
    };


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [pooja_list?.pooja_list?.pooja_date, pooja_list?.pooja_list?.from_time]);
    return (
        <div>
            {/*  */}
            <Header />
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <section className="gi-single-product py-[40px] max-[767px]:py-[30px]">
                            <div
                                className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                                <div className="flex flex-wrap w-full px-[12px]">
                                    <div className="gi-pro-rightside gi-common-rightside w-full">
                                        {/* <!-- Single product content Start --> */}
                                        <div className="single-pro-block">
                                            <div className="single-pro-inner">
                                                <div className="flex flex-wrap w-full">
                                                    <div
                                                        className="single-pro-img single-pro-img-no-sidebar w-[50%] max-[991px]:w-full relative pr-[12px] max-[991px]:pl-[12px] max-[991px]:w-full max-[991px]:max-w-[500px] max-[991px]:m-auto max-[420px]:px-[0]">
                                                        <div className="single-product-scroll sticky top-[30px]">
                                                            <div className="single-product-cover overflow-hidden cursor-zoom-in">
                                                                <div className="single-slide zoom-image-hoverd">
                                                                    <img className="img-responsive h-[400px] w-full rounded-[5px]"
                                                                        src={`${IMG_BASE_URL}${pooja_list?.pooja_list?.image}`} alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="single-pro-desc single-pro-desc-no-sidebar w-[50%] max-[991px]:w-full relative pl-[12px] max-[991px]:pl-[0] max-[991px]:mt-[30px] max-[991px]:w-full">
                                                        <div className="single-pro-content">
                                                            <div className="flex justify-between items-center pb-6">
                                                                <span className="flags bg-[#FFCF00] p-[5px] px-4 text-sm rounded-full z-[2]">
                                                                    Removes All Obstacles
                                                                </span>
                                                                {timeLeft?.hasExpired ? (
                                                                    <span className="text-red-600 text-lg font-semibold">Time Out for This Pooja</span>
                                                                ) : (
                                                                    <div className="flex gap-2 items-center">
                                                                        <span className="p-2 text-sm rounded bg-[#DCFFEC] text-[#04823E]">
                                                                            {timeLeft?.hours}h
                                                                        </span>
                                                                        <span className="p-2 text-sm rounded bg-[#DCFFEC] text-[#04823E]">
                                                                            {timeLeft?.minutes}M
                                                                        </span>
                                                                        <span className="p-2 text-sm rounded bg-[#DCFFEC] text-[#04823E]">
                                                                            {timeLeft?.seconds}S
                                                                        </span>
                                                                        <span className="p-2 text-sm rounded bg-[#DCFFEC] text-[#04823E]">Left</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div>
                                                                <h2 className="gi-single-title text-[#0F1726] text-[22px] capitalize block font-semibold leading-[35px] tracking-[0.02rem] max-[1199px]:text-[20px] max-[1199px]:leading-[33px] max-[767px]:text-[18px] max-[767px]:text-[18px] max-[767px]:leading-[31px]">
                                                                    {pooja_list?.pooja_list?.title}
                                                                </h2>
                                                                <div className="gi-single-desc mb-[12px] text-[#777] text-[14px] tracking-[0] break-all leading-[26px] font-normal">
                                                                    {pooja_list?.pooja_list?.short_description}
                                                                </div>
                                                            </div>

                                                            <div className="detail w-full border-t pt-3 mt-3  p-4 pt-0">
                                                                <div className="more-info">
                                                                    <Link to={`/astrologer-details/${pooja_list?.pooja_list?.astro?.id}`}>
                                                                        <div className="flex gap-3 items-center">
                                                                            <img src={`${IMG_BASE_URL}${pooja_list?.pooja_list?.astro?.profile_image}`} className="rounded-full w-16 h-16"
                                                                                alt="" />
                                                                            <div>
                                                                                <h4 className="font-medium text-xl font-semibold text-dark-gray">{pooja_list?.pooja_list?.astro?.name}</h4>
                                                                                {/* <span className="font-medium text-sm text-gray-500">{pooja_list?.pooja_list?.astro?.astrodetail?.}</span> */}
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                                <p className="mt-3 text-gray-500 line-clamp-3">{pooja_list?.pooja_list?.astro?.astrodetail?.about_us}</p>
                                                                <div className="flex items-center gap-3 mt-3">
                                                                    {/* Rating Stars */}
                                                                    <div className="flex items-center">
                                                                        {Array.from({ length: 5 }).map((_, index) => {
                                                                            const rating = parseFloat(pooja_list?.avg_rating || 0);
                                                                            return (
                                                                                <svg
                                                                                    key={index}
                                                                                    className={`w-4 h-4 ${index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
                                                                                        }`}
                                                                                    fill="currentColor"
                                                                                    viewBox="0 0 20 20"
                                                                                >
                                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975h4.181c.969 0 1.371 1.24.588 1.81l-3.388 2.463 1.286 3.975c.3.921-.755 1.688-1.54 1.117L10 13.011l-3.388 2.463c-.784.571-1.838-.196-1.539-1.117l1.285-3.975-3.388-2.463c-.783-.57-.38-1.81.588-1.81h4.181l1.286-3.975z" />
                                                                                </svg>
                                                                            );
                                                                        })}
                                                                    </div>

                                                                    {/* Pooja Done Info */}
                                                                    <p className="text-gray-500 bg-gray-100 px-3 py-2 rounded-full w-[150px] text-center text-sm">
                                                                        {pooja_list?.pooja_done} Pooja's done
                                                                    </p>
                                                                </div>


                                                                {
                                                                    pooja_list?.pooja_list?.is_book == true ? (
                                                                        <div
                                                                            className={`mt-5 ${timeLeft.hasExpired ? "cursor-not-allowed opacity-50" : ""}`}>
                                                                            <Link
                                                                                className={`h-[40px] leading-[50px] text-center text-[14px] py-[10px] px-[25px] transition-all duration-[0.3s] ease-in-out relative rounded-full items-center font-semibold tracking-[0.02rem] border-[0] ${timeLeft.hasExpired
                                                                                    ? "bg-green-600 text-white"
                                                                                    : "bg-green-600 text-[#fff] hover:bg-[#333] hover:text-[#fff]"
                                                                                    }`}
                                                                            >
                                                                                <i className="fi-rr-shopping-bag mr-3 transition-all duration-[0.3s] ease-in-out leading-[0]"></i>
                                                                                {timeLeft.hasExpired ? "Time Out" : "Booked ✓"}
                                                                            </Link>


                                                                        </div>
                                                                    ) : (
                                                                        <div
                                                                            className={`mt-5 ${timeLeft.hasExpired ? "cursor-not-allowed opacity-50" : ""
                                                                                }`}
                                                                            onClick={() => {
                                                                                if (!timeLeft.hasExpired) {
                                                                                    navigate("/book-pooja-payment", {
                                                                                        state: {
                                                                                            title: pooja_list?.pooja_list?.title,
                                                                                            image: pooja_list?.pooja_list?.image,
                                                                                            pooja_date: pooja_list?.pooja_list?.pooja_date,
                                                                                            from_time: pooja_list?.pooja_list?.from_time,
                                                                                            to_time: pooja_list?.pooja_list?.to_time,
                                                                                            astro_name: pooja_list?.pooja_list?.astro?.name,
                                                                                            price: pooja_list?.pooja_list?.price,
                                                                                            id: pooja_list?.pooja_list?.id,
                                                                                        },
                                                                                    });
                                                                                }
                                                                            }}
                                                                        >

                                                                            <Link
                                                                                className={`h-[40px] leading-[50px] text-center text-[14px] py-[10px] px-[25px] transition-all duration-[0.3s] ease-in-out relative rounded-full items-center font-semibold tracking-[0.02rem] border-[0] ${timeLeft.hasExpired
                                                                                    ? "bg-[#9F2225] text-white"
                                                                                    : "bg-[#9F2225] text-[#fff] hover:bg-[#333] hover:text-[#fff]"
                                                                                    }`}
                                                                            >
                                                                                <i className="fi-rr-shopping-bag mr-3 transition-all duration-[0.3s] ease-in-out leading-[0]"></i>
                                                                                {timeLeft.hasExpired ? "Time Out" : "Book Now"}
                                                                            </Link>


                                                                        </div>
                                                                    )
                                                                }


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--Single product content End --> */}
                                        <div
                                            className="w-full py-12">
                                            <div className="grid grid-cols-1 gap-5">
                                                <div className="bg-white border border-gray-200 rounded p-5">
                                                    <p className="text-gray-400 mb-2">{pooja_list?.pooja_list?.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*  */}
                        <Book_Pooja_Details_Testimonals data={pooja_list?.pooja_reviews} />
                        {/*  */}
                        <Home_Private_Confidential />
                        {/*  */}
                        <Footer />
                    </>
                )
            }

        </div>
    )
}

export default Book_Pooja_Details