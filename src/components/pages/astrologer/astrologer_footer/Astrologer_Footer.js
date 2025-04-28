import React, { useEffect, useState } from 'react'
import { Global_Settings } from "../../../../api/global/Global"
import { IMG_BASE_URL } from '../../../../config/Config';
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport';
import { Link } from 'react-router-dom';

const Astrologer_Footer = () => {
    const [get_settings, setGet_Settings] = useState({});

    useEffect(() => {
        const Handle_Get_settings = async () => {
            try {
                const response = await Global_Settings();
                setGet_Settings(response?.data?.data?.setting)
            } catch (error) {
                console.log("error", error)
            }
        }
        Handle_Get_settings()
    }, [])
    return (
        <div>
            <footer className="gi-footer bg-[#0F1726]">
                <div className="footer-container">
                    <div className="footer-top py-[80px] max-[767px]:py-[60px]">
                        <div
                            className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1390px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                            <div className="w-full flex flex-wrap">
                                <div className="min-[992px]:w-[25%] px-[12px] w-full gi-footer-cat wow fadeInUp">
                                    <div className="gi-footer-widget gi-footer-company flex flex-col">
                                        {
                                            get_settings[0]?.footer_logo != null ? (
                                                <Link to="/astrologer-home">
                                                    <img src={`${IMG_BASE_URL}${get_settings[0]?.footer_logo}`}
                                                        className="gi-footer-logo max-w-[144px] max-[767px]:max-w-[130px]  mb-[30px]"
                                                        alt="footer logo" />
                                                </Link>
                                            ) : (
                                                <Link to="/astrologer-home">
                                                    <img src={Common_Images_Transport?.White_logo}
                                                        className="gi-footer-logo max-w-[144px] max-[767px]:max-w-[130px]  mb-[30px]"
                                                        alt="footer logo" />
                                                </Link>
                                            )
                                        }
                                        <p
                                            className="gi-footer-detail max-w-[400px] mb-[30px] p-[0] text-[14px] leading-[27px] font-normal text-[#999] inline-block relative max-[1199px]:text-[14px]">{get_settings[0]?.short_description}</p>
                                    </div>
                                </div>

                                <div className="min-[992px]:w-[25%] gi-footer-toggle px-[12px] w-full gi-footer-service wow fadeInUp"
                                    data-wow-delay="0.4s">
                                    <div className="gi-footer-widget">
                                        <h4 className="gi-footer-heading text-[18px] font-medium mb-[20px] text-[#fff] leading-[1.2] tracking-[0] relative block w-full">Important Links</h4>
                                        <div className="gi-footer-links gi-footer-dropdown">
                                            <ul className="align-itegi-center">
                                                <li className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/astrologer-new-Pooja-process-list" className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Book Pooja list
                                                    </Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/astrologer-post-pooja"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Pooja post
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="min-[992px]:w-[25%] gi-footer-toggle px-[12px] w-full gi-footer-cont-social mb-[-20px] wow fadeInUp"
                                    data-wow-delay="0.5s">
                                    <div className="gi-footer-contact mb-[30px] max-[991px]:mb-[0]">
                                        <div className="gi-footer-widget">
                                            <h4
                                                className="gi-footer-heading text-[18px] font-medium mb-[20px] text-[#fff] leading-[1.2] tracking-[0] relative block w-full">
                                                Corporate Info</h4>
                                            <div className="gi-footer-links gi-footer-dropdown">
                                                <ul className="align-itegi-center">
                                                    <li
                                                        className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                        <Link to="/astrologer-terms-conditions"
                                                            className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                            Terms & Conditions
                                                        </Link>
                                                    </li>
                                                    <li
                                                        className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                        <Link to="/astrologer-privacy-policy"
                                                            className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                            Privacy Policy
                                                        </Link>
                                                    </li>
                                                    {/* <li
                                                        className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                        <a href="#"
                                                            className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                            Disclaimer
                                                        </a>
                                                    </li>
                                                    <li
                                                        className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                        <a href="#"
                                                            className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                            About Us
                                                        </a>
                                                    </li>
                                                    <li
                                                        className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                        <a href="#"
                                                            className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                            Pricing Policy
                                                        </a>
                                                    </li> */}

                                                </ul>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="min-[992px]:w-[25%] gi-footer-toggle px-[12px] w-full gi-footer-cont-social mb-[-20px] wow fadeInUp"
                                    data-wow-delay="0.5s">

                                    <div className="social_media">
                                        <h4
                                            className="gi-footer-heading text-[18px] font-medium mb-[10px] text-[#fff] leading-[1.2] tracking-[0] relative block w-full pb-[15px]  max-[991px]:mb-[20px] max-[991px]:text-[14px]">
                                            Contact Us</h4>
                                        <div className="gi-footer-links gi-footer-dropdown">
                                            <ul className="align-itegi-center">
                                                <li
                                                    className="gi-footer-link gi-foo-call gap-4 m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <span className="w-[25px] flex basis-auto grow-[0] shrink-[0]">
                                                        <img src={Common_Images_Transport?.headphones_head} alt="" />
                                                    </span>
                                                    <a href="tel:+91 1234567890"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">+00
                                                        We are available 24x7 on chat support</a>
                                                </li>
                                                <li
                                                    className="gi-footer-link gi-foo-mail gap-4 m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <span className="w-[25px] flex basis-auto grow-[0] shrink-[0]">
                                                        <img src={Common_Images_Transport?.email_envelope_icon} alt="" />
                                                    </span>
                                                    <a href="mailto:example@email.com"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">info@gmail.com</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="gi-footer-social mb-4">
                                        <div className="gi-footer-widget">
                                            <h4
                                                className="gi-footer-heading text-[18px] font-medium mb-[10px] text-[#fff] leading-[1.2] tracking-[0] relative block w-full pb-[15px]  max-[991px]:mb-[20px] max-[991px]:text-[14px]">
                                                Social Media</h4>
                                            <div className="gi-footer-social">
                                                <div className="gi-footer-widget">
                                                    <div className="gi-footer-links gi-footer-dropdown">
                                                        <ul className="align-itegi-center flex flex-wrap">
                                                            <li className="gi-footer-link pr-[5px]">
                                                                <a href={get_settings && get_settings[0]?.facebook} target='_blank'
                                                                    className="h-[30px] w-[30px] bg-[#4b5966] rounded-[5px] capitalize flex items-center justify-center text-[15px]"><i
                                                                        className="gicon gi-facebook text-[16px] text-[#fff]"
                                                                        aria-hidden="true"></i></a>
                                                            </li>

                                                            <li className="gi-footer-link pr-[5px]">
                                                                <a href={get_settings && get_settings[0]?.linkdin} target='_blank'
                                                                    className="h-[30px] w-[30px] bg-[#4b5966] rounded-[5px] capitalize flex items-center justify-center text-[15px]"><i
                                                                        className="gicon gi-linkedin text-[16px] text-[#fff]"
                                                                        aria-hidden="true"></i></a>
                                                            </li>
                                                            <li className="gi-footer-link pr-[5px]">
                                                                <a href={get_settings && get_settings[0]?.instagram} target='_blank'
                                                                    className="h-[30px] w-[30px] bg-[#4b5966] rounded-[5px] capitalize flex items-center justify-center text-[15px]"><i
                                                                        className="gicon gi-instagram text-[16px] text-[#fff]"
                                                                        aria-hidden="true"></i></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gi-footer-social">
                                        <div className="gi-footer-widget">
                                            <h4
                                                className="gi-footer-heading text-[18px] font-medium mb-[20px] text-[#fff] leading-[1.2] tracking-[0] relative block w-full">
                                                App Download</h4>
                                            <div className="gi-footer-links gi-footer-dropdown">
                                                <div
                                                    className="gi-app-store mb-[30px] flex flex-row max-[1199px]:flex-col max-[991px]:flex-row max-[320px]:flex-col">
                                                    <a href="#" className="app-img"><img src={Common_Images_Transport?.android}
                                                        className="adroid max-w-[140px] max-[1399px]:max-w-[120px]  mb-[15px] rounded-[5px] mr-[15px]"
                                                        alt="apple" /></a>
                                                    <a href="#" className="app-img"><img src={Common_Images_Transport?.apple}
                                                        className="apple max-w-[140px] max-[1399px]:max-w-[120px] mb-[15px] rounded-[5px]"
                                                        alt="apple" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="footer-bottom py-[10px] max-[991px]:py-[15px] border-t-[1px] border-solid border-[#eee] bg-[#f8f8fb]">
                        <div
                            className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                            <div className="w-full flex flex-wrap">
                                <div
                                    className="gi-bottom-info flex flex-row items-center justify-between w-full px-[12px] max-[991px]:flex-col">

                                    <div className="footer-copy max-[991px]:mb-[15px]">
                                        <div className="footer-bottom-copy">
                                            <div className="gi-copy text-[#777] text-[13px] tracking-[1px] text-center font-light">
                                                Copyright ©
                                                <a className="site-name text-[#9F2225]" href="index.html">Omens</a>
                                                all rights reserved. Powered by Omens.
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="footer-bottom-right">
                                        <div className="footer-bottom-payment flex justify-content-center">
                                            <div className="payment-link">
                                                <img src={Common_Images_Transport?.payment} alt="payment" />
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Astrologer_Footer