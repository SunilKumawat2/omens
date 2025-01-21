import React, { useEffect, useState } from 'react'
import Common_Images_Transport from '../../common/common_imges_transport/Common_Images_Transport'
import Header from '../../common/header/Header'
import Home_Private_Confidential from '../home_page_components/home_private_confidential/Home_Private_Confidential'
import Footer from '../../common/footer/Footer'
import Slider from "react-slick";
import Customer_Feedback from './Customer_Feedback'
import { Link, useLocation } from 'react-router-dom'
import { Add_To_Cart, Get_Cart_List, Get_Product_Details } from '../../../api/category_product/Category_Product'
import { IMG_BASE_URL } from '../../../config/Config'
import Product_Description from './Product_Description'
import Loader from '../../../loader/Loader'
import { User_Authentication } from '../../../user_authentication/User_Authentication'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Product_Details = () => {
    const location = useLocation();
    const [product_list_result, setProductListResult] = useState(null);
    const [category_id, setCategoryId] = useState(null);
    const [subcategory_id, setSubcategoryId] = useState(null);
    const [active_tab, set_Active_Tab] = useState("0");
    const [is_loading, set_Is_Loading] = useState(false)
    const [product_details_list, set_Product_Details_List] = useState([]);
    console.log("product_details_list",product_details_list)
    const [certificate, set_Certificate] = useState(null)
    const [energization, set_Energization] = useState(null)
    const [active_product_type, set_Active_Product_Type] = useState(null);
    
    // <--- this is product id ------->
    const id = product_list_result?.id;
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

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
                } catch (error) {
                    console.error("Error fetching product details:", error);
                } finally {
                    set_Is_Loading(false);
                }
            };
            Handle_Get_Product_Details();
        }
    }, [category_id, subcategory_id, product_list_result]);
