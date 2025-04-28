import React, { useState, useEffect } from 'react'
import { User_Authentication } from '../../../user_authentication/User_Authentication';
import { Remove_Shipping_Address, Shipping_Address, Update_Shipping_Address } from '../../../api/category_product/Category_Product';
import { Link } from 'react-router-dom';
import Loader from '../../../loader/Loader';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Address_List = ({ onActiveShippingAddressChange }) => {
    const [address_list, set_Address_list] = useState([]);
    const [active_shiping_address, set_Active_Shiping_Address] = useState(address_list[0]?.id)
    console.log("active_shiping_address", active_shiping_address)
    const [is_loading, set_Is_Loading] = useState(false)
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    // <------ address List --------->

    //    <------------ Edit the Shiping Address ----------->
    const [edit_select_address, set_Edit_Select_Address] = useState({
        name: '',
        house_name: '',
        address: '',
        city: '',
        state: '',
        country: '',
        pin_code: '',
        landmark: '',
    });

    // <------- Address list -------->
    useEffect(() => {
        const Handle_Get_Address_List = async () => {
            set_Is_Loading(true)
            try {
                const token = User_Authentication();
                if (!token) {
                    set_Is_Loading(false);
                    throw new Error("User token not found");
                }
                const response = await Shipping_Address({ Authorization: `Bearer ${token}` })
                if (response?.data?.status == "200") {
                    set_Address_list(response?.data?.data?.shipping_addresses)
                    set_Is_Loading(false)
                }
                else if (response?.response?.data?.status == "500") {
                    set_Is_Loading(false)
                }
            } catch (error) {
                set_Is_Loading(false)
            }
        }
        Handle_Get_Address_List();
    }, [])

    // <<------------ remove-shipping-address ----------->
    const Handle_Remove_Shipping_Address = async (id) => {
        set_Is_Loading(true)
        const data = {
            id: id
        }
        try {
            const token = User_Authentication();
            if (!token) {
                set_Is_Loading(false);
                throw new Error("User token not found");
            }
            const response = await Remove_Shipping_Address(data, { Authorization: `Bearer ${token}` })
            if (response?.data?.status == "200") {
                set_Is_Loading(false)
                set_Address_list((prevList) => prevList?.filter((address) => address?.id != id))
            }
            else if (response?.response?.data?.status == "500") {
                set_Is_Loading(false)
            }
        }
        catch (error) {
            set_Is_Loading(false)
        }
    }

    // Open the popup and set the selected address for editing
    const Handle_Open_Edit_Popup = (address) => {
        set_Edit_Select_Address(address);
        setIsPopupOpen(true);
    };

    // <---------- Handle Edit Address ----------->
    const Handle_Edit_Shipping_Address = async () => {
        set_Is_Loading(true)
        const data = {
            id: edit_select_address.id,
            name: edit_select_address.name,
            house_name: edit_select_address.house_name,
            address: edit_select_address.address,
            city: edit_select_address.city,
            state: edit_select_address.state,
            country: edit_select_address.country,
            pin_code: edit_select_address.pin_code,
            landmark: edit_select_address.landmark,
        }
        if (!edit_select_address?.name) {
            toast("please enter your name")
            set_Is_Loading(false)
            return
        }
        if (!edit_select_address?.house_name) {
            toast("please enter your House/Flat/Block Name:")
            set_Is_Loading(false)
            return
        }
        if (!edit_select_address?.address) {
            toast("please enter your Address:")
            set_Is_Loading(false)
            return
        }
        if (!edit_select_address?.city) {
            toast("please enter your city:")
            set_Is_Loading(false)
            return
        }
        if (!edit_select_address?.state) {
            toast("please enter your state:")
            set_Is_Loading(false)
            return
        }
        if (!edit_select_address?.country) {
            toast("please enter your country:")
            set_Is_Loading(false)
            return
        }
        if (!edit_select_address?.pin_code) {
            toast("please enter your pin code:")
            set_Is_Loading(false)
            return
        }
        if (!edit_select_address?.landmark) {
            toast("please enter your landmark:")
            set_Is_Loading(false)
            return
        }
        try {
            const token = User_Authentication();
            if (!token) {
                set_Is_Loading(false);
                throw new Error("User token not found");
            }
            const response = await Update_Shipping_Address(data, { Authorization: `Bearer ${token}` })
            if (response?.data?.status == "200") {
                set_Is_Loading(false)
                set_Address_list((prevList) =>
                    prevList.map((address) =>
                        address.id === data.id ? { ...address, ...data } : address
                    )
                );
                setIsPopupOpen(false)
            }
            console.log("response", response)
        }
        catch (error) {
            set_Is_Loading(false)
        }
    }

    // Close the popup
    const Handle_Close_Popup = () => {
        setIsPopupOpen(false);
        set_Edit_Select_Address(null);
    };

    // <----- Handle the active shiping address ---------->
    const Handle_active_shiping_address = (id) => {
        set_Active_Shiping_Address(id);
        onActiveShippingAddressChange(id); // Notify parent
    };

    useEffect(() => {
        if (address_list?.length > 0) {
            const defaultAddressId = address_list[0]?.id;
            set_Active_Shiping_Address(defaultAddressId);
            onActiveShippingAddressChange(defaultAddressId);
        }
    }, [address_list]);
    return (
        <>
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <div className="max-sm:p-5">
                        <div className="h-[50px] mt-4"><Link to="/user-add-new-address"
                            className="danger-btn rounded btn hover:bg-gray-500 text-white
                                 p-3 px-5 bg-[#9F2225]">Add New Address</Link></div>
                        {/* <-------- ToastContainer ------------> */}
                        <ToastContainer style={{ marginTop: "120px" }} />
                        <div className="">
                            {
                                address_list?.map((address_list_result) => {
                                    return (
                                        <div className={`flex mt-3 grid-3 justify-between mr-3 p-5 shadow-xl rounded-t-lg ${active_shiping_address == address_list_result?.id ? 'bg-red-50' : null}`} onClick={() => Handle_active_shiping_address(address_list_result?.id)}>
                                            <div className="">
                                                <h6 className="mb-3 text-lg font-semibold">Shipping address</h6>
                                                <ul className="text-sm text-[#A6A6A6]">
                                                    <li className="mb-2"><strong>Name: </strong>{address_list_result?.name}</li>
                                                    <li className="mb-2"><strong>Address: </strong>{address_list_result?.address}</li>
                                                    <li className="mb-2"><strong>Landmark: </strong>{address_list_result?.landmark} <strong>pin_code: </strong>{address_list_result?.pin_code}</li>
                                                </ul>
                                            </div>
                                            <div className="flex justify-end border-t-0 rounded-b-lg p-3 px-5 pr-0">
                                                <a href="#" onClick={(e) => {
                                                    e.preventDefault();
                                                    Handle_Open_Edit_Popup(address_list_result);
                                                }} className="block text-lg text-green-600 mr-4  hover:text-primary"><i className="fi-rs-edit mr-2"></i></a>
                                                <a href="#" onClick={() => Handle_Remove_Shipping_Address(address_list_result?.id)} className="block text-lg text-red-600 hover:text-primary"><i className="fi-rr-trash mr-2"></i></a>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>

                    </div>

                )
            }

            {/* <------- Edit address --------> */}
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <>
                        {isPopupOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                <div className="bg-white p-8 rounded-lg shadow-lg w-[600px] relative">
                                    <h2 className="text-xl font-semibold mb-4">Edit Address</h2>

                                    <form method='post'>
                                        <div className="flex space-x-8">
                                            <div className="w-full">
                                                <div className="input-grid flex space-x-2.5 mb-8">
                                                    <div className="w-1/2 h-full">
                                                        <div className="input-com">
                                                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Name: *</label>
                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative">
                                                                <input
                                                                    name="name"
                                                                    value={edit_select_address?.name}
                                                                    onChange={(e) => set_Edit_Select_Address({ ...edit_select_address, name: e.target.value })}
                                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                    type="text" required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-1/2 h-full">
                                                        <div className="input-com">
                                                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">House/Flat/Block Name: *</label>
                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative">
                                                                <input
                                                                    name="house_name"
                                                                    value={edit_select_address?.house_name}
                                                                    onChange={(e) => set_Edit_Select_Address({ ...edit_select_address, house_name: e.target.value })}
                                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                    type="text" required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-grid flex space-x-2.5 mb-8">
                                                    <div className="w-1/2 h-full">
                                                        <div className="input-com">
                                                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Address: *</label>
                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative">
                                                                <input
                                                                    name="address"
                                                                    value={edit_select_address?.address}
                                                                    onChange={(e) => set_Edit_Select_Address({ ...edit_select_address, address: e.target.value })}
                                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                    type="text" required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-1/2 h-full">
                                                        <div className="input-com">
                                                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">City: *</label>
                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative">
                                                                <input
                                                                    name="city"
                                                                    value={edit_select_address?.city}
                                                                    onChange={(e) => set_Edit_Select_Address({ ...edit_select_address, city: e.target.value })}
                                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                    type="text" required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-grid flex space-x-2.5 mb-8">
                                                    <div className="w-1/2 h-full">
                                                        <div className="input-com">
                                                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">State / Province: *</label>
                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative">
                                                                <input
                                                                    name="state"
                                                                    value={edit_select_address?.state}
                                                                    onChange={(e) => set_Edit_Select_Address({ ...edit_select_address, state: e.target.value })}
                                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                    type="text" required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-1/2 h-full">
                                                        <div className="input-com">
                                                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Country: *</label>
                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative">
                                                                <input
                                                                    name="country"
                                                                    value={edit_select_address?.country}
                                                                    onChange={(e) => set_Edit_Select_Address({ ...edit_select_address, country: e.target.value })}
                                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                    type="text" required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-grid flex space-x-2.5 mb-8">
                                                    <div className="w-1/2 h-full">
                                                        <div className="input-com">
                                                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">PinCode: *</label>
                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative">
                                                                <input
                                                                    name="pin_code"
                                                                    value={edit_select_address?.pin_code}
                                                                    onChange={(e) => set_Edit_Select_Address({ ...edit_select_address, pin_code: e.target.value })}
                                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                    type="text" required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-1/2 h-full">
                                                        <div className="input-com">
                                                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Landmark:</label>
                                                            <div className="input-wrapper border border-qgray-border  overflow-hidden relative">
                                                                <input
                                                                    name="landmark"
                                                                    value={edit_select_address.landmark}
                                                                    onChange={(e) => set_Edit_Select_Address({ ...edit_select_address, landmark: e.target.value })}
                                                                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                    type="text" required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="action-area">
                                            <button type='submit' onClick={(e) => {
                                                e.preventDefault();
                                                Handle_Edit_Shipping_Address();
                                            }} className="w-[164px] inline-block text-center py-3 bg-[#9F2225] m-2 text-white text-sm">Edit Address</button>
                                            <button type="button" onClick={Handle_Close_Popup} className="w-[164px] inline-block text-center m2 py-3 bg-[gray] text-black text-sm">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </>
                )
            }

        </>
    )
}

export default Address_List