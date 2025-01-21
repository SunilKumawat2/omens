import React, { useEffect, useState } from 'react'
import Astrologer_after_Login_Header from '../astrologer_after_login_header/Astrologer_after_Login_Header'
import Loader from '../../../../loader/Loader'
import { Get_Wallet_Details, get_wallet_history } from '../../../../api/category_product/Category_Product'
import { User_Authentication } from '../../../../user_authentication/User_Authentication'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Astrologer_Footer from "../astrologer_footer/Astrologer_Footer"

const Astrologer_Wallet = () => {
    const [is_loading, set_Is_Loading] = useState(false)
    const [get_wallet_details, set_Wallet_Details] = useState({})
    const [get_wallet_list, set_Wallet_List] = useState([])

    useEffect(() => {
        const handle_Get_Wallet_Details = async () => {
            set_Is_Loading(true)
            try {
                const token = User_Authentication();
                if (!token) {
                    toast("User token not found")
                    set_Is_Loading(false)
                    throw new Error("User token not found");
                }
                const response = await Get_Wallet_Details({ Authorization: `Bearer ${token}` })
                if (response?.data?.status == "200") {
                    set_Wallet_Details(response?.data?.data)
                    set_Is_Loading(false)
                }
                else if (response?.response?.data?.status == "500") {
                    set_Is_Loading(false)
                }
            }
            catch (error) {
                set_Is_Loading(false)
            }
        }
        handle_Get_Wallet_Details();
    }, [])

    useEffect(() => {
        const handle_get_wallet_history = async () => {
            set_Is_Loading(true)
            try {
                const token = User_Authentication();
                if (!token) {
                    toast("User token not found")
                    set_Is_Loading(false)
                    throw new Error("User token not found");
                }
                const response = await get_wallet_history({ Authorization: `Bearer ${token}` })
                if (response?.data?.status == "200") {
                    set_Wallet_List(response?.data?.data)
                    set_Is_Loading(false)
                }
                else if (response?.response?.data?.status == "500") {
                    set_Is_Loading(false)
                }
            }
            catch (error) {
                set_Is_Loading(false)
            }
        }
        handle_get_wallet_history();
    }, [])
    console.log("handle_Get_Wallet_Details", get_wallet_details)

    const formatDateTime = (isoString) => {
        const date = new Date(isoString);
        const dateOptions = {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        };
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date);
        const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
        return `${formattedDate} | ${formattedTime}`;
    };
    return (
        <div>
            {/*  */}
            <Astrologer_after_Login_Header />
              {/* <-------- ToastContainer ------------> */}
      <ToastContainer style={{ marginTop: "120px" }} />
            {
                is_loading ? (
                    <Loader />
                ) : (

                    <div className="bg-[#f8f8f8] py-8">
                        <div
                            className=" mx-auto min-[1300px]:max-w-[1240px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                            <div className="myaccount-section w-full">
                                <div className="container-x mx-auto">
                                    <div className="w-full my-10">
                                        <div className="w-full bg-white shadow-xl p-5">
                                            <div className="my_account w-full flex space-x-10">
                                                {/* <User_Dashbaord_Common_Section /> */}
                                                <div className="flex-1">

                                                    <div className="item-body w-full">
                                                        <div className="welcome-msg w-full">
                                                            <div>
                                                                <h1 className="font-bold text-[24px] text-qblack">Wallet
                                                                </h1>
                                                            </div>
                                                        </div>
                                                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-3 border-b pb-5">
                                                            <div
                                                                className="w-full h-[120px] transition-all flex gap-5 duration-300 ease-in-out bg-blue-700 rounded-[10px] p-[15px]">
                                                                <div
                                                                    className="w-[62px] h-[62px] rounded bg-gray-100 flex justify-center items-center">
                                                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-wallet-fill" viewBox="0 0 16 16">
                                                                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z" />
                                                                        <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z" />
                                                                    </svg></span>
                                                                </div>
                                                                <div>
                                                                    <p className="text-md text-white font-medium">Available Balance
                                                                    </p>
                                                                    <span className="text-2xl font-bold text-white mt-1 block">Rs.{get_wallet_details?.total_amount}</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="w-full h-[120px] transition-all flex gap-5 duration-300 ease-in-out bg-yellow-400 rounded-[10px] p-[15px]">
                                                                <div
                                                                    className="w-[62px] h-[62px] rounded bg-gray-100 flex justify-center items-center">
                                                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-wallet-fill" viewBox="0 0 16 16">
                                                                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z" />
                                                                        <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z" />
                                                                    </svg></span>
                                                                </div>
                                                                <div>
                                                                    <p className="text-md text-black font-medium">Weakly Earning
                                                                    </p>
                                                                    <span className="text-2xl font-bold text-black mt-1 block">Rs.{get_wallet_details?.weakly_earn}</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="w-full h-[120px] transition-all flex gap-5 duration-300 ease-in-out bg-green-600 rounded-[10px] p-[15px]">
                                                                <div
                                                                    className="w-[62px] h-[62px] rounded bg-gray-100 flex justify-center items-center">
                                                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-wallet-fill" viewBox="0 0 16 16">
                                                                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z" />
                                                                        <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z" />
                                                                    </svg></span>
                                                                </div>
                                                                <div>
                                                                    <p className="text-md text-white font-medium">Monthly Earning
                                                                    </p>
                                                                    <span className="text-2xl font-bold text-white mt-1 block">Rs.{get_wallet_details?.monthly_earn}</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="w-full h-[120px] transition-all flex gap-5 duration-300 ease-in-out bg-orange-600 rounded-[10px] p-[15px]">
                                                                <div
                                                                    className="w-[62px] h-[62px] rounded bg-gray-100 flex justify-center items-center">
                                                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-wallet-fill" viewBox="0 0 16 16">
                                                                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z" />
                                                                        <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z" />
                                                                    </svg></span>
                                                                </div>
                                                                <div>
                                                                    <p className="text-md text-white font-medium">Monthly Earning
                                                                    </p>
                                                                    <span className="text-2xl font-bold text-white mt-1 block">Rs.{get_wallet_details?.monthly_earn}</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="w-full h-[120px] transition-all flex gap-5 duration-300 ease-in-out bg-red-500 rounded-[10px] p-[15px]">
                                                                <div
                                                                    className="w-[62px] h-[62px] rounded bg-gray-100 flex justify-center items-center">
                                                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-wallet-fill" viewBox="0 0 16 16">
                                                                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z" />
                                                                        <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z" />
                                                                    </svg></span>
                                                                </div>
                                                                <div>
                                                                    <p className="text-md text-white font-medium">Monthly Earning
                                                                    </p>
                                                                    <span className="text-2xl font-bold text-white mt-1 block">Rs.{get_wallet_details?.monthly_earn}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-5">
                                                            <h4 className="text-lg font-medium text-gray-500 pb-2">Transactions History</h4>
                                                            <table className="table text-sm table_hover w-full">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Tran. ID</th>
                                                                        <th>Name</th>
                                                                        <th>Date</th>
                                                                        <th>Amount</th>
                                                                        <th>Pay</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        get_wallet_list?.map((get_wallet_result) => {
                                                                            return (
                                                                                <tr>
                                                                                    <td>{get_wallet_result?.transuction_id}</td>
                                                                                    <td>{get_wallet_result?.place}</td>
                                                                                    <td>{formatDateTime(get_wallet_result?.created_at)}</td>
                                                                                    {
                                                                                        get_wallet_result?.transaction_type == "cr" ? (
                                                                                            <td className="text-green-700 font-medium">+Rs.{get_wallet_result?.req_amount}</td>
                                                                                        ) : (
                                                                                            <td className="text-red-700 font-medium">-Rs.{get_wallet_result?.req_amount}</td>
                                                                                        )
                                                                                    }
                                                                                    <td>Wallet</td>
                                                                                </tr>
                                                                            )
                                                                        })
                                                                    }
                                                                </tbody>
                                                            </table>
                                                        </div>
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
            {/*  */}
            <Astrologer_Footer/>
        </div>
    )
}

export default Astrologer_Wallet