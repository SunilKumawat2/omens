import React, { useEffect, useState } from 'react'
import Header from '../../common/header/Header'
import Product_Filter from './Product_Filter'
import Category_Main_Banner from '../category/category_main_banner/Category_Main_Banner'
import Footer from '../../common/footer/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import { Add_To_Fav, Get_Product_List_Category_wise, Product_List_Data_Category_wise } from '../../../api/category_product/Category_Product'
import Loader from '../../../loader/Loader'
import { IMG_BASE_URL } from '../../../config/Config';
import { User_Authentication } from '../../../user_authentication/User_Authentication'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Common_Images_Transport from '../../common/common_imges_transport/Common_Images_Transport'

const Product_List = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { sub_category_result, category_id } = location.state || {};
    const subcategory_id = sub_category_result?.id;
    const [is_loading, set_set_Is_Loading] = useState(false)
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const Get_user_is_active = localStorage.getItem("user_is_active")
    const productsPerPage = 12;
    const [is_Open_Origin, set_Is_Open_Origin] = useState(false);
    const [is_Open_Shape, set_Is_Open_Shape] = useState(false);
    const [is_Open_Color, set_Is_Open_Color] = useState(false);
    const [is_Open_treatment, set_Is_Open_treatment] = useState(false);
    const [selectedOrigins, setSelectedOrigins] = useState([]);
    const [selectedShape, setSelectedShape] = useState([]);
    const [selectedColor, setSelectedColor] = useState([]);
    const [selectedTreatment, setSelectedTreatment] = useState([]);
    const [minPrice, setMinPrice] = useState("0");
    const [maxPrice, setMaxPrice] = useState("");
    const get_category_list_result_slug = localStorage.getItem("category_list_result_slug")

    // Calculate total pages safely
    const totalPages = Math.ceil(products?.product?.length / productsPerPage) || 1;

    // Calculate the products to display on the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProduct = products?.product?.slice(startIndex, startIndex + productsPerPage) || [];

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

    const toggle_origin_accordion = () => {
        set_Is_Open_Origin(!is_Open_Origin);
    };

    const toggle_Shape_accordion = () => {
        set_Is_Open_Shape(!is_Open_Shape);
    };

    const toggle_color_accordion = () => {
        set_Is_Open_Color(!is_Open_Color);
    };

    const toggle_treatment_accordion = () => {
        set_Is_Open_treatment(!is_Open_treatment);
    };

    // <------------ handle origin Checkbox Change ----------->
    const handle_origin_Checkbox_Change = (originName) => {
        setSelectedOrigins((prevSelected) =>
            prevSelected?.includes(originName)
                ? prevSelected?.filter((name) => name !== originName)
                : [...prevSelected, originName]
        );
    };
    // Comma-separated list of selected IDs
    const selectedOriginsString = selectedOrigins.join(',');

    // <------------ handle Shape Checkbox Change ----------->
    const handle_shape_Checkbox_Change = (ShapeName) => {
        setSelectedShape((prevSelected) =>
            prevSelected?.includes(ShapeName)
                ? prevSelected?.filter((name) => name !== ShapeName)
                : [...prevSelected, ShapeName]
        );
    };
    const selectedShapeString = selectedShape.join(',');

    // <------------ handle Shape Checkbox Change ----------->
    const handle_color_Checkbox_Change = (ColorName) => {
        setSelectedColor((prevSelected) =>
            prevSelected?.includes(ColorName)
                ? prevSelected?.filter((name) => name !== ColorName)
                : [...prevSelected, ColorName]
        );
    };
    const selectedColorString = selectedColor.join(',');

    // <------------ handle Shape Checkbox Change ----------->
    const handle_treatment_Checkbox_Change = (treatmentName) => {
        setSelectedTreatment((prevSelected) =>
            prevSelected?.includes(treatmentName)
                ? prevSelected?.filter((name) => name !== treatmentName)
                : [...prevSelected, treatmentName]
        );
    };
    const selectedTreatmentString = selectedTreatment.join(',');

    // Handle changes to price inputs
    const handlePriceChange = (type, value) => {
        const price = Math.max(0, Math.min(100000, Number(value)));
        if (type === "min") setMinPrice(Math.min(price, maxPrice));
        if (type === "max") setMaxPrice(Math.max(price, minPrice));
    };
    // <--------- Add To Favorite --------->
    const Handle_add_to_favorite = async (id, cat_id, sub_id) => {
        set_set_Is_Loading(true)
        const data = {
            cat_id: cat_id,
            subcat_id: sub_id,
            product_id: id
        }
        try {
            const token = User_Authentication();
            if (!token) {
                toast.error("User not login here")
                set_set_Is_Loading(false);
                throw new Error("User token not found");
            }
            if (!Get_user_is_active) {
                set_set_Is_Loading(false);
                toast.error("User not login here")
                return
            }
            const response = await Add_To_Fav(data, { Authorization: `Bearer ${token}` })
            console.log("response", response)
            if (response?.data?.status == "200") {
                Handle_Get_Product_List({ Authorization: `Bearer ${token}` })
                set_set_Is_Loading(false)
            }
            else if (response?.response?.data?.status == "500") {
                set_set_Is_Loading(false)
            }
        }
        catch (error) {
            console.log("error", error)
            set_set_Is_Loading(false)
        }
    }

    const Handle_Get_Product_List = async () => {
        set_set_Is_Loading(true);
        try {
            if (Get_user_is_active) {
                const token = User_Authentication();
                if (!token) {
                    set_set_Is_Loading(false);
                    throw new Error("User token not found");
                }
                const response = await Get_Product_List_Category_wise(
                    {
                        category_id, subcategory_id, origin_id: selectedOriginsString,
                        shape_id: selectedShapeString, color_id: selectedColorString,
                        treatment_id: selectedTreatmentString, min_amount: minPrice, max_amount: maxPrice
                    },
                    { Authorization: `Bearer ${token}` }
                );
                console.log("products_products_111111", response);
                setProducts(response?.data?.data);
            } else {
                const response = await Product_List_Data_Category_wise({
                    category_id, subcategory_id,
                    origin_id: selectedOriginsString, shape_id: selectedShapeString, color_id: selectedColorString,
                    treatment_id: selectedTreatmentString, min_amount: minPrice, max_amount: maxPrice
                });
                console.log("products_products_222222", response);
                setProducts(response?.data?.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            set_set_Is_Loading(false);
        }
    }

    useEffect(() => {
        Handle_Get_Product_List();
    }, [Get_user_is_active, category_id, subcategory_id, selectedOriginsString, selectedShapeString, selectedColorString, selectedTreatmentString, minPrice, maxPrice]);


    return (
        <>
            {/* <--------- Header section's ------> */}
            <Header />
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <>
                        {/* <----------- Category_Main_Banner section's------> */}
                        <Category_Main_Banner data={sub_category_result} />

                        <section className="gi-category py-[40px] max-[767px]:py-[0px]">
                            <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                                <div className="flex flex-wrap w-full">
                                    {/* <!-- Sidebar Area Start --> */}
                                    <div className="gi-shop-sidebar md:sticky top-[24px] min-[992px]:w-[25%] min-[768px]:w-full w-full max-[991px]:mt-[30px] px-[12px]">
                                        <div id="shop_sidebar">
                                            <div className="gi-sidebar-wrap p-[15px] rounded-[5px] shadow-lg">
                                                {/* <!-- Sidebar Category Block --> */}
                                                <div className="gi-sidebar-block mb-4 cursor-pointer">
                                                    <div className="gi-sb-title border-b border-gray-200 pb-4">
                                                        <div className="text-red-700 text-lg mb-4 flex justify-between items-center cursor-pointer">
                                                            <span><i className="fi-rr-filter mr-2"></i> Filter</span>
                                                            <span className={`transform transition-transform ${is_Open_Origin ? "rotate-180" : ""}`}></span>
                                                        </div>
                                                        <h3 className="gi-sidebar-title font-semibold text-gray-700 flex justify-between text-[17px] leading-tight" onClick={toggle_origin_accordion}>Origin  <i class="gicon gi-angle-down"></i></h3>
                                                    </div>
                                                    {/* Accordion Content */}
                                                    {is_Open_Origin && (
                                                        <div className="gi-sb-block-content mt-4">
                                                            <ul>
                                                                {
                                                                    products?.filter_by?.origin?.map((origin_result) => {
                                                                        return (
                                                                            <li>
                                                                                <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        className="w-full h-full absolute opacity-0 cursor-pointer z-10"
                                                                                        checked={selectedOrigins.includes(origin_result?.id)}
                                                                                        onChange={() => handle_origin_Checkbox_Change(origin_result?.id)}
                                                                                    />
                                                                                    <p className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">
                                                                                        <span className="flex">{origin_result?.name}</span>
                                                                                    </p>
                                                                                    <span className={`checked absolute top-1/2 left-0 h-4 w-4 bg-white border border-gray-200 transition-transform transform -translate-y-1/2 rounded ${selectedOrigins.includes(origin_result?.id) ? "bg-red-500 border-red-500" : ""}`}></span>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }

                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* <!-- Sidebar Shape Block --> */}
                                                <div className="gi-sidebar-block mb-[15px] cursor-pointer">
                                                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                                                        <span className={`transform transition-transform ${is_Open_Shape ? "rotate-180" : ""}`}></span>
                                                        <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full
                                                                 flex justify-between font-Poppins text-[17px] leading-[1.2]" onClick={toggle_Shape_accordion}>Shape <i class="gicon gi-angle-down"></i></h3>
                                                    </div>
                                                    {is_Open_Shape && (
                                                        <div className="gi-sb-block-content mt-[15px]">
                                                            <ul>
                                                                {
                                                                    products?.filter_by?.shape?.map((shape_result) => {
                                                                        return (
                                                                            <li>
                                                                                <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        className="w-full h-full absolute opacity-0 cursor-pointer z-10"
                                                                                        checked={selectedShape.includes(shape_result?.id)}
                                                                                        onChange={() => handle_shape_Checkbox_Change(shape_result?.id)}
                                                                                    />
                                                                                    <p className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">
                                                                                        <span className="flex">{shape_result?.name}</span>
                                                                                    </p>
                                                                                    <span className={`checked absolute top-1/2 left-0 h-4 w-4 bg-white border border-gray-200 transition-transform transform -translate-y-1/2 rounded ${selectedOrigins.includes(shape_result?.id) ? "bg-red-500 border-red-500" : ""}`}></span>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }

                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* <!-- Sidebar Color item --> */}
                                                <div className="gi-sidebar-block mb-[15px] cursor-pointer">
                                                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                                                        <span className={`transform transition-transform ${is_Open_Color ? "rotate-180" : ""}`}></span>
                                                        <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full
                                                                 flex justify-between font-Poppins text-[17px] leading-[1.2]" onClick={toggle_color_accordion}>Color <i class="gicon gi-angle-down"></i></h3>
                                                    </div>
                                                    {is_Open_Color && (
                                                        <div className="gi-sb-block-content mt-[15px]">
                                                            <ul>
                                                                {
                                                                    products?.filter_by?.color?.map((color_result) => {
                                                                        return (
                                                                            <li>
                                                                                <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        className="w-full h-full absolute opacity-0 cursor-pointer z-10"
                                                                                        checked={selectedColor.includes(color_result?.id)}
                                                                                        onChange={() => handle_color_Checkbox_Change(color_result?.id)}
                                                                                    />
                                                                                    <p className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">
                                                                                        <span className="flex">{color_result?.name}</span>
                                                                                    </p>
                                                                                    <span className={`checked absolute top-1/2 left-0 h-4 w-4 bg-white border border-gray-200 transition-transform transform -translate-y-1/2 rounded ${selectedColor.includes(color_result?.id) ? "bg-red-500 border-red-500" : ""}`}></span>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }

                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="gi-sidebar-block mb-[15px] color-block gi-sidebar-block-clr cursor-pointer">
                                                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                                                        <span className={`transform transition-transform ${is_Open_treatment ? "rotate-180" : ""}`}></span>
                                                        <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full
                                                                 flex justify-between font-Poppins text-[17px] leading-[1.2]" onClick={toggle_treatment_accordion}>Treatment <i class="gicon gi-angle-down"></i></h3>
                                                    </div>
                                                    {is_Open_treatment && (
                                                        <div className="gi-sb-block-content mt-[15px]">
                                                            <ul>
                                                                {
                                                                    products?.filter_by?.treatment?.map((treatment_result) => {
                                                                        return (
                                                                            <li>
                                                                                <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        className="w-full h-full absolute opacity-0 cursor-pointer z-10"
                                                                                        checked={selectedTreatment.includes(treatment_result?.id)}
                                                                                        onChange={() => handle_treatment_Checkbox_Change(treatment_result?.id)}
                                                                                    />
                                                                                    <p className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">
                                                                                        <span className="flex">{treatment_result?.name}</span>
                                                                                    </p>
                                                                                    <span className={`checked absolute top-1/2 left-0 h-4 w-4 bg-white border border-gray-200 transition-transform
                                                                                         transform -translate-y-1/2 rounded ${selectedTreatment.includes(treatment_result?.id) ? "bg-red-500 border-red-500" : ""}`}></span>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }

                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                                {/* <!-- Sidebar Price Block --> */}
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

                                                {/* <div className="gi-sidebar-block mb-[15px] color-block gi-sidebar-block-clr">
                                                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                                                        <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">Cutting Style</h3>
                                                    </div>
                                                    <div className="gi-sb-block-content mt-[20px] hidden">
                                                        <ul>
                                                            <li>
                                                                <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                                                    <input type="checkbox" value="" className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]" checked />
                                                                    <a href="#" className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">Faceted</a>
                                                                    <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                                                    <input type="checkbox" value="" className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]" checked />
                                                                    <a href="#" className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">Cabochon</a>
                                                                    <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div> */}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="gi-shop-rightside min-[992px]:w-[75%] max-[767px]:pt-[30px] min-[992px]:w-[75%] min-[768px]:w-full w-full px-[12px]">
                                        <div className="gi-pro-list-top md:flex items-center justify-between text-[14px] mb-[15px]">
                                            <div className="min-[768px]:w-[50%] w-full gi-grid-list">
                                                <h2 className="text-[#4b5966] block text-[22px] max-[767px]:text-[18px] leading-[33px] font-semibold mb-[10px] mx-auto leading-[0] capitalize">List of All {sub_category_result?.title}</h2>
                                            </div>
                                        </div>
                                        {/* <!-- Shop content Start --> */}
                                        {
                                            currentProduct?.length > 0 ? (
                                                <div className="shop-pro-content">
                                                    <div className="shop-pro-inner mx-[-12px]">
                                                        <div className="flex flex-wrap w-full">
                                                            {
                                                                currentProduct?.map((product_list_result) => {
                                                                    const isOutOfStock = product_list_result?.current_stock <= 0;
                                                                    return (
                                                                        <div className={`min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] gi-product-box max-[575px]:w-[50%] max-[575px]:mx-auto pro-gl-content mb-6 ${isOutOfStock ? "opacity-50 pointer-events-none" : ""}`}>
                                                                            <div className="gi-product-content h-full">
                                                                                <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out overflow-hidden rounded-[5px] shadow-xl pt-4">
                                                                                    <div className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
                                                                                        <div className="gi-pro-image overflow-hidden">
                                                                                            {
                                                                                                product_list_result?.is_favourite === true ? (
                                                                                                    <span className="flags flex flex-col p-[0] cursor-pointer uppercase absolute top-[10px] right-[10px] z-[2]">
                                                                                                        <img className="main-image w-[100%] h-[25px] transition-all duration-[0.3s] ease delay-[0s]"
                                                                                                            src={Common_Images_Transport?.wish_list} alt="Product"
                                                                                                            onClick={() => Handle_add_to_favorite(product_list_result?.id, product_list_result?.cat_id, product_list_result?.sub_id)} />
                                                                                                        {/* <i onClick={() => Handle_add_to_favorite(product_list_result?.id, product_list_result?.cat_id, product_list_result?.sub_id)}
                                                                                                                className="fi-rr-heart transition-all text-[22px]  duration-[0.3s] text-red-500 ease-in-out text-[#777] leading-[10px]"></i> */}
                                                                                                    </span>
                                                                                                ) : (
                                                                                                    <span className="flags flex flex-col p-[0] cursor-pointer uppercase absolute top-[10px] right-[10px] z-[2]">
                                                                                                        <i onClick={() => Handle_add_to_favorite(product_list_result?.id, product_list_result?.cat_id, product_list_result?.sub_id)}
                                                                                                            className="fi-rr-heart transition-all text-[22px] duration-[0.3s]  ease-in-out text-[#777] leading-[10px]"></i>
                                                                                                    </span>
                                                                                                )
                                                                                            }
                                                                                            <a href="#" className="image productimg7 relative block overflow-hidden pointer-events-none">
                                                                                                <img className="main-image w-[100%] h-[200px] transition-all duration-[0.3s] ease delay-[0s]"
                                                                                                    src={`${IMG_BASE_URL}${product_list_result?.single_image?.image_url}`} alt="Product" />
                                                                                            </a>
                                                                                            {isOutOfStock && (
                                                                                                <div className="absolute top-2 right-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                                                                                                    Out of Stock
                                                                                                </div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="gi-pro-content h-full p-[30px] pt-[0] relative z-[10] flex flex-col text-center">
                                                                                        <h5 className="gi-pro-stitle mt-4 font-normal text-[#0F1726] text-[16px] font-semibold leading-[1.2] capitalize truncate whitespace-nowrap overflow-hidden">
                                                                                            {product_list_result?.name}
                                                                                        </h5>

                                                                                        <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                                                                                            <span className="gi-price">
                                                                                                <span className="new-price text-[#000] text-[14px]">
                                                                                                    <span className="ml-3 font-bold text-[#4C5159]">SKU :</span>
                                                                                                    {product_list_result?.sku}
                                                                                                </span>
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="flex flex-col mt-2 justify-center gap-4 items-center">
                                                                                            <span className="new-price text-[#000] font-medium text-[16px]">
                                                                                                Rs.{product_list_result?.purchase_price}
                                                                                            </span>
                                                                                            <button onClick={() => {
                                                                                                if (!isOutOfStock) { navigate(`/product/${product_list_result?.slug}`, { state: { product_list_result, category_id: category_id, subcategory_id: subcategory_id } }); }
                                                                                            }}
                                                                                                type="button"
                                                                                                className={`text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 
                                                                                                     focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:border-gray-600
                                                                                                     dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 ${isOutOfStock ? "cursor-not-allowed" : ""
                                                                                                    }`} disabled={isOutOfStock}>
                                                                                                {isOutOfStock ? "Not Available" : "View More"}
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                })
                                                            }

                                                        </div>
                                                    </div>
                                                    {/* <!-- Pagination Start --> */}
                                                    <div className="gi-pro-pagination pt-[15px] pb-[15px] flex justify-between items-center border-t-[1px] border-solid border-[#eee] max-[575px]:flex-col">
                                                        <span className="text-[14px] text-[#777] max-[575px]:mb-[10px]">Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, products?.product?.length)} of {products?.product?.length} Product(s)</span>
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
                                            ) : (
                                                <div className="gi-product-content h-full">
                                                    <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer overflow-hidden rounded-[5px] shadow-xl pt-4">
                                                        <div className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
                                                            <div className="gi-pro-image overflow-hidden m-[10]">
                                                                <h1>Product not available at the moment. Please check back later</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }


                                    </div>

                                </div>
                            </div>
                        </section>


                        {/*  */}
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default Product_List