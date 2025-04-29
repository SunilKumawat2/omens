// import React, { useEffect, useRef, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import Common_Images_Transport from '../common_imges_transport/Common_Images_Transport';
// import { CartProvider } from '../../../context/Cart_Context';
// import Mobile_Toggle from './Mobile_Toggle';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCartList } from '../../../redux/actions/cartActions';
// import { Global_Settings } from '../../../api/global/Global';
// import { IMG_BASE_URL } from '../../../config/Config';
// import { get_favourite_product_list } from '../../../api/category_product/Category_Product';
// import { User_Authentication } from '../../../user_authentication/User_Authentication';
// import { toast } from 'react-toastify'
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
// import { Search } from "lucide-react";

// const Header = () => {
//     const navigate = useNavigate()
//     const dispatch = useDispatch();
//     const [open, setOpen] = useState(false);
//     const [is_language_Open, setIs_Language_Open] = useState(false);
//     const [selectedLanguage, setSelectedLanguage] = useState("English");
//     const { cartlist, isloading, error } = useSelector((state) => state?.cartlist);
//     console.log("cartlist", cartlist)
//     const [cart_list, set_Cart_List] = useState(cartlist || []);
//     const [get_settings, setGet_Settings] = useState({});
//     const [wishlist, set_WishList] = useState([]);
//     const [is_loading, set_Is_Loading] = useState(false)
//     const sampleSuggestions = ["stud", "sand", "sided", "sun", "soap", "salad"];
//     const [showInput, setShowInput] = useState(false);
//     const [query, setQuery] = useState("");
//     const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//     const inputRef = useRef(null);

//     const handleToggle = () => {
//         setShowInput(true);
//         setTimeout(() => inputRef.current?.focus(), 100);
//     };

//     const handleChange = (e) => {
//         const value = e.target.value;
//         setQuery(value);
//         const filtered = sampleSuggestions.filter((item) =>
//             item.toLowerCase().startsWith(value.toLowerCase())
//         );
//         setFilteredSuggestions(filtered);
//     };

//     useEffect(() => {
//         const Handle_Get_settings = async () => {
//             try {
//                 const response = await Global_Settings();
//                 setGet_Settings(response?.data?.data?.setting)
//             } catch (error) {
//                 console.log("error", error)
//             }
//         }
//         Handle_Get_settings()
//     }, [])
//     // <------------- Get the User Active ---------->
//     const is_user_active = localStorage.getItem("user_is_active")

//     const toggleDropdown = () => {
//         setIs_Language_Open(!is_language_Open);
//     };

//     const selectLanguage = (language) => {
//         setSelectedLanguage(language);
//         setIs_Language_Open(false);
//     };

//     // Sync the local state cart_list with the Redux cartlist when it changes
//     useEffect(() => {
//         set_Cart_List(cartlist);
//     }, [cartlist]);


//     // Dispatch Redux action to fetch profile data
//     useEffect(() => {
//         dispatch(fetchCartList());
//     }, [dispatch]);

//     const handle_get_favourite_product_list = async () => {
//         try {
//             const token = User_Authentication();
//             if (!token) {
//                 // toast("User token not found")
//                 set_Is_Loading(false)
//                 throw new Error("User token not found");
//             }
//             const response = await get_favourite_product_list({ Authorization: `Bearer ${token}` });
//             set_WishList(response?.data?.data?.favourite);
//             if (response?.data?.status == "200") {

//             }
//         }
//         catch (error) {

//         }
//     }

//     useEffect(() => {
//         handle_get_favourite_product_list();
//     }, [])
//     return (
//         <div>
//             <CartProvider>
//                 {/* <-------- ToastContainer ------------> */}
//                 <ToastContainer style={{ marginTop: "120px" }} />
//                 <header className="gi-header bg-[#fff] z-[14] max-[991px]:z-[16] relative">
//                     {/* <!-- Header Top Start --> */}
//                     <div className="header-top py-[10px] text-[#fff] bg-gradient-to-r from-[#9F2225] to-[#FFB500]">
//                         <div
//                             className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
//                             <div className="w-full flex flex-wrap px-[12px]">
//                                 {/* <!-- Header Top social Start --> */}
//                                 <div className="grow-[1] shrink-[0] basis-[0%] min-[992px]:block max-[992px]:hidden pt-1">
//                                     <div className="header-top-social">
//                                         <ul className="mb-[0] p-[0] flex">
//                                             <li
//                                                 className="list-inline-item transition-all duration-[0.3s] ease-in-out flex text-[13px] mr-[15px]">
//                                                 <Link to="/astrologer-list"
//                                                     className="mx-[5px] text-center flex items-center justify-center text-[15px]">
//                                                     <i className="fi-rr-comment transition-all duration-[0.3s] ease-in-out text-[#fff] mr-2"></i>
//                                                     Chat Astrologer
//                                                 </Link>
//                                             </li>
//                                             <li
//                                                 className="list-inline-item transition-all duration-[0.3s] ease-in-out flex text-[13px]">
//                                                 <Link to="/astrologer-list"
//                                                     className="mx-[5px] text-center flex items-center justify-center text-[15px]">
//                                                     <i className="fi-rr-phone-call transition-all duration-[0.3s] ease-in-out text-[#fff] mr-2"></i>
//                                                     Call Astrologer
//                                                 </Link>
//                                             </li>

//                                         </ul>
//                                     </div>
//                                 </div>

//                                 {/* <!-- Header Top social End --> */}
//                                 <div className="grow-[1] shrink-[0] basis-[0%] hidden min-[992px]:block">
//                                     <div className="header-top-right-inner flex justify-end">
//                                         <div className="relative mt-2">
//                                             {!showInput && (
//                                                 <button
//                                                     onClick={handleToggle}
//                                                     className="flex items-center gap-2 p-2"
//                                                 >
//                                                     <Search size={20} />
//                                                     <span className="text-sm font-medium">SEARCH</span>
//                                                 </button>
//                                             )}
//                                             {showInput && (
//                                                 <>
//                                                     <input
//                                                         type="text"
//                                                         value={query}
//                                                         onChange={handleChange}
//                                                         ref={inputRef}
//                                                         placeholder="Search..."
//                                                         className="w-64 p-2 border text-gray-500 border-red-300 rounded-t"
//                                                     />
//                                                     {query && filteredSuggestions?.length > 0 && (
//                                                         <ul className="absolute z-10 w-full bg-white border border-t-0 border-gray-200 rounded-b shadow">
//                                                             {filteredSuggestions?.map((item, index) => (
//                                                                 <li
//                                                                     key={index}
//                                                                     className="px-4 py-2 text-gray-500 border-b last:border-none hover:bg-gray-100 cursor-pointer"
//                                                                     onClick={() => {
//                                                                         setQuery(item);
//                                                                         setFilteredSuggestions([]);
//                                                                     }}
//                                                                 >
//                                                                     {item}
//                                                                 </li>
//                                                             ))}
//                                                         </ul>
//                                                     )}
//                                                 </>


