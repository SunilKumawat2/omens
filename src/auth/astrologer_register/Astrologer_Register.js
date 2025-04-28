import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../../assets/css/style.css"
import "../../assets/css/tailwind.css"
import "../../assets/css/responsive.css"
import "../../assets/css/demo-1.css"
import "../../assets/css/vendor/gicons.css";
import "../../assets/css/vendor/gicons.css";
import "../../assets/css/plugins/animate.css";
import "../../assets/css/plugins/nouislider.css";
import "../../assets/css/plugins/owl.carousel.min.css";
import "../../assets/css/plugins/owl.theme.default.min.css";
import "../../assets/css/plugins/slick.min.css";
import "../../assets/css/plugins/swiper-bundle.min.css";
import Footer from '../../components/common/footer/Footer'
import Common_Images_Transport from "../../components/common/common_imges_transport/Common_Images_Transport";
import PhoneInput, { parsePhoneNumber, isValidPhoneNumber } from 'react-phone-number-input';
import { AstroRegister } from "../../api/auth_api/Astro_Auth";
import { isAlphabetical, isValidEmail } from "../../components/validation/Validation";
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Loader from "../../loader/Loader";
import { useNavigate } from "react-router-dom";
import Astrologer_Header from "../../components/pages/astrologer/astrologer_header/Astrologer_Header";
import { get_language_and_skills } from "../../api/astrologer/Astrologer";
import {Link} from "react-router-dom"