console.log("product_details_list",product_details_list)
    const settingsMain = {
        asNavFor: nav2,
        ref: (slider) => setNav1(slider),
        infinite: false,
    };

    const settingsNav = {
        asNavFor: nav1,
        ref: (slider) => setNav2(slider),
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true,
        infinite: false,
    };



    // <-------- Handle Add To Cart ----------------->
    const Handle_Add_To_cart = async (product_id, total_price) => {
        if (!certificate) {
            toast("please select the certificate")
            return
        }
        if (!energization) {
            toast("please select the energization")
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
            const token = User_Authentication();
            if (!token) {
                set_Is_Loading(false);
                toast("user not login here")
                // navigate("/login")
                throw new Error("User token not found");
            }
            const response = await Add_To_Cart(data, { Authorization: `Bearer ${token}` })
            console.log("respsdklsjdfljsdf", response)
            if (response?.data?.status == "200") {
                toast("Successfully add to product")
                await Get_Cart_List({ Authorization: `Bearer ${token}` })
                // window.location.reload()
            }
            else if (response?.response?.data?.status == "500") {
                toast("Product already added to cart.")
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
                                            <div className="min-[768px]:w-[50%] w-full">
                                                <h2
                                                    className="gi-breadcrumb-title text-white block text-3xl leading-[22px] font-semibold my-[0] mx-auto capitalize max-[767px]:mb-[5px] max-[767px]:text-center">
                                                    {product_list_result?.name}</h2>
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
                                                        <div
                                                            className="single-product-scroll p-[15px] sticky top-[30px] rounded-[5px] border-[1px] border-solid border-[#eee]">
                                                            <Slider {...settingsMain}>
                                                                {product_details_list?.product?.product_images?.map((product_images_result, index) => (
                                                                    <div key={index} className="single-slide zoom-image-hover">
                                                                        {product_images_result?.file_type === "image" ? (
                                                                            <img
                                                                                className="img-responsive w-[100%] h-[400px]"
                                                                                src={`${IMG_BASE_URL}${product_images_result?.image_url}`}
                                                                                alt="Product"
                                                                            />
                                                                        ) : (
                                                                            <video
                                                                                controls
                                                                                className="img-responsive w-[100%] h-[400px]"
                                                                                poster={`${IMG_BASE_URL}${product_images_result?.thumbnail_url}`}
                                                                            >
                                                                                <source src={`${IMG_BASE_URL}${product_images_result?.video_url}`} type="video/mp4" />
                                                                            </video>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </Slider>
                                                            <div className="single-nav-thumb w-full overflow-hidden mt-4">
                                                                <Slider {...settingsNav}>
                                                                    {product_details_list?.product?.product_images?.map((product_images_result, index) => (
                                                                        <div key={index} className="single-slide zoom-image-hover">
                                                                            {product_images_result?.file_type === "image" ? (
                                                                                <img
                                                                                    className="img-responsive w-[100%] h-[150px]"
                                                                                    src={`${IMG_BASE_URL}${product_images_result?.image_url}`}
                                                                                    alt="Thumbnail"
                                                                                />
                                                                            ) : (
                                                                                <video
                                                                                    controls
                                                                                    className="img-responsive w-[100%] h-[150px]"
                                                                                    poster={`${IMG_BASE_URL}${product_images_result?.thumbnail_url}`}
                                                                                >
                                                                                    <source src={`${IMG_BASE_URL}${product_images_result?.video_url}`} type="video/mp4" />
                                                                                </video>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </Slider>
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
                                                                {/* <div className="flex">
                                                                    <div className="gi-single-wishlist m-[5px]">
                                                                        <a className="gi-btn-group bg-[#FFF0F0] wishlist text-[#D46F77] px-3 h-[40px] flex items-center justify-center transition-all duration-[0.3s] ease delay-[0s] rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90] hover:border-[#5caf90]"
                                                                            title="Wishlist">
                                                                            <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out mr-2 leading-[0]"></i>109
                                                                        </a>
                                                                    </div>
                                                                    <div className="gi-single-quickview m-[5px]">
                                                                        <a href="javascript:void(0)"
                                                                            className="gi-btn-group quickview bg-[#EDF0F8] text-[#3A4980] w-[40px] h-[40px] flex items-center justify-center transition-all duration-[0.3s] ease delay-[0s] rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90] hover:border-[#5caf90] modal-toggle">
                                                                            <i className="fi-rr-share transition-all duration-[0.3s] ease-in-out text-[#4b5966] leading-[0]"></i>
                                                                        </a>
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                            <hr />
                                                            <div
                                                                className="gi-single-price-stoke pt-[15px] pb-[15px] flex flex-wrap justify-between items-center">
                                                                <div className="gi-single-price flex flex-col">
                                                                    <div
                                                                        className="final-price mb-[8px] text-[#3B4959] font-semibold text-[22px] leading-[32px] font-Poppins tracking-[0] max-[1199px]:text-[20px]">
                                                                        Rs.{product_details_list?.product?.purchase_price}/-
                                                                    </div>
                                                                </div>
                                                                <div className="gi-single-stoke flex flex-col">
                                                                    <span
                                                                        className="gi-single-sku mb-[8px] text-[16px] px-4 rounded-full leading-[32px] bg-[#F6EAD9] text-[#443A2E] tracking-[0.02rem]">SKU:{product_details_list?.product?.sku}</span>
                                                                </div>
                                                                <div className="gi-single-stoke flex flex-col">
                                                                    <span
                                                                        className="gi-single-sku mb-[8px] text-[16px] px-4 rounded-full leading-[32px] bg-[#DADADA] text-[#443A2E] tracking-[0.02rem]">Origin:{product_details_list?.product?.origin?.name}</span>
                                                                </div>
                                                                <div className="gi-single-stoke flex flex-col">
                                                                    {
                                                                        product_details_list?.product?.current_stock > 0 ? (
                                                                            <span className="gi-single-ps-title leading-[1] text-[16px] text-[#5caf90] tracking-[0]">
                                                                                IN STOCK
                                                                            </span>
                                                                        ) : (
                                                                            <span className="gi-single-ps-title leading-[1] text-[16px] text-[#ff0000] tracking-[0]">
                                                                                OUT OF STOCK
                                                                            </span>
                                                                        )
                                                                    }
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="gi-single-list pt-5">
                                                                <div className="certification flex flex-row flex-wrap">
                                                                    <div className="form-group w-[50%] pr-3">
                                                                        <span className="text-sm">Certification</span>
                                                                        <select name='certificate' onChange={(e) => set_Certificate(e.target.value)}
                                                                            className="w-full mt-2 mb-[15px] px-[15px] bg-transparent border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] outline-[0] h-[45px]">
                                                                            <option value="">-- Select ---</option>
                                                                            {
                                                                                product_details_list?.certificate?.map((certification_result) => {
                                                                                    return (
                                                                                        <option value={certification_result?.id}>{certification_result?.name}</option>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </select>
                                                                    </div>
                                                                    <div className="form-group w-[50%]">
                                                                        <span className="text-sm">Pooja / Energization</span>
                                                                        <select name='energization' onChange={(e) => set_Energization(e.target.value)}
                                                                            className="w-full mt-2 mb-[15px] px-[15px] bg-transparent border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] outline-[0] h-[45px]">
                                                                            <option value="">-- Select ---</option>
                                                                            {
                                                                                product_details_list?.energization?.map((energization_result) => {
                                                                                    return (
                                                                                        <option value={energization_result?.id}>{energization_result?.name}</option>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {
                                                               ( product_details_list?.product_type?.length > 0 && product_details_list?.product
                                                                ?.cat_id == "1") && (
                                                                    <div className="gi-pro-variation mb-[20px] pb-[5px]">
                                                                        <div className="gi-pro-variation-inner flex-col mb-[15px] flex">
                                                                            <span className="text-sm">Select for Ring / Pendant / Bracelet ?</span>
                                                                            <div className="gi-pro-variation-content">
                                                                                <ul className="grid grid-cols-2 gap-4 mt-4">
                                                                                    {
                                                                                        product_details_list?.product_type?.map((product_type_result) => {
                                                                                            return (
                                                                                                <>
                                                                                                    <li onClick={() => set_Active_Product_Type(product_type_result?.id)}
                                                                                                        className={`${active_product_type == product_type_result?.id ? "bg-blue-50" : null} h-[70px] px-5 font-normal transition-all duration-[0.3s] ease-in-out
                                                                                                     cursor-pointer flex items-center justify-between text-[12px] leading-[22px]
                                                                                                      border-[1px] border-solid border-[#eee] float-left rounded-[5px]`}>
                                                                                                        <div className="block">
                                                                                                            <div className="w-full">{product_type_result?.name}</div>
                                                                                                        </div>
                                                                                                        <div>
                                                                                                            {
                                                                                                                product_type_result?.image != null ? (
                                                                                                                    <img src={product_type_result?.image} alt="" />
                                                                                                                ) : (
                                                                                                                    <img src={Common_Images_Transport?.diamond_icon} alt="" />
                                                                                                                )
                                                                                                            }
                                                                                                        </div>
                                                                                                    </li>
                                                                                                </>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                            <hr />
                                                            <div className="gi-single-qty mt-5 w-full">
                                                                {/* <p className="text-[#757575] font-normal">Expected Dispatch Date: <span
                                                                    className="text-[#000]">13 JUL, 2024</span></p> */}
                                                                <div className="gi-single-cart">
                                                                    <button type="button" onClick={() => Handle_Add_To_cart(product_details_list?.product?.id, product_details_list?.product?.purchase_price)}
                                                                        className="btn bg-[#9F2225] flex h-[40px] leading-[50px] text-center text-[14px] mt-4 py-[10px] px-[15px] uppercase justify-center bg-[#4b5966] text-[#fff] transition-all duration-[0.3s] ease-in-out relative rounded-[5px] items-center min-w-[160px] font-semibold tracking-[0.02rem] border-[0] hover:bg-[#333] hover:text-[#fff]"><i
                                                                            className="fi-rr-shopping-bag mr-3 transition-all duration-[0.3s] ease-in-out leading-[0]"></i>
                                                                        Add To Cart</button>
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
                                                    <div className="gi-single-pro-tab-nav w-full m-auto relative block text-center float-left">
                                                        <ul className="nav-tabs inline-block float-left  border-b-2 border-[#eee] w-full"
                                                            id="singleprotab">
                                                            <li className={`mr-[5px] ml-auto inline-block float-left ${active_tab == "0" ? "active" : null}`} onClick={() => set_Active_Tab("0")}>
                                                                <a
                                                                    className="leading-[24px] py-[8px] px-[28px] m-[0] text-[15px] font-medium relative transition-all duration-[300ms] linear inline-block cursor-pointer leading-[0] hover:bg-[#9F2225] hover:text-[#fff] hover:border-[#9F2225]">
                                                                    Description
                                                                </a>
                                                            </li>
                                                            {/* <li className={`mr-[5px] ml-auto inline-block float-left ${active_tab == "1" ? "active" : null}`} onClick={() => set_Active_Tab("1")}>
                                                                <a
                                                                    className="capitalize leading-[24px] py-[8px] px-[28px] m-[0] text-[15px] font-medium relative transition-all duration-[300ms] linear inline-block cursor-pointer text-[#4b5966] border-[#eee] leading-[0] hover:bg-[#9F2225] hover:text-[#fff] hover:border-[#9F2225]">
                                                                    More Information
                                                                </a>
                                                            </li> */}
                                                        </ul>
                                                    </div>
                                                    <div className="tab-content transition-all w-full overflow-hidden bg-[#fff] text-left text-[#202020] text-[18px] tracking-[0] leading-[1.6] rounded-[5px]"
                                                        id="singleTabContent">
                                                        {
                                                            active_tab == "0" && (
                                                                <Product_Description data={product_details_list} />
                                                            )
                                                        }
                                                        {/* {
                                                            active_tab == "1" && (
                                                                <Product_More_Information data={product_details_list} />
                                                            )
                                                        } */}
                                                    </div>
                                                </div>
                                                {/* <--------- Customer Feedback -----------------> */}
                                                <Customer_Feedback data={product_details_list}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- related product  --> */}
                        {/* <Similar_Product /> */}
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

export default Product_Details