import React, { useState, useRef, useEffect } from "react";
import Common_Images_Transport from "../../../common/common_imges_transport/Common_Images_Transport";
import { Link, useNavigate } from "react-router-dom";
import { IMG_BASE_URL } from "../../../../config/Config";
import { useDispatch, useSelector } from "react-redux";
import { fetchAstroProfile } from "../../../../redux/actions/astrologerActions";
import { User_Authentication } from "../../../../user_authentication/User_Authentication";
import { logout } from "../../../../api/auth_api/Auth_Api";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Global_Settings } from "../../../../api/global/Global";

const Astrologer_after_Login_Header = () => {
  const navigate = useNavigate();
  const [is_loading, setis_loading] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [get_settings, setGet_Settings] = useState({});
  const dispatch = useDispatch();
  const { profile, isloading, error } = useSelector((state) => state.astrologer);
  localStorage.setItem("astrologer_profile_image",profile?.profile_image)
  const dropdownRef = useRef();

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Dispatch Redux action to fetch profile data
  useEffect(() => {
    dispatch(fetchAstroProfile());
  }, [dispatch]);

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

  // <--------- if we find the astrloger error like unAutnetication ---------->
  if (error) {
    navigate("/astrologer-login")
  }


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => setIsOpen(false), 0); // Small delay to allow navigation
  };
  // <------ Handle logout functionliy here ---------->
  const handle_logout = async () => {
    try {
      const token = User_Authentication();
      if (!token) {
        setis_loading(false);
        toast("token not found's");
        throw new Error("User token not found");
      }
      const response = await logout({ Authorization: `Bearer ${token}` });
      if (response?.data?.status == "200") {
        localStorage.clear();
        navigate("/astrologer-login")
      }
      else{
        navigate("/astrologer-login")
      }
      console.log("response", response);
    } catch (error) {
      navigate("/astrologer-login")
      console.log("error", error);
    }
  };
  return (
    <header className="gi-header bg-[#fff] z-[14] max-[991px]:z-[16] relative">
      <ToastContainer style={{ marginTop: "120px" }} />
      <div className="gi-header-bottom max-[992px]:hidden py-[10px] max-[991px]:py-[15px] max-[991px]:border-b-[1px] border-solid border-[#eee]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1520px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="w-full flex flex-wrap px-[12px]">
            <div className="gi-flex flex flex-row justify-between w-full max-[575px]:flex-col">
              <div className="self-center gi-header-logo">
                <div className="header-logo text-left">
                  <Link to="/astrologer-home"><img src={Common_Images_Transport?.logo} alt="Site Logo" className="w-[200px] max-[1199px]:w-[130px] max-[991px]:w-[120px] max-[767px]:w-[100px] " /></Link>
                </div>
              </div>
              <div id="gi-main-menu-desk" className="w-full flex items-center min-[992px]:block hidden">
                <div className="nav-desk">
                  <div className="w-full flex flex-wrap px-[12px] min-[1400px]:relative">
                    <div className="basis-auto w-full self-center">
                      <div className="gi-main-menu flex">
                        <ul className="w-full flex justify-center flex-wrap pl-[0]">
                          <li className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <a href="#" className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium">
                              Call
                            </a>
                          </li>
                          <li className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <a href="#" className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium">
                              Chat
                            </a>
                          </li>
                          <li className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <Link to="/astrologer-new-Pooja-process-list" className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium" >Pooja Booking</Link>
                          </li>
                          <li className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <Link to="/astrologer-wallet" className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium" >Wallet</Link>
                          </li>
                          <li className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <a href="#" className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium">Settings
                              <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i>
                            </a>
                            <ul className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px]">
                              <li> <a href="#" className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]">Update Phone Number</a></li>
                              <li> <a href="#" className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"> Important Contact to be Saved</a> </li>
                              <li> <a href="#" className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]">Training Videos</a></li>
                              <li> <Link to="/astrologer-terms-conditions" className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]">Terms & Conditions</Link></li>
                              <li><Link to="/astrologer-bank-details" className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]">Bank Details</Link></li>
                              <li><a href="#" className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]">Price Change Request</a></li>
                              <li><a href="#" className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]">Download Form 16A</a></li>
                              <li><a href="#" className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]">Pay Slip</a></li>
                              <li><a href="#" className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]">Membership</a></li>
                              <li><a href="#" className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]">Refer an Astrologer New!</a></li>
                              {/* <li><a href="#" className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]">Gallery </a></li> */}
                            </ul>
                          </li>
                          <li className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]"><a href="#" className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium">Waitlist</a></li>
                          <li className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]"><a href="#" className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium">Support</a></li>
                          <li className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]"><a href="#" className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium">My Reviews</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-72" ref={dropdownRef}>
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="flex items-center justify-between w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <div className="flex items-center gap-3">
                      {profile?.profile_image ? (
                        <img src={`${IMG_BASE_URL}${profile?.profile_image}`} className="h-10 w-10 rounded-full object-cover" alt="User" />
                      ) : (
                        <img src={Common_Images_Transport?.user_logo} className="h-10 w-10 rounded-full object-cover" alt="User" />
                      )}
                      <h6 className="text-md font-medium text-gray-700 truncate">{profile?.name}</h6>
                    </div>

                    <svg className={`h-5 w-5 text-gray-500 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {/* Dropdown Content */}
                  {isOpen && (
                    <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-1 w-48 rounded-lg bg-white shadow-lg border border-gray-200 focus:outline-none">
                      <div className="py-1 text-center">
                        <button onMouseDown={() => handleNavigation("/astrologer-save-profile")} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</button>
                        <button onMouseDown={() => handleNavigation("/astrologer-my-pooja-list")} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Pooja</button>
                        <button onMouseDown={() => handleNavigation("/astrologer-post-pooja")} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pooja Post</button>
                        <button onMouseDown={() => { handle_logout(); setTimeout(() => setIsOpen(false), 100); }} className="block w-full px-4 py-2 text-sm text-red-700 hover:bg-gray-100">Sign out</button>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="headermobile flex md:hidden justify-between p-3 shadow fixed top-0 bg-white w-full z-50">
        {/* Site Logo */}
        <Link to="/astrologer-home">
          {get_settings && get_settings[0]?.header_logo ? (
            <img src={`${IMG_BASE_URL}${get_settings[0]?.header_logo}`} alt="Site Logo"
              className="w-[130px] md:w-[200px]" />
          ) : (
            <img src={Common_Images_Transport.logo} alt="Site Logo"
              className="w-[130px] md:w-[200px]" />
          )}
        </Link>
        <div className="w-72" ref={dropdownRef}>
          <div className="relative inline-block text-left">
            <button type="button" onClick={toggleDropdown} className="text-start inline-flex w-full items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold hover:bg-gray-50" aria-expanded={isOpen} aria-haspopup="true">
              {
                profile?.profile_image != null ? (
                  <img src={`${IMG_BASE_URL}${profile?.profile_image}`} width="50" height="50" className="rounded-full" alt="User" />
                ) : (
                  <img src={Common_Images_Transport?.user_logo} width="50" height="50" className="rounded-full" alt="User" />
                )
              }
              <div>
                <h6 className="text-md font-medium truncate" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{profile?.name}</h6>
              </div>
              <svg className={`-mr-1 h-5 w-5 text-gray-400 transform ${isOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                <div className="py-1" role="none">
                  <Link to="/astrologer-save-profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">My Profile</Link>
                  <Link to="/astrologer-my-pooja-list" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"> My Pooja</Link>
                  <Link to="/astrologer-post-pooja" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Pooja Post</Link>
                  <button type="button" className="block w-full px-4 py-2 text-left text-sm text-red-700 hover:bg-gray-100" role="menuitem" onClick={handle_logout}>Sign out</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Menu Toggle Button */}
        <button onClick={toggleMobileMenu} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu Overlay (Click to Close) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMobileMenu}></div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg p-5 transform
    ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50`}
      >
        {/* Close Button */}
        <button onClick={toggleMobileMenu} className="text-xl absolute right-3 top-3">
          ✕
        </button>

        {/* Navigation Menu */}
        <nav className="mt-10">
          <ul className="space-y-4 text-gray-700">
            <li><a href="#" className="block py-2 px-4">Call</a></li>
            <li><a href="#" className="block py-2 px-4">Chat</a></li>
            <li><Link to="/astrologer-new-Pooja-process-list" className="block py-2 px-4">Pooja Booking</Link></li>
            <li><Link to="/astrologer-wallet" className="block py-2 px-4">Wallet</Link></li>

            {/* Settings Menu */}
            <li className="relative">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex justify-between items-center w-full py-2 px-4 hover:bg-gray-100 rounded-md transition"
              >
                Settings
                <i className={`fi-rr-angle-small-right transition-transform ${isDropdownOpen ? "rotate-90" : ""}`}></i>
              </button>

              {/* Dropdown */}
              {isDropdownOpen && (
                <ul className="absolute left-0 w-full bg-gray-100 rounded-md shadow-md mt-2">
                  <li><a href="#" className="block py-2 px-4 hover:bg-gray-200">Update Phone Number</a></li>
                  <li><a href="#" className="block py-2 px-4 hover:bg-gray-200">Training Videos</a></li>
                  <li><Link to="/astrologer-terms-conditions" className="block py-2 px-4 hover:bg-gray-200">Terms & Conditions</Link></li>
                  <li><Link to="/astrologer-bank-details" className="block py-2 px-4 hover:bg-gray-200">Bank Details</Link></li>
                  <li><a href="#" className="block py-2 px-4 hover:bg-gray-200">Membership</a></li>
                </ul>
              )}
            </li>

            <li><a href="#" className="block py-2 px-4">Support</a></li>
            <li><a href="#" className="block py-2 px-4">My Reviews</a></li>
          </ul>
        </nav>
      </div>

    </header>
  );
};

export default Astrologer_after_Login_Header;
