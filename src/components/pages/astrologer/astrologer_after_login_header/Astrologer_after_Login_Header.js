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

const Astrologer_after_Login_Header = () => {
  const navigate = useNavigate();
  const [is_loading, setis_loading] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { profile, isloading, error } = useSelector((state) => state.astrologer);
  console.log("astrologer_profile", profile)
  console.log("astrologer_profile", error)

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Dispatch Redux action to fetch profile data
  useEffect(() => {
    dispatch(fetchAstroProfile());
  }, [dispatch]);

  // <--------- if we find the astrloger error like unAutnetication ---------->
  if(error){
    navigate("/astrologer_login")
  }

  // Close dropdown when clicking outside
  const dropdownRef = useRef();
  React.useEffect(() => {
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
        navigate("/astrologer_login")
      }
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <header className="gi-header bg-[#fff] z-[14] max-[991px]:z-[16] relative">
      {/* <!-- Header Bottom  Start --> */}
      {/* <-------- ToastContainer ------------> */}
      <ToastContainer style={{ marginTop: "120px" }} />
      <div className="gi-header-bottom max-[992px]:hidden py-[10px] max-[991px]:py-[15px] max-[991px]:border-b-[1px] border-solid border-[#eee]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1520px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="w-full flex flex-wrap px-[12px]">
            <div className="gi-flex flex flex-row justify-between w-full max-[575px]:flex-col">
              {/* <!-- Header Logo Start --> */}
              <div className="self-center gi-header-logo">
                <div className="header-logo text-left">
                  <Link to="/astrologer_home">
                    <img
                      src={Common_Images_Transport?.logo}
                      alt="Site Logo"
                      className="w-[200px] max-[1199px]:w-[130px] max-[991px]:w-[120px] max-[767px]:w-[100px] "
                    />
                  </Link>
                </div>
              </div>
              {/* <!-- Header Logo End --> */}
              {/* <!-- Main Menu Start --> */}
              <div
                id="gi-main-menu-desk"
                className="w-full flex items-center min-[992px]:block hidden"
              >
                <div className="nav-desk">
                  <div className="w-full flex flex-wrap px-[12px] min-[1400px]:relative">
                    <div className="basis-auto w-full self-center">
                      <div className="gi-main-menu flex">
                        <ul className="w-full flex justify-center flex-wrap pl-[0]">
                          <li className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <a
                              href="#"
                              className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium"
                            >
                              Call
                            </a>
                          </li>
                          <li className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <a
                              href="#"
                              className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium"
                            >
                              Chat
                            </a>
                          </li>

                          <li className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <Link
                              to="/astrologer_new_Pooja_process_list"
                              className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium"
                            >
                              Pooja Booking
                            </Link>
                          </li>
                          <li className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <Link
                              to="/astrologer_wallet"
                              className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium"
                            >
                              Wallet
                            </Link>
                          </li>
                          <li className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <a
                              href="#"
                              className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium"
                            >
                              Settings
                              <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i>
                            </a>
                            <ul className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px]">
                              <li>
                                <a
                                  href="#"
                                  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                                >
                                  Update Phone Number
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                                >
                                  Important Contact to be Saved
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                                >
                                  Training Videos
                                </a>
                              </li>
                              <li>
                                <Link
                                  to="/astrologer_terms_conditions"
                                  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                                >
                                  Terms & Conditions
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/astrologer_bank_details"
                                  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                                >
                                  Bank Details
                                </Link>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                                >
                                  Price Change Request
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                                >
                                  Download Form 16A
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                                >
                                  Pay Slip
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                                >
                                  Membership
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                                >
                                  Refer an Astrologer New!
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                                >
                                  Gallery
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]">
                            <a
                              href="#"
                              className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium"
                            >
                              Waitlist
                            </a>
                          </li>
                          <li className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]">
                            <a
                              href="#"
                              className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium"
                            >
                              Support
                            </a>
                          </li>
                          <li className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]">
                            <a
                              href="#"
                              className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium"
                            >
                              My Reviews
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Main Menu End --> */}

              {/* <div className="flex gap-4 w-56 items-center"><img src="../assets/img/astro/amanda-smith.png"
                            width="50" height="50px" className="rounded-full" alt="" />
                        <div>
                            <h6 className="text-md font-medium">Madhu Priya</h6>
                            <span className="text-sm text-[#9F2225] font-bold">ID:4578</span>
                        </div>
                    </div> */}
              <div className="w-72" ref={dropdownRef}>
                <div className="relative inline-block text-left">
                  {/* Button */}
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="text-start inline-flex w-full items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold hover:bg-gray-50"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <img
                      src={`${IMG_BASE_URL}${profile?.profile_image}`}
                      width="50"
                      height="50"
                      className="rounded-full"
                      alt="User"
                    />
                    <div>
                      <h6
                        className="text-md font-medium truncate"
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {profile?.name}
                      </h6>

                      {/* <span className="text-sm text-[#9F2225] font-bold">
                        ID:4578
                      </span> */}
                    </div>
                    <svg
                      className={`-mr-1 h-5 w-5 text-gray-400 transform ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        <Link
                          to="/astrologer_save_profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          My Profile
                        </Link>
                        <Link
                          to="/astrologer_my_pooja_list"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          My Pooja
                        </Link>
                        <Link
                          to="/astrologer_post_pooja"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Pooja Post
                        </Link>
                        <button type="button" className="block w-full px-4 py-2 text-left text-sm text-red-700 hover:bg-gray-100" role="menuitem" onClick={handle_logout}>Sign out</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header Button End --> */}
      <div className="headermobile flex md:hidden justify-between p-3 shadow fixed top-0 bg-white w-full">
        <a href="#">
          <img src="../assets/img/logo/logo.png" width="150" alt="" />
        </a>
        <a
          href="javascript:void(0)"
          className="gi-header-btn md:hidden gi-site-menu-icon relative transition-all duration-[0.3s] ease-in-out relative flex text-[#00] w-[auto] items-center"
        >
          <i className="fi-rr-menu-burger text-[24px] leading-[17px]"></i>
        </a>
      </div>
      <div className="h-20 md:hidden"></div>
      {/* <!-- Mobile Menu sidebar Start --> */}
      <div className="gi-mobile-menu-overlay hidden w-full h-screen fixed top-[0] left-[0] bg-[#000000cc] z-[16]"></div>
      <div
        id="gi-mobile-menu"
        className="gi-mobile-menu transition-all duration-[0.3s] ease-in-out w-[340px] h-full pt-[15px] pb-[20px] px-[20px] fixed top-[0] right-[auto] left-[0] bg-[#fff] flex flex-col z-[17] overflow-auto max-[480px]:w-[300px]"
      >
        <div className="gi-menu-title w-full pb-[10px] flex flex-wrap justify-between">
          <span className="menu_title flex items-center text-[16px] text-[#4b5966] font-semibold">
            {" "}
            <img src="../assets/img/logo/logo.png" alt="" />{" "}
          </span>
          <button
            type="button"
            className="gi-close-menu relative text-[30px] leading-[1] text-[#777] bg-transparent border-0 mx-[5px]"
          >
            ×
          </button>
        </div>
        <div className="gi-menu-inner">
          <div className="gi-menu-content">
            <ul>
              <li className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                <a
                  href="#"
                  className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium"
                >
                  Call
                </a>
              </li>
              <li className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                <a
                  href="#"
                  className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium"
                >
                  Chat
                </a>
              </li>

              <li className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                <a
                  href="#"
                  className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium"
                >
                  Suggested Remedies
                </a>
              </li>
              <li className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                <a
                  href="#"
                  className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium"
                >
                  Wallet
                </a>
              </li>
              <li className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                <a
                  href="#"
                  className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium"
                >
                  Settings
                </a>
                <ul className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px]">
                  <li>
                    <a
                      href="#"
                      className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                    >
                      Update Phone Number
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                    >
                      Important Contact to be Saved
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                    >
                      Training Videos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                    >
                      Bank Details
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                    >
                      Price Change Request
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                    >
                      Download Form 16A
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                    >
                      Pay Slip
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                    >
                      Membership
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                    >
                      Refer an Astrologer New!
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777]  flex justify-between items-center hover:text-[#9F2225]"
                    >
                      Gallery
                    </a>
                  </li>
                </ul>
              </li>
              <li className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]">
                <a
                  href="#"
                  className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium"
                >
                  Waitlist
                </a>
              </li>
              <li className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]">
                <a
                  href="#"
                  className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium"
                >
                  Support
                </a>
              </li>
              <li className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]">
                <a
                  href="#"
                  className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px]  text-[#4b5966] flex items-center font-medium"
                >
                  My Reviews
                </a>
              </li>
            </ul>
          </div>
          <div className="header-res-lan-curr">
            {/* <!-- Social Start --> */}
            <div className="header-res-social mt-[30px]">
              <div className="header-top-social">
                <ul className="flex flex-row justify-center">
                  <li className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
                    <a href="#">
                      <i className="gicon gi-facebook text-[#fff]"></i>
                    </a>
                  </li>
                  <li className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
                    <a href="#">
                      <i className="gicon gi-twitter text-[#fff]"></i>
                    </a>
                  </li>
                  <li className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
                    <a href="#">
                      <i className="gicon gi-instagram text-[#fff]"></i>
                    </a>
                  </li>
                  <li className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px]">
                    <a href="#">
                      <i className="gicon gi-linkedin text-[#fff]"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Social End --> */}
          </div>
        </div>
      </div>
      {/* <!-- Mobile Menu sidebar End --> */}
    </header>
  );
};

export default Astrologer_after_Login_Header;