//                                             )}
//                                         </div>
//                                         <div className="gi-header-bottons">
//                                             <div className={`relative mt-2 ${is_user_active ? "gi-acc-drop" : "gi-acc-drop"}`}>
//                                                 <a href="javascript:void(0)"
//                                                     className="gi-header-btn gi-header-user dropdown-toggle gi-user-toggle mr-[30px] transition-all duration-[0.3s] 
//                                                 ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
//                                                     title="Account">
//                                                     {
//                                                         is_user_active ? (
//                                                             <div className="gi-btn-desc flex flex-col uppercase ml-[10px]">
//                                                                 <Link to="/user-dashBaord"
//                                                                     className="gi-btn-title ease-in-out text-[12px] leading-[1]
//                                                              text-[#fff] tracking-[0.6px] capitalize font-medium"> <i className="fi-rr-user text-[#fff] text-[20px] leading-[17px]"></i>ACCOUNT</Link>
//                                                             </div>
//                                                         ) : (
//                                                             <div className="gi-btn-desc flex flex-col uppercase ml-[10px]">
//                                                                 <span
//                                                                     className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1]
//                                                          text-[#fff] tracking-[0.6px] capitalize font-medium"> <i className="fi-rr-user text-[#fff] text-[20px] leading-[17px]"></i>ACCOUNT</span>
//                                                             </div>
//                                                         )
//                                                     }
//                                                 </a>
//                                                 {
//                                                     is_user_active ? (
//                                                         <ul className={`gi-dropdown-menu min-w-[200px] py-[5px] transition-all duration-[0.3s] ease-in-out mt-[25px] absolute z-[16] text-left bg-[#fff]
//                                                             block ${open ? 'opacity-100 visible' : 'opacity-0 invisible'} left-[0] right-[auto] border-[1px] border-solid border-[#eee] rounded-[5px]`}>
//                                                             <li>
//                                                                 <Link
//                                                                     className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#999] hover:bg-transparent hover:text-[#9F2225] modal-toggle" tabIndex="0" to="/user-profile">
//                                                                     Profile
//                                                                 </Link>
//                                                             </li>
//                                                             <li>
//                                                                 <Link className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#999] hover:bg-transparent hover:text-[#9F2225]" to="/user-logout">
//                                                                     Logout
//                                                                 </Link>
//                                                             </li>
//                                                         </ul>
//                                                     ) : (
//                                                         <ul className={`gi-dropdown-menu min-w-[200px] py-[5px] transition-all duration-[0.3s] ease-in-out mt-[25px] absolute z-[16] text-left bg-[#fff]
//                                                             block ${open ? 'opacity-100 visible' : 'opacity-0 invisible'} left-[0] right-[auto] border-[1px] border-solid border-[#eee] rounded-[5px]`}>
//                                                             <li>
//                                                                 <Link
//                                                                     className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#999] hover:bg-transparent hover:text-[#9F2225] modal-toggle" tabIndex="0" to="/user-login">
//                                                                     Login
//                                                                 </Link>
//                                                             </li>
//                                                             <li>
//                                                                 <Link
//                                                                     className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#999] hover:bg-transparent hover:text-[#9F2225]"
//                                                                     to="/user-register"
//                                                                     onClick={() => setOpen(true)}  // Change to React event handler
//                                                                 >
//                                                                     Register
//                                                                 </Link>
//                                                             </li>
//                                                             <li>
//                                                                 <Link className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#999] hover:bg-transparent hover:text-[#9F2225]" to="/astrologer-login">Astrologer Login</Link>
//                                                             </li>
//                                                             <li>
//                                                                 <Link
//                                                                     className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#999] hover:bg-transparent hover:text-[#9F2225]"
//                                                                     to="/astrologer-register"
//                                                                 >
//                                                                     Astrologer Registration
//                                                                 </Link>
//                                                             </li>
//                                                         </ul>
//                                                     )
//                                                 }

//                                             </div>
//                                         </div>
//                                         <Link to="/user-wishlist" className="relative text-white uppercase text-sm flex items-center gap-2 m-3">
//                                             <i className="fi-rr-heart text-[18px]"></i>
//                                             <span>WISHLIST</span>
//                                             {wishlist?.length > 0 && (
//                                                 <span className="absolute -top-2 -right-2 bg-white text-blue-500 text-xs px-1 rounded-full">
//                                                     {wishlist?.length}
//                                                 </span>
//                                             )}
//                                         </Link>
//                                         <Link to={is_user_active ? "/cart" : "/user-login"} className="relative m-3 text-white uppercase text-sm flex items-center gap-2">
//                                             <i className="fi-rs-shopping-cart text-[18px]"></i>
//                                             <span>MY BAG</span>
//                                             {cart_list?.length > 0 && (
//                                                 <span className="absolute -top-2 -right-2 bg-white text-blue-500 text-xs px-1 rounded-full">
//                                                     {cart_list?.length}
//                                                 </span>
//                                             )}
//                                         </Link>
//                                         <div
//                                             className="relative bg-[#BC7C04] ml-5 py-1 px-4 rounded cursor-pointer"
//                                             onClick={toggleDropdown}
//                                         >
//                                             <button
//                                                 type="button"
//                                                 className="text-[13px] flex items-center justify-between w-full text-[#fff] border-[0] tracking-[0.7px]"
//                                             >
//                                                 {selectedLanguage}
//                                                 <i className="fi-rr-angle-small-down text-[14px] ml-[5px] text-[#fff]"></i>
//                                             </button>
//                                             {is_language_Open && (
//                                                 <ul
//                                                     className="absolute top-full left-0 mt-2 min-w-[130px] truncate px-[10px] bg-[#fff] z-[1] rounded-[5px] border-[1px] border-solid border-[#eee] shadow-md"
//                                                 >
//                                                     <li
//                                                         className={`${selectedLanguage === "English"
//                                                             ? "bg-gray-200 font-semibold"
//                                                             : ""
//                                                             } border-b-[1px] border-solid border-[#eee] leading-[1.5] py-[5px]`}
//                                                     >
//                                                         <button
//                                                             className="w-full text-left text-[#999] text-[14px] bg-transparent px-2"
//                                                             onClick={() => selectLanguage("English")}
//                                                         >
//                                                             English
//                                                         </button>
//                                                     </li>
//                                                     <li
//                                                         className={`${selectedLanguage === "Italiano"
//                                                             ? "bg-gray-200 font-semibold"
//                                                             : ""
//                                                             } leading-[1.5] py-[5px]`}
//                                                     >
//                                                         <button
//                                                             className="w-full text-left text-[#999] text-[14px] bg-transparent px-2"
//                                                             onClick={() => selectLanguage("Italiano")}
//                                                         >
//                                                             Italiano
//                                                         </button>
//                                                     </li>
//                                                     <li
//                                                         className={`${selectedLanguage === "Hindi"
//                                                             ? "bg-gray-200 font-semibold"
//                                                             : ""
//                                                             } leading-[1.5] py-[5px]`}
//                                                     >
//                                                         <button
//                                                             className="w-full text-left text-[#999] text-[14px] bg-transparent px-2"
//                                                             onClick={() => selectLanguage("Hindi")}
//                                                         >
//                                                             Hindi
//                                                         </button>
//                                                     </li>
//                                                 </ul>
//                                             )}
//                                         </div>


//                                     </div>
//                                 </div>
//                                 {/* <!-- Header Top responsive Action --> */}
//                                 <div className="grow-[1] shrink-[0] basis-[0%] min-[992px]:hidden">
//                                     <div className="gi-header-bottons flex justify-between">
//                                         <div className="ps-10 min-[992px]:hidden">
//                                             <Link to="/">
//                                                 {
//                                                     get_settings && get_settings[0]?.header_logo != null ? (
//                                                         <img src={`${IMG_BASE_URL}${get_settings[0]?.header_logo}`} alt="Site Logo"
//                                                             className="w-[200px] max-[1199px]:w-[130px] max-[991px]:w-[120px] max-[767px]:w-[100px] " />
//                                                     ) : (
//                                                         <img src={Common_Images_Transport.logo} alt="Site Logo"
//                                                             className="w-[200px] max-[1199px]:w-[130px] max-[991px]:w-[120px] max-[767px]:w-[100px] " />
//                                                     )
//                                                 }
//                                             </Link>
//                                         </div>
//                                         <div className="right-icons flex flex-row">

//                                             {/* <!-- Header User Start --> */}
//                                             <Link to="/user-profile"
//                                                 className="gi-header-btn gi-header-user mr-[30px] relative transition-all duration-[0.3s] ease-in-out relative 
//                                                 flex text-[#fff] w-[auto] items-center">
//                                                 <div className="header-icon relative flex">
//                                                     <i className="fi-rr-user text-[24px] leading-[17px]"></i>
//                                                 </div>
//                                                 {
//                                                     is_user_active ? (
//                                                         <div className="gi-btn-desc flex flex-col uppercase ml-[10px]">
//                                                             <Link to="/user-dashBaord"
//                                                                 className="gi-btn-title ease-in-out text-[12px] leading-[1]
//                                                              text-[#fff] tracking-[0.6px] capitalize font-medium">Account</Link>
//                                                         </div>
//                                                     ) : (
//                                                         <div className="gi-btn-desc flex flex-col uppercase ml-[10px]">
//                                                             <span
//                                                                 className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1]
//                                                          text-[#fff] tracking-[0.6px] capitalize font-medium">Account</span>
//                                                         </div>
//                                                     )
//                                                 }
//                                             </Link>
//                                             {/* <!-- Header User End --> */}
//                                             {/* <!-- Header Wishlist Start --> */}
//                                             <Link to="/user-wishlist"
//                                                 className="gi-header-btn gi-wish-toggle mr-[30px] relative transition-all duration-[0.3s] ease-in-out relative flex text-[#fff] w-[auto] items-center">
//                                                 <div className="header-icon relative flex">
//                                                     <i className="fi-rr-heart text-[24px] leading-[17px]"></i>
//                                                 </div>
//                                                 {
//                                                     wishlist?.length > 0 && (
//                                                         <span
//                                                             className="gi-header-count gi-wishlist-count w-[15px] h-[15px] text-[#fff] flex items-center justify-center
//                                                          rounded-[50%] text-[11px] absolute top-[-2px] right-[-6px] opacity-[0.8]">{wishlist?.length}</span>
//                                                     )
//                                                 }

