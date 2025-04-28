import React, { useState, useEffect } from 'react'
import Header from '../../components/common/header/Header'
import "../../assets/css/demo-1.css";
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/common/footer/Footer';
import PhoneInput, { parsePhoneNumber, isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { isAlphabetical, isValidEmail } from '../../components/validation/Validation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { UserRegister } from '../../api/auth_api/Auth_Api';

const User_Register = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [user_name, setUser_Name] = useState("")
    const [user_email, setUser_Email] = useState("")
    const [phoneNumber, setPhoneNumber] = useState('+91');
    const [mobileNumber, setMobileNumber] = useState('');
    const [countryCode, setCountryCode] = useState('IN');
    const [isValid, setIsValid] = useState(false);

    // <----------- Onchnage Events on the Phone Input section's -------------->
    const handlePhoneChange = (value) => {
        if (!value || !value.startsWith('+')) {
            setPhoneNumber('+91'); // Reset to default
            setCountryCode('91');
            setMobileNumber('');
            return;
        }

        setPhoneNumber(value);

        try {
            const parsedPhone = parsePhoneNumber(value);
            setCountryCode(parsedPhone.countryCallingCode); // Update the country code dynamically
            setMobileNumber(parsedPhone.nationalNumber); // Update the local mobile number
        } catch (error) {
            setMobileNumber('');
        }
    };


    // <--------- Handle the User Register function's ------------------->
    const HandleUserRegister = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const user_register_data = {
            user_role: 1,
            name: user_name,
            email: user_email,
            mobile: mobileNumber,
            country_code: `+${countryCode}`
        }
        console.log("user_register_data", user_register_data)
        
        // Validation logic
        if (!user_name || !isAlphabetical(user_name)) {
            toast("Please enter a valid name containing only letters.");
            setIsLoading(false)
            return;
        }
        
        if (!user_email || !isValidEmail(user_email)) {
            toast("Please enter a valid email address.");
            setIsLoading(false)
            return;
        }
        
        if (!isValid) {
            toast("Please enter a valid phone number containing only numbers.");
            setIsLoading(false)
            return;
        }
        console.log("object", { user_name, user_email, mobileNumber, countryCode })
        try {
            const response = await UserRegister(user_register_data)
            if (response?.data?.status == "200") {
                setIsLoading(false)
                navigate("/user-register-otp-verify", {
                    state: {
                        mobile: mobileNumber,
                        country_code: `+${countryCode}`,
                        temp_id: response?.data?.data?.user?.id
                    }
                })
            }
            else if(response?.response?.data?.status == "500"){
                setIsLoading(false)
                toast(response?.response?.data?.message)
            }
            console.log("response", response?.response?.data)
        } catch (error) {
            console.log("error", error)
            setIsLoading(false)
        }
    }

    // <-------- Apply for the Phone Number Validtion According to the Country and Country code here ----------->
    useEffect(() => {
        setIsValid(isValidPhoneNumber(phoneNumber));
    }, [phoneNumber]);

    return (
        <div>
            <Header />
            <ToastContainer style={{ marginTop: "120px" }} />
            <section className="gi-register bg-[#F0F4F8] py-[40px] max-[767px]:py-[30px] min-h-screen w-full">

                <div className="flex items-center justify-center min-h-screen font-poppins">
                    <div className="bg-white p-6 rounded-lg overflow-hidden shadow-xl sm:max-w-lg sm:w-full">

                        {/* <!-- Registration Form Body --> */}
                        {
                            isLoading ? (
                                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                              </div>
                            ):(

                        <div className="text-left my-2">
                            <div className="gi-login-box w-[100%] px-[15px] max-[991px]:w-full max-[991px]:p-[0]" id="login_modal">
                                <div className="section-title-2 w-full mb-[20px] pb-[20px]">
                                    <h2 className="gi-title mb-[0] font-manrope text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">
                                        New Registration
                                    </h2>
                                    <p className="max-w-[400px] mt-[15px] text-[14px] text-[#777] leading-[23px]">Create New Account</p>
                                </div>
                                <div className="gi-login-wrapper my-[0] mx-auto">
                                    <div className="gi-login-container">
                                        <div className="gi-login-form">
                                            <form action="#" method="post" className="flex flex-col" onSubmit={HandleUserRegister}>

                                                <div className="gi-login-wrap flex flex-col">
                                                    <label className="mb-[10px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                                        User Name
                                                    </label>
                                                    <div className="iconflex">
                                                        <i className="fi-rr-user text-[#303030] text-[18px] leading-[17px]"></i>
                                                        <input type="text" name="name" value={user_name} onChange={(e) => setUser_Name(e.target.value)} placeholder="Enter your name"
                                                            className="w-full mb-[15px] px-[15px] bg-transparent border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] outline-[0] h-[50px]"
                                                            required />
                                                    </div>
                                                </div>
                                                <div className="gi-login-wrap flex flex-col">
                                                    <label className="mb-[10px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                                        Email ID
                                                    </label>
                                                    <div className="iconflex">
                                                        <i className="fi-rs-envelope text-[#303030] text-[18px] leading-[17px]"></i>
                                                        <input type="email" value={user_email} onChange={(e) => setUser_Email(e.target.value)} name="email" placeholder="Email ID"
                                                            className="w-full mb-[15px] px-[15px] bg-transparent border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] outline-[0] h-[50px]"
                                                            required />
                                                    </div>
                                                </div>
                                                <div className="gi-login-wrap flex flex-col mb-3">
                                                    <label className="mb-[10px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                                        Phone Number
                                                    </label>
                                                    <PhoneInput
                                                        international
                                                        value={phoneNumber}
                                                        defaultCountry={countryCode}
                                                        onChange={handlePhoneChange}
                                                        className="w-full mb-[15px] px-[15px] bg-transparent border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] outline-[0] h-[50px]"
                                                        placeholder="Enter phone number"
                                                    />
                                                    {!isValid && <span className="text-red-500 text-sm">Please enter a valid phone number</span>}
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input id="remember" aria-describedby="remember" type="checkbox"
                                                                className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                                                required />
                                                        </div>
                                                        <div className="text-sm ml-3">
                                                            <label for="remember" className="text-gray-900 dark:text-gray-500">
                                                                I agree to Terms & Conditions and Privacy Policy
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gi-login-wrap">
                                                    <button type="submit"
                                                        className="w-full mt-[20px] block p-[14px] text-center text-[#fff] bg-gradient-to-r from-[#9F2225] to-[#FFB500] rounded-[5px] text-[#777] text-[16px] outline-[0] h-[50px]">
                                                        Register
                                                    </button>
                                                </div>

                                                <span className="gi-login-wrap gi-login-btn mt-[20px] flex flex-row justify-center gap-3 items-center">
                                                    <span className="text-[#777] text-[14px]">
                                                        Already have an account?
                                                    </span>
                                                    <Link to="/user-login"
                                                        className="gi-btn-1 btn py-[8px] px-[15px] text-[#9F2225] border-[0] transition-all duration-[0.3s] ease-in-out overflow-hidden text-center text-[14px] font-semibold relative rounded-[5px] hover:text-[#333]">
                                                        Login
                                                    </Link>
                                                </span>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            )
                        }
                    </div>
                </div>

            </section>

            {/* <--------- Footer section's -------------> */}
            <Footer />
        </div>
    )
}

export default User_Register