const Astrologer_Register = () => {
    const navigate = useNavigate()
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('+91');
    const [mobileNumber, setMobileNumber] = useState('');
    const [countryCode, setCountryCode] = useState('IN');
    const [isValid, setIsValid] = useState(false);
    const [astrologer_skills, set_Astrologer_Skills] = useState([])
    const [astrologer_language, set_Astrologer_Language] = useState([])
    console.log("astrologer_skills", astrologer_skills)
    const [astro_register_form, set_Astro_Register_Form] = useState({
        name: "",
        email: "",
        country_code: "",
        mobile: "",
        gender: "",
        dob: "",
        profileImg: "",
        skills: [],
        language: [],
    })

    // <----------- Onchnage Events on the Phone Input section's -------------->
    const handlePhoneChange = (value) => {
        if (!value || !value.startsWith('+')) {
            setPhoneNumber('+91');
            setCountryCode('91');
            setMobileNumber('');
            return;
        }
        setPhoneNumber(value);
        try {
            const parsedPhone = parsePhoneNumber(value);
            setCountryCode(parsedPhone.countryCallingCode);
            setMobileNumber(parsedPhone.nationalNumber);
        } catch (error) {
            setMobileNumber('');
        }
    };

    // <--------- astro register onchange events ----------->
    const handle_astro_register_form = (e, fieldName) => {
        if (e.target && e.target.type === "file") {
            const file = e.target.files[0];
            if (file) {
                const validTypes = ["image/jpeg", "image/png", "image/jpg"];
                const maxSize = 5 * 1024 * 1024; // 5 MB

                if (!validTypes.includes(file.type)) {
                    toast("Invalid file type. Please upload a JPEG or PNG image.");
                    return;
                }

                if (file.size > maxSize) {
                    toast("File size exceeds 5 MB. Please upload a smaller image.");
                    return;
                }

                const previewUrl = URL.createObjectURL(file);
                set_Astro_Register_Form({
                    ...astro_register_form,
                    [fieldName]: file,
                    profileImgPreview: previewUrl,
                });
            }
        } else if (Array.isArray(e)) {
            set_Astro_Register_Form({
                ...astro_register_form,
                [fieldName]: e,
            });
        } else if (e.target && e.target.name && e.target.value !== undefined) {
            const { name, value } = e.target;
            set_Astro_Register_Form({
                ...astro_register_form,
                [name]: value,
            });
        }
    };





    const handleCheckboxChange = (e) => {
        setCheckboxChecked(e.target.checked);
    };

    const skills_options = [
        { value: "Knowledge of space, time, and direction", label: "Knowledge of space, time, and direction" },
        { value: "Listening", label: "Listening" },
        { value: "Understanding of human nature", label: "Understanding of human nature" },
        { value: "Reading philosophy", label: "Reading philosophy" },
    ];

    const language_options = [
        { value: "hindi", label: "Hindi" },
        { value: "english", label: "English" },
        { value: "urdu", label: "Urdu" }
    ];

    // <---------------- Handle Submit the Astrologer register ------->
    const Handle_Submit_astro_register = async (e) => {
        setIsLoading(true)
        e.preventDefault();
        const formData = new FormData();
        formData.append('user_role', 2);
        formData.append('name', astro_register_form.name);
        formData.append('dob', astro_register_form?.dob);
        formData.append('gender', astro_register_form?.gender);
        formData.append('email', astro_register_form?.email);
        formData.append('experience', astro_register_form?.experience);
        formData.append('mobile', mobileNumber);
        formData.append('country_code', `+${countryCode}`);
        formData.append('profileImg', astro_register_form?.profileImg);

        // Convert the language and skills arrays to a comma-separated list of values
        const languageValues = astro_register_form?.language?.map(item => item.value).join(',');
        const skillsValues = astro_register_form?.skills?.map(item => item.value).join(',');

        formData.append('language', languageValues);
        formData.append('skills', skillsValues);

        // Validation logic
        if (!astro_register_form?.name || !isAlphabetical(astro_register_form?.name)) {
            toast("Please enter a valid name containing only letters.");
            setIsLoading(false)
            return;
        }

        if (!astro_register_form?.email || !isValidEmail(astro_register_form?.email)) {
            toast("Please enter a valid email address.");
            setIsLoading(false)
            return;
        }
        if (!astro_register_form?.gender) {
            toast("Please select your gender.");
            setIsLoading(false)
            return;
        }
        if (!astro_register_form?.experience) {
            toast("please enter your experience.");
            setIsLoading(false)
            return;
        }
        if (astro_register_form?.language?.length === 0) {
            toast("At least one language is required.");
            setIsLoading(false)
            return;
        }
        if (astro_register_form?.skills?.length === 0) {
            toast("At least one skill is required.");
            setIsLoading(false)
            return;
        }
        if (!checkboxChecked) {
            alert("You must agree to the terms and conditions.");
            return;
        }
        if (!astro_register_form?.profileImg) {
            toast("please upload your profile image");
            setIsLoading(false)
            return;
        }

        if (!isValid) {
            toast("Please enter a valid phone number containing only numbers.");
            setIsLoading(false)
            return;
        }

        try {
            const response = await AstroRegister(formData)
            console.log("s", response)
            if (response?.data?.status == "200") {
                setIsLoading(false)
                set_Astro_Register_Form({})
                navigate("/astrologer-register-otp-verify", {
                    state: {
                        mobile: mobileNumber,
                        country_code: `+${countryCode}`,
                        temp_id: response?.data?.data?.user?.id
                    }
                })
            }
            else if (response?.response?.data?.status == "500") {
                setIsLoading(false)
                toast(response?.response?.data?.message)
            }
        } catch (error) {
            setIsLoading(false)

        }
    }

    // <-------- Apply for the Phone Number Validtion According to the Country and Country code here ----------->
    useEffect(() => {
        setIsValid(isValidPhoneNumber(phoneNumber));
    }, [phoneNumber]);

    useEffect(() => {
        return () => {
            if (astro_register_form?.profileImgPreview) {
                URL.revokeObjectURL(astro_register_form?.profileImgPreview);
            }
        };
    }, [astro_register_form?.profileImgPreview]);

    // <------- clear the local storage --------->
    useEffect(() => {
        localStorage.clear("")
    })

    useEffect(() => {
        const handle_get_language_and_skills = async () => {
            try {
                const response = await get_language_and_skills();
                const skills = response?.data?.data?.skills || [];
                const languages = response?.data?.data?.languages || [];

                // Convert skills into { value, label } format
                const formattedSkills = skills?.map(skill => ({
                    value: skill.skill,  // Assuming skills have an 'id' field
                    label: skill.skill // Assuming skills have a 'name' field
                }));
                // Convert skills into { value, label } format
                const formattedlanguages = languages?.map(language => ({
                    value: language?.language,  // Assuming skills have an 'id' field
                    label: language?.language // Assuming skills have a 'name' field
                }));

                set_Astrologer_Skills(formattedSkills);
                set_Astrologer_Language(formattedlanguages);
            } catch (error) {
                console.error("Error fetching skills:", error);
            }
        };

        handle_get_language_and_skills();
    }, []);

    return (
        <div>
            {/*  */}
            <Astrologer_Header />
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            {/* <-------- Header section's --------> */}
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <section className="gi-register bg-[#F0F4F8] py-[40px] max-[767px]:py-[30px]">
                        <div
                            className=" justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">

                            <div className="min-[1000px]:max-w-[800px] m-auto">
                                <div className="gi-register-wrapper my-[0] mx-auto px-[12px] ">
                                    <div
                                        className="gi-register-container border-[1px] border-solid border-[#eee] p-[30px] text-left bg-[#fff] rounded-[5px] max-[575px]:p-[15px]">
                                        <div className="gi-login-form">
                                            <h2
                                                className="gi-title mb-[0] text-[26px] font-semibold text-[#4b5966] text-center p-[0] capitalize">
                                                Astrologer Registration<span></span></h2>
                                            <form action="#" method="post" className="flex flex-row flex-wrap px-4 mt-5 mx-[-15px]" onSubmit={Handle_Submit_astro_register}>
                                                <div className="gi-login-wrap flex gi-register-half w-[100%] flex-col">
                                                    <div className="iconflexd text-center relative mb-5">
                                                        <div className="columns relative w-[300px] m-auto">
                                                            <div className="circle">
                                                                <img
                                                                    className="profile-pic object-cover position-top rounded-full w-[200px] h-[200px] m-auto"
                                                                    src={
                                                                        astro_register_form.profileImgPreview || // Show preview URL
                                                                        Common_Images_Transport?.user_logo // Default image
                                                                    }
                                                                    alt="user"
                                                                />
                                                            </div>
                                                            <label htmlFor="file-upload" className="absolute bottom-[15px] flex justify-center w-full">
                                                                <div className="p-image rounded-full relative cursor-pointer">
                                                                    <i className="fi-rr-camera text-[#fff] text-[18px] leading-[17px]"></i>
                                                                </div>
                                                            </label>
                                                            <input
                                                                id="file-upload"
                                                                className="file-upload hidden"
                                                                type="file"
                                                                accept="image/*"
                                                                name="profileImg"
                                                                onChange={(e) => handle_astro_register_form(e, "profileImg")}
                                                            />
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="gi-login-wrap flex gi-register-half w-[50%] flex-col pr-3">
                                                    <label
                                                        className="mb-[10px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                                        User Name</label>
                                                    <div className="iconflex">
                                                        <i className="fi-rr-user text-[#303030] text-[18px] leading-[17px]"></i>
                                                        <input type="text" name="name" placeholder="Enter your name" value={astro_register_form?.name} onChange={handle_astro_register_form}
                                                            className="w-full mb-[15px] px-[15px] bg-transparent border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] outline-[0] h-[50px]"
                                                            required />
                                                    </div>
                                                </div>
                                                <div className="gi-login-wrap flex gi-register-half w-[50%] flex-col">
                                                    <label
                                                        className="mb-[10px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                                        Email ID</label>
                                                    <div className="iconflex">
                                                        <i className="fi-rs-envelope text-[#303030] text-[18px] leading-[17px]"></i>
                                                        <input type="email" name="email" placeholder="Email ID" value={astro_register_form?.email} onChange={handle_astro_register_form}
                                                            className="w-full mb-[15px] px-[15px] bg-transparent border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] outline-[0] h-[50px]"
                                                            required />
                                                    </div>
                                                </div>
                                                <div className="gi-login-wrap flex flex-col mb-3 gi-register-half w-[50%] pr-3">
                                                    <label
                                                        className="mb-[10px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">Phone
                                                        Number</label>
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
                                                <div className="gi-login-wrap flex gi-register-half w-[50%] flex-col">
                                                    <label
                                                        className="mb-[10px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                                        Date Of Birth</label>
                                                    <div className="iconflex">
                                                        <i className="fi-rs-calendar text-[#303030] text-[18px] leading-[17px]"></i>
                                                        <input type="date" name="dob" placeholder="date" onChange={handle_astro_register_form} value={astro_register_form?.dob}
                                                            className="w-full mb-[15px] px-[15px] bg-transparent border-[1px] border-solid border-[#eee] 
                                                        rounded-[5px] text-[#777] text-[14px] outline-[0] h-[50px]"
                                                            required />
                                                    </div>
                                                </div>
                                                <div className="gi-login-wrap flex flex-col mb-3 gi-register-half w-[50%] pr-3">
                                                    <label
                                                        className="mb-[10px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">Gender</label>
                                                    <div className="grid w-full gap-3 md:grid-cols-3">
                                                        <div className="relative">
                                                            <input type="radio" id="male" value="male"
                                                                checked={astro_register_form?.gender == "male"}
                                                                name="gender"
                                                                onChange={handle_astro_register_form}
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
                                                                checked={astro_register_form?.gender == "female"}
                                                                name="gender"
                                                                onChange={handle_astro_register_form}
                                                                className="absolute bottom-[20px] left-[15px] peer" />
                                                            <label for="female"
                                                                className="inline-flex items-center justify-end w-full p-2 h-[50px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 light:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                                                                <div className="block pr-2">
                                                                    <div className="w-full">Female</div>
                                                                </div>

                                                            </label>
                                                        </div>
                                                        <div className="relative">
                                                            <input type="radio" id="other" value="other"
                                                                checked={astro_register_form?.gender == "other"}
                                                                name="gender"
                                                                onChange={handle_astro_register_form}
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
                                                <div className="gi-login-wrap flex gi-register-half w-[100%] flex-col pr-3">
                                                    <label
                                                        className="mb-[10px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                                        Experience</label>
                                                    <div className="iconflex">
                                                        <i className="fi-rr-user text-[#303030] text-[18px] leading-[17px]"></i>
                                                        <input type="text" name="experience" placeholder="Enter your experience" value={astro_register_form?.experience} onChange={handle_astro_register_form}
                                                            className="w-full mb-[15px] px-[15px] bg-transparent border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] outline-[0] h-[50px]"
                                                            required />
                                                    </div>
                                                </div>
                                                <div className="gi-login-wrap flex gi-register-half w-[100%] flex-col">
                                                    <label
                                                        className="mb-[10px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1] p-1">
                                                        Languages</label>
                                                    <Select
                                                        options={astrologer_language} // Make sure options is an array of { value, label } objects
                                                        isMulti
                                                        name="language"
                                                        value={astro_register_form.language} // Directly use the array
                                                        onChange={(selected) => handle_astro_register_form(selected, "language")} // Pass selected options to handler
                                                        placeholder="Select options..."
                                                        className="react-select-container p-1 text-gray-500 bg-white border rounded-lg"
                                                        classNamePrefix="react-select"
                                                        styles={{
                                                            control: (base, state) => ({
                                                                ...base,
                                                                border: "none",
                                                                boxShadow: state.isFocused ? "none" : "none",
                                                            }),
                                                        }}
                                                    />
                                                </div>

                                                <div className="gi-login-wrap flex gi-register-half w-[100%] flex-col">
                                                    <label className="mb-[10px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1] p-1">
                                                        Skills</label>
                                                    <div className="iconflex">
                                                        <img src={Common_Images_Transport?.skills_icon} alt="" />
                                                        <Select
                                                            options={astrologer_skills}  // Dynamically populated options
                                                            isMulti
                                                            name="skills"
                                                            value={astro_register_form.skills} // Ensure it's an array of objects { value, label }
                                                            onChange={(selected) => handle_astro_register_form(selected, "skills")}
                                                            placeholder="Select options..."
                                                            className="react-select-container p-1 text-gray-500 bg-white border rounded-lg"
                                                            classNamePrefix="react-select"
                                                            styles={{
                                                                control: (base, state) => ({
                                                                    ...base,
                                                                    border: "none",
                                                                    boxShadow: state.isFocused ? "none" : "none",
                                                                }),
                                                            }}
                                                        />

                                                    </div>
                                                </div>

                                                <div className="flex justify-between gi-register-half w-[100%]">
                                                    <div className="flex items-start">
                                                        <div className="flex items-center h-5">

                                                            <input
                                                                id="remember"
                                                                type="checkbox"
                                                                className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                                                required
                                                                checked={checkboxChecked}
                                                                onChange={handleCheckboxChange}
                                                            />
                                                        </div>
                                                        <div className="text-sm ml-3">
                                                            <label
                                                                htmlFor="remember"
                                                                className="text-gray-900 dark:text-gray-500"
                                                            >
                                                                I agree to Terms & Conditions and Privacy Policy
                                                            </label>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="gi-login-wrap gi-register-half w-[100%]">
                                                    <button type="submit"
                                                        className="w-full mt-[20px] block p-[14px] text-center text-[#fff] bg-gradient-to-r from-[#9F2225] to-[#FFB500] rounded-[5px] text-[#777] text-[16px] outline-[0] h-[50px]">Submit</button>
                                                </div>

                                                <span className="gi-login-wrap gi-login-btn mt-[20px] flex flex-row justify-center gap-3 items-center">
                            <span className="text-[#777] text-[14px]">
                            If you have an account with us, please log in.
                            </span>
                            <Link
                              to="/astrologer-login"
                              className="gi-btn-1 btn py-[8px] px-[15px] text-[#9F2225] border-[0] transition-all duration-[0.3s] ease-in-out overflow-hidden text-center text-[14px] font-semibold relative rounded-[5px] hover:text-[#333]"
                            >
                               Login Account
                            </Link>
                          </span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }

            {/* <---------- Footer section's ---------> */}
            <Footer />
        </div>
    )
}

export default Astrologer_Register