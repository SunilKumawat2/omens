import React, { useEffect, useState } from 'react'
import User_Dashbaord_Common_Section from '../user_dashboard_common_section/User_Dashbaord_Common_Section'
import Header from '../../../common/header/Header'
import Loader from '../../../../loader/Loader'
import Footer from '../../../common/footer/Footer'
import { add_wallet, wallet_amount_flag } from '../../../../api/category_product/Category_Product'
import { User_Authentication } from '../../../../user_authentication/User_Authentication'
import Razor_Pay from '../../../../razor_pay/Razor_Pay'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom'

const User_Dasboard_Wallet_Recharge = () => {
    const navigate = useNavigate();
    const [is_loading, set_Is_Loading] = useState(false)
    const [get_wallet_amount_flag, set_Wallet_Amount_Flag] = useState([]);
    const [get_wallet_amount, set_Wallet_Amount] = useState(null);
    console.log("set_Wallet_Amount", get_wallet_amount)

    useEffect(() => {
        const Handle_get_wallet_amount_flag = async () => {
            set_Is_Loading(true)
            try {
                const token = User_Authentication();
                if (!token) {
                    set_Is_Loading(false)
                    throw new Error("User token not found");
                }
                const response = await wallet_amount_flag({ Authorization: `Bearer ${token}` })
                if (response?.data?.status == "200") {
                    set_Wallet_Amount_Flag(response?.data?.data)
                    set_Is_Loading(false)
                } else if (response?.response?.data?.status == "500") {
                    set_Is_Loading(false)
                }
            }
            catch (error) {
                set_Is_Loading(false)
            }
        }
        Handle_get_wallet_amount_flag();
    }, [])

    // <---------- Handle the get the ---------->
    const handle_get_wallet_amount = (amount) => {
        set_Wallet_Amount(amount)
    }

    const Handle_add_wallet = async (transaction_id) => {
        set_Is_Loading(true)
        const data = {
            amount: get_wallet_amount,
            description: "Hello this is description",
            payment_id: transaction_id,
        }
        try {
            const token = User_Authentication();
            if (!token) {
                set_Is_Loading(false)
                throw new Error("User token not found");
            }
            const response = await add_wallet(data, { Authorization: `Bearer ${token}` })
            if (response?.data?.status == "200") {
                set_Is_Loading(false)
                toast(response?.data?.message)
                navigate("/user_wallet")
            }
            else if (response?.response?.data?.status == "500") {
                set_Is_Loading(false)
                toast(response?.response?.data?.status?.message)
            }
        }
        catch (error) {
            console.log("error", error)
            set_Is_Loading(true)
        }
    }

    // Callback when Razorpay payment is successful
    const handlePaymentSuccess = ({ transaction_id, payment_status }) => {
        if (payment_status == "Success") {
            Handle_add_wallet(transaction_id);
        }
    };
    return (
        <div>
            <div>
                {/* <--------- Header section's ------------> */}
                <Header />
                {/* <-------- ToastContainer ------------> */}
                <ToastContainer style={{ marginTop: "120px" }} />
                {/* <----------- Dashboard Order list here -----------> */}
                {
                    is_loading ? (
                        <Loader />
                    ) : (

                        <div className="bg-[#f8f8f8] py-8">
                            <div className=" mx-auto min-[1300px]:max-w-[1240px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                                <div className="myaccount-section w-full">
                                    <div className="container-x mx-auto">
                                        <div className="w-full my-10">
                                            <div className="w-full bg-white shadow-xl p-5">
                                                <div className="my_account w-full flex space-x-10">
                                                    <User_Dashbaord_Common_Section />
                                                    <div className="flex-1">
                                                        <div className="item-body w-full">
                                                            {/* <div className="welcome-msg w-full">
                                                                <div>
                                                                    <h1 className="font-bold text-[24px] text-qblack">Wallet</h1>
                                                                </div>
                                                            </div> */}
                                                            <div className="w-full flex justify-between items-center mt-3 border-b pb-5">
                                                                <div className="w-[252px] transition-all flex gap-5 duration-300 ease-in-out">
                                                                    {/* <div className="w-[62px] h-[62px] rounded bg-gray-100 flex justify-center items-center">
                                                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                                                            fill="currentColor" className="bi bi-wallet-fill"
                                                                            viewBox="0 0 16 16">
                                                                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z" />
                                                                            <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z" />
                                                                        </svg></span>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-md text-gray-500 font-medium">Available Balance
                                                                        </p>
                                                                        <span
                                                                            className="text-2xl font-bold text-green-700 mt-1 block">Rs.4578</span>
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                            <div className="mt-5">
                                                                <h4 className="text-lg font-medium text-gray-500 pb-2">Add Money to Wallet</h4>
                                                                <div className="grid gap-5 grid-cols-4">
                                                                    {
                                                                        get_wallet_amount_flag?.map((get_wallet_amount_result) => {
                                                                            return (
                                                                                <p onClick={() => handle_get_wallet_amount(get_wallet_amount_result?.amount)}
                                                                                    className={`${get_wallet_amount_result?.amount == get_wallet_amount ? "bg-red-700 text-white" : null} text-center py-3 rounded-full border 
                                                                                text-gray-700 border-gray-100 text-md`}>
                                                                                    Rs.{get_wallet_amount_result?.amount}
                                                                                </p>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                            {
                                                                get_wallet_amount != null && (
                                                                    <div className="gi-check-order-btn flex flex-end p-[0] mb-0 mt-5">
                                                                        <a className="gi-btn-2 w-full transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#9D2326] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                                                                        >  <Razor_Pay onPaymentSuccess={handlePaymentSuccess}
                                                                            Price={get_wallet_amount}
                                                                            buttonContent="Add Wallet" /></a>
                                                                    </div>
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
                    )
                }
                {/* <-------- footer section's --------------> */}
                <Footer />
            </div>
        </div>
    )
}

export default User_Dasboard_Wallet_Recharge