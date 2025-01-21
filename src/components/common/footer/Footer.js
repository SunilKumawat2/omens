import React, { useEffect, useState } from 'react'
import Common_Images_Transport from '../common_imges_transport/Common_Images_Transport'
import { Get_Subhmuharats, Global_Settings } from '../../../api/global/Global';
import { IMG_BASE_URL } from '../../../config/Config';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [get_settings, setGet_Settings] = useState({});
    const [get_subhmuharats_list, set_Get_Subhmuharats_List] = useState([]);

    useEffect(() => {
        const Handle_Get_Subhmuharat = async () => {
            try {
                const response = await Get_Subhmuharats();
                set_Get_Subhmuharats_List(response?.data?.data?.subhmuharat)
            } catch (error) {
                console.log("error", error)
            }
        }
        Handle_Get_Subhmuharat()
    }, [])

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
            {/* <!-- Footer Start --> */}
            <footer className="gi-footer bg-[#1E1E1E]">
                <div className="footer-container">
                    <div className="footer-top py-[80px] max-[767px]:py-[60px]">
                        <div
                            className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1390px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                            <div className="w-full flex flex-wrap">
                                <div className="min-[992px]:w-[25%] px-[12px] w-full gi-footer-cat wow fadeInUp">
                                    <div className="gi-footer-widget gi-footer-company flex flex-col">
                                        {
                                           get_settings && get_settings[0]?.footer_logo != null ? (
                                                <Link to="/">
                                                    <img src={`${IMG_BASE_URL}${get_settings[0]?.footer_logo}`}
                                                        className="gi-footer-logo max-w-[144px] max-[767px]:max-w-[130px]  mb-[30px]"
                                                        alt="footer logo" />
                                                </Link>
                                            ) : (
                                                <Link to="/">
                                                    <img src={Common_Images_Transport?.White_logo}
                                                        className="gi-footer-logo max-w-[144px] max-[767px]:max-w-[130px]  mb-[30px]"
                                                        alt="footer logo" />
                                                </Link>
                                            )
                                        }
                                        {
                                            get_settings && (
                                        <p
                                            className="gi-footer-detail max-w-[400px] mb-[30px] p-[0] text-[14px] leading-[27px] font-normal text-[#999] inline-block relative max-[1199px]:text-[14px]">
                                            {get_settings[0]?.short_description}</p>
                                            )
                                        }
                                        <div className="social_media">
                                            <h4
                                                className="gi-footer-heading text-[18px] font-medium mb-[10px] text-[#fff] leading-[1.2] tracking-[0] relative block w-full pb-[15px] capitalize max-[991px]:mb-[20px] max-[991px]:text-[14px]">
                                                Contact Us</h4>
                                            <div className="gi-footer-links gi-footer-dropdown">
                                                <ul className="align-itegi-center">
                                                    <li
                                                        className="gi-footer-link gi-foo-call gap-4 m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                        <span className="w-[25px] flex basis-auto grow-[0] shrink-[0]">
                                                            <img src={Common_Images_Transport?.headphones_head} alt="" />
                                                        </span>
                                                        <a href="#"
                                                            className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">{get_settings && get_settings[0]?.address}</a>
                                                    </li>
                                                    <li
                                                        className="gi-footer-link gi-foo-mail gap-4 m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                        <span className="w-[25px] flex basis-auto grow-[0] shrink-[0]">
                                                            <img src={Common_Images_Transport?.email_envelope_icon} alt="" />
                                                        </span>
                                                        <a href="#"
                                                            className="transition-all duration-[0.3s] ease-in-out md:text-[12px] 
                                                            xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block 
                                                            relative break-all tracking-[0] font-normal hover:text-[#9F2225]
                                                             hover:opacity-[1]">{get_settings && get_settings[0]?.email}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4
                                            className="gi-footer-heading text-[18px] font-medium mb-[10px] text-[#fff] leading-[1.2] tracking-[0] relative block w-full pb-[15px] capitalize max-[991px]:mb-[20px] max-[991px]:text-[14px]">
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
                                <div className="min-[992px]:w-[16.66%] gi-footer-toggle px-[12px] w-full gi-footer-info wow fadeInUp"
                                    data-wow-delay="0.2s">
                                    <div className="gi-footer-widget">
                                        <h4
                                            className="gi-footer-heading text-[18px] font-medium mb-[20px] text-[#fff] leading-[1.2] tracking-[0] relative block w-full">
                                            Horoscope</h4>

                                        <div className="gi-footer-links gi-footer-dropdown">
                                            <ul className="align-itegi-center">
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/daily_horoscope"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">Horoscope
                                                        2024</Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/daily_horoscope"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">Today's
                                                        Horoscope</Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/daily_horoscope"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">Today's
                                                        Love Horoscope</Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/daily_horoscope"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">Yesterday's
                                                        Horoscope</Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/daily_horoscope"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">Tomorrow's
                                                        Horoscope</Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/daily_horoscope"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">Weekly
                                                        Horoscope</Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/daily_horoscope"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">Monthly
                                                        Horoscope</Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center">
                                                    <Link to="/daily_horoscope"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">Yearly
                                                        Horoscope</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4
                                            className="gi-footer-heading text-[18px] font-medium mb-[20px] mt-[30px] text-[#fff] leading-[1.2] tracking-[0] relative block w-full">
                                            Shubh Muhurat 2024</h4>
                                        <div className="gi-footer-links gi-footer-dropdown">
                                            <ul className="align-itegi-center">
                                                {
                                                    get_subhmuharats_list?.map((get_subhmuharats_list_result) => {
                                                        return (
                                                            <li className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[14px]">
                                                                <Link
                                                                    to={`/${get_subhmuharats_list_result?.title}/${get_subhmuharats_list_result?.id}`}
                                                                    className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                                    {get_subhmuharats_list_result?.title}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="min-[992px]:w-[16.66%] gi-footer-toggle px-[12px] w-full gi-footer-account wow fadeInUp"
                                    data-wow-delay="0.3s">
                                    <div className="gi-footer-widget">
                                        <h4
                                            className="gi-footer-heading text-[18px] font-medium mb-[20px] text-[#fff] leading-[1.2] tracking-[0] relative block w-full">
                                            Important Links</h4>
                                        <div className="gi-footer-links gi-footer-dropdown">

                                            <ul className="align-itegi-center">
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/daily_panchang"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">Today
                                                        Panchang</Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/astrologer_list"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Live Astrologers
                                                    </Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/free_kundli"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">How
                                                        to read kundali
                                                    </Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/free_kundli"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Free Kundli
                                                    </Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/kundli_matching"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Kundli Matching
                                                    </Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/astrologer_list"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Chat with Astrologer
                                                    </Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/astrologer_list"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Talk to Astrologer
                                                    </Link>
                                                </li>
                                                {/* <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/astrotalk_reviews"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Astrotalk Reviews
                                                    </Link>
                                                </li> */}
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/astrology_yoga"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Astrology Yoga
                                                    </Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/kaalsarp_doshas"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Kaalsarp Doshas
                                                    </Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <a href="#"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Child Astrology
                                                    </a>
                                                </li>
                                                {/* <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <a href="#"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Ascendant Sign Gemstone
                                                    </a>
                                                </li> */}
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/nakshatras_constellations"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Nakshatras Constellations
                                                    </Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/numerology"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Numerology
                                                    </Link>
                                                </li>
                                                {/* <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <a href="#"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Mantras
                                                    </a>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <a href="#"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Astrological job promotion
                                                    </a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="min-[992px]:w-[16.66%] gi-footer-toggle px-[12px] w-full gi-footer-service wow fadeInUp"
                                    data-wow-delay="0.4s">
                                    <div className="gi-footer-widget">
                                        <h4
                                            className="gi-footer-heading text-[18px] font-medium mb-[20px] text-[#fff] leading-[1.2] tracking-[0] relative block w-full">
                                            Important Links</h4>
                                        <div className="gi-footer-links gi-footer-dropdown">
                                            <ul className="align-itegi-center">
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/all_letest_post"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Blog
                                                    </Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <a href="#"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Planetary Transit 2024 New
                                                    </a>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <a href="#"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Collaboration
                                                    </a>
                                                </li>
                                                {/* <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <a href="#"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Tarot
                                                    </a>
                                                </li> */}
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <a href="#"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Zodiac Signs
                                                    </a>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <a href="#"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Vastu Shastra
                                                    </a>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <a href="#"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Solar Eclipse 2024
                                                    </a>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <a href="#"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Lunar Eclipse 2024
                                                    </a>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/festivals"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Festival Calendar 2024
                                                    </Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <a href="#"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Vrat Calendar 2024
                                                    </a>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <a href="#"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Mole Astrology
                                                    </a>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <Link to="/love_calculator"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Love Calculator
                                                    </Link>
                                                </li>
                                                <li
                                                    className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                    <a href="#"
                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                        Astrotalk Sitemap
                                                    </a>
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
                                                        <Link to="/terms_conditions"
                                                            className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                            Terms & Conditions
                                                        </Link>
                                                    </li>
                                                    <li
                                                        className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                        <Link to="/privacy_policy"
                                                            className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                            Privacy Policy
                                                        </Link>
                                                    </li>
                                                    {/* <li
                                                        className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                        <Link to="/disclaimer"
                                                            className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                            Disclaimer
                                                        </Link>
                                                    </li> */}
                                                    <li
                                                        className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                        <Link to="/about_us"
                                                            className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                            About Us
                                                        </Link>
                                                    </li>
                                                    {/* <li
                                                        className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                        <a href="#"
                                                            className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                            Pricing Policy
                                                        </a>
                                                    </li>
                                                    <li
                                                        className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal flex items-center mb-[12px]">
                                                        <a href="#"
                                                            className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[20px] p-[0] text-[#999] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#9F2225] hover:opacity-[1]">
                                                            Refund & Cancellation Policy
                                                        </a>
                                                    </li> */}
                                                </ul>

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
                                                    <a href={`${get_settings && get_settings[0]?.play_store}`} target='_blank' className="app-img"><img src={Common_Images_Transport?.android}
                                                        className="adroid max-w-[140px] max-[1399px]:max-w-[120px]  mb-[15px] rounded-[5px] mr-[15px]"
                                                        alt="apple" /></a>
                                                    <a href={`${get_settings && get_settings[0]?.app_store}`} target='_blank' className="app-img"><img src={Common_Images_Transport?.apple}
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
                                                <Link className="site-name text-[#9F2225]" to="/">Omens</Link>
                                                all rights reserved. Powered by Omens.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="footer-bottom-right">
                                        <div className="footer-bottom-payment flex justify-content-center">
                                            <div className="payment-link">
                                                <img src={Common_Images_Transport?.payment} alt="payment" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer