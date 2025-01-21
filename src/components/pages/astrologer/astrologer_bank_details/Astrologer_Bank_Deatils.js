import React, { useEffect, useState } from 'react'
import Astrologer_after_Login_Header from '../astrologer_after_login_header/Astrologer_after_Login_Header'
import Loader from '../../../../loader/Loader'
import Astrologer_Footer from '../astrologer_footer/Astrologer_Footer'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Add_Shipping_Address } from '../../../../api/category_product/Category_Product';
import { User_Authentication } from '../../../../user_authentication/User_Authentication';
import { Add_Astrologer_Bank_Details, Get_Astrologer_Bank_Details } from '../../../../api/astrologer/Astrologer';

const Astrologer_Bank_Deatils = () => {
    const navigate = useNavigate();
    const [is_loading, set_Is_Loading] = useState(false)
    const [add_new_bank_details, set_Add_New_Address_Form_Data] = useState({
        holder_name: "",
        bank_name: "",
        account_no: "",
        retype_account_no: "",
        account_type: "",
        ifsc: "",
    })

    // <-------- change the input feilds ----------->
    const submit_add_bank_details = (e) => {
        const { name, value } = e.target;
        set_Add_New_Address_Form_Data({
            ...add_new_bank_details,
            [name]: value
        })
    }
    // <---------- Submit the Address details ------>
    const submit_bank_details = async (e) => {
        e.preventDefault();
        set_Is_Loading(true)
        const data = {
            holder_name: add_new_bank_details.holder_name,
            bank_name: add_new_bank_details.bank_name,
            account_no: add_new_bank_details.account_no,
            retype_account_no: add_new_bank_details.retype_account_no,
            account_type: add_new_bank_details.account_type,
            ifsc: add_new_bank_details.ifsc
        }
        if (add_new_bank_details.account_no != add_new_bank_details.retype_account_no) {
            set_Is_Loading(false)
            toast("account number must be match")
            return
        }
        try {
            const token = User_Authentication();
            if (!token) {
                set_Is_Loading(false)
                throw new Error("User token not found");
            }
            const response = await Add_Astrologer_Bank_Details(data, { Authorization: `Bearer ${token}` })
            if (response?.data?.status == "200") {
                set_Is_Loading(false)
                toast("Bank details added successfully")
            }
            else if (response?.response?.data?.status == "500") {
                set_Is_Loading(false)
            }
            console.log("response", response)
        } catch (error) {
            set_Is_Loading(false)
        }
        
    }
    
    // <------------ useEffect ---------->
    useEffect(() => {
        const get_astrologer_bank_details = async () => {
            set_Is_Loading(true)
            try {
                const token = User_Authentication();
                if (!token) {
                    set_Is_Loading(false)
                    throw new Error("User token not found");
                }
                const response = await Get_Astrologer_Bank_Details({ Authorization: `Bearer ${token}` })
                set_Is_Loading(false)
                set_Add_New_Address_Form_Data(response?.data?.data?.bankdata)
                const bankDetail = response?.data?.data?.bankdata || {};
                set_Add_New_Address_Form_Data({
                    holder_name: bankDetail?.holder_name || "",
                    bank_name: bankDetail?.bank_name || "",
                    account_no: bankDetail?.account_no || "",
                    retype_account_no: bankDetail?.retype_account_no || "",
                    account_type: bankDetail?.account_type || "",
                    ifsc: bankDetail?.ifsc || "",
                });
            }
            catch (error) {
                set_Is_Loading(false)
            }
        }
        get_astrologer_bank_details();
    }, [])
    console.log("add_new_bank_details_add_new_bank_details", add_new_bank_details)
    return (
        <div>
            <div>
                {/* <------------ Header ------------> */}
                <Astrologer_after_Login_Header />
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
                                                        <h1 className="font-bold text-[24px] text-qblack mb-4">Add Bank Details
                                                        </h1>
                                                        <form method='post' onSubmit={submit_bank_details}>
                                                            <div className="flex space-x-8">
                                                                <div className="w-full">
                                                                    <div className="input-grid flex space-x-2.5 mb-8">
                                                                        <div className="w-1/2 h-full">
                                                                            <div className="input-com "><label
                                                                                className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Holder Name: *</label>
                                                                                <div
                                                                                    className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                    <input placeholder="" onChange={submit_add_bank_details} value={add_new_bank_details?.holder_name} name='holder_name'
                                                                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                        type="text" required />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="w-1/2 h-full">
                                                                            <div className="input-com "><label
                                                                                className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Bank Name: *</label>
                                                                                <div
                                                                                    className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                    <input placeholder="" onChange={submit_add_bank_details} value={add_new_bank_details?.bank_name} name='bank_name'
                                                                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                        type="text" required />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="input-grid flex space-x-2.5 mb-8">
                                                                        <div className="w-1/2 h-full">
                                                                            <div className="input-com "><label
                                                                                className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Account No *</label>
                                                                                <div
                                                                                    className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                    <input placeholder="" onChange={submit_add_bank_details} value={add_new_bank_details?.account_no} name='account_no'
                                                                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                        type="number" required />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="w-1/2 h-full">
                                                                            <div className="input-com "><label
                                                                                className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Retype Account No: *</label>
                                                                                <div
                                                                                    className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                    <input placeholder="" onChange={submit_add_bank_details} value={add_new_bank_details?.retype_account_no} name='retype_account_no'
                                                                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                        type="number" required />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>


                                                                    <div className="input-grid flex space-x-2.5 mb-8">
                                                                        <div className="w-1/2 h-full">
                                                                            <div className="input-com "><label
                                                                                className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">IFSC: *</label>
                                                                                <div
                                                                                    className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                                    <input placeholder="" onChange={submit_add_bank_details} value={add_new_bank_details?.ifsc} name='ifsc'
                                                                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                                                        type="text" required />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="w-1/2 h-full">
                                                                            <div className="input-com">
                                                                                <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">Account Type: *</label>
                                                                                <div className="input-wrapper border border-qgray-border overflow-hidden relative">
                                                                                    <select onChange={submit_add_bank_details} name="account_type" value={add_new_bank_details?.account_type || ""}
                                                                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray font-normal bg-white focus:ring-0 focus:outline-none h-[50px] w-full"
                                                                                        required
                                                                                    >
                                                                                        <option value="">
                                                                                            Select Account Type
                                                                                        </option>
                                                                                        <option value="savings">Savings</option>
                                                                                        <option value="checking">Current</option>
                                                                                        <option value="business">Business</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="action-area">
                                                                <button type='submit'
                                                                    className="w-[164px] inline-block text-center py-3 bg-[#9F2225] text-white text-sm">Save Bank Details</button>

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
                <Astrologer_Footer />
            </div>
        </div>
    )
}

export default Astrologer_Bank_Deatils