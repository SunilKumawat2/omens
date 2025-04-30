import React, {useState } from 'react'
import Loader from '../../../loader/Loader';
import Common_Images_Transport from '../common_imges_transport/Common_Images_Transport';
import { Link } from 'react-router-dom';

const Mobile_Toggle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [is_loading, set_Is_Loading] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleOffcanvas = () => {
        setIsOpen(!isOpen);
    };
    const handleDropdown=()=>{
        setIsDropdownOpen(!isDropdownOpen)
    }
    return (
        <div>
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <>

                        <Link to="javascript:void(0)"
                            onClick={toggleOffcanvas}
                            className="gi-header-btn gi-site-menu-icon absolute relative transition-all duration-[0.3s] ease-in-out relative flex text-[#fff] w-[auto] items-center">
                            <i className="fi-rr-menu-burger text-[24px] leading-[17px]"></i>
                        </Link>
                        <div
                            className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity
                                 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                            onClick={toggleOffcanvas}></div>
                        <div
                            className={`fixed top-0 left-0 w-96 h-full bg-white shadow-lg z-50 p-0
    transform transition-transform duration-300 ease-in-out 
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`} // changed translate-x-full to -translate-x-full for left-side closing
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex justify-between p-4 items-center">
                                    <span className="menu_title flex items-center text-[16px] text-[#4b5966] font-semibold"> <img
                                        src={Common_Images_Transport?.logo} alt="" /> </span>
                                    <button
                                        onClick={toggleOffcanvas}
                                        className="self-end text-gray-600 hover:text-gray-900"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="gi-menu-inner">
                                    <div className="gi-menu-content">
                                        <ul>
                                            <li className="dropdown relative drop-list">
                                                <Link to="/free-kundli"
                                                    className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Free
                                                    Kundli</Link>

                                            </li>

                                            <li className="dropdown relative">
                                                <Link to="/daily-horoscope" 
                                                    className="dropdown-arrow mb-[12px] p-[12px]  capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium flex justify-between"><span>Daily
                                                    Horoscope</span> <span onClick={handleDropdown}>+</span></Link>
                                                <ul
                                                    className={`sub-menu w-full min-w-[auto] p-0 mb-[10px] static  visible transition-none opacity-[1] ${!isDropdownOpen && "hidden"}`}>
                                                    <li><Link to="#"
                                                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Horoscope
                                                        2024</Link></li>
                                                    <li><Link to="#"
                                                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Today's
                                                        Horoscope</Link></li>
                                                    <li><Link to="#"
                                                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Weekly
                                                        Horoscope</Link></li>
                                                    <li><Link to="#"
                                                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Monthly
                                                        Horoscope</Link></li>
                                                    <li><Link to="#"
                                                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Yearly
                                                        Horoscope</Link></li>
                                                    <li><Link to="#"
                                                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Daily
                                                        Horoscope</Link></li>
                                                    <li><Link to="#"
                                                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Tomorrow's
                                                        Horoscope</Link></li>
                                                    <li><Link to="#"
                                                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Yesterday's
                                                        Horoscope</Link></li>
                                                    <li><Link to="#"
                                                        className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Chinese
                                                        Horoscope</Link></li>
                                                </ul>
                                            </li>
                                            <li className="relative">
                                                <Link to="/daily-panchang"
                                                    className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Daily
                                                    Panchang</Link>

                                            </li>

                                            <li className="relative">
                                                <Link to="/love-calculator"
                                                    className="dropdown-arrow p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Love
                                                    calculator</Link>

                                            </li>
                                            <li className="relative mt-3">
                                                <Link to="/kundli-matching"
                                                    className="dropdown-arrow p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Kundli
                                                    Matching</Link>

                                            </li>
                                            <li className="relative mt-3">
                                                <Link to="/nakshatras-constellations"
                                                    className="dropdown-arrow p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Nakshtra
                                                    Mall</Link>

                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header-res-lan-curr">
                                        {/* <!-- Social Start --> */}
                                        <div className="header-res-social mt-[30px]">
                                            <div className="header-top-social">
                                                <ul className="flex flex-row justify-center">
                                                    <li
                                                        className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
                                                        <Link to="#"><i className="gicon gi-facebook text-[#fff]"></i></Link>
                                                    </li>
                                                    <li
                                                        className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
                                                        <Link to="#"><i className="gicon gi-twitter text-[#fff]"></i></Link>
                                                    </li>
                                                    <li
                                                        className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
                                                        <Link to="#"><i className="gicon gi-instagram text-[#fff]"></i></Link>
                                                    </li>
                                                    <li
                                                        className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px]">
                                                        <Link to="#"><i className="gicon gi-linkedin text-[#fff]"></i></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- Social End --> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )
            }
        </div >
    )
}

export default Mobile_Toggle