//                                             </Link>
//                                             {/* <!-- Header Wishlist End --> */}

//                                             {/* <!-- Header Cart Start --> */}
//                                             <a href="javascript:void(0)"
//                                                 className="gi-header-btn gi-cart-toggle mr-[30px] relative transition-all duration-[0.3s] ease-in-out relative flex text-[#fff] w-[auto] items-center">
//                                                 <div className="header-icon relative flex">
//                                                     {/* {
//                                                         is_user_active ? <Cart_Sidebar /> : <Link className='flex items-center gap-2' to="/user_login" >
//                                                             <i className="fi-rs-shopping-cart text-[#fff] text-[22px] leading-[17px]"></i></Link>
//                                                     } */}
//                                                     {
//                                                         is_user_active ? <Link className='flex items-center gap-2' to="/cart">
//                                                             <i className="fi-rs-shopping-cart text-[#fff] text-[22px] leading-[17px]">
//                                                             </i></Link> : <Link className='flex items-center gap-2' to="/user-login" >
//                                                             <i className="fi-rs-shopping-cart text-[#fff] text-[22px] leading-[17px]"></i></Link>
//                                                     }
//                                                 </div>
//                                                 {
//                                                     cart_list?.length > 0 && (
//                                                         <span
//                                                             className="gi-header-count gi-cart-count  w-[15px] h-[15px] text-[#fff] flex items-center
//                                                              justify-center rounded-[50%] text-[11px] absolute top-[-2px] right-[-6px] opacity-[0.8]">{cart_list?.length}</span>
//                                                     )
//                                                 }
//                                             </a>
//                                             {/* <!-- Header Cart End --> */}
//                                             {/* <!-- Header menu Start --> */}

//                                             {/* <a href="javascript:void(0)"

//                                                 className="gi-header-btn gi-site-menu-icon absolute relative transition-all duration-[0.3s] ease-in-out relative flex text-[#fff] w-[auto] items-center">
//                                                 <i className="fi-rr-menu-burger text-[24px] leading-[17px]"></i>
//                                             </a> */}

//                                             {/* {
//                                                 is_user_active ? <Mobile_Toggle /> : <Link className='gi-header-btn gi-site-menu-icon absolute relative transition-all
//                                                  duration-[0.3s] ease-in-out relative flex text-[#fff] w-[auto] items-center' to="/user_login" >
//                                                     <i className="fi-rr-menu-burger text-[24px] leading-[17px]"></i></Link>
//                                             } */}
//                                             <Mobile_Toggle />
//                                             {/* <!-- Header menu End --> */}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* <!-- Header Top responsive Action --> */}
//                             </div>
//                         </div>
//                     </div>
//                     {/* <!-- Header Top  End --> */}

//                     {/* <!-- Header Bottom  Start --> */}
//                     <div
//                         className="gi-header-bottom max-[992px]:hidden py-[10px] max-[991px]:py-[15px] max-[991px]:border-b-[1px] border-solid border-[#eee]">
//                         <div
//                             className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
//                             <div className="w-full flex flex-wrap px-[12px]">
//                                 <div className="gi-flex flex flex-row justify-between w-full max-[575px]:flex-col">
//                                     {/* <!-- Header Logo Start --> */}
//                                     <div className="self-center gi-header-logo">
//                                         <div className="header-logo text-left">
//                                             <Link to="/">
//                                                 {
//                                                     get_settings && get_settings[0]?.header_logo != null ? (
//                                                         <img src={`${IMG_BASE_URL}${get_settings[0]?.header_logo}`} alt="Site Logo"
//                                                             className="w-[200px] max-[1199px]:w-[130px] max-[991px]:w-[120px] max-[767px]:w-[100px] " />
//                                                     ) : (
//                                                         <img src={Common_Images_Transport.logo} alt="Site Logo"
//                                                             className="w-[200px] max-[1199px]:w-[130px] max-[991px]:w-[120px] max-[767px]:w-[100px] " />
//                                                     )
//                                                 }
//                                             </Link>
//                                         </div>
//                                     </div>
//                                     {/* <!-- Header Logo End --> */}
//                                     {/* <!-- Main Menu Start --> */}
//                                     <div id="gi-main-menu-desk" className="w-full flex items-center min-[992px]:block hidden">
//                                         <div className="nav-desk">
//                                             <div className="w-full flex flex-wrap px-[12px] min-[1400px]:relative">
//                                                 <div className="basis-auto w-full self-center">
//                                                     <div className="gi-main-menu flex">
//                                                         <ul className="w-full flex justify-center flex-wrap pl-[0]">
//                                                             <li
//                                                                 className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
//                                                                 <Link to="/free-kundli" className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium">Free Kundli</Link>

//                                                             </li>
//                                                             <li
//                                                                 className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
//                                                                 <Link to="/daily-horoscope"
//                                                                     className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium">Daily
//                                                                     Horoscope<i
//                                                                         className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i></Link>
//                                                                 <ul
//                                                                     className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px]">
//                                                                     <li><a href="#"
//                                                                         className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">Horoscope
//                                                                         2024</a></li>
//                                                                     <li><a href="#"
//                                                                         className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">
//                                                                         Today's Horoscope
//                                                                     </a></li>
//                                                                     <li><a href="#"
//                                                                         className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">Weekly
//                                                                         Horoscope</a></li>
//                                                                     <li><a href="#"
//                                                                         className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">Monthly
//                                                                         Horoscope</a></li>
//                                                                     <li><a href="#"
//                                                                         className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">Yearly
//                                                                         Horoscope</a></li>
//                                                                     <li><a href="#"
//                                                                         className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">Daily
//                                                                         Horoscope</a></li>
//                                                                     <li><a href="#"
//                                                                         className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">Tomorrow's
//                                                                         Horoscope</a></li>
//                                                                     <li><a href="#"
//                                                                         className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">Yesterday's
//                                                                         Horoscope</a></li>
//                                                                     <li><a href="#"
//                                                                         className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">Chinese
//                                                                         Horoscope</a></li>
//                                                                 </ul>

//                                                             </li>
//                                                             <li
//                                                                 className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
//                                                                 <Link to="/daily-panchang"
//                                                                     className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium">Daily
//                                                                     Panchang</Link>

//                                                             </li>
//                                                             <li
//                                                                 className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
//                                                                 <Link to="/love-calculator"
//                                                                     className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium">Love
//                                                                     calculator</Link>

//                                                             </li>
//                                                             <li
//                                                                 className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
//                                                                 <Link to="/kundli-matching"
//                                                                     className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium">Kundli
//                                                                     Matching</Link>

//                                                             </li>
//                                                             {/* <li
//                                                                 className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]">
//                                                                 <Link to="/book-pooja-list"
//                                                                     className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium">
//                                                                     Shop by Jewellery
//                                                                 </Link>
//                                                             </li> */}
//                                                             <li
//                                                                 className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]">
//                                                                 <Link to="/book-pooja-list"
//                                                                     className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium">
//                                                                     Book Pooja
//                                                                 </Link>
//                                                             </li>
//                                                         </ul>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- Main Menu End --> */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <!-- Header Button End --> */}



