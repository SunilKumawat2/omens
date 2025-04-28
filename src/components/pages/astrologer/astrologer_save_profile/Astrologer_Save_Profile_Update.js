import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport';
import { Astrolger_Profile_Update, get_astro_profile } from '../../../../api/astrologer/Astrologer';
import { User_Authentication } from '../../../../user_authentication/User_Authentication';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Loader from '../../../../loader/Loader';
import { IMG_BASE_URL } from '../../../../config/Config';
import Astrologer_after_Login_Header from '../astrologer_after_login_header/Astrologer_after_Login_Header';
import { isValidFacebookLink, isValidInstagramLink, isValidLinkedInLink, isValidWebsite, isValidYouTubeLink } from '../../../validation/Validation';

const Astrologer_Save_Profile_Update = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [astro_step_active_form, set_Astro_Active_Form] = useState("0");
    const [profileImg, setProfileImg] = useState([]);
    const get_astrologer_update_profile_form_dob = localStorage.getItem("astrologer_update_profile_form_dob")
    console.log("get_astrologer_update_profile_form_dob",get_astrologer_update_profile_form_dob)
    // <-------- astro update form -------->
    const [astrologer_update_profile_form, set_Astrologer_Update_Profile_Form] = useState({
        name: "",
        dob: get_astrologer_update_profile_form_dob,
        birth_place: "",
        faith: "",
        address: "",
        country: "",
        state: "",
        city: "",
        highest_qualification: "",
        degree: "",
        collage_school: "",
        from_astroogy: "",
        // hourly_rate: "",
        // minute_rate: "",
        chat_rate: "",
        audio_call_rate: "",
        emergency_audio_call_rate: "",
        emergency_video_call_rate: "",
        video_call_rate: "",
        instagram: "",
        facebook: "",
        linked_in: "",
        youtube: "",
        website: "",
        about_us: "",
        about_us: "",
        profileImg: []
    })
    console.log("astrologer_update_profile_form", astrologer_update_profile_form?.dob)

    // <-------- Handle Astro Update Profile --------->
    const handle_change_astro_profile_update = async (e) => {
        const { name, value } = e.target;
        set_Astrologer_Update_Profile_Form({
            ...astrologer_update_profile_form,
            [name]: value
        });
    };

    // <----- Handle Submit the Astro Bascis Details ------->
    const handle_submit_astro_update_basics_details = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("Form is being submitted...");

        // Validation checks for required fields
        // if (!astrologer_update_profile_form?.name) {
        //     toast("Please enter your name");
        //     setIsLoading(false);
        //     return;
        // }
        if (!astrologer_update_profile_form?.dob) {
            toast("Please enter your date of birth");

            setIsLoading(false);
            return;
        }
        if (!astrologer_update_profile_form?.birth_place) {
            toast("Please enter your birth place");
            setIsLoading(false);
            return;
        }
        if (!astrologer_update_profile_form?.faith) {
            toast("Please enter your faith");
            setIsLoading(false);
            return;
        }
        if (!astrologer_update_profile_form?.address) {
            toast("Please enter your address");
            setIsLoading(false);
            return;
        }
        if (!astrologer_update_profile_form?.country) {
            toast("Please enter your country");
            setIsLoading(false);
            return;
        }
        if (!astrologer_update_profile_form?.state) {
            toast("Please enter your state");
            setIsLoading(false);
            return;
        }
        if (!astrologer_update_profile_form?.city) {
            toast("Please enter your city");
            setIsLoading(false);
            return;
        }
        if (!astrologer_update_profile_form?.highest_qualification) {
            toast("Please enter your highest qualification");
            setIsLoading(false);
            return;
        }
        if (!astrologer_update_profile_form?.degree) {
            toast("Please enter your highest degree");
            setIsLoading(false);
            return;
        }
        if (!astrologer_update_profile_form?.collage_school) {
            toast("Please enter your collage/school name");
            setIsLoading(false);
            return;
        }
        if (!astrologer_update_profile_form?.from_astroogy) {
            toast("Please enter from where did you learn astrology");
            setIsLoading(false);
            return;
        }
        const formData = new FormData();
        formData.append('name', astrologer_update_profile_form?.name);
        formData.append('dob', astrologer_update_profile_form?.dob);
        formData.append('birth_place', astrologer_update_profile_form?.birth_place);
        formData.append('faith', astrologer_update_profile_form?.faith);
        formData.append('address', astrologer_update_profile_form?.address);
        formData.append('country', astrologer_update_profile_form?.country);
        formData.append('state', astrologer_update_profile_form?.state);
        formData.append('city', astrologer_update_profile_form?.city);
        formData.append('highest_qualification', astrologer_update_profile_form?.highest_qualification);
        formData.append('from_astroogy', astrologer_update_profile_form?.from_astroogy);
        formData.append('collage_school', astrologer_update_profile_form?.collage_school);
        formData.append('degree', astrologer_update_profile_form?.degree);

        try {
            const token = User_Authentication();
            console.log("User Token:", token);
            if (!token) {
                alert("User token not found");
                setIsLoading(false);
                throw new Error("User token not found");
            }
            const response = await Astrolger_Profile_Update(formData, { Authorization: `Bearer ${token}` });
            console.log("API Response:", response);

            if (response?.data?.status === true) {
                set_Astro_Active_Form("1");
                setIsLoading(false);
                await get_astro_profile({ Authorization: `Bearer ${token}` });
                set_Astrologer_Update_Profile_Form(response?.data?.data);
            }
            else if (response?.response?.data?.status == false) {
                setIsLoading(false)
                toast(response?.response?.data?.message)
            }
        } catch (error) {
            setIsLoading(false);
            console.log("Error during submission:", error);
        }
    };


    // <----- Handle Submit the Add Gallery Details ------->
    const handle_submit_astro_Price_details = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        console.log("Form is being submitted...");
        if (!astrologer_update_profile_form?.astro_amounts?.chat_rate) {
            toast("Please enter your chat rate");
            setIsLoading(false)
            return;
        }
        if (!astrologer_update_profile_form?.astro_amounts?.audio_call_rate) {
            toast("Please enter your audio call rate");
            setIsLoading(false)
            return;
        }
        if (!astrologer_update_profile_form?.astro_amounts?.video_call_rate) {
            toast("Please enter your video call rate");
            setIsLoading(false)
            return;
        }
        if (!astrologer_update_profile_form?.astro_amounts?.emergency_audio_call_rate) {
            toast("Please enter your emergency audio call rate");
            setIsLoading(false)
            return;
        }
        if (!astrologer_update_profile_form?.astro_amounts?.emergency_video_call_rate) {
            toast("Please enter your emergency video call rate");
            setIsLoading(false)
            return;
        }

        if (!astrologer_update_profile_form?.astrodetail?.instagram) {
            toast("Please enter a valid Instagram profile URL.");
            setIsLoading(false)
            return;
        }
        if (!astrologer_update_profile_form?.astrodetail?.facebook) {
            toast("Please enter a valid facebook profile URL.");
            setIsLoading(false)
            return;
        }
        if (!astrologer_update_profile_form?.astrodetail?.linked_in) {
            toast("Please enter a valid linkedIn profile URL.");
            setIsLoading(false)
            return;
        }
        if (!astrologer_update_profile_form?.astrodetail?.youtube) {
            toast("Please enter a valid youtube profile URL.");
            setIsLoading(false)
            return;
        }
        if (!astrologer_update_profile_form?.astrodetail?.website) {
            toast("Please enter a valid website URL.");
            setIsLoading(false)
            return;
        }
        if (!astrologer_update_profile_form?.astrodetail?.about_us) {
            toast("Please enter about to astrologer");
            setIsLoading(false)
            return;
        }
        const formData = new FormData();
        // formData.append('hourly_rate', astrologer_update_profile_form?.hourly_rate);
        // formData.append('minute_rate', astrologer_update_profile_form?.minute_rate);
        formData.append('video_call_rate', astrologer_update_profile_form?.astro_amounts?.video_call_rate);
        formData.append('emergency_video_call_rate', astrologer_update_profile_form?.astro_amounts?.emergency_video_call_rate);
        formData.append('emergency_audio_call_rate', astrologer_update_profile_form?.astro_amounts?.emergency_audio_call_rate);
        formData.append('audio_call_rate', astrologer_update_profile_form?.astro_amounts?.audio_call_rate);
        formData.append('chat_rate', astrologer_update_profile_form?.astro_amounts?.chat_rate);
        formData.append('instagram', astrologer_update_profile_form?.instagram);
        formData.append('facebook', astrologer_update_profile_form?.facebook);
        formData.append('linked_in', astrologer_update_profile_form?.linked_in);
        formData.append('youtube', astrologer_update_profile_form?.youtube);
        formData.append('website', astrologer_update_profile_form?.website);
        formData.append('about_us', astrologer_update_profile_form?.about_us);
        try {
            const token = User_Authentication();
            console.log("User Token:", token);
            if (!token) {
                alert("User token not found");
                setIsLoading(false)
                throw new Error("User token not found");
            }
            const response = await Astrolger_Profile_Update(formData, { Authorization: `Bearer ${token}` });
            console.log("handle_submit_astro_Price_details", response);
            if (response?.data?.status == true) {
                set_Astro_Active_Form("2");
                setIsLoading(false)
                set_Astrologer_Update_Profile_Form(response?.data?.data)
            }
            else if (response?.response?.data?.status == false) {
                setIsLoading(false)
                toast(response?.response?.data?.message)
            }
        } catch (error) {
            setIsLoading(false)
            console.log("Error during submission:", error);
        }
    };
    // <----- Handle Submit the Astro Bascis Details ------->
    const handle_submit_Add_Gallery_details = async (e) => {
        e.preventDefault();
        if (profileImg.length === 0) {
            toast("Please add at least one image before submitting!");
            return;
        }

        setIsLoading(true);
        const formData = new FormData();
        profileImg.forEach((img, index) => {
            if (img.file) {
                formData.append(`profileImg[${index}]`, img.file);
            }
        });

        try {
            const token = User_Authentication();
            if (!token) {
                alert("User token not found");
                setIsLoading(false);
                throw new Error("User token not found");
            }

            const response = await Astrolger_Profile_Update(formData, { Authorization: `Bearer ${token}` });
            if (response?.data?.status === true) {
                setIsLoading(false);
                set_Astrologer_Update_Profile_Form(response?.data?.data);
                // navigate("/astrologer-home");
            } else if (response?.response?.data?.status === false) {
                setIsLoading(false);
                toast(response?.response?.data?.message);
            }
        } catch (error) {
            setIsLoading(false);
            console.log("Error during submission:", error);
        }
    };


    // <---------- Get Astro Update Profile -------->
    useEffect(() => {
        const Handle_get_astro_update_profile = async () => {
            setIsLoading(true);
            try {
                const token = User_Authentication();
                console.log("User Token:", token);
                if (!token) {
                    alert("User token not found");
                    setIsLoading(false);
                    return;
                }
                const response = await get_astro_profile({ Authorization: `Bearer ${token}` });
                console.log("API Response:", response?.data);
                if (response?.data?.status === true) {
                    const astro_data = response?.data?.data || {};
                    const astroDetail = response?.data?.data?.astrodetail || {};
                    const astro_amounts = response?.data?.data?.astro_amounts || {};
                    console.log("astro_amounts_astro_amounts", astro_amounts)
                    set_Astrologer_Update_Profile_Form({
                        name: astro_data?.name,
                        dob: astroDetail?.dob || "",
                        birth_place: astroDetail?.birth_place || "",
                        faith: astroDetail?.faith || "",
                        address: astroDetail?.address || "",
                        country: astroDetail?.country || "",
                        state: astroDetail?.state || "",
                        city: astroDetail?.city || "",
                        highest_qualification: astroDetail?.highest_qualification || "",
                        degree: astroDetail?.degree || "",
                        collage_school: astroDetail?.collage_school || "",
                        from_astroogy: astroDetail?.from_astroogy || "",
                        audio_call_rate: astro_amounts?.audio_call_rate || "",
                        video_call_rate: astro_amounts?.video_call_rate || "",
                        chat_rate: astro_amounts?.chat_rate || "",
                        emergency_audio_call_rate: astro_amounts?.emergency_audio_call_rate || "",
                        emergency_video_call_rate: astro_amounts?.emergency_video_call_rate || "",
                        youtube: astroDetail?.youtube || "",
                        linked_in: astroDetail?.linked_in || "",
                        website: astroDetail?.website || "",
                        facebook: astroDetail?.facebook || "",
                        instagram: astroDetail?.instagram || "",
                        about_us: astroDetail?.about_us || "",
                    });
                    const profileImages = Array.isArray(response?.data?.data?.profile_images) ? response?.data?.data?.profile_images : [];
                    const baseUrl = `${IMG_BASE_URL}`;
                    const formattedProfileImages = profileImages?.map((img) => ({
                        url: baseUrl + img.image_file,
                        file: null,
                    }));
                    setProfileImg(formattedProfileImages);
                }
                // if (response?.data?.data?.profile_step == "1") {
                //     set_Astro_Active_Form("1");
                //     localStorage.setItem("profile_step", 1);
                // } else if (response?.data?.data?.profile_step == "2") {
                //     set_Astro_Active_Form("2");
                //     localStorage.setItem("profile_step", 2);
                // } else if (response?.data?.data?.profile_step == "3") {
                //     localStorage.setItem("astro_is_active", true);
                // }
            } catch (error) {
                console.log("Error fetching profile:", error);
            } finally {
                setIsLoading(false);
            }
        };
        Handle_get_astro_update_profile();
    }, []);

    // Handle file selection
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));
        setProfileImg((prevImages) => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (indexToRemove) => {
        setProfileImg((prevImages) => {
            const updatedImages = prevImages.filter((_, index) => index !== indexToRemove);
            console.log("Updated Profile Images After Removal:", updatedImages);
            return updatedImages;
        });
    };



    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

        localStorage.setItem("astrologer_update_profile_form_dob", astrologer_update_profile_form?.dob)

    return (
        <div>
            {/*  */}
            <Astrologer_after_Login_Header />
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <section className="gi-register py-[40px] max-[767px]:py-[30px]">
                        <div className=" justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                            <div className="min-[1000px]:max-w-[1000px] m-auto">
                                {/* <h3 className="text-[22px] mb-2 font-semibold text-[#3B4959]">Gallery Add</h3> */}
                                <div className="bg_basic_details relative p-3 rounded-lg">
                                    <div className="gi-register-wrapper my-[0] mx-auto bg-[#ffffffc4] rounded-lg">
                                        <div className="flex flex-wrap justify-between p-3 mx-auto">
                                            <div className="gi-login-box w-[30%] bg-white px-[25px] pb-7 max-[991px]:w-full max-[991px]:p-[0]">
                                                <div className="multisteps-form__progress">
                                                    {/* <button className={`multisteps-form__progress-btn ${astro_step_active_form == "0" ? "js-active" : null}`} type="button" title="Basic Details" onClick={() => set_Astro_Active_Form("0")}>1  Basic Details</button>
                                                    <button className={`multisteps-form__progress-btn ${astro_step_active_form == "1" ? "js-active" : null}`} type="button" title="Hourly Rate" onClick={() => set_Astro_Active_Form("1")}>2  Hourly Rate</button>
                                                    <button className={`multisteps-form__progress-btn ${astro_step_active_form == "2" ? "js-active" : null}`} type="button" title="Gallery" onClick={() => set_Astro_Active_Form("2")}>3  Gallery</button> */}
                                                    <button className={`multisteps-form__progress-btn ${astro_step_active_form == "0" ? "js-active" : null}`} type="button" title="Basic Details">1  Basic Details</button>
                                                    <button className={`multisteps-form__progress-btn ${astro_step_active_form == "1" ? "js-active" : null}`} type="button" title="Hourly Rate">2  Hourly Rate</button>
                                                    <button className={`multisteps-form__progress-btn ${astro_step_active_form == "2" ? "js-active" : null}`} type="button" title="Gallery">3  Gallery</button>
                                                </div>
                                            </div>
                                            <div className="gi-login-box w-[70%] px-[15px] max-[991px]:w-full max-[991px]:p-[0]">
                                                <div className="multisteps-form__form">
                                                    <div className={`multisteps-form__panel p-5 pe-0 ${astro_step_active_form == "0" ? "js-active" : null}`} >
                                                        <h3 className="text-[22px] mb-2 font-semibold text-[#3B4959]">Basic Details</h3>
                                                        <form className="multisteps-form__form" method='post' onSubmit={handle_submit_astro_update_basics_details}>
                                                            <div className="multisteps-form__content">
                                                                <div className="input-grid flex w-full space-x-2.5 mb-6">
                                                                    <div className="w-1/2">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Name</label>
                                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input placeholder="Name" name='name' value={astrologer_update_profile_form?.name} onChange={handle_change_astro_profile_update} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" required />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/2">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Date of birth</label>
                                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input
                                                                                    placeholder="Date of birth"
                                                                                    name="dob"
                                                                                    value={formatDate(astrologer_update_profile_form?.dob)}
                                                                                    onChange={handle_change_astro_profile_update}
                                                                                    className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                    type="date"
                                                                                />

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="input-grid flex w-full space-x-2.5 mb-6">
                                                                    <div className="w-1/2">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Place of Birth</label>
                                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input placeholder="Place of Birth" name='birth_place' value={astrologer_update_profile_form?.birth_place} onChange={handle_change_astro_profile_update} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/2">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Faith</label>
                                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input placeholder="Faith" name='faith' value={astrologer_update_profile_form?.faith} onChange={handle_change_astro_profile_update} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="input-grid flex flex w-full space-x-2.5 mb-6">
                                                                    <div className="w-1/2">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Current Address</label>
                                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input name='address' value={astrologer_update_profile_form?.address} onChange={handle_change_astro_profile_update} placeholder="Enter flat, house no, Building, Apartment" className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/2">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Country</label>
                                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input name='country' value={astrologer_update_profile_form?.country} onChange={handle_change_astro_profile_update} placeholder="Country" className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="input-grid flex w-full space-x-2.5 mb-6">
                                                                    <div className="w-1/2">
                                                                        <div className="input-com"><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">State</label>
                                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input name='state' value={astrologer_update_profile_form?.state} onChange={handle_change_astro_profile_update} placeholder="State" className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/2">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">City</label>
                                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input name='city' value={astrologer_update_profile_form?.city} onChange={handle_change_astro_profile_update} placeholder="Enter Town/City" className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h3 className="text-[22px] mb-2 font-semibold text-[#3B4959]">Qualification</h3>
                                                                <div className="input-grid flex w-full space-x-2.5 mb-6">
                                                                    <div className="w-1/2">
                                                                        <div className="input-com"><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Select your highest qualification</label>
                                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input name='highest_qualification' value={astrologer_update_profile_form?.highest_qualification} onChange={handle_change_astro_profile_update} placeholder="" className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/2">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Degree/Diploma</label>
                                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input name='degree' value={astrologer_update_profile_form?.degree} onChange={handle_change_astro_profile_update} placeholder="" className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="input-grid flex w-full space-x-2.5 mb-6">
                                                                    <div className="w-1/2">
                                                                        <div className="input-com"><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">College/School/University</label>
                                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input name='collage_school' value={astrologer_update_profile_form?.collage_school} onChange={handle_change_astro_profile_update} placeholder="" className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/2">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">From Where did you learn Astrology?</label>
                                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input name='from_astroogy' value={astrologer_update_profile_form?.from_astroogy} onChange={handle_change_astro_profile_update} placeholder="" className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="button-row flex justify-between w-full mt-4">
                                                                    <button className="btn btn-primary bg-[#9D2326] p-2 px-5 text-white" type="submit">Next1</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className={`multisteps-form__panel p-5 pe-0 ${astro_step_active_form == "1" ? "js-active" : null}`}>
                                                        <h3 className="text-[22px] mb-2 font-semibold text-[#3B4959]">Price</h3>
                                                        <form className="multisteps-form__form" method='post' onSubmit={handle_submit_astro_Price_details}>
                                                            <div className="multisteps-form__content">
                                                                <div className="input-grid flex w-full space-x-2.5 mb-6">
                                                                    {/* <div className="w-1/2">
                                                                        <div className="input-com"><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Hourly Rate</label>
                                                                            <div className="input-wrapper border border-qgray-border bg-white flex items-center  overflow-hidden relative ">
                                                                                <input placeholder="₹ 900" name='hourly_rate' value={astrologer_update_profile_form?.hourly_rate} onChange={handle_change_astro_profile_update} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="number" required />
                                                                                <span className="text-sm w-[120px]">| Per hour</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/2">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Minute Rate</label>
                                                                            <div className="input-wrapper border border-qgray-border bg-white flex items-center  overflow-hidden relative ">
                                                                                <input placeholder="₹ 15" name='minute_rate' value={astrologer_update_profile_form?.minute_rate} onChange={handle_change_astro_profile_update} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="number" required />
                                                                                <span className="text-sm w-[145px]">| Per Minute</span>
                                                                            </div>
                                                                        </div>
                                                                    </div> */}
                                                                    <div className="w-1/3">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Chat Rate</label>
                                                                            <div className="input-wrapper border border-qgray-border bg-white flex items-center  overflow-hidden relative ">
                                                                                <input placeholder="₹ 15" name='chat_rate' value={astrologer_update_profile_form?.chat_rate} onChange={handle_change_astro_profile_update}
                                                                                    className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="number" required />
                                                                                <span className="text-sm w-[145px]">| Per Minute</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/3">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Audio Call Rate</label>
                                                                            <div className="input-wrapper border border-qgray-border bg-white flex items-center  overflow-hidden relative ">
                                                                                <input placeholder="₹ 15" name='audio_call_rate' value={astrologer_update_profile_form?.audio_call_rate} onChange={handle_change_astro_profile_update}
                                                                                    className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="number" required />
                                                                                <span className="text-sm w-[145px]">| Per Minute</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/3">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Video Call Rate</label>
                                                                            <div className="input-wrapper border border-qgray-border bg-white flex items-center  overflow-hidden relative ">
                                                                                <input placeholder="₹ 15" name='video_call_rate' value={astrologer_update_profile_form?.video_call_rate} onChange={handle_change_astro_profile_update}
                                                                                    className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="number" required />
                                                                                <span className="text-sm w-[145px]">| Per Minute</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="input-grid flex w-full space-x-2.5 mb-6">
                                                                    <div className="w-1/2">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Emergency Audio Call</label>
                                                                            <div className="input-wrapper border border-qgray-border bg-white flex items-center  overflow-hidden relative ">
                                                                                <input placeholder="₹ 15" name='emergency_audio_call_rate' value={astrologer_update_profile_form?.emergency_audio_call_rate} onChange={handle_change_astro_profile_update}
                                                                                    className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="number" required />
                                                                                <span className="text-sm w-[145px]">| Per Minute</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/2">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Emergency Video Call</label>
                                                                            <div className="input-wrapper border border-qgray-border bg-white flex items-center  overflow-hidden relative ">
                                                                                <input placeholder="₹ 15" name='emergency_video_call_rate' value={astrologer_update_profile_form?.emergency_video_call_rate} onChange={handle_change_astro_profile_update}
                                                                                    className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="number" required />
                                                                                <span className="text-sm w-[145px]">| Per Minute</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h3 className="text-[22px] mb-2 font-semibold text-[#3B4959]">Social Media link</h3>
                                                                <div className="input-grid flex w-full space-x-2.5 mb-6">
                                                                    <div className="w-1/2">
                                                                        <div className="input-com"><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Instagram profile link</label>
                                                                            <div className="input-wrapper border border-qgray-border overflow-hidden relative ">
                                                                                <input placeholder="https://" name='instagram' value={astrologer_update_profile_form?.instagram} onChange={handle_change_astro_profile_update} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/2">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Facebook profile link</label>
                                                                            <div className="input-wrapper border border-qgray-border overflow-hidden relative ">
                                                                                <input placeholder="https://" name='facebook' value={astrologer_update_profile_form?.facebook} onChange={handle_change_astro_profile_update} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="input-grid flex w-full space-x-2.5 mb-6">
                                                                    <div className="w-1/2">
                                                                        <div className="input-com"><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">linkedin profile link</label>
                                                                            <div className="input-wrapper border border-qgray-border overflow-hidden relative ">
                                                                                <input placeholder="https://" name='linked_in' value={astrologer_update_profile_form?.linked_in} onChange={handle_change_astro_profile_update} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/2">
                                                                        <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">YouTube Channel link </label>
                                                                            <div className="input-wrapper border border-qgray-border overflow-hidden relative ">
                                                                                <input placeholder="https://" name='youtube' value={astrologer_update_profile_form?.youtube} onChange={handle_change_astro_profile_update} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="w-className/2 h-full">
                                                                    <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Website profile link </label>
                                                                        <div className="input-wrapper border border-qgray-border overflow-hidden relative ">
                                                                            <input placeholder="https://" name='website' value={astrologer_update_profile_form?.website} onChange={handle_change_astro_profile_update} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h3 className="text-[22px] mb-2 font-semibold text-[#3B4959]">About Astrologer</h3>
                                                                <div className="w-full">
                                                                    <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">About </label>
                                                                        <div className="input-wrapper border border-qgray-border overflow-hidden relative ">
                                                                            <textarea placeholder="Message" name='about_us' value={astrologer_update_profile_form?.about_us} onChange={handle_change_astro_profile_update} className="input-field w-full placeholder:text-sm text-sm p-3 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text"></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="button-row flex justify-between w-full mt-4">
                                                                    <div>
                                                                        <button className="btn btn-primary js-btn-prev bg-[#9C9C9C] mr-3 p-2 px-5 text-white" type="button"
                                                                         title="Prev" onClick={() => set_Astro_Active_Form("0")}>Prev1</button>
                                                                        <button className="btn btn-primary bg-[#9D2326] p-2 px-5 text-white" type="submit">Next2</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className={`multisteps-form__panel p-5 pe-0 ${astro_step_active_form == "2" ? "js-active" : null}`}>
                                                        <h3 className="text-[22px] mb-2 font-semibold text-[#3B4959]">Gallery Add</h3>
                                                        <form className="multisteps-form__form" method='post' onSubmit={handle_submit_Add_Gallery_details}>
                                                            <div className="multisteps-form__content">
                                                                <div className="gridd">
                                                                    <div className="gallery_all_images">
                                                                        <div className="preview-profileImg-zone">
                                                                            {profileImg?.length > 0 && (
                                                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                                                                    {profileImg?.map((img, index) => (
                                                                                        <div key={index} className="image-preview relative">
                                                                                            <img
                                                                                                src={img.url}
                                                                                                alt={`preview-${index}`}
                                                                                                className="preview-img w-full h-[100px] object-cover rounded-[10px]"
                                                                                            />
                                                                                            <button
                                                                                                onClick={() => { handleRemoveImage(index) }}
                                                                                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm"
                                                                                            >
                                                                                                &times;
                                                                                            </button>
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                            )}
                                                                        </div>

                                                                        <div className="image_gallery">
                                                                            <fieldset className="form-group bg-[#FFB800] rounded-lg p-3">
                                                                                <a
                                                                                    href="javascript:void(0)"
                                                                                    className="text-center font-bold text-sm"
                                                                                    onClick={() => document.getElementById('pro-image').click()}
                                                                                >
                                                                                    <img className="m-auto" src={Common_Images_Transport?.gallery_icon} alt="gallery-icon" /> + Add Photos
                                                                                </a>
                                                                                <input
                                                                                    type="file"
                                                                                    id="pro-image"
                                                                                    name="profileImg"
                                                                                    style={{ display: 'none' }}
                                                                                    className="form-control"
                                                                                    multiple
                                                                                    onChange={handleImageChange}
                                                                                />
                                                                            </fieldset>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className="button-row flex justify-between w-full mt-4">
                                                                    <div>
                                                                        <button className="btn btn-primary js-btn-prev bg-[#9C9C9C] mr-3 p-2 px-5 text-white" type="button" title="Prev" onClick={() => set_Astro_Active_Form("1")}>Prev3</button>
                                                                        <button className="btn btn-primary bg-[#9D2326] p-2 px-5 text-white" type="submit" >Submit</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
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

export default Astrologer_Save_Profile_Update