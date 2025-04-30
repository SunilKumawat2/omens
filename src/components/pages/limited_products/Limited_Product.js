import React, { useEffect, useState } from 'react'
import Common_Images_Transport from '../../common/common_imges_transport/Common_Images_Transport'
import Home_Private_Confidential from '../home_page_components/home_private_confidential/Home_Private_Confidential'
import Footer from '../../common/footer/Footer'
import Slider from "react-slick";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Add_To_Cart, Get_Cart_List, Get_Product_Details } from '../../../api/category_product/Category_Product'
import { IMG_BASE_URL } from '../../../config/Config'
import Loader from '../../../loader/Loader'
import { User_Authentication } from '../../../user_authentication/User_Authentication'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Similar_Product from '../similar_product/Similar_Product'
import Header from '../../common/header/Header';
import Product_Return_Policy from '../product_details/Product_Return_Policy';
import Product_Description from '../product_details/Product_Description';
import Customer_Feedback from '../product_details/Customer_Feedback';
const Limited_Product = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [product_list_result, setProductListResult] = useState(null);
    const [category_id, setCategoryId] = useState(null);
    const [subcategory_id, setSubcategoryId] = useState(null);
    const [active_tab, set_Active_Tab] = useState("0");
    const [is_loading, set_Is_Loading] = useState(false)
    const [product_details_list, set_Product_Details_List] = useState({});
    const [certificate, set_Certificate] = useState(null)
    const [energization, set_Energization] = useState(null)
    const [active_product_type, set_Active_Product_Type] = useState(null);
    const token = User_Authentication();
    const [nav1, setNav1] = useState(null);  // for main slider
    const [nav2, setNav2] = useState(null);  // for thumbnail slider
    const [activeIndex, setActiveIndex] = useState(0);
    // <--- this is product id ------->
    const id = product_list_result?.id;


    // Retrieve data from location or local storage
    useEffect(() => {
        let product_list_result = null;
        let category_id = null;
        let subcategory_id = null;
        if (location.state) {
            ({ product_list_result, category_id, subcategory_id } = location.state);
            localStorage.setItem("product_list_result", JSON.stringify(product_list_result));
            localStorage.setItem("category_id", category_id);
            localStorage.setItem("subcategory_id", subcategory_id);
        } else {
            product_list_result = JSON.parse(localStorage.getItem("product_list_result"));
            category_id = localStorage.getItem("category_id");
            subcategory_id = localStorage.getItem("subcategory_id");
        }

        setProductListResult(product_list_result);
        setCategoryId(category_id);
        setSubcategoryId(subcategory_id);
    }, [location.state]);

    // <------- Get The Products Details -------------->
    useEffect(() => {
        if (category_id && subcategory_id) {
            const Handle_Get_Product_Details = async () => {
                set_Is_Loading(true);
                try {
                    const response = await Get_Product_Details({ id: product_list_result?.id, category_id: category_id, subcategory_id: subcategory_id });
                    set_Product_Details_List(response?.data?.data);
                    console.log("response_response_response", response?.data?.data)
                } catch (error) {
                    console.error("Error fetching product details:", error);
                } finally {
                    set_Is_Loading(false);
                }
            };
            Handle_Get_Product_Details();
        }
    }, [category_id, subcategory_id, product_list_result]);


    console.log("product_details_list", product_details_list)
    const settingsMain = {
        asNavFor: nav2,
        ref: (slider) => setNav1(slider),
        infinite: false,
        arrows: true,
        beforeChange: (oldIndex, newIndex) => {
            setActiveIndex(newIndex); // ✅ Sync thumbnail highlight for < 5 case
        },
    };


    const settingsNav = {
        asNavFor: nav1,
        ref: (slider) => setNav2(slider),
        slidesToShow: 5, // Adjust based on your design
        swipeToSlide: true,
        focusOnSelect: true,
        infinite: false,
        arrows: true,
        centerMode: false,
        variableWidth: false, // Avoid width jumping
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };



    // <-------- Handle Add To Cart ----------------->
    const Handle_Add_To_cart = async (product_id, total_price) => {
        if (!certificate) {
            toast.error("please select the certificate")
            return
        }
        if (!energization) {
            toast.error("please select the energization")
            return
        }
        const data = {
            certificate: certificate,
            energization: energization,
            quantity: 1,
            product_id: product_id,
            total_price: total_price,
            product_type_id: active_product_type,
        }
        try {

            if (!token) {
                set_Is_Loading(false);
                toast.error("User is not logged in.")
                setTimeout(() => {
                    navigate("/user-login")
                }, 1000);
                // throw new Error("User token not found");
            }
            const response = await Add_To_Cart(data, { Authorization: `Bearer ${token}` })
            console.log("respsdklsjdfljsdf", response)
            if (response?.data?.status == "200") {
                toast("Successfully add to product")
                await Get_Cart_List({ Authorization: `Bearer ${token}` })
                // window.location.reload()
            }
            else if (response?.response?.data?.status == "500") {
                toast.warning("Product already added to cart.")
            }
        } catch (error) {
        }
    }


    // Scroll to the top of the page when the component is rendered
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // <------- Active Product Type -------->
    useEffect(() => {
        if (product_details_list?.product_type) {
            set_Active_Product_Type(product_details_list.product_type[0]?.id);
        }
    }, [product_details_list]); // Runs whenever product_details_list changes


    const handleBookNow = () => {
        if (!token) {
            toast.error("User is not logged in.");
            localStorage.setItem("redirect_after_login", `/product-details`);
            setTimeout(() => {
                navigate("/user-login");
            }, 2000);
        }
    };

    return (
        <div>
            {/* <--------------- Header section's -------------> */}
            <Header />
            {/* <-------- ToastContainer ------------> */}

            <ToastContainer style={{ marginTop: "120px" }} />
            {
                is_loading ? (
                    <>
                        <Loader />
                    </>
                ) : (
                    <>
                        {/* <!-- Breadcrumb start --> */}
                        <div className="gi-breadcrumb mb-[40px] bg-center bg-no-repeat bg-cover"
                            style={{
                                backgroundImage: `url(${Common_Images_Transport?.product_bg})`, // Add your image URL here
                            }}>
                            <div
                                className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
                                <div className="flex flex-wrap w-full">
                                    <div className="w-full px-[12px]">
                                        <div className="flex flex-wrap m-0 py-[35px]">
                                            <div className="min-[768px]:w-[70%] w-full">
                                                <h6
                                                    className="gi-breadcrumb-title text-white block text-sm leading-[22px] font-semibold my-[0] mx-auto capitalize max-[767px]:mb-[5px] max-[767px]:text-center">
                                                    {product_list_result?.name}</h6>
                                                <ul className="gi-breadcrumb-list mt-5">
                                                    <li
                                                        className="gi-breadcrumb-item inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize">
                                                        <Link to="/" className="relative text-white"><i
                                                            className="fi-rr-home text-[#fff]"></i> Home</Link>
                                                    </li>
                                                    <li
                                                        className="gi-breadcrumb-item inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize">
                                                        <span className="relative text-white">/ {product_list_result?.name}</span>
                                                    </li>
                                                    <li
                                                        className="gi-breadcrumb-item text-white inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize active">
                                                        / {product_list_result?.name} Details</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Sart Single Product --> */}
                        <section className="gi-single-product py-[40px] max-[767px]:py-[30px]">
                            <div
                                className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                                <div className="flex flex-wrap w-full px-[12px]">
                                    <div className="gi-pro-rightside gi-common-rightside w-full">
                                        <div className="single-pro-block">
                                            <div className="single-pro-inner">
                                                <div className="flex flex-wrap w-full">
                                                    <div
                                                        className="single-pro-img single-pro-img-no-sidebar w-[40%] max-[991px]:w-full relative pr-[12px] max-[991px]:pl-[12px] max-[991px]:w-full max-[991px]:max-w-[500px] max-[991px]:m-auto max-[420px]:px-[0]">

                                                        <div className="single-product-scroll z-0 px-0 py-2 sticky top-[30px]">
                                                            {/* Main Slider */}

                                                            <Slider {...settingsMain} ref={(slider) => setNav1(slider)} className="!p-0 !m-0">
                                                                {product_details_list?.product?.product_images?.map((item, index) => (
                                                                    <div key={index} className="relative w-full aspect-[4/3] overflow-hidden rounded-md bg-gray-200 p-2">
                                                                        {item?.file_type === "image" ? (
                                                                            <img
                                                                                src={`${IMG_BASE_URL}${item?.image_url}`}
                                                                                alt="Product"
                                                                                className="w-full h-full object-cover"
                                                                            />
                                                                      

                                                                        ) : (
                                                                            <video
                                                                                controls
                                                                                poster={`${IMG_BASE_URL}${item?.thumbnail_url}`}
                                                                                className="w-full h-full object-cover"
                                                                            >
                                                                                <source src={`${IMG_BASE_URL}${item?.video_url}`} type="video/mp4" />
                                                                            </video>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </Slider>

                                                            {/* Thumbnails */}
                                                            <div className="single-nav-thumb w-full mt-4">
                                                                {product_details_list?.product?.product_images?.length >= 5 ? (
                                                                    <Slider
                                                                        {...settingsNav}
                                                                        asNavFor={nav1}
                                                                        ref={(slider) => setNav2(slider)}
                                                                        className="thumbnail-slider !p-0 !m-0"
                                                                    >
                                                                        {product_details_list?.product?.product_images?.map((item, index) => (
                                                                            <div key={index} className="px-[2px]">
                                                                                <div
                                                                                    className={`h-[90px] w-full overflow-hidden border rounded-sm cursor-pointer ${index === activeIndex ? "ring-2 ring-red-700" : ""
                                                                                        }`}
                                                                                >
                                                                                    {item?.file_type === "image" ? (
                                                                                        <img
                                                                                            src={`${IMG_BASE_URL}${item?.image_url}`}
                                                                                            alt="Thumb"
                                                                                            className="h-full w-full object-cover"
                                                                                        />
                                                                                    ) : (
                                                                                        <video
                                                                                            autoPlay
                                                                                            muted
                                                                                            loop
                                                                                            playsInline
                                                                                            poster={`${IMG_BASE_URL}${item?.thumbnail_url}`}
                                                                                            className="h-full w-full object-cover"
                                                                                        >
                                                                                            <source src={`${IMG_BASE_URL}${item?.video_url}`} type="video/mp4" />
                                                                                        </video>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </Slider>
                                                                ) : (
                                                                    <div className="flex flex-wrap gap-2">
                                                                        {product_details_list?.product?.product_images?.map((item, index) => (
                                                                            <div
                                                                                key={index}
                                                                                className={`w-[90px] h-[90px] cursor-pointer border rounded-sm overflow-hidden ${index === activeIndex ? "ring-2 ring-red-800" : ""
                                                                                    }`}
                                                                                onClick={() => {
                                                                                    setActiveIndex(index);
                                                                                    nav1?.slickGoTo(index);
                                                                                }}
                                                                            >
                                                                                {item?.file_type === "image" ? (
                                                                                    <img
                                                                                        src={`${IMG_BASE_URL}${item?.image_url}`}
                                                                                        alt="Thumb"
                                                                                        className="w-full h-full object-cover"
                                                                                    />
                                                                                ) : (
                                                                                    <video
                                                                                        autoPlay
                                                                                        muted
                                                                                        loop
                                                                                        playsInline
                                                                                        poster={`${IMG_BASE_URL}${item?.thumbnail_url}`}
                                                                                        className="w-full h-full object-cover"
                                                                                    >
                                                                                        <source src={`${IMG_BASE_URL}${item?.video_url}`} type="video/mp4" />
                                                                                    </video>
                                                                                )}
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div className="single-pro-desc single-pro-desc-no-sidebar w-[60%] max-[991px]:w-full relative pl-[12px] max-[991px]:pl-[0] max-[991px]:mt-[30px] max-[991px]:w-full">
                                                        <div className="single-pro-content">
                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <h5
                                                                        className="gi-single-title text-[#4b5966] text-[22px] capitalize mb-[8px] block font-medium leading-[35px] tracking-[0.02rem] max-[1199px]:text-[20px] max-[1199px]:leading-[33px] max-[767px]:text-[18px] max-[767px]:text-[18px] max-[767px]:leading-[31px]">
                                                                        {product_details_list?.product?.name}
                                                                    </h5>
                                                                    <div
                                                                        className="gi-single-desc mb-[12px] text-[#777] text-[14px] tracking-[0] break-all leading-[26px] font-normal">
                                                                        {product_details_list?.product?.short_description}
                                                                    </div>
                                                                </div>

                                                                <div className="flex">
                                                                    <div className="gi-single-wishlist m-[5px]">
                                                                        <a className="gi-btn-group bg-[#FFF0F0] wishlist text-[#D46F77] px-3 h-[40px] flex items-center justify-center transition-all duration-[0.3s] ease delay-[0s] rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90] hover:border-[#5caf90]"
                                                                            title="Wishlist">
                                                                            <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out mr-2 leading-[0]"></i>109
                                                                        </a>
                                                                    </div>
                                                                    <div className="gi-single-quickview m-[5px]">
                                                                        {/* <a href="javascript:void(0)"
                                                                            className="gi-btn-group quickview bg-[#EDF0F8] text-[#3A4980] w-[40px] h-[40px] flex items-center justify-center transition-all duration-[0.3s] ease delay-[0s] rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90] hover:border-[#5caf90] modal-toggle">
                                                                            <i className="fi-rr-share transition-all duration-[0.3s] ease-in-out text-[#4b5966] leading-[0]"></i>
                                                                        </a> */}

                                                                        <div className="btn-share bg-gray-600 rounded">
                                                                            <span className="btn-text"></span
                                                                            >
                                                                            <span className="btn-icon">
                                                                                <svg
                                                                                    t="1580465783605"
                                                                                    className="icon"
                                                                                    viewBox="0 0 1024 1024"
                                                                                    version="1.1"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    p-id="9773"
                                                                                    width="18"
                                                                                    height="18"
                                                                                >
                                                                                    <path
                                                                                        d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"
                                                                                        p-id="9774"
                                                                                        fill="#ffffff"
                                                                                    ></path>
                                                                                </svg>
                                                                            </span>
                                                                            <ul className="social-icons text-center">
                                                                                <li>
                                                                                    <a href="https://twitter.com/alphardex007" target="_blank"
                                                                                    ><i className="gicon gi-facebook text-[16px] text-[#fff]"></i></a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="https://codepen.io/alphardex" target="_blank"
                                                                                    ><i className="gicon gi-whatsapp text-[16px] text-[#fff]"></i></a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="https://github.com/alphardex" target="_blank"
                                                                                    ><i className="gicon gi-instagram text-[16px] text-[#fff]"></i></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-wrap gap-4 items-center">
                                                                <div className="gi-single-stoke flex flex-col">
                                                                    <span
                                                                        className="gi-single-sku mb-[8px] text-[14px] px-4 rounded-full bg-[#F6EAD9] text-[#443A2E] tracking-[0.02rem]">SKU:{product_details_list?.product?.sku}</span>
                                                                </div>
                                                                <div className="gi-single-stoke flex flex-col">
                                                                    {product_details_list?.product?.origin?.name && (
                                                                        <span className="gi-single-sku mb-[8px] text-[14px] px-4 rounded-full bg-[#DADADA] text-[#443A2E] tracking-[0.02rem]">
                                                                            Origin: {product_details_list?.product?.origin?.name}
                                                                        </span>
                                                                    )}

                                                                </div>
                                                                {/* <div className="gi-single-stoke flex flex-col">
                                                                    {product_details_list?.product?.origin?.name && (
                                                                        <span className="gi-single-sku mb-[8px] text-[14px] px-4 rounded-full bg-green-300 text-[#443A2E] tracking-[0.02rem]">
                                                                            Current Stock: {product_details_list?.product?.current_stock}
                                                                        </span>
                                                                    )}

                                                                </div>
                                                                <div className="gi-single-stoke flex flex-col">
                                                                    {
                                                                        product_details_list?.product?.current_stock > 0 ? (
                                                                            <span className="gi-single-ps-title leading-[1] text-[14px] text-[#5caf90] tracking-[0]">
                                                                                IN STOCK
                                                                            </span>
                                                                        ) : (
                                                                            <span className="gi-single-ps-title leading-[1] text-[14px] text-[#ff0000] tracking-[0]">
                                                                                OUT OF STOCK
                                                                            </span>
                                                                        )
                                                                    }
                                                                </div> */}
                                                            </div>

                                                            {/* <div
                                                                className="gi-single-price-stoke pt-[15px] pb-[15px] flex flex-wrap justify-between items-center">
                                                                <div className="gi-single-price flex items-center gap-4">
                                                                    <div
                                                                        className="final-price text-[#3B4959] font-semibold text-[18px] font-Poppins tracking-[0] max-[1199px]:text-[20px]">

                                                                        Rs.{product_details_list?.product?.seller_price}/-
                                                                    </div>
                                                                    <span className="line-through font-semibold text-[18px] text-gray-500">
                                                                        M.R.F : Rs.{product_details_list?.product?.purchase_price}/-
                                                                    </span>
                                                                    <span>
                                                                        {
                                                                            product_details_list?.product?.discount != null && (
                                                                                <span className='text-green-600 font-semibold text-[18px]'>{product_details_list?.product?.discount}{product_details_list?.product?.discount_type} {" "} OFF</span>
                                                                            )
                                                                        }
                                                                    </span>

                                                                </div>

                                                            </div>
                                                            <hr /> */}
                                                            <div className="mt-3 border-l border-l-8 border border-red-300 border-1 p-3">

                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                            </div>

                                                            <div className="gi-single-qty mt-5 w-full">
                                                                {/* <p className="text-[#757575] font-normal">Expected Dispatch Date: <span
                                                                    className="text-[#000]">13 JUL, 2024</span></p> */}
                                                                <div className="gi-single-cart flex gap-3">
                                                                    <button type="button"
                                                                        className="btn w-full bg-[#9F2225] flex h-[40px] leading-[50px] text-center text-[14px] mt-4 py-[10px] px-[15px] uppercase justify-center bg-[#4b5966] text-[#fff] transition-all duration-[0.3s] ease-in-out relative rounded-[5px] items-center min-w-[160px] font-semibold tracking-[0.02rem] border-[0] hover:bg-[#333] hover:text-[#fff]"><i
                                                                            className="gicon fi-rs-phone-call mr-3 transition-all duration-[0.3s] ease-in-out leading-[0] !text-lg"></i>
                                                                        Call Us</button>
                                                                    <button type="button"
                                                                        className="btn w-full bg-green-600 flex h-[40px] leading-[50px] text-center text-[14px] mt-4 py-[10px] px-[15px] uppercase justify-center bg-[#4b5966] text-[#fff] transition-all duration-[0.3s] ease-in-out relative rounded-[5px] items-center min-w-[160px] font-semibold tracking-[0.02rem] border-[0] hover:bg-[#333] hover:text-[#fff]"><i
                                                                            className="gicon gi-whatsapp mr-3 transition-all duration-[0.3s] ease-in-out leading-[0] !text-lg"></i>
                                                                       Chat With an Expert</button>
                                                                </div>

                                                                <div className="gi-single-pro-tab mt-[40px]">
                                                                    <div className="md:flex justify-between gap-4">
                                                                        <div className="w-full">
                                                                            <div className="gi-single-pro-tab-nav w-full m-auto relative block text-center float-left">
                                                                                <ul className="nav-tabs inline-block float-left  border-b-2 border-[#eee] w-full"
                                                                                    id="singleprotab">
                                                                                    <li className={`mr-[5px] ml-auto inline-block float-left ${active_tab == "0" ? "active" : null}`} onClick={() => set_Active_Tab("0")}>
                                                                                        <a
                                                                                            className="leading-[24px] py-[8px] px-[28px] m-[0] text-[15px] font-medium relative transition-all duration-[300ms] linear inline-block cursor-pointer leading-[0] hover:bg-[#9F2225] hover:text-[#fff] hover:border-[#9F2225]">
                                                                                            Specifications
                                                                                        </a>
                                                                                    </li>

                                                                                </ul>
                                                                            </div>
                                                                            <div className="tab-content transition-all w-full overflow-hidden bg-[#fff] text-left text-[#202020] text-[18px] tracking-[0] leading-[1.6] rounded-[5px]"
                                                                                id="singleTabContent">
                                                                                {
                                                                                    active_tab == "0" && (
                                                                                        <Product_Description data={product_details_list} />
                                                                                    )
                                                                                }

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
                                        {/* <!-- Single product tab start --> */}
                                        <div className="gi-single-pro-tab mt-[40px]">
                                            <div className="md:flex justify-between gap-4">
                                                <div className="w-full">
                                                    <div id="gi-spt-nav-info" className="tab-single-pane">
                                                        <div className="gi-single-pro-tab-moreinfo">
                                                            <p
                                                                className="font-Poppins text-[#777] text-[14px] font-normal leading-[28px] mb-[16px]" dangerouslySetInnerHTML={{ __html: product_details_list?.product?.description }} />

                                                        </div>
                                                    </div>
                                                    {/* <div className="gi-single-pro-tab-nav w-full m-auto relative block text-center float-left">
                                                        <ul className="nav-tabs inline-block float-left  border-b-2 border-[#eee] w-full"
                                                            id="singleprotab">
                                                            <li className={`mr-[5px] ml-auto inline-block float-left ${active_tab == "0" ? "active" : null}`} onClick={() => set_Active_Tab("0")}>
                                                                <a
                                                                    className="leading-[24px] py-[8px] px-[28px] m-[0] text-[15px] font-medium relative transition-all duration-[300ms] linear inline-block cursor-pointer leading-[0] hover:bg-[#9F2225] hover:text-[#fff] hover:border-[#9F2225]">
                                                                    Specifications
                                                                </a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="tab-content transition-all w-full overflow-hidden bg-[#fff] text-left text-[#202020] text-[18px] tracking-[0] leading-[1.6] rounded-[5px]"
                                                        id="singleTabContent">
                                                        {
                                                            active_tab == "0" && (
                                                                <Product_Description data={product_details_list} />
                                                            )
                                                        }
                                                       
                                                    </div> */}
                                                </div>
                                                {/* <--------- Customer Feedback -----------------> */}
                                                <Customer_Feedback data={product_details_list} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- related product  --> */}
                        <Similar_Product data={product_details_list?.related_products} />
                        {/* <- ----- retrun policy ------> */}
                        <Product_Return_Policy />
                        {/* <----------- Private Confidential ------------>*/}
                        <Home_Private_Confidential />
                        {/* <------------- Footer section's ---------------> */}
                        <Footer />
                    </>
                )
            }

        </div>
    )
}

export default Limited_Product