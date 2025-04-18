import React from 'react'
import Astrologer_after_Login_Header from '../astrologer_after_login_header/Astrologer_after_Login_Header'
import Astrologer_Home_Call_History from './Astrologer_Home_Call_History'
import Astrologer_Home_Chat_History from './Astrologer_Home_Chat_History'
import Astrologer_Suggested_Remedies from './Astrologer_Suggested_Remedies'
import Astrologer_Wait_List from './Astrologer_Wait_List'
import Astrologer_Footer from '../astrologer_footer/Astrologer_Footer'
import Astrologer_Home_Online_Status from './Astrologer_Home_Online_Status'
import { IMG_BASE_URL } from '../../../../config/Config'
import { useDispatch, useSelector } from "react-redux";
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
const Astrologer_Home_Page = () => {
    const { profile, isloading, error } = useSelector((state) => state.astrologer);
    localStorage.setItem("astrologer_profile_image", profile?.profile_image)
    // const astrologer_profile_image = localStorage.getItem("astrologer_profile_image")
    return (
        <div>
            {/*  */}
            <div className="relative">
                {/* Fixed Header */}
                <Astrologer_after_Login_Header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md" />

                {/* Main Section - Ensures it's not under the header */}
                <div className="mt-[80px] px-2">
                    <div className="bg-[#EFE9E0] py-4 mx-auto max-w-[1320px] px-4">
                        {/* Flexbox wrapper for responsive layout */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">

                            {/* Left Section: Profile Image & Upload Button */}
                            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="flex gap-3 items-center">
                                    {/* <img src={`${IMG_BASE_URL}${astrologer_profile_image}`} alt="Profile"
                                        className="w-16 h-16 rounded-full border" /> */}
                                    {
                                        profile?.profile_image != null ? (
                                            <img src={`${IMG_BASE_URL}${profile?.profile_image}`} className="w-16 h-16 rounded-full border" alt="User" />
                                        ) : (
                                            <img src={Common_Images_Transport?.user_logo} className="w-16 h-16 rounded-full border" alt="User" />
                                        )
                                    }
                                    <div>
                                        <button className="bg-red-600 btn-sm text-white py-1 px-4 rounded-md hover:bg-red-700">
                                            Upload
                                        </button>
                                        <h5 className="font-semibold text-[#3B4959] text-lg mt-1">
                                            Upload Cover Photo
                                        </h5>
                                    </div>
                                </div>

                                {/* Awaiting Approval Button */}
                                <div className="mt-2">
                                    <a href="#" className="inline-block text-[#9D2326] hover:text-white hover:bg-gray-900 rounded-full 
              text-sm px-5 py-1 border border-[#9D2326]">
                                        Awaiting Approval
                                    </a>
                                </div>
                            </div>

                            {/* Right Section: Information */}
                            <div className="w-full md:w-1/2 border-t-2 md:border-t-0 md:border-l-2 border-[#D4D4D4] px-4 py-2">
                                <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left">
                                    We Are introducing a new design to present astrologers’ profiles to our users.
                                    Astrologers who don’t upload a cover photo will not be shown to new customers.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>




            {/* <------- Strologer Home Online Status --------> */}
            <Astrologer_Home_Online_Status />

            {/* <!-- Calling History --> */}
            <Astrologer_Home_Call_History />

            {/* <!-- Chat History --> */}
            <Astrologer_Home_Chat_History />

            {/* <!-- Suggested Remedies --> */}
            <Astrologer_Suggested_Remedies />

            {/* <!-- Suggested Remedies --> */}
            <Astrologer_Wait_List />
            {/*  */}
            <Astrologer_Footer />
        </div>
    )
}

export default Astrologer_Home_Page