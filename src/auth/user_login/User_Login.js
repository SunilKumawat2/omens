import React, { useState, useEffect } from "react";
import Header from "../../components/common/header/Header";
import PhoneInput, {
  parsePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../../components/common/footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserLogin } from "../../api/auth_api/Auth_Api";
import Loader from "../../loader/Loader";

const User_Login = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [countryCode, setCountryCode] = useState("IN"); // To track the selected country code
  const [isValid, setIsValid] = useState(false);

  // <----------- Onchnage Events on the Phone Input section's -------------->
  const handlePhoneChange = (value) => {
    if (!value || !value.startsWith("+")) {
      setPhoneNumber("+91"); // Reset to default
      setCountryCode("91");
      setMobileNumber("");
      return;
    }

    setPhoneNumber(value);

    try {
      const parsedPhone = parsePhoneNumber(value);
      setCountryCode(parsedPhone.countryCallingCode); // Update the country code dynamically
      setMobileNumber(parsedPhone.nationalNumber); // Update the local mobile number
    } catch (error) {
      setMobileNumber("");
    }
  };

  // <--------- User Login Section's here ----------------------->
  const HandleUserLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const user_login_data = {
      mobile: mobileNumber,
      country_code: `+${countryCode}`,
      user_role: 1,
    };
    if (!isValid) {
      toast("Please enter a valid phone number containing only numbers.");
      setIsLoading(false)
      return;
    }
    console.log("user_login_data", user_login_data);
    try {
      const response = await UserLogin(user_login_data);
      if (response?.data?.status == "200") {
        setIsLoading(false)
        navigate("/user-login-otp-verify", {
          state: {
            mobile: mobileNumber,
            country_code: `+${countryCode}`
          }
        })
      }
      else if (response?.response?.data?.status == "500") {
        toast(response?.response?.data?.message)
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      console.log("error", error)
    }
  };

  // <-------- Apply for the Phone Number Validtion According to the Country and Country code here ----------->
  useEffect(() => {
    setIsValid(isValidPhoneNumber(phoneNumber));
  }, [phoneNumber]);

  return (
    <div>
      {/* <-------- ToastContainer ------------> */}
      <ToastContainer style={{ marginTop: "120px" }} />
      {/* <------- Header section's ------------> */}
      <Header />
      {/* <------ User Login section's ---------> */}
      <section className="gi-register bg-[#F0F4F8] py-10 min-h-screen w-full overflow-x-hidden">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-[720px] sm:max-w-[540px] bg-white p-5 rounded-lg">
              <div className="gi-login-box w-full px-4" id="login_modal">
                <div className="section-title-2 w-full mb-5 pb-5">
                  <h2 className="gi-title mb-0 font-Poppins text-2xl font-semibold text-[#4b5966] relative inline capitalize leading-none">
                    Login Account
                  </h2>
                  <p className="max-w-[400px] mt-4 text-sm text-[#777] leading-[23px]">
                    If you have an account with us, please log in.
                  </p>
                </div>

                <div className="gi-login-wrapper mx-auto">
                  <div className="gi-login-container">
                    <div className="gi-login-form">
                      <form
                        onSubmit={HandleUserLogin}
                        className="flex flex-col space-y-4"
                      >
                        <div className="form-group">
                          <label htmlFor="phone" className="block text-sm font-medium text-[#4b5966] mb-1">
                            Phone Number
                          </label>
                          <PhoneInput
                            international
                            defaultCountry={countryCode}
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-sm text-gray-700 outline-none focus:ring-2 focus:ring-red-400"
                            placeholder="Enter phone number"
                          />
                          {!isValid && (
                            <span className="text-red-500 text-sm">
                              Please enter a valid phone number
                            </span>
                          )}
                        </div>

                        <div className="gi-login-wrap">
                          <button
                            type="submit"
                            id="showLink"
                            className="w-full mt-4 p-3 text-center text-white bg-gradient-to-r from-[#9F2225] to-[#FFB500] rounded-md text-base font-medium"
                          >
                            Send OTP
                          </button>
                        </div>

                        <div className="gi-login-wrap gi-login-btn mt-5 flex flex-row justify-center gap-2 items-center">
                          <span className="text-sm text-[#777]">
                            Don't have an account?
                          </span>
                          <Link
                            to="/user-register"
                            className="text-sm font-semibold text-[#9F2225] hover:text-[#333] transition"
                          >
                            Create Account
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      {/* <-------- Footer section's ------------> */}
      <Footer />
    </div>
  );
};

export default User_Login;
