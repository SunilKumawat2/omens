import React, { useEffect, useState } from 'react'
import User_Dashbaord_Common_Section from '../user_dashboard_common_section/User_Dashbaord_Common_Section'
import Header from '../../../common/header/Header'
import Footer from '../../../common/footer/Footer'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import { UserProfile, UserProfileUpdate } from '../../../../api/auth_api/Auth_Api'
import { User_Authentication } from '../../../../user_authentication/User_Authentication'
import PhoneInput from 'react-phone-number-input';
import { IMG_BASE_URL } from '../../../../config/Config'
import Loader from '../../../../loader/Loader'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const User_Dashboard_Profile = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [profileImg, setProfileImg] = useState("")
    // <--------- Store the User Profile -------------->
    const [user_profile, setUserProfile] = useState({
        name: '',
        dob: '',
        gender: '',
        birth_time: '',
        birth_place: '',
        country: '',
        address: '',
        profileImg: '',
    });

    //  <----------- onchange Section's on the Input Feilds ------------>
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserProfile((prevProfile) => {
            if (name == 'dob' || name == 'country' || name == "address" || name == "birth_place" || name == "birth_time") {
                return {
                    ...prevProfile,
                    user_detail: {
                        ...prevProfile.user_detail,
                        [name]: value,
                    },
                };
            }
            return { ...prevProfile, [name]: value };
        });
    };

    // <----------- handle File Change ------------>
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const previewUrl = URL.createObjectURL(selectedFile);
            setProfileImg(previewUrl);
            setUserProfile((prevProfile) => ({
                ...prevProfile,
                profileImg: selectedFile,
            }));
        }
    };



    // <----------  User Profile Update --------------->
    const Handle_User_Profile_Update = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (!user_profile.name) {
            toast("Please enter your name");
            setIsLoading(false);
            return;
        }

        try {
            const token = User_Authentication();
            if (!token) {
                setIsLoading(false);
                throw new Error("User token not found");
            }
            const formData = new FormData();
            formData.append('name', user_profile.name);
            formData.append('dob', user_profile?.user_detail?.dob || user_profile?.dob || '');
            formData.append('gender', user_profile?.gender || '');
            formData.append('birth_time', user_profile?.user_detail?.birth_time || '');
            formData.append('birth_place', user_profile?.user_detail?.birth_place || '');
            formData.append('country', user_profile?.user_detail?.country || '');
            formData.append('address', user_profile?.user_detail?.address || '');

            // Handle profile image if provided
            if (user_profile.profileImg) {
                formData.append('profileImg', user_profile.profileImg);
            }
            const response = await UserProfileUpdate(formData, { Authorization: `Bearer ${token}` });
            if (response?.data?.status === true) {
                toast("Profile updated successfully");
                UserProfile({ Authorization: `Bearer ${token}` })
            } else {
                toast(response?.data?.message || "Failed to update profile");
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error("Error updating profile:", error);
            toast("An error occurred while updating profile");
        }
    };

    // <------- Fetch the User Profile ------------->
    useEffect(() => {
        const fetchUserProfile = async () => {
            setIsLoading(true)
            try {
                const token = User_Authentication();
                if (!token) {
                    setIsLoading(false)
                    throw new Error("User token not found");
                }
                const response = await UserProfile({ Authorization: `Bearer ${token}` });
                if (response?.data?.status == true) {
                    setIsLoading(false)
                }
                setUserProfile(response?.data?.data);
            }
            catch (error) {
                setIsLoading(false)
                console.error('Error fetching user profile:', error);
            }
        }
        fetchUserProfile();
    }, [])

    return (
        <>
            {/* <----------- Header section's -------------> */}
            <Header />
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            {/* <---------- User Profile section's -----------> */}
            <div className="bg-[#f8f8f8] py-8">
                <div className=" mx-auto min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="myaccount-section w-full">
                        <div className="container-x mx-auto">
                            <div className="w-full my-10">
                                <div className="w-full bg-white shadow-xl p-5">
                                    <div className="my_account w-full flex space-x-10">
                                        <User_Dashbaord_Common_Section data={user_profile} />
                                        <div className="flex-1">
                                            <div className=" w-full">
                                                {/* <h1 className="font-bold text-[24px] text-qblack mb-4">Profile</h1> */}
                                                {
                                                    isLoading ? (
                                                        <Loader />
                                                    ) : (
                                                        <form action="#" method="post" onSubmit={Handle_User_Profile_Update}>
                                                            <div className="flex space-x-8">

                                                                <div className="w-full">
                                                                    <div className="gi-login-wrap flex gi-register-half w-[100%] flex-col">
                                                                        {/* <h4 className="text-lg font-semibold">Update Profile Picture</h4> */}

                                                                        <div className="iconflexd text-center relative mb-5">
                                                                            <div className="columns relative w-[300px] m-auto">
                                                                                <div className="circle">
                                                                                    {profileImg ? (
                                                                                        <img
                                                                                            className="profile-pic object-cover position-top rounded-full w-[200px] h-[200px] m-auto" src={profileImg}  alt="Preview"
                                                                                        />
                                                                                    ) : user_profile?.profile_image ? (
                                                                                        <img
                                                                                            className="profile-pic object-cover position-top rounded-full w-[200px] h-[200px] m-auto" src={`${IMG_BASE_URL}${user_profile?.profile_image}`} alt="User"
                                                                                        />
                                                                                    ) : (
                                                                                        <img
                                                                                            className="profile-pic object-cover position-top rounded-full w-[200px] h-[200px] m-auto" src={Common_Images_Transport?.user_logo} alt="Default"
                                                                                        />
                                                                                    )}
                                                                                </div>
                                                                                <div
                                                                                    className="absolute bottom-[15px] flex justify-center w-full">
                                                                                    <div className="p-image rounded-full relative">
                                                                                        <i
                                                                                            className="fi-rr-camera text-[#fff] text-[18px] leading-[17px]"></i>
                                                                                        <input className="file-upload" type="file" name='profileImg' onChange={handleFileChange}
                                                                                            accept="image/*" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="input-grid flex space-x-2.5 mb-8">
                                                                        <div className="w-1/2 h-full">
                                                                            <div className="input-com"><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">User Name*</label>
                                                                                <div
                                                                                    className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                    <input placeholder="Name" value={user_profile.name || ''} name="name"
                                                                                        onChange={handleChange}
                                                                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                        type="text" required />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="w-1/2 h-full">
                                                                            <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Email *</label>
                                                                                <div
                                                                                    className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                    <input placeholder="Email"
                                                                                        disabled
                                                                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                        type="text" value={user_profile?.email} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="input-grid flex space-x-2.5 mb-8">
                                                                        <div className="w-1/2 h-full">
                                                                            <div className="input-com "><label
                                                                                className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Phone*</label>
                                                                                <div>
                                                                                    <PhoneInput
                                                                                        disabled
                                                                                        international
                                                                                        value={user_profile?.mobileWithCountryCode}
                                                                                        className="w-full mb-[15px] px-[15px] bg-transparent border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] outline-[0] h-[50px]"
                                                                                        placeholder="Enter phone number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="gi-login-wrap flex gi-register-half w-[50%] flex-col">
                                                                            <label
                                                                                className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                                                                                Date Of Birth*</label>
                                                                            <div className="iconflex">
                                                                                <i className="fi-rs-calendar text-[#303030] text-[18px] leading-[17px]"></i>
                                                                                <input type="date" value={user_profile?.user_detail?.dob || ''} name="dob"
                                                                                    onChange={handleChange} placeholder="date"
                                                                                    className="w-full mb-[15px] px-[15px] bg-transparent border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] outline-[0] h-[50px]" />
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div className="gi-login-wrap flex flex-col mb-3 gi-register-half w-[50%] pr-3">
                                                                        <label
                                                                            className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Gender*</label>
                                                                        <div className="grid w-full gap-3 md:grid-cols-3">
                                                                            <div className="relative">
                                                                                <input type="radio" id="male" value="male"
                                                                                    checked={user_profile?.gender == "male"}
                                                                                    name="gender"
                                                                                    onChange={handleChange}
                                                                                    className="absolute bottom-[20px] left-[15px] peer" />
                                                                                <label for="male"
                                                                                    className="inline-flex items-center justify-end w-full p-2 h-[50px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 light:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                                                                                    <div className="block pr-2">
                                                                                        <div className="w-full">Male</div>
                                                                                    </div>
                                                                                </label>
                                                                            </div>
                                                                            <div className="relative">
                                                                                <input type="radio" id="female" value="female"
                                                                                    checked={user_profile?.gender == "female"}
                                                                                    name="gender"
                                                                                    onChange={handleChange}
                                                                                    className="absolute bottom-[20px] left-[15px] peer" />
                                                                                <label for="female"
                                                                                    className="inline-flex items-center justify-end w-full p-2 h-[50px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 light:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                                                                                    <div className="block pr-2">
                                                                                        <div className="w-full">Female</div>
                                                                                    </div>
                                                                                </label>
                                                                            </div>
                                                                            <div className="relative">
                                                                                <input type="radio" id="other" value="other" name="gender" checked={user_profile?.gender == "other"} onChange={handleChange}
                                                                                    className="absolute bottom-[20px] left-[15px] peer" />
                                                                                <label for="other"
                                                                                    className="inline-flex items-center justify-end w-full p-2 h-[50px] text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 light:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                                                                                    <div className="block pr-2">
                                                                                        <div className="w-full">Other</div>
                                                                                    </div>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="input-grid mb-8">
                                                                        <div className="w-full">
                                                                            <div className="input-com "><label
                                                                                className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Country*</label>
                                                                                <div
                                                                                    className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                    <input placeholder="country"
                                                                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                        type="text" value={user_profile?.user_detail?.country || ''} name="country" onChange={handleChange} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="input-grid mb-8">
                                                                        <div className="w-full">
                                                                            <div className="input-com "><label
                                                                                className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Address*</label>
                                                                                <div
                                                                                    className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                    <input placeholder="your address here"
                                                                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                        type="text" value={user_profile?.user_detail?.address || ''} name="address" onChange={handleChange} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="input-grid flex space-x-2.5 mb-8">
                                                                        <div className="w-1/2 h-full">
                                                                            <div className="input-com "><label
                                                                                className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Birth Place*</label>
                                                                                <div
                                                                                    className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                    <input placeholder="Birth Place"
                                                                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                        type="text" value={user_profile?.user_detail?.birth_place || ''} name="birth_place" onChange={handleChange} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="w-1/2 h-full">
                                                                            <div className="input-com "><label
                                                                                className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Brith Time*</label>
                                                                                <div className="iconflex">
                                                                                    <i className="fi-rr-clock text-[#303030] text-[18px] leading-[17px]"></i>
                                                                                    <input type="time" value={user_profile?.user_detail?.birth_time || ''} name="birth_time"
                                                                                        onChange={handleChange} placeholder="brith time"
                                                                                        className="w-full mb-[15px] px-[15px] bg-transparent border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] outline-[0] h-[50px]" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="action-area flex justify-between space-x-4 items-center">
                                                                <button type="submit"
                                                                    className="w-[164px] h-[45px] bg-[#9F2225] text-white text-sm">Update
                                                                    Profile</button>
                                                                <button type="button"
                                                                    className="text-sm bg-gray-500 text-white h-[45px] px-5 text-qred font-semibold">Cancel</button>
                                                            </div>
                                                        </form>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <----------- Footer section's -------------> */}
            <Footer />
        </>
    )
}

export default User_Dashboard_Profile