//                     {/* <!-- Mobile Menu sidebar Start --> */}
//                     <div className="gi-mobile-menu-overlay hidden w-full h-screen fixed top-[0] left-[0] bg-[#000000cc] z-[16]"></div>
//                     <div id="gi-mobile-menu"
//                         className="gi-mobile-menu transition-all duration-[0.3s] ease-in-out w-[340px] h-full pt-[15px] pb-[20px] px-[20px] fixed top-[0] right-[auto] left-[0] bg-[#fff] flex flex-col z-[17] overflow-auto max-[480px]:w-[300px]">
//                         <div className="gi-menu-title w-full pb-[10px] flex flex-wrap justify-between">
//                             <span className="menu_title flex items-center text-[16px] text-[#4b5966] font-semibold"> <img
//                                 src={Common_Images_Transport?.logo} alt="" /> </span>
//                             <button type="button"
//                                 className="gi-close-menu relative text-[30px] leading-[1] text-[#777] bg-transparent border-0 mx-[5px]">×</button>
//                         </div>
//                         <div className="gi-menu-inner">
//                             <div className="gi-menu-content">
//                                 <ul>
//                                     <li className="dropdown relative drop-list">
//                                         <a href="javascript:void(0)"
//                                             className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Free
//                                             Kundli</a>

//                                     </li>

//                                     <li className="dropdown relative">
//                                         <a href="javascript:void(0)"
//                                             className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Daily
//                                             Horoscope</a>
//                                         <ul
//                                             className="sub-menu w-full min-w-[auto] p-0 mb-[10px] static hidden visible transition-none opacity-[1]">
//                                             <li><a href="#"
//                                                 className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Horoscope
//                                                 2024</a></li>
//                                             <li><a href="#"
//                                                 className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Today's
//                                                 Horoscope</a></li>
//                                             <li><a href="#"
//                                                 className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Weekly
//                                                 Horoscope</a></li>
//                                             <li><a href="#"
//                                                 className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Monthly
//                                                 Horoscope</a></li>
//                                             <li><a href="#"
//                                                 className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Yearly
//                                                 Horoscope</a></li>
//                                             <li><a href="#"
//                                                 className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Daily
//                                                 Horoscope</a></li>
//                                             <li><a href="#"
//                                                 className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Tomorrow's
//                                                 Horoscope</a></li>
//                                             <li><a href="#"
//                                                 className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Yesterday's
//                                                 Horoscope</a></li>
//                                             <li><a href="#"
//                                                 className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Chinese
//                                                 Horoscope</a></li>
//                                         </ul>
//                                     </li>
//                                     <li className="relative">
//                                         <a href="javascript:void(0)"
//                                             className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Daily
//                                             Panchang</a>

//                                     </li>

//                                     <li className="relative">
//                                         <a href="javascript:void(0)"
//                                             className="dropdown-arrow p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Love
//                                             calculator</a>

//                                     </li>
//                                     <li className="relative mt-3">
//                                         <a href="javascript:void(0)"
//                                             className="dropdown-arrow p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Kundli
//                                             Matching</a>

//                                     </li>
//                                     <li className="relative mt-3">
//                                         <a href="javascript:void(0)"
//                                             className="dropdown-arrow p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Nakshtra
//                                             Mall</a>

//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="header-res-lan-curr">
//                                 {/* <!-- Social Start --> */}
//                                 <div className="header-res-social mt-[30px]">
//                                     <div className="header-top-social">
//                                         <ul className="flex flex-row justify-center">
//                                             <li
//                                                 className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
//                                                 <a href="#"><i className="gicon gi-facebook text-[#fff]"></i></a>
//                                             </li>
//                                             <li
//                                                 className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
//                                                 <a href="#"><i className="gicon gi-twitter text-[#fff]"></i></a>
//                                             </li>
//                                             <li
//                                                 className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
//                                                 <a href="#"><i className="gicon gi-instagram text-[#fff]"></i></a>
//                                             </li>
//                                             <li
//                                                 className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px]">
//                                                 <a href="#"><i className="gicon gi-linkedin text-[#fff]"></i></a>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 {/* <!-- Social End --> */}
//                             </div>
//                         </div>
//                     </div>
//                     {/* <!-- Mobile Menu sidebar End --> */}
//                 </header>

//             </CartProvider>
//         </div>
//     )
// }

// export default Header


import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Common_Images_Transport from '../common_imges_transport/Common_Images_Transport';
import { CartProvider } from '../../../context/Cart_Context';
import Mobile_Toggle from './Mobile_Toggle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartList } from '../../../redux/actions/cartActions';
import { Global_Settings } from '../../../api/global/Global';
import { IMG_BASE_URL } from '../../../config/Config';
import { get_favourite_product_list } from '../../../api/category_product/Category_Product';
import { Get_Home_Page } from '../../../api/global/Global';

import { User_Authentication } from '../../../user_authentication/User_Authentication';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Cart_Sidebar from '../cart_sidebar/Cart_Sidebar';
import { Search } from "lucide-react";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [is_language_Open, setIs_Language_Open] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const { cartlist, isloading, error } = useSelector((state) => state?.cartlist);
    console.log("cartlist", cartlist)
    const [cart_list, set_Cart_List] = useState(cartlist || []);
    const [get_settings, setGet_Settings] = useState({});
    const [wishlist, set_WishList] = useState([]);
    const [is_loading, set_Is_Loading] = useState(false)
    const sampleSuggestions = ["stud", "sand", "sided", "sun", "soap", "salad"];

    const [showInput, setShowInput] = useState(false);
    const [query, setQuery] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const inputRef = useRef(null);

    const handleToggle = () => {
        setShowInput(true);
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        const filtered = sampleSuggestions.filter((item) =>
            item.toLowerCase().startsWith(value.toLowerCase())
        );
        setFilteredSuggestions(filtered);
    };
    useEffect(() => {
        if (!query.trim()) {
            setFilteredSuggestions([]);
          return;
        }
    
        const fetchData = async () => {
            set_Is_Loading(true);
          try {
            const res = await Get_Home_Page();
            console.log(res);
            

            // if(res?.status==200){
            //     setFilteredSuggestions(res?.data?.data);
            // }
            // console.log("status wrong");
            
             // Adjust if your data shape is nested
          } catch (error) {
            console.error("Error fetching search results:", error);
          } finally {
            set_Is_Loading(false);
          }
        };
    
        const debounce = setTimeout(fetchData, 300);
        return () => clearTimeout(debounce);
      }, [query]);
