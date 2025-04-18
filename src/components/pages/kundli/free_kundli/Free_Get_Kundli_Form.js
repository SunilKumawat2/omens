import React, { useState } from 'react'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Get_Geo_Details } from '../../../../api/third_party_api/Third_Party_Api';
import { THIRD_PARTY_API_KEY, THIRD_PARTY_USER_ID } from '../../../../config/Config';
import debounce from 'lodash.debounce';
const Free_Get_Kundli_Form = () => {
    // State to manage form inputs
    const [geo_Data, set_geo_Data] = useState([])
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        birthDateTime: "",
        birthPlace: "",
    });

    const Handle_Get_Geo_Location = async () => {
        const user_id = THIRD_PARTY_USER_ID;
        const api_key = THIRD_PARTY_API_KEY;
        const basicAuth = btoa(`${user_id}:${api_key}`);

        const data = {
            place: formData.birthPlace,
            maxRows: 7
        };

        const headers = {
            "Authorization": `Basic ${basicAuth}`,
            "Content-Type": "application/json"
        };

        console.log("Headers:", headers); // Log the headers to verify

        try {
            const response = await Get_Geo_Details(data, headers);
            console.log("Geo Details Retrieved Successfully:", response);
            if (response?.data?.geonames && response?.data?.geonames?.length > 0) {
                const geoData = response.data.geonames;
                set_geo_Data(response?.data?.geonames)

            }
        } catch (error) {
            console.error("Failed to Get Geo Details:", error.response || error);
        }
    };
    console.log("Geo Data:", geo_Data);

    const debouncedHandle_Get_Geo_Location = debounce(Handle_Get_Geo_Location, 500);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === "birthPlace" && value.length >= 3) {
            debouncedHandle_Get_Geo_Location();
        }
    };

    // Handle selecting a location from the list
    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setFormData((prevState) => ({
            ...prevState,
            birthPlace: location?.place_name, // Assuming the response contains a property called 'place_name'
        }));
        set_geo_Data([]); // Clear the geo data list after selection
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name) {
            toast("Please enter the user name ")
            return;
        }
        else if (!formData.gender) {
            toast("Please select your gender")
            return;
        }
        else if (!formData.birthDateTime) {
            toast("Please enter your birth date and time ")
            return;
        }
        else if (!formData.birthPlace) {
            toast("Please enter your birth place ")
            return;
        }
        console.log("Form Data Submitted:", formData);
        try {
            //<------ Api intigrated -------------> 
        } catch (error) {

        }
    };
    console.log("formdata", formData)
    return (
        <div className="kundli_form w-full mt-6">
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            <div className="flex flex-wrap w-full">
                <div
                    className="min-[992px]:w-[66.33%] flex min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full max-[575px]:w-[50%] max-[575px]:mx-auto pr-6">
                    <div className="bg-white w-full">
                        <h4 className="mb-2 font-semibold text-[#3B4959] p-4 border-b">Enter Your Birth Details and get
                            free Janam Kundali analysis</h4>
                        <form onSubmit={handleSubmit} method="post">
                            <div className="py-5 pl-6 pr-6">
                                <div className="input-grid flex space-x-2.5 mb-6">
                                    <div className="w-1/2 h-full">
                                        <div className="input-com">
                                            <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                                                Name*
                                            </label>
                                            <div className="input-wrapper border border-qgray-border overflow-hidden relative">
                                                <input
                                                    name="name"
                                                    placeholder="Name"
                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />

                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/2 h-full">
                                        <div className="input-com">
                                            <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                                                Gender
                                            </label>
                                            <div className="input-wrapper border border-qgray-border overflow-hidden relative">
                                                <select
                                                    name="gender"
                                                    className="input-field w-full placeholder:text-sm text-sm px-6 text-dark-gray font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                    value={formData.gender}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="input-grid flex space-x-2.5 mb-6">
                                    <div className="w-1/2 h-full">
                                        <div className="input-com">
                                            <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                                                Birth Date and Time Details
                                            </label>
                                            <div className="input-wrapper border border-qgray-border overflow-hidden relative">
                                                <input
                                                    name="birthDateTime"
                                                    placeholder="datetime-local"
                                                    className="input-field w-full placeholder:text-sm text-sm px-6 text-dark-gray font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                    type="datetime-local"
                                                    value={formData.birthDateTime}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/2 h-full">
                                        <div className="input-com">
                                            <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                                                Birth Place*
                                            </label>
                                            <div className="input-wrapper border border-qgray-border overflow-hidden relative">
                                                <input
                                                    name="birthPlace"
                                                    placeholder="Birth Place*"
                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                    type="text"
                                                    value={formData.birthPlace}
                                                    onChange={handleChange}
                                                />
                                                {
                                                    geo_Data?.map((geo_Data_result,index) => {
                                                        return (
                                                            <p key={index}  onClick={() => handleLocationSelect(geo_Data_result)}>{geo_Data_result?.place_name}</p>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="input-grid">
                                    <div className="w-full">
                                        <div className="input-com">
                                            <button type="submit" className="w-[164px] h-[45px] bg-[#9F2225] text-white text-sm">
                                                Generate
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <div
                    className="bg-white min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full max-[575px]:w-[50%] max-[575px]:mx-auto">
                    <img src={Common_Images_Transport?.janam_kundli} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Free_Get_Kundli_Form