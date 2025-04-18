import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import Header from '../../components/common/header/Header';
import Footer from '../../components/common/footer/Footer';
import { useLocation, useNavigate } from "react-router-dom";
import { User_Otp_Verify } from '../../api/auth_api/Auth_Api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import Astrologer_Header from '../../components/pages/astrologer/astrologer_header/Astrologer_Header';
import { requestPermission } from '../../firebase/Firebase';

const Astrologer_Login_Otp_Verify = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState(false)

    // Extracting passed parameters from the navigation state
    const location = useLocation();
    const { mobile, country_code } = location.state || {};

    const Handle_Astrologer_Login_Otp_Verify = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        // Check if the OTP is valid (4 digits long)
        if (otp.length !== 4) {
            setOtpError(true);
            setIsLoading(false)
            toast("Please enter a valid 4-digit OTP."); // Show a toast error message
            return;
        }
        // Get the FCM token
        const fcm_token = await requestPermission();
        console.log("fcm_token", fcm_token)
        if (!fcm_token) {
            setIsLoading(false);
            toast("Failed to get FCM token. Please try again.");
            return;
        }
        const otp_verify_data = {
            otp,
            type: "login",
            country_code,
            mobile,
            device_type: "web",
            fcm_token,

        };
        console.log("otp_verify_data", otp_verify_data)
        try {
            const response = await User_Otp_Verify(otp_verify_data)
            console.log("User_Otp_Verify", response?.data)
            if (response?.data?.status == "200") {
                setIsLoading(false)
                toast(response?.data?.message)
                localStorage.setItem("user_token", response?.data?.data?.token)
                // localStorage.setItem("astro_is_active", true)
                navigate("/astrologer-profile")
            }
            else if (response?.response?.data?.status == "500") {
                setIsLoading(false)
                toast(response?.response?.data?.message)
            }
        } catch (error) {
            setIsLoading(false)
        }
    };

    // Function to format the mobile number
    const formatMobileNumber = (mobile) => {
        if (!mobile || mobile.length < 10) return mobile; // Handle invalid input
        const firstTwoDigits = mobile.slice(0, 2); // Extract the first two digits
        const lastTwoDigits = mobile.slice(-2); // Extract the last two digits
        return `${firstTwoDigits}******${lastTwoDigits}`; // Format the mobile number
    };
    return (
        <div>
            {/* <--------- header section's ---------------> */}
            <Astrologer_Header />
            {/* <--------- Toast Conatiner ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            {/* <!-- OTP --> */}
            <section className="gi-register bg-[#F0F4F8] py-[40px] max-[767px]:py-[30px] min-h-screen w-full">
                <div id="hideLink" className="w-full">
                    {
                        isLoading ? (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            <div className="gi-login-box w-[50%] bg-white p-5 rounded m-auto px-[15px] max-[991px]:w-full max-[991px]:p-[0] text-center">
                                <div className="section-title-2 w-full mb-[20px] pb-[20px]">
                                    <h2 className="gi-title mb-[0] font-Poppins text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">
                                        Verification code
                                    </h2>
                                    <p className="mt-[15px] text-[14px] text-[#777] leading-[23px]">
                                        We have sent the verification code on your mobile number
                                        <span className="font-bold text-black">+{formatMobileNumber(mobile)}</span>
                                    </p>
                                </div>
                                <div className="gi-login-wrapper my-[0] mx-auto">
                                    <div className="gi-login-container">
                                        <div className="gi-login-form">
                                            <form action="#" method="post" className="flex flex-col" onSubmit={Handle_Astrologer_Login_Otp_Verify}>

                                                <div className="gi-login-wrap flex-col">
                                                    {/* OTP Input Fields */}
                                                    <div className="otp-input-fields w-full flex justify-center gap-[10px] mb-[20px]">
                                                        <OtpInput
                                                            value={otp}
                                                            onChange={(newOtp) => {
                                                                if (/^\d*$/.test(newOtp)) { // Ensure only numbers are allowed
                                                                    setOtp(newOtp);
                                                                    if (newOtp.length === 4) {
                                                                        setOtpError(false);
                                                                    }
                                                                }
                                                            }}
                                                            numInputs={4}
                                                            renderInput={(props) => (
                                                                <input
                                                                    {...props}
                                                                    type="text"
                                                                    onKeyDown={(e) => {
                                                                        // Prevent invalid keys like letters, symbols, etc.
                                                                        if (
                                                                            !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"].includes(e.key) &&
                                                                            (e.key < "0" || e.key > "9")
                                                                        ) {
                                                                            e.preventDefault();
                                                                        }
                                                                    }}
                                                                    className="otp__digit otp__field__1 rounded-[50%] border-[1px] border-[#ddd] p-[0] 
          text-center text-[16px] text-[#333] focus:outline-none"
                                                                />
                                                            )}
                                                        />


                                                    </div>
                                                    {otpError && <span className="text-red-500 text-sm">Please enter a valid OTP.</span>}
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="w-full mt-[20px] block p-[14px] text-center text-[#fff] bg-gradient-to-r from-[#9F2225] to-[#FFB500] rounded-[5px] text-[#777] text-[16px] outline-[0] h-[50px]"
                                                >
                                                    Submit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </section>
            {/* <---------- Footer section's --------------> */}
            <Footer />

        </div>
    )
}

export default Astrologer_Login_Otp_Verify