console.log("filteredSuggestions:", filteredSuggestions);

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
    // <------------- Get the User Active ---------->
    const is_user_active = localStorage.getItem("user_is_active")

    const toggleDropdown = () => {
        setIs_Language_Open(!is_language_Open);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        setIs_Language_Open(false);
    };

    // Sync the local state cart_list with the Redux cartlist when it changes
    useEffect(() => {
        set_Cart_List(cartlist);
    }, [cartlist]);


    // Dispatch Redux action to fetch profile data
    useEffect(() => {
        dispatch(fetchCartList());
    }, [dispatch]);

    const handle_get_favourite_product_list = async () => {
        try {
            const token = User_Authentication();
            if (!token) {
                // toast("User token not found")
                set_Is_Loading(false)
                throw new Error("User token not found");
            }
            const response = await get_favourite_product_list({ Authorization: `Bearer ${token}` });
            set_WishList(response?.data?.data?.favourite);
            if (response?.data?.status == "200") {

            }
        }
        catch (error) {

        }
    }

    useEffect(() => {
        handle_get_favourite_product_list();
    }, [])
    console.log("wishlist:", wishlist);


    return (
        <div>
            <CartProvider>
                {/* <-------- ToastContainer ------------> */}
                <ToastContainer style={{ marginTop: "120px" }} />
                <header className="gi-header bg-[#fff] z-[14] max-[991px]:z-[16] relative">
                    {/* <!-- Header Top Start --> */}
                    <div className="header-top py-[10px] text-[#fff] bg-gradient-to-r from-[#9F2225] to-[#FFB500]">
                        <div
                            className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                            <div className="w-full flex flex-wrap px-[12px]">
                                {/* <!-- Header Top social Start --> */}
                                <div className="grow-[1] shrink-[0] basis-[0%] min-[992px]:block max-[992px]:hidden pt-1">
                                    <div className="header-top-social">
                                        <ul className="mb-[0] p-[0] flex">
                                            <li
                                                className="list-inline-item transition-all duration-[0.3s] ease-in-out flex text-[13px] mr-[15px]">
                                                <Link to="/astrologer-list"
                                                    className="mx-[5px] text-center flex items-center justify-center text-[15px]">
                                                    <i className="fi-rr-comment transition-all duration-[0.3s] ease-in-out text-[#fff] mr-2"></i>
                                                    Chat Astrologer
                                                </Link>
                                            </li>
                                            <li
                                                className="list-inline-item transition-all duration-[0.3s] ease-in-out flex text-[13px]">
                                                <Link to="/astrologer-list"
                                                    className="mx-[5px] text-center flex items-center justify-center text-[15px]">
                                                    <i className="fi-rr-phone-call transition-all duration-[0.3s] ease-in-out text-[#fff] mr-2"></i>
                                                    Call Astrologer
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                                {/* <!-- Header Top social End --> */}
                                <div className="grow-[1] shrink-[0] basis-[0%] hidden min-[992px]:block">
                                    <div className="header-top-right-inner flex justify-end items-center">
                                        <div className="relative  mr-[30px]">
                                            {!showInput && (
                                                <button
                                                    onClick={handleToggle}
                                                    className="flex items-center gap-2 "
                                                >
                                                    <Search size={20} />
                                                    <span className="text-sm font-medium">SEARCH</span>
                                                </button>
                                            )}
                                            {showInput && (
                                                <>
                                                    <input
                                                        type="text"
                                                        value={query}
                                                        onChange={handleChange}
                                                        ref={inputRef}
                                                        placeholder="Search..."
                                                        className="w-64 p-2 border text-gray-500 border-red-300 rounded-t"
                                                    />
                                                    {query && (
            <div className="absolute z-10 w-full bg-white border border-t-0 border-gray-200 rounded-b shadow max-h-72 overflow-y-auto">
              {is_loading && (
                <div className="px-4 py-3 text-gray-400">Loading...</div>
              )}
              {!is_loading && filteredSuggestions.length === 0 && (
                <div className="px-4 py-3 text-gray-400">No results found</div>
              )}
              {filteredSuggestions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-3 border-b last:border-none hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setQuery(item.name);
                    setFilteredSuggestions([]);
                  }}
                >
                  <img src={item.image_url} alt={item.name} className="w-12 h-12 object-cover" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">{item.name}</p>
                    <p className="text-sm text-[#9F2225] font-semibold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
                                                    </>
                                            )}
                                                </div>
                                            {/* <!-- Header User Start --> */}
                                            <div className="gi-header-bottons">
                                                <div className={`relative ${is_user_active ? "gi-acc-drop" : "gi-acc-drop"}`}>
                                                    <a href="javascript:void(0)"
                                                        className="gi-header-btn gi-header-user dropdown-toggle gi-user-toggle mr-[30px] transition-all duration-[0.3s] 
                                                ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                                                        title="Account">
                                                        <div className="header-icon relative flex">
                                                            <i className="fi-rr-user text-[#fff] text-[18px] leading-[17px]"></i>
                                                        </div>
                                                        {
                                                            is_user_active ? (
                                                                <div className="gi-btn-desc flex flex-col uppercase ml-[10px] md:block hidden">
                                                                    <Link to="/user-dashBaord"
                                                                        className="gi-btn-title ease-in-out text-[12px] leading-[1]
                                                             text-[#fff] tracking-[0.6px] capitalize font-medium">Account</Link>
                                                                </div>
                                                            ) : (
                                                                <div className="gi-btn-desc flex flex-col uppercase ml-[10px] ">
                                                                    <span
                                                                        className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1]
                                                         text-[#fff] tracking-[0.6px] capitalize font-medium">Account</span>
                                                                </div>
                                                            )
                                                        }
                                                    </a>
                                                    {
                                                        is_user_active ? (
                                                            <ul className={`gi-dropdown-menu min-w-[200px] py-[5px] transition-all duration-[0.3s] ease-in-out mt-[25px] absolute z-[16] text-left bg-[#fff]
                                                            block ${open ? 'opacity-100 visible' : 'opacity-0 invisible'} left-[0] right-[auto] border-[1px] border-solid border-[#eee] rounded-[5px]`}>
                                                                <li>
                                                                    <Link
                                                                        className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#999] hover:bg-transparent hover:text-[#9F2225] modal-toggle" tabIndex="0" to="/user-profile">
                                                                        Profile
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#999] hover:bg-transparent hover:text-[#9F2225]" to="/user-logout">
                                                                        Logout
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        ) : (
                                                            <ul className={`gi-dropdown-menu min-w-[200px] py-[5px] transition-all duration-[0.3s] ease-in-out mt-[25px] absolute z-[16] text-left bg-[#fff]
                                                             block ${open ? 'opacity-100 visible' : 'opacity-0 invisible'} left-[0] right-[auto] border-[1px] border-solid border-[#eee] rounded-[5px]`}>
                                                                <li>
                                                                    <Link
                                                                        className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#999] hover:bg-transparent hover:text-[#9F2225] modal-toggle" tabIndex="0" to="/user-login">
                                                                        Login
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#999] hover:bg-transparent hover:text-[#9F2225]"
                                                                        to="/user-register"
                                                                        onClick={() => setOpen(true)}  // Change to React event handler
                                                                    >
                                                                        Register
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#999] hover:bg-transparent hover:text-[#9F2225]" to="/astrologer-login">Astrologer Login</Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#999] hover:bg-transparent hover:text-[#9F2225]"
                                                                        to="/astrologer-register"
                                                                    >
                                                                        Astrologer Registration
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        )
                                                    }

                                                </div>
                                            </div>

                                            {/* <!-- Header wishlist Start --> */}
                                            {/* <div className="relative wishlist_btn mr-[30px]">
                                            <Link to="/user-wishlist"
                                                className="transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                                                title="Wishlist">
                                                <div className="header-icon relative flex">
                                                    <i className="fi-rr-heart text-[18px] text-[#fff] leading-[17px]"></i>
                                                </div>
                                                <div className="gi-btn-desc flex flex-col uppercase ml-[10px]">
                                                    {
                                                        wishlist?.length > 0 && (
                                                            <span
                                                                className="gi-header-count gi-wishlist-count w-[15px] h-[15px] text-blue-400 flex items-center justify-center
                                                         rounded-[50%] text-[11px] rounded-lg bg-white absolute top-[-2px] right-[-6px] opacity-[0.8]">{wishlist?.length}</span>

                                                        )
                                                    }
                                                     <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1]
                                                         text-[#fff] tracking-[0.6px] capitalize font-medium">Wishlist</span>
                                                    
                                                </div>
                                            </Link>
                                            <div className="wish_list w-[350px] hidden bg-white shadow-xl z-30 absolute top-8 right-0">
                                                <div className="gi-cart-inner relative z-[9] flex flex-col h-full justify-between items-center">
                                                    <div className="gi-cart-top">
                                                        <div className="gi-cart-title py-3 w-full flex flex-wrap justify-between items-center px-[20px]">
                                                            <span className="cart_title text-[15px] text-[#4b5966] font-Poppins font-semibold">
                                                                Wishlist</span>
                                                            <a href="javascript:void(0)" className="gi-cart-close relative border-[0] text-[30px] leading-[20px] text-[#4b5966]">
                                                                <i className="fi-rr-cross-small text-[20px] leading-[0]"></i>
                                                            </a>
                                                        </div>
                                                        <ul className="gi-cart-pro-items bg-[#F6F6F6] p-[20px]">
                                                            <li className="mb-[15px] p-[15px] flex overflow-hidden bg-white rounded-[5px]">
                                                                <a href="#" className="gi-pro-img flex grow-[1] basis-[20%] items-center"><img src="https://rasatva.apponedemo.top/omens/public/uploads/product/65991.jpg" className="w-full" alt="product" /></a>
                                                                <div className="gi-pro-content relative grow-[1] basis-[70%] pl-[15px] overflow-hidden">
                                                                    <a href="#" className="cart-pro-title w-full font-bold pr-[30px] text-[#000] whitespace-normal text-ellipsis block text-[16px] leading-[18px] font-normal">Emerald
                                                                        - 5.81 carats</a>
                                                                    <p className="text-[#A6A6A6] whitespace-normal font-normal text-ellipsis block text-[13px] leading-[18px] font-normal">
                                                                        Natural Blue Sapphire (Heated) weighing 0.16 cara</p>
                                                                    <span className="cart-price text-[#000] font-bold text-[14px] block mt-[5px]">Rs.26,200</span>
                                                                </div>
                                                            </li>
                                                            <li className="mb-[15px] p-[15px] flex overflow-hidden bg-white rounded-[5px]">
                                                                <a href="#" className="gi-pro-img flex grow-[1] basis-[20%] items-center"><img src="https://rasatva.apponedemo.top/omens/public/uploads/product/65991.jpg" className="w-full" alt="product" /></a>
                                                                <div className="gi-pro-content relative grow-[1] basis-[70%] pl-[15px] overflow-hidden">
                                                                    <a href="#" className="cart-pro-title w-full font-bold pr-[30px] text-[#000] whitespace-normal text-ellipsis block text-[16px] leading-[18px] font-normal">Emerald
                                                                        - 5.81 carats</a>
                                                                    <p className="text-[#A6A6A6] whitespace-normal font-normal text-ellipsis block text-[13px] leading-[18px] font-normal">
                                                                        Natural Blue Sapphire (Heated) weighing 0.16 cara</p>
                                                                    <span className="cart-price text-[#000] font-bold text-[14px] block mt-[5px]">Rs.26,200</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="gi-cart-bottom px-[20px]">
                                                        <div className="cart_btn mb-[20px]">
                                                            <a href="#" className="gi-btn-2 h-[40px] block uppercase font-medium text-[14px] py-[8px] px-[15px] leading-[22px] bg-[#9F2225] text-[#fff] text-center rounded-[5px] transition-all dummy-[0.3s] ease-in-out hover:bg-[#4b5966]">Wishlist</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                            <div className="relative wishlist_btn mr-[30px] group">
                                                <Link to="/user-wishlist"
                                                    className="transition-all duration-[0.3s] ease-in-out relative flex text-[#4B5966] w-[auto] items-center whitespace-nowrap"
                                                    title="Wishlist">
                                                    <div className="header-icon relative flex">
                                                        <i className="fi-rr-heart text-[18px] text-[#fff] leading-[17px]"></i>
                                                    </div>
                                                    <div className="gi-btn-desc flex flex-col uppercase ml-[10px]">
                                                        {
                                                            wishlist?.length > 0 && (
                                                                <span
                                                                    className="gi-header-count gi-wishlist-count w-[15px] h-[15px] text-blue-400 flex items-center justify-center
                                                         rounded-[50%] text-[11px] rounded-lg bg-white absolute top-[-2px] right-[-6px] opacity-[0.8]">{wishlist?.length}</span>
                                                            )
                                                        }
                                                        <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1]
                                                         text-[#fff] tracking-[0.6px] capitalize font-medium">Wishlist</span>
                                                    </div>
                                                </Link>
                                                {is_user_active &&

                                                    <div className="wish_list w-[350px] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-[0.4s] ease-in-out bg-white shadow-xl z-30 absolute top-8 right-0">
                                                        <div className="gi-cart-inner relative z-[9] flex flex-col h-full justify-between items-center">
                                                            <div className="gi-cart-top">
                                                                <div className="gi-cart-title py-3 w-full flex flex-wrap justify-between items-center px-[20px]">
                                                                    <span className="cart_title text-[15px] text-[#4B5966] font-Poppins font-semibold">
                                                                        Wishlist</span>
                                                                    <a href="javascript:void(0)" className="gi-cart-close relative border-[0] text-[30px] leading-[20px] text-[#4B5966]">
                                                                        <i className="fi-rr-cross-small text-[20px] leading-[0]"></i>
                                                                    </a>
                                                                </div>
                                                                <ul className="gi-cart-pro-items bg-[#F6F6F6] p-[20px]">
                                                                    {wishlist?.map((listItem) => (
                                                                        <li className="mb-[15px] p-[15px] flex overflow-hidden bg-white rounded-[5px]">
                                                                            <a href="/user-wishlist" className="gi-pro-img flex grow-[1] basis-[20%] items-center"><img src={`${IMG_BASE_URL}${listItem?.product?.single_image
                                                                                ?.image_url}`} className="w-full" alt="product" /></a>
                                                                            <div className="gi-pro-content relative grow-[1] basis-[70%] pl-[15px] overflow-hidden">
                                                                                <a href="/user-wishlist" className="cart-pro-title w-full font-bold pr-[30px] text-[#000] whitespace-normal text-ellipsis block text-[16px] leading-[18px] font-normal">{listItem?.product
                                                                                    ?.name}</a>
                                                                                <p className="text-[#A6A6A6] whitespace-normal font-normal text-ellipsis  text-[13px] leading-[18px] font-normal line-clamp-2">
                                                                                    {listItem?.product
                                                                                        ?.description}</p>
                                                                                <span className="cart-price text-[#000] font-bold text-[14px] block mt-[5px]">{listItem?.product
                                                                                    ?.seller_price
                                                                                }</span>
                                                                            </div>
                                                                        </li>
                                                                    ))}

                                                                    {/* <li className="mb-[15px] p-[15px] flex overflow-hidden bg-white rounded-[5px]">
                                                                <a href="#" className="gi-pro-img flex grow-[1] basis-[20%] items-center"><img src="https://rasatva.apponedemo.top/omens/public/uploads/product/65991.jpg" className="w-full" alt="product" /></a>
                                                                <div className="gi-pro-content relative grow-[1] basis-[70%] pl-[15px] overflow-hidden">
                                                                    <a href="#" className="cart-pro-title w-full font-bold pr-[30px] text-[#000] whitespace-normal text-ellipsis block text-[16px] leading-[18px] font-normal">Emerald
                                                                        - 5.81 carats</a>
                                                                    <p className="text-[#A6A6A6] whitespace-normal font-normal text-ellipsis block text-[13px] leading-[18px] font-normal">
                                                                        Natural Blue Sapphire (Heated) weighing 0.16 cara</p>
                                                                    <span className="cart-price text-[#000] font-bold text-[14px] block mt-[5px]">Rs.26,200</span>
                                                                </div>
                                                            </li> */}
                                                                </ul>
                                                            </div>
                                                            <div className="gi-cart-bottom w-full p-3">
                                                                <div className="cart_btn w-full">
                                                                    <a href="/user-wishlist" className="gi-btn-2 w-full h-[40px] block uppercase font-medium text-[14px] py-[8px] px-[15px] leading-[22px] bg-[#9F2225] text-[#fff] text-center rounded-[5px] transition-all dummy-[0.3s] ease-in-out hover:bg-[#4B5966]">Wishlist</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }

                                            </div>







                                            {/* <!-- Header Cart Start --> */}
                                            <a href="javascript:void(0)"
                                                className="gi-header-btn gi-cart-toggle transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                                            >
                                                <div className="header-icon relative flex">
                                                    <span
                                                        className="main-label-note-new transition-all duration-[0.3s] ease-in-out
                                                 h-[10px] w-[10px] m-auto bg-[#ec716d] rounded-[50%] cursor-default hidden 
                                                 absolute bottom-[15px] left-[0] right-[0] z-[3]"></span>
                                                </div>
                                                <div className="gi-btn-desc flex flex-col uppercase ml-[10px]">
                                                    <span
                                                        className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] 
                                                leading-[1] text-[#fff] tracking-[0.6px] capitalize font-medium">
                                                        {
                                                            is_user_active ? <Link className='flex items-center gap-2' to="/cart" >
                                                                <i className="fi-rs-shopping-cart text-[#fff] text-[18px] leading-[17px]">
                                                                </i></Link> : <Link className='flex items-center gap-2' to="/user-login" >
                                                                <i className="fi-rs-shopping-cart text-[#fff] text-[18px] leading-[17px]"></i> Cart</Link>
                                                        }
                                                        {
                                                            cart_list?.length > 0 && (
                                                                <span
                                                                    className="gi-header-count gi-cart-count  w-[15px] h-[15px] text-blue-400 flex items-center
                                                             justify-center rounded-lg bg-white text-[11px]  absolute top-[-2px] right-[-6px] opacity-[0.8]">{cart_list?.length}</span>
                                                            )
                                                        }

                                                    </span>

                                                </div>
                                            </a>
                                            {/* <!-- Header Cart End --> */}

                                            {/* <!-- Language Start --> */}
                                            <div
                                                className="relative bg-[#BC7C04] ml-5 py-1 px-4 rounded cursor-pointer"
                                                onClick={toggleDropdown}
                                            >
                                                <button
                                                    type="button"
                                                    className="text-[13px] flex items-center justify-between w-full text-[#fff] border-[0] tracking-[0.7px]"
                                                >
                                                    {selectedLanguage}
                                                    <i className="fi-rr-angle-small-down text-[14px] ml-[5px] text-[#fff]"></i>
                                                </button>
                                                {is_language_Open && (
                                                    <ul
                                                        className="absolute top-full left-0 mt-2 min-w-[130px] truncate px-[10px] bg-[#fff] z-[1] rounded-[5px] border-[1px] border-solid border-[#eee] shadow-md"
                                                    >
                                                        <li
                                                            className={`${selectedLanguage === "English"
                                                                ? "bg-gray-200 font-semibold"
                                                                : ""
                                                                } border-b-[1px] border-solid border-[#eee] leading-[1.5] py-[5px]`}
                                                        >
                                                            <button
                                                                className="w-full text-left text-[#999] text-[14px] bg-transparent px-2"
                                                                onClick={() => selectLanguage("English")}
                                                            >
                                                                English
                                                            </button>
                                                        </li>
                                                        <li
                                                            className={`${selectedLanguage === "Italiano"
                                                                ? "bg-gray-200 font-semibold"
                                                                : ""
                                                                } leading-[1.5] py-[5px]`}
                                                        >
                                                            <button
                                                                className="w-full text-left text-[#999] text-[14px] bg-transparent px-2"
                                                                onClick={() => selectLanguage("Italiano")}
                                                            >
                                                                Italiano
                                                            </button>
                                                        </li>
                                                        <li
                                                            className={`${selectedLanguage === "Hindi"
                                                                ? "bg-gray-200 font-semibold"
                                                                : ""
                                                                } leading-[1.5] py-[5px]`}
                                                        >
                                                            <button
                                                                className="w-full text-left text-[#999] text-[14px] bg-transparent px-2"
                                                                onClick={() => selectLanguage("Hindi")}
                                                            >
                                                                Hindi
                                                            </button>
                                                        </li>
                                                    </ul>
                                                )}
                                            </div>
                                            {/* <!-- Language End --> */}

                                        </div>
                                    </div>
                                    {/* <!-- Header Top responsive Action --> */}
                                    <div className="grow-[1] shrink-[0] basis-[0%] min-[992px]:hidden">
                                        <div className="gi-header-bottons flex justify-between">
                                            <div className="ps-10 min-[992px]:hidden">
                                                <Link to="/">
                                                    {
                                                        get_settings && get_settings[0]?.header_logo != null ? (
                                                            <img src={`${IMG_BASE_URL}${get_settings[0]?.header_logo}`} alt="Site Logo"
                                                                className="w-[200px] max-[1199px]:w-[130px] max-[991px]:w-[120px] max-[767px]:w-[100px] " />
                                                        ) : (
                                                            <img src={Common_Images_Transport.logo} alt="Site Logo"
                                                                className="w-[200px] max-[1199px]:w-[130px] max-[991px]:w-[120px] max-[767px]:w-[100px] " />
                                                        )
                                                    }
                                                </Link>
                                            </div>
                                            <div className="right-icons flex flex-row">

                                                {/* <!-- Header User Start --> */}
                                                <Link to="/user-profile"
                                                    className="gi-header-btn gi-header-user mr-[30px] relative transition-all duration-[0.3s] ease-in-out relative 
                                                flex text-[#fff] w-[auto] items-center">
                                                    <div className="header-icon relative flex">
                                                        <i className="fi-rr-user text-[20px] leading-[17px]"></i>
                                                    </div>
                                                    {
                                                        is_user_active ? (
                                                            <div className="gi-btn-desc flex flex-col uppercase ml-[10px]">
                                                                <Link to="/user-dashBaord"
                                                                    className="gi-btn-title ease-in-out text-[12px] leading-[1]
                                                             text-[#fff] tracking-[0.6px] capitalize font-medium">Account</Link>
                                                            </div>
                                                        ) : (
                                                            <div className="hidden md:block gi-btn-desc flex flex-col uppercase ml-[10px]">
                                                                <span
                                                                    className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1]
                                                         text-[#fff] tracking-[0.6px] capitalize font-medium">Account</span>
                                                            </div>
                                                        )
                                                    }
                                                </Link>
                                                {/* <!-- Header User End --> */}
                                                {/* <!-- Header Wishlist Start --> */}
                                                <Link to="/user-wishlist"
                                                    className="gi-header-btn gi-wish-toggle mr-[30px] relative transition-all duration-[0.3s] ease-in-out relative flex text-[#fff] w-[auto] items-center">
                                                    <div className="header-icon relative flex">
                                                        <i className="fi-rr-heart text-[20px] leading-[17px]"></i>
                                                    </div>
                                                    {
                                                        wishlist?.length > 0 && (
                                                            <span
                                                                className="gi-header-count gi-wishlist-count w-[15px] h-[15px] text-[#fff] flex items-center justify-center
                                                         rounded-[50%] text-[11px] absolute top-[-2px] right-[-6px] opacity-[0.8]">{wishlist?.length}</span>
                                                        )
                                                    }

                                                </Link>
                                                {/* <!-- Header Wishlist End --> */}

                                                {/* <!-- Header Cart Start --> */}
                                                <a href="javascript:void(0)"
                                                    className="gi-header-btn gi-cart-toggle mr-[30px] relative transition-all duration-[0.3s] ease-in-out relative flex text-[#fff] w-[auto] items-center">
                                                    <div className="header-icon relative flex">
                                                        {/* {
                                                        is_user_active ? <Cart_Sidebar /> : <Link className='flex items-center gap-2' to="/user_login" >
                                                            <i className="fi-rs-shopping-cart text-[#fff] text-[20px] leading-[17px]"></i> <span className="hidden md:block">Cart</span></Link>
                                                    } */}
                                                        {
                                                            is_user_active ? <Link className='flex items-center gap-2' to="/cart">
                                                                <i className="fi-rs-shopping-cart text-[#fff] text-[20px] leading-[17px]">
                                                                </i></Link> : <Link className='flex items-center gap-2' to="/user-login" >
                                                                <i className="fi-rs-shopping-cart text-[#fff] text-[20px] leading-[17px]"></i></Link>
                                                        }
                                                    </div>
                                                    {
                                                        cart_list?.length > 0 && (
                                                            <span
                                                                className="gi-header-count gi-cart-count  w-[15px] h-[15px] text-[#fff] flex items-center
                                                             justify-center rounded-[50%] text-[11px] absolute top-[-2px] right-[-6px] opacity-[0.8]">{cart_list?.length}</span>
                                                        )
                                                    }
                                                </a>
                                                {/* <!-- Header Cart End --> */}
                                                {/* <!-- Header menu Start --> */}

                                                {/* <a href="javascript:void(0)"

                                                className="gi-header-btn gi-site-menu-icon absolute relative transition-all duration-[0.3s] ease-in-out relative flex text-[#fff] w-[auto] items-center">
                                                <i className="fi-rr-menu-burger text-[24px] leading-[17px]"></i>
                                            </a> */}

                                                {/* {
                                                is_user_active ? <Mobile_Toggle /> : <Link className='gi-header-btn gi-site-menu-icon absolute relative transition-all
                                                 duration-[0.3s] ease-in-out relative flex text-[#fff] w-[auto] items-center' to="/user_login" >
                                                    <i className="fi-rr-menu-burger text-[24px] leading-[17px]"></i></Link>
                                            } */}
                                                <Mobile_Toggle />
                                                {/* <!-- Header menu End --> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Header Top responsive Action --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Header Top  End --> */}

                        {/* <!-- Header Bottom  Start --> */}
                        <div
                            className="gi-header-bottom max-[992px]:hidden py-[10px] max-[991px]:py-[15px] max-[991px]:border-b-[1px] border-solid border-[#eee]">
                            <div
                                className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                                <div className="w-full flex flex-wrap px-[12px]">
                                    <div className="gi-flex flex flex-row justify-between w-full max-[575px]:flex-col">
                                        {/* <!-- Header Logo Start --> */}
                                        <div className="self-center gi-header-logo">
                                            <div className="header-logo text-left">
                                                <Link to="/">
                                                    {
                                                        get_settings && get_settings[0]?.header_logo != null ? (
                                                            <img src={`${IMG_BASE_URL}${get_settings[0]?.header_logo}`} alt="Site Logo"
                                                                className="w-[200px] max-[1199px]:w-[130px] max-[991px]:w-[120px] max-[767px]:w-[100px] " />
                                                        ) : (
                                                            <img src={Common_Images_Transport.logo} alt="Site Logo"
                                                                className="w-[200px] max-[1199px]:w-[130px] max-[991px]:w-[120px] max-[767px]:w-[100px] " />
                                                        )
                                                    }
                                                </Link>
                                            </div>
                                        </div>
                                        {/* <!-- Header Logo End --> */}
                                        {/* <!-- Main Menu Start --> */}
                                        <div id="gi-main-menu-desk" className="w-full flex items-center min-[992px]:block hidden">
                                            <div className="nav-desk">
                                                <div className="w-full flex flex-wrap px-[12px] min-[1400px]:relative">
                                                    <div className="basis-auto w-full self-center">
                                                        <div className="gi-main-menu flex">
                                                            <ul className="w-full flex justify-center flex-wrap pl-[0]">
                                                                <li
                                                                    className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                                                                    <Link to="/free-kundli" className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium">Free Kundli</Link>

                                                                </li>
                                                                <li
                                                                    className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                                                                    <Link to="/daily-horoscope"
                                                                        className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium">Daily
                                                                        Horoscope<i
                                                                            className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i></Link>
                                                                    <ul
                                                                        className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px]">
                                                                        <li><a href="#"
                                                                            className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">Horoscope
                                                                            2024</a></li>
                                                                        <li><a href="#"
                                                                            className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">
                                                                            Today's Horoscope
                                                                        </a></li>
                                                                        <li><a href="#"
                                                                            className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">Weekly
                                                                            Horoscope</a></li>
                                                                        <li><a href="#"
                                                                            className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">Monthly
                                                                            Horoscope</a></li>
                                                                        <li><a href="#"
                                                                            className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">Yearly
                                                                            Horoscope</a></li>
                                                                        <li><a href="#"
                                                                            className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">Daily
                                                                            Horoscope</a></li>
                                                                        <li><a href="#"
                                                                            className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">Tomorrow's
                                                                            Horoscope</a></li>
                                                                        <li><a href="#"
                                                                            className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">Yesterday's
                                                                            Horoscope</a></li>
                                                                        <li><a href="#"
                                                                            className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#9F2225]">Chinese
                                                                            Horoscope</a></li>
                                                                    </ul>

                                                                </li>
                                                                <li
                                                                    className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                                                                    <Link to="/daily-panchang"
                                                                        className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium">Daily
                                                                        Panchang</Link>

                                                                </li>
                                                                <li
                                                                    className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                                                                    <Link to="/love-calculator"
                                                                        className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium">Love
                                                                        calculator</Link>

                                                                </li>
                                                                <li
                                                                    className="dropdown drop-list relative ml-[20px] mr-[18px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                                                                    <Link to="/kundli-matching"
                                                                        className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium">Kundli
                                                                        Matching</Link>

                                                                </li>
                                                                {/* <li
                                                                className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]">
                                                                <Link to="/book-pooja-list"
                                                                    className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium">
                                                                    Shop by Jewellery
                                                                </Link>
                                                            </li> */}
                                                                <li
                                                                    className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]">
                                                                    <Link to="/book-pooja-list"
                                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium">
                                                                        Book Pooja
                                                                    </Link>
                                                                </li>
                                                                <li
                                                                    className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]">
                                                                    <Link to="/limited-product"
                                                                        className="transition-all duration-[0.3s] ease-in-out md:text-[12px] xl:text-[14px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium">
                                                                        Limited Product
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Main Menu End --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Header Button End --> */}



                        {/* <!-- Mobile Menu sidebar Start --> */}
                        <div className="gi-mobile-menu-overlay hidden w-full h-screen fixed top-[0] left-[0] bg-[#000000cc] z-[16]"></div>
                        <div id="gi-mobile-menu"
                            className="gi-mobile-menu transition-all duration-[0.3s] ease-in-out w-[340px] h-full pt-[15px] pb-[20px] px-[20px] fixed top-[0] right-[auto] left-[0] bg-[#fff] flex flex-col z-[17] overflow-auto max-[480px]:w-[300px]">
                            <div className="gi-menu-title w-full pb-[10px] flex flex-wrap justify-between">
                                <span className="menu_title flex items-center text-[16px] text-[#4b5966] font-semibold"> <img
                                    src={Common_Images_Transport?.logo} alt="" /> </span>
                                <button type="button"
                                    className="gi-close-menu relative text-[30px] leading-[1] text-[#777] bg-transparent border-0 mx-[5px]">×</button>
                            </div>
                            <div className="gi-menu-inner">
                                <div className="gi-menu-content">
                                    <ul>
                                        <li className="dropdown relative drop-list">
                                            <a href="javascript:void(0)"
                                                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Free
                                                Kundli</a>

                                        </li>

                                        <li className="dropdown relative">
                                            <a href="javascript:void(0)"
                                                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Daily
                                                Horoscope</a>
                                            <ul
                                                className="sub-menu w-full min-w-[auto] p-0 mb-[10px] static hidden visible transition-none opacity-[1]">
                                                <li><a href="#"
                                                    className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Horoscope
                                                    2024</a></li>
                                                <li><a href="#"
                                                    className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Today's
                                                    Horoscope</a></li>
                                                <li><a href="#"
                                                    className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Weekly
                                                    Horoscope</a></li>
                                                <li><a href="#"
                                                    className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Monthly
                                                    Horoscope</a></li>
                                                <li><a href="#"
                                                    className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Yearly
                                                    Horoscope</a></li>
                                                <li><a href="#"
                                                    className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Daily
                                                    Horoscope</a></li>
                                                <li><a href="#"
                                                    className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Tomorrow's
                                                    Horoscope</a></li>
                                                <li><a href="#"
                                                    className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Yesterday's
                                                    Horoscope</a></li>
                                                <li><a href="#"
                                                    className="mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#777]">Chinese
                                                    Horoscope</a></li>
                                            </ul>
                                        </li>
                                        <li className="relative">
                                            <a href="javascript:void(0)"
                                                className="dropdown-arrow mb-[12px] p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Daily
                                                Panchang</a>

                                        </li>

                                        <li className="relative">
                                            <a href="javascript:void(0)"
                                                className="dropdown-arrow p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Love
                                                calculator</a>

                                        </li>
                                        <li className="relative mt-3">
                                            <a href="javascript:void(0)"
                                                className="dropdown-arrow p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Kundli
                                                Matching</a>

                                        </li>
                                        <li className="relative mt-3">
                                            <a href="javascript:void(0)"
                                                className="dropdown-arrow p-[12px] block capitalize text-[#777] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] font-medium">Nakshtra
                                                Mall</a>

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
                                                    <a href="#"><i className="gicon gi-facebook text-[#fff]"></i></a>
                                                </li>
                                                <li
                                                    className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
                                                    <a href="#"><i className="gicon gi-twitter text-[#fff]"></i></a>
                                                </li>
                                                <li
                                                    className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px] mr-[15px]">
                                                    <a href="#"><i className="gicon gi-instagram text-[#fff]"></i></a>
                                                </li>
                                                <li
                                                    className="list-inline-item h-[30px] w-[30px] flex items-center justify-center bg-[#4b5966] rounded-[5px]">
                                                    <a href="#"><i className="gicon gi-linkedin text-[#fff]"></i></a>
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

            </CartProvider>



        </div>
    )
}

export default Header