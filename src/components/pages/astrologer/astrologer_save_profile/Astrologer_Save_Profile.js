import React, { useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchAstroProfile } from '../../../../redux/actions/astrologerActions'
import { Link } from 'react-router-dom'
import Loader from '../../../../loader/Loader'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { IMG_BASE_URL } from '../../../../config/Config'
import Astrologer_after_Login_Header from '../astrologer_after_login_header/Astrologer_after_Login_Header'

const Astrologer_Save_Profile = () => {
    const dispatch = useDispatch();
    const {profile,isloading,error} = useSelector((state)=>state.astrologer);


    // useEffect(() => {
    //     const handle_astrologer_save_profile = async () => {
    //         setis_loading(true)
    //         try {
    //             const token = User_Authentication();
    //             if (!token) {
    //                 setis_loading(false);
    //                 toast("token not found's")
    //                 throw new Error("User token not found");
    //             }
    //             const response = await get_astro_profile({ Authorization: `Bearer ${token}` })
    //             if (response?.data?.status == true) {
    //                 set_Astro_Profile(response?.data?.data)
    //                 setis_loading(false)
    //             }
    //             else if (response?.response?.data?.status == false) {
    //                 setis_loading(false)
    //             }
    //         }
    //         catch (error) {
    //             setis_loading(false)
    //         }
    //     }
    //     handle_astrologer_save_profile();
    // }, [])

    // Dispatch Redux action to fetch profile data
    useEffect(() => {
        dispatch(fetchAstroProfile());
    }, [dispatch]);

    const formatDate = (dateString) => {
        if (!dateString) return ""; 
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0'); 
        return `${year}-${month}-${day}`; 
    };
    return (
        <div>
            {/*  */}
            <Astrologer_after_Login_Header/>
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            {
                isloading ? (
                    <Loader />
                ) : (
                    <section className="gi-register py-[40px] max-[767px]:py-[30px]">
                        <div
                            className=" justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                            <div className="min-[1000px]:max-w-[1000px] m-auto">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-[22px] mb-2 font-semibold text-[#3B4959]">Astrologer Save Profile</h3>
                                    <div>
                                        <Link to="/astrologer_save_Profile_update"
                                            className="bg-red-800 me-2 text-white text-sm p-2 rounded-full text-center dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                            <i className="fi-rr-edit"></i> </Link>
                                        <Link to="/astrologer_home"
                                            className="bg-red-800 text-white text-sm py-2 px-5 rounded-full text-center dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                            Go to Home</Link>
                                    </div>
                                </div>
                                <div className="bg_basic_details relative p-3 rounded-lg">
                                    <div className="gi-register-wrapper my-[0] mx-auto bg-[#ffffffc4] left rounded-lg">
                                        <div className="gi-login-box w-[100%] p-[25px] max-[991px]:w-full max-[991px]:p-[0]">
                                            <h3 className="text-[22px] mb-2 font-semibold text-[#3B4959]">Basic Details</h3>

                                            <div className="gi-product-content overflow-hidden">
                                                <div
                                                    className="gi-product-inner md:flex lg:flex gap-5 transition-all duration-[0.3s] ease-in-out ">
                                                    <div
                                                        className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
                                                        <div className="gi-pro-image overflow-hidden md:w-40">
                                                            <a href="#"
                                                                className="image relative block overflow-hidden pointer-events-none">
                                                                <img className="main-image transition-all duration-[0.3s] ease delay-[0s] w-44 rounded-[10px]"
                                                                    src={`${IMG_BASE_URL}${profile?.profile_image}`} alt="astrologer" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="gi-pro-content w-full h-full relative z-[10]">

                                                        <h5 className="gi-pro-stitle font-normal text-[#3B4959] text-[22px] font-semibold">{profile?.name}</h5>

                                                        <div className="mt-2 flex gap-5 justify-between">
                                                            <div>
                                                                <h6 className="text-sm text-[#3B4959] font-semibold">Language</h6>
                                                                <span
                                                                    className="whitespace-nowrap inline-block text-gray-900 hover:text-white bg-[#F0EFEF] hover:bg-gray-900 rounded-full text-sm px-5 py-1 text-center mt-2">
                                                                    {profile?.language}</span>

                                                            </div>
                                                            <div>
                                                                <h6 className="text-sm text-[#3B4959] font-semibold">Experience</h6>
                                                                <h5 className="text-lg font-semibold text-[#3B4959] mt-2">{profile?.experience}</h5>
                                                            </div>
                                                        </div>
                                                        <div className="mt-3">
                                                            <div>
                                                                <h6 className="text-sm text-[#3B4959] font-semibold">Skills</h6>
                                                                <span
                                                                    className="whitespace-nowrap inline-block text-gray-900 hover:text-white bg-[#F0EFEF] hover:bg-gray-900 rounded-full text-sm px-5 py-1 text-center mt-2">{profile?.skills}</span>


                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="aboutinfo border-t border-[#eee] mt-4 pt-4">
                                                    <h5
                                                        className="gi-pro-stitle font-normal mb-2 text-[#3B4959] text-[20px] font-semibold leading-[1.2]">
                                                        Info</h5>
                                                    <div className="grid grid-cols-3 gap-4">
                                                        <div>
                                                            <span className="text-sm text-gray-700">Phone No.</span>
                                                            <h5 className="text-[16px] text-[#0F1726] font-medium">{profile?.country_code} {profile?.mobile}</h5>
                                                        </div>
                                                        <div className='overflow-hidden'>
                                                            <span className="text-sm text-gray-700">Email address</span>
                                                            <h5 className="text-[16px] text-[#0F1726] font-medium">{profile?.email}</h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-700">Gender</span>
                                                            <h5 className="text-[16px] text-[#0F1726] font-medium">{profile?.gender}</h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-700">Place Of Birth</span>
                                                            <h5 className="text-[16px] text-[#0F1726] font-medium">{profile?.astrodetail?.birth_place}</h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-700">Faith</span>
                                                            <h5 className="text-[16px] text-[#0F1726] font-medium">{profile?.astrodetail?.faith}</h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-700">City</span>
                                                            <h5 className="text-[16px] text-[#0F1726] font-medium">{profile?.astrodetail?.city}</h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-700">Date Of Birth</span>
                                                            <h5 className="text-[16px] text-[#0F1726] font-medium">{formatDate(profile?.astrodetail?.dob)}</h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-700">Address</span>
                                                            <h5 className="text-[16px] text-[#0F1726] font-medium">{profile?.astrodetail?.address}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="aboutinfo border-t border-[#eee] mt-4 pt-4">
                                                    <h5
                                                        className="gi-pro-stitle font-normal mb-2 text-[#3B4959] text-[20px] font-semibold leading-[1.2]">
                                                        About us</h5>
                                                    <p className="text-[#9C9C9C] leading-[1.8]">{profile?.astrodetail?.about_us}</p>
                                                </div>
                                                <div className="aboutinfo border-t border-[#eee] mt-4 pt-4">
                                                    <h5
                                                        className="gi-pro-stitle font-normal mb-2 text-[#3B4959] text-[20px] font-semibold leading-[1.2]">
                                                        Gallery
                                                    </h5>
                                                    <div className="grid grid-cols-5 gap-4">
                                                        {
                                                            profile?.profile_images?.map((astro_profile_gallery, index) => (
                                                                <div key={index}>
                                                                    <img
                                                                     
                                                                        className='w-full h-[180px]'
                                                                        src={`${IMG_BASE_URL}${astro_profile_gallery?.image_file}`}
                                                                        alt="Gallery Item"
                                                                    />
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>

                                                <div className="aboutinfo border-t border-[#eee] mt-4 pt-4">
                                                    <h5
                                                        className="gi-pro-stitle font-normal mb-2 text-[#3B4959] text-[20px] font-semibold leading-[1.2]">
                                                        Qualification</h5>
                                                    <div className="grid grid-cols-3 gap-4">
                                                        <div>
                                                            <span className="text-sm text-gray-700">Select your highest qualification</span>
                                                            <h5 className="text-[16px] text-[#0F1726] font-medium">{profile?.astrodetail?.highest_qualification}</h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-700">Degree/Diploma</span>
                                                            <h5 className="text-[16px] text-[#0F1726] font-medium">{profile?.astrodetail?.degree}</h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-700">College/School/University</span>
                                                            <h5 className="text-[16px] text-[#0F1726] font-medium">{profile?.astrodetail?.collage_school} </h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-700">From Where did you learn Astrology?</span>
                                                            <h5 className="text-[16px] text-[#0F1726] font-medium">{profile?.astrodetail?.from_astroogy}</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="aboutinfo border-t border-[#eee] mt-4 pt-4">
                                                    <h5
                                                        className="gi-pro-stitle font-normal mb-2 text-[#3B4959] text-[20px] font-semibold leading-[1.2]">
                                                        Price</h5>
                                                    <div className="grid grid-cols-3 gap-4">
                                                        <div>
                                                            <span className="text-sm text-gray-700">Hourly Rate</span>
                                                            <h5 className="text-[16px] text-[#0F1726] font-medium">Rs.{profile?.hourly_rate}/- Per Hourly</h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-700">Minute Rate</span>
                                                            <h5 className="text-[16px] text-[#0F1726] font-medium">Rs.{profile?.minute_rate}/- Per Minute</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="aboutinfo border-t border-[#eee] mt-4 pt-4">
                                                    <h5
                                                        className="gi-pro-stitle font-normal mb-2 text-[#3B4959] text-[20px] font-semibold leading-[1.2]">
                                                        Social Media link</h5>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <span className="text-sm text-gray-700">Instagram profile link</span>
                                                            <h5 className="text-[16px] text-[#2F80ED] font-medium"><a href={profile?.astrodetail?.instagram} target='_blank'>{profile?.astrodetail?.instagram}</a></h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-700">Facebook profile link</span>
                                                            <h5 className="text-[16px] text-[#2F80ED] font-medium"><a href={profile?.astrodetail?.facebook} target='_blank'>{profile?.astrodetail?.facebook}</a></h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-700">linkedin profile link</span>
                                                            <h5 className="text-[16px] text-[#2F80ED] font-medium"><a href={profile?.astrodetail?.linked_in} target='_blank'>{profile?.astrodetail?.linked_in}</a></h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-700">YouTube Channel link </span>
                                                            <h5 className="text-[16px] text-[#2F80ED] font-medium"><a href={profile?.astrodetail?.youtube} target='_blank'>{profile?.astrodetail?.youtube}</a></h5>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-700">Website profile link </span>
                                                            <h5 className="text-[16px] text-[#2F80ED] font-medium"><a href={profile?.astrodetail?.website} target='_blank'>{profile?.astrodetail?.website}</a></h5>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                )
            }
        </div>
    )
}

export default Astrologer_Save_Profile