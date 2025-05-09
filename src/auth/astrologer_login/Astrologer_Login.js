import React, { useState, useEffect } from "react";
import Header from "../../components/common/header/Header";
import PhoneInput, { parsePhoneNumber,isValidPhoneNumber,} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../../components/common/footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserLogin } from "../../api/auth_api/Auth_Api";
import Loader from "../../loader/Loader";
import Astrologer_Header from "../../components/pages/astrologer/astrologer_header/Astrologer_Header";

const Astrologer_Login = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [countryCode, setCountryCode] = useState("IN");
  const [isValid, setIsValid] = useState(false);

  // <----------- Onchnage Events on the Phone Input section's -------------->
  const handlePhoneChange = (value) => {
    if (!value || !value.startsWith("+")) {
      setPhoneNumber("+91");
      setCountryCode("91");
      setMobileNumber("");
      return;
    }

    setPhoneNumber(value);

    try {
      const parsedPhone = parsePhoneNumber(value);
      setCountryCode(parsedPhone.countryCallingCode);
      setMobileNumber(parsedPhone.nationalNumber);
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
      user_role: 2,
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
        navigate("/astrologer-login-otp-Verify", {
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

  // <------- clear the local storage --------->
  useEffect(() => {
    localStorage.clear("")
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div>
      {/* <-------- ToastContainer ------------> */}
      <ToastContainer style={{ marginTop: "120px" }} />
      {/* <------- Header section's ------------> */}
      <Astrologer_Header />
      {/* <------ User Login section's ---------> */}
      <section className="gi-register bg-[#F0F4F8] py-[40px] max-[767px]:py-[30px] min-h-screen w-full overflow-x-hidden">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-[720px] sm:max-w-[540px] bg-white p-5 rounded-lg">
              <div
                className="gi-login-box w-full px-[15px] max-[991px]:w-full max-[991px]:px-0"
                id="login_modal"
              >
                <div className="section-title-2 w-full mb-[20px] pb-[20px]">
                  <h2 className="gi-title mb-0 font-Poppins text-[26px] font-semibold text-[#4b5966] relative inline capitalize leading-[1]">
                    Login Account
                  </h2>
                  <p className="max-w-[400px] mt-[15px] text-[14px] text-[#777] leading-[23px]">
                    If you have an account with us, please log in.
                  </p>
                </div>

                <div className="gi-login-wrapper mx-auto">
                  <div className="gi-login-container">
                    <div className="gi-login-form">
                      <form action="#" method="post" className="flex flex-col" onSubmit={HandleUserLogin}>
                        <div className="gi-login-wrap flex flex-col">
                          <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <PhoneInput
                              international
                              value={phoneNumber}
                              defaultCountry={countryCode}
                              onChange={handlePhoneChange}
                              className="w-full mb-[15px] px-[15px] bg-transparent border border-[#eee] rounded-[5px] text-[#777] text-[14px] outline-none h-[50px]"
                              placeholder="Enter phone number"
                            />
                            {!isValid && (
                              <span className="text-red-500 text-sm">
                                Please enter a valid phone number
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="gi-login-wrap">
                          <button
                            type="submit"
                            id="showLink"
                            className="w-full mt-[20px] block p-[14px] text-center text-white bg-gradient-to-r from-[#9F2225] to-[#FFB500] rounded-[5px] text-[16px] outline-none h-[50px]"
                          >
                            Send OTP
                          </button>
                        </div>

                        <span className="gi-login-wrap gi-login-btn mt-[20px] flex flex-row justify-center gap-3 items-center">
                          <span className="text-[#777] text-[14px]">
                            Don't have an account?
                          </span>
                          <Link
                            to="/astrologer-register"
                            className="gi-btn-1 btn py-[8px] px-[15px] text-[#9F2225] border-0 transition-all duration-300 ease-in-out text-center text-[14px] font-semibold relative rounded-[5px] hover:text-[#333]"
                          >
                            Create Account
                          </Link>
                        </span>
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

export default Astrologer_Login;
