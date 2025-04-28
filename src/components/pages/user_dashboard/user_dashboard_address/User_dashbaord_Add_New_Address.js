import React, { useState } from 'react'
import Header from '../../../common/header/Header'
import Footer from '../../../common/footer/Footer'
import { Add_Shipping_Address } from '../../../../api/category_product/Category_Product'
import { User_Authentication } from '../../../../user_authentication/User_Authentication'
import Loader from '../../../../loader/Loader'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom'

const User_dashbaord_Add_New_Address = () => {
    // <------------- state of the add new address form --------------->
    const navigate = useNavigate();
    const [is_loading, set_Is_Loading] = useState(false)
    const [add_new_address_form_data, set_Add_New_Address_Form_Data] = useState({
        name: "",
        house_name: "",
        landmark: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pin_code: "",
    })

    // <-------- change the input feilds ----------->
    const Handle_add_new_address = (e) => {
        const { name, value } = e.target;
        set_Add_New_Address_Form_Data({
            ...add_new_address_form_data,
            [name]: value
        })
    }
    // <---------- Submit the Address details ------>
    const Submit_address_details = async (e) => {
        e.preventDefault();
        set_Is_Loading(true)
        const data = {
            name: add_new_address_form_data.name,
            house_name: add_new_address_form_data.house_name,
            landmark: add_new_address_form_data.landmark,
            address: add_new_address_form_data.address,
            city: add_new_address_form_data.city,
            state: add_new_address_form_data.state,
            country: add_new_address_form_data.country,
            pin_code: add_new_address_form_data.pin_code,
        }
        try {
            const token = User_Authentication();
            if (!token) {
                set_Is_Loading(false)
                throw new Error("User token not found");
            }
            const response = await Add_Shipping_Address(data, { Authorization: `Bearer ${token}` })
            if (response?.data?.status == "200") {
                set_Is_Loading(false)
                set_Add_New_Address_Form_Data({})
                toast("Shipping address added successfully")
                navigate("/cart")
            }
            else if (response?.response?.data?.status == "500") {
                set_Is_Loading(false)
            }
            console.log("response", response)
        } catch (error) {
            set_Is_Loading(false)
            console.log("object", error)
        }

    }
    return (
        <div>
            {/* <------------ Header ------------> */}
            <Header />
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="bg-[#f8f8f8] py-8">
                            <div
                                className=" mx-auto min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                                <div className="myaccount-section w-full">
                                    <div className="container-x mx-auto">
                                        <div className="w-full my-10">
                                            <div className="w-full bg-white shadow-xl p-5">
                                                <div className=" w-full">
                                                    <h1 className="font-bold text-[24px] text-qblack mb-4">Add New Address
                                                    </h1>
                                                    <form method='post' onSubmit={Submit_address_details}>
                                                        <div className="flex space-x-8">
                                                            <div className="w-full">
                                                                <div className="input-grid flex space-x-2.5 mb-8">
                                                                    <div className="w-1/2 h-full">
                                                                        <div className="input-com "><label
                                                                            className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Name: *</label>
                                                                            <div
                                                                                className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input placeholder="" onChange={Handle_add_new_address} value={add_new_address_form_data?.name} name='name'
                                                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                    type="text" required/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/2 h-full">
                                                                        <div className="input-com "><label
                                                                            className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">House/Flat/Block Name: *</label>
                                                                            <div
                                                                                className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input placeholder="" onChange={Handle_add_new_address} value={add_new_address_form_data?.house_name} name='house_name'
                                                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                    type="text" required/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="input-grid flex space-x-2.5 mb-8">
                                                                    <div className="w-1/2 h-full">
                                                                        <div className="input-com "><label
                                                                            className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Address *</label>
                                                                            <div
                                                                                className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input placeholder="" onChange={Handle_add_new_address} value={add_new_address_form_data?.address} name='address'
                                                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                    type="text" required/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/2 h-full">
                                                                        <div className="input-com "><label
                                                                            className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">City: *</label>
                                                                            <div
                                                                                className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input placeholder="" onChange={Handle_add_new_address} value={add_new_address_form_data?.city} name='city'
                                                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                    type="text" required/>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>


                                                                <div className="input-grid flex space-x-2.5 mb-8">
                                                                    <div className="w-1/2 h-full">
                                                                        <div className="input-com "><label
                                                                            className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">State / Province: *</label>
                                                                            <div
                                                                                className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input placeholder="" onChange={Handle_add_new_address} value={add_new_address_form_data?.state} name='state'
                                                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                    type="text" required/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/2 h-full">
                                                                        <div className="input-com "><label
                                                                            className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Country: *</label>
                                                                            <div
                                                                                className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input placeholder="" onChange={Handle_add_new_address} value={add_new_address_form_data?.country} name='country'
                                                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                    type="text" required/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="input-grid flex space-x-2.5 mb-8">
                                                                    <div className="w-1/2 h-full">
                                                                        <div className="input-com "><label
                                                                            className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">PinCode: *</label>
                                                                            <div
                                                                                className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input placeholder="" onChange={Handle_add_new_address} value={add_new_address_form_data?.pin_code} name='pin_code'
                                                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                    type="text" required/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/2 h-full">
                                                                        <div className="input-com "><label
                                                                            className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Landmark</label>
                                                                            <div
                                                                                className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                <input placeholder="" onChange={Handle_add_new_address} value={add_new_address_form_data?.landmark} name='landmark'
                                                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                    type="text" required/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="action-area">
                                                            <button type='submit'
                                                                className="w-[164px] inline-block text-center py-3 bg-[#9F2225] text-white text-sm">Save Address</button>

                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {/* <--------- Footer section's ----------> */}
            <Footer />
        </div>
    )
}

export default User_dashbaord_Add_New_Address