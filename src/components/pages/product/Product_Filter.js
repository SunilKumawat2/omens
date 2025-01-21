import React, { useState } from 'react'

const Product_Filter = () => {
    const [isOpen, setIsOpen] = useState(true); // Toggle state for the accordion

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="gi-shop-sidebar md:sticky top-[24px] min-[992px]:w-[25%] min-[768px]:w-full w-full max-[991px]:mt-[30px] px-[12px]">
            <div id="shop_sidebar">
                <div className="gi-sidebar-wrap p-[15px] rounded-[5px] shadow-lg">
                    {/* <!-- Sidebar Category Block --> */}
                    <div className="gi-sidebar-block mb-4">
                        <div className="gi-sb-title border-b border-gray-200 pb-4">
                            <div className="text-red-700 text-lg mb-4 flex justify-between items-center cursor-pointer">
                                <span>
                                    <i className="fi-rr-filter mr-2"></i> Filter
                                </span>
                                <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>

                                </span>
                            </div>
                            <h3 className="gi-sidebar-title font-semibold text-gray-700 flex justify-between text-[17px] leading-tight" onClick={toggleAccordion}>
                                Origin  ▼
                            </h3>
                        </div>

                        {/* Accordion Content */}
                        {isOpen && (
                            <div className="gi-sb-block-content mt-4">
                                <ul>
                                    {[
                                        "Shri Lanka",
                                        "Thailand",
                                        "Myanmar",
                                        "Madagascar",
                                        "India",
                                        "Ethiopia",
                                        "Africa",
                                        "Cambodia",
                                        "Australia",
                                        "Nigeria",
                                    ].map((country, index) => (
                                        <li key={index}>
                                            <div className="gi-sidebar-block-item py-4 relative flex">
                                                <input
                                                    type="checkbox"
                                                    className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                                                />
                                                <a
                                                    href="#"
                                                    className="w-full text-gray-500 text-sm leading-5 font-normal capitalize flex justify-between pl-8"
                                                >
                                                    <span>{country}</span>
                                                </a>
                                                <span className="checked absolute top-1/2 left-0 h-4 w-4 bg-white border border-gray-200 transition-transform transform -translate-y-1/2 rounded"></span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    {/* <!-- Sidebar Shape Block --> */}
                    <div className="gi-sidebar-block mb-[15px]">
                        <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                            <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">Shape</h3>
                        </div>
                        <div className="gi-sb-block-content mt-[15px] hidden">
                            <ul>
                                <li>
                                    <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                        <input type="checkbox" className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]" checked />
                                        <a href="javascript:void(0)" className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">
                                            <span className="flex"><img className="w-[20px] h-[20px] mr-[7px] text-[17px]" src="assets/img/gemston-category/heart.png" alt="" />Heart</span>
                                        </a>
                                        <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                        <input type="checkbox" className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]" />
                                        <a href="javascript:void(0)" className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">
                                            <span className="flex"><img className="w-[20px] h-[20px] mr-[7px] text-[17px]" src="assets/img/gemston-category/cushion.png" alt="" />Cushion</span>
                                        </a>
                                        <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                        <input type="checkbox" className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]" />
                                        <a href="javascript:void(0)" className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">
                                            <span className="flex"><img className="w-[20px] h-[20px] mr-[7px] text-[17px]" src="assets/img/gemston-category/cushion-rect.png" alt="" />Cushion Rectangular</span>
                                        </a>
                                        <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                        <input type="checkbox" className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]" />
                                        <a href="javascript:void(0)" className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">
                                            <span className="flex"><img className="w-[20px] h-[20px] mr-[7px] text-[17px]" src="assets/img/gemston-category/oval.png" alt="" />Oval</span>
                                        </a>
                                        <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                        <input type="checkbox" className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]" />
                                        <a href="javascript:void(0)" className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">
                                            <span className="flex"><img className="w-[20px] h-[20px] mr-[7px] text-[17px]" src="assets/img/gemston-category/pear.png" alt="" />Pear</span>
                                        </a>
                                        <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                        <input type="checkbox" className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]" />
                                        <a href="javascript:void(0)" className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">
                                            <span className="flex"><img className="w-[20px] h-[20px] mr-[7px] text-[17px]" src="assets/img/gemston-category/round.png" alt="" />Round</span>
                                        </a>
                                        <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                        <input type="checkbox" className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]" />
                                        <a href="javascript:void(0)" className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">
                                            <span className="flex"><img className="w-[20px] h-[20px] mr-[7px] text-[17px]" src="assets/img/gemston-category/square.png" alt="" />Square</span>
                                        </a>
                                        <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    {/* <!-- Sidebar Color item --> */}
                    <div className="gi-sidebar-block mb-[15px] color-block gi-sidebar-block-clr">
                        <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                            <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">Color</h3>
                        </div>
                        <div className="gi-sb-block-content mt-[20px] hidden">
                            <ul>
                                <li>
                                    <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                        <input type="checkbox" value="" className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]" checked />
                                        <a href="#" className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">Vivid lue</a>
                                        <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                        <input type="checkbox" value="" className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]" checked />
                                        <a href="#" className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">Deep Blue</a>
                                        <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                        <input type="checkbox" value="" className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]" checked />
                                        <a href="#" className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">Pastel Blue</a>
                                        <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="gi-sidebar-block mb-[15px] color-block gi-sidebar-block-clr">
                        <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                            <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">Treatment</h3>
                        </div>
                        <div className="gi-sb-block-content mt-[20px] hidden">
                            <ul>
                                <li>
                                    <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                        <input type="checkbox" value="" className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]" checked />
                                        <a href="#" className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">Unheated And Untreated</a>
                                        <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                        <input type="checkbox" value="" className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]" checked />
                                        <a href="#" className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">Glass-Filled</a>
                                        <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                        <input type="checkbox" value="" className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]" checked />
                                        <a href="#" className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">Heated</a>
                                        <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                                        <input type="checkbox" value="" className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]" checked />
                                        <a href="#" className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]">Beryllium Diffused</a>
                                        <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden"></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Sidebar Price Block --> */}
                    <div className="gi-sidebar-block mb-[15px]">
                        <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                            <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">Filter By Price</h3>
                        </div>
                        <div className="gi-sb-block-content gi-price-range-slider es-price-slider mt-[20px] hidden">
                            <div className="gi-price-filter flex justify-between flex-col">
                                <div className="gi-price-input mb-[15px] p-[10px] flex justify-center items-center rounded-[5px] bg-[#f8f8fb]">
                                    <label className="filter__label text-[14px] text-[#777] flex justify-center items-center">
                                        From
                                        <input type="text" className="filter__input rounded-[5px] h-[30px] border-[0] p-[0] max-w-[48px] leading-[30px] bg-[#fff] text-center text-[14px] text-[#777] outline-[0]" />
                                    </label>
                                    <span className="gi-price-divider relative border-b-[1px] border-solid border-[#777] w-[10px] h-[1px] mx-[10px]"></span>
                                    <label className="filter__label text-[14px] text-[#777] flex justify-center items-center">
                                        To<input type="text" className="filter__input rounded-[5px] h-[30px] border-[0] p-[0] max-w-[48px] leading-[30px] bg-[#fff] text-center text-[14px] text-[#777] outline-[0]" />
                                    </label>
                                </div>
                                <div id="gi-sliderPrice" className="filter__slider-price" data-min="0" data-max="250" data-step="10"></div>
                            </div>
                        </div>
                    </div>

                    <div className="gi-sidebar-block mb-[15px] color-block gi-sidebar-block-clr">
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
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product_Filter