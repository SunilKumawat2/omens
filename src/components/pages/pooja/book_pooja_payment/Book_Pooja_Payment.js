import React from 'react'
import Header from '../../../common/header/Header'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Book_Pooja } from '../../../../api/pooja/Pooja'
import { User_Authentication } from '../../../../user_authentication/User_Authentication'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { IMG_BASE_URL } from '../../../../config/Config'
import Razor_Pay from '../../../../razor_pay/Razor_Pay'

const Book_Pooja_Payment = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { title, image, pooja_date, from_time, to_time, astro_name, price, id } = location.state || {};
    console.log("Book_Pooja_Payment", { title, astro_name, price, id })

    // Function to handle booking after payment success
    const Handle_Book_pooja = async (transaction_id) => {
        const data = {
            id: id,
            paymentmethod: "Online",
            payment_status: "Success",
            transaction_id: transaction_id,
        };

        try {
            const token = User_Authentication();
            if (!token) {
                throw new Error("User token not found");
            }

            const response = await Book_Pooja(data, { Authorization: `Bearer ${token}` });
            if (response?.data?.status == "200") {
                toast("Pooja booked successfully");
                navigate("/user_my_pooja_list");
            }
            console.log("Booking Response:", response);
        } catch (error) {
            console.log("Booking Error:", error);
            toast("Failed to book pooja. Please try again.");
        }
    };

    // Callback when Razorpay payment is successful
    const handlePaymentSuccess = ({ transaction_id, payment_status }) => {
        if (payment_status == "Success") {
            Handle_Book_pooja(transaction_id); 
            toast("Pooja booked successfully");
            navigate("/user_my_pooja_list");
        }
    };


    // Helper function to convert 24-hour time to 12-hour format with AM/PM
    const formatTimeTo12Hour = (time) => {
        const [hours, minutes, seconds] = time.split(":");
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(seconds);

        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
    };

    const StartTime = formatTimeTo12Hour(from_time);
    const EndTime = formatTimeTo12Hour(to_time);
    return (
        <div>
            {/*  */}
            <Header />
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            <div class="gi-breadcrumb mb-[40px] bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${Common_Images_Transport?.product_bg})`, // Add your image URL here
                }}>
                <div
                    class="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
                    <div class="flex flex-wrap w-full">
                        <div class="w-full px-[12px]">
                            <div class="flex flex-wrap m-0 py-[35px]">
                                <div class="min-[768px]:w-[100%] w-full text-center">
                                    <h2 class="gi-breadcrumb-title text-white block text-3xl leading-[22px] font-semibold my-[0] mx-auto capitalize max-[767px]:mb-[5px] max-[767px]:text-center">
                                        Payment Information</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="gi-checkout-section py-[40px] text-[14px] max-[767px]:py-[30px]">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
                    <div className="flex flex-wrap w-full">
                        {/* <!-- Sidebar Area Start --> */}
                        <div className="gi-checkout-leftside px-[12px] min-[992px]:w-[66.66%] w-full max-[991px]:mt-[30px]">
                            {/* <!-- checkout content Start --> */}
                            <div className="gi-checkout-content">
                                <div className="gi-checkout-inner">
                                    <div className="gi-checkout-wrap p-[30px] pb-4 bg-[#fff] shadow-xl rounded-[5px] mb-[30px]">
                                        <div className="gi-checkout-block gi-check-login">
                                            <h3 className="gi-checkout-title text-[20px] font-semibold tracking-[0] mb-[22px] relative block text-[#4b5966] leading-[1] max-[575px]:text-[18px]">
                                                Pooja Info</h3>
                                            <div className="flex gap-6 border p-1 rounded-md shadow-md">
                                                <div className="shrink-0">
                                                    <img
                                                        src={`${IMG_BASE_URL}${image}`}
                                                        className="rounded-md w-full h-[200px]"
                                                        alt="Pooja Image"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-3 gap-6 flex-1">
                                                    <div>
                                                        <h6 className="text-[16px] text-[#3B4959] font-semibold">Pooja</h6>
                                                        <span className="text-sm text-[#A6A6A6]">{title}</span>
                                                    </div>
                                                    <div>
                                                        <h6 className="text-[16px] text-[#3B4959] font-semibold">Astrologer</h6>
                                                        <span className="text-sm text-[#A6A6A6]">{astro_name}</span>
                                                    </div>
                                                    <div>
                                                        <h6 className="text-[16px] text-[#3B4959] font-semibold">Amount</h6>
                                                        <span className="text-sm text-[#A6A6A6]">Rs. {price}/-</span>
                                                    </div>
                                                    <div>
                                                        <h6 className="text-[16px] text-[#3B4959] font-semibold">Pooja Date</h6>
                                                        <span className="text-sm text-[#A6A6A6]">{pooja_date}</span>
                                                    </div>
                                                    <div>
                                                        <h6 className="text-[16px] text-[#3B4959] font-semibold">Start Time</h6>
                                                        <span className="text-sm text-[#A6A6A6]">{StartTime}</span>
                                                    </div>
                                                    <div>
                                                        <h6 className="text-[16px] text-[#3B4959] font-semibold">End Time</h6>
                                                        <span className="text-sm text-[#A6A6A6]">{EndTime}</span>
                                                    </div>
                                                </div>
                                            </div>


                                            {/* <h3
                                                className="gi-checkout-title text-[20px] font-semibold tracking-[0] mt-[22px] relative block text-[#4b5966] leading-[1] max-[575px]:text-[18px]">
                                                Select Payment Mode</h3>
                                            <div className="gi-sb-block-content mt-[15px]">
                                                <div className="gi-check-pay-img-inner flex justify-between w-full flex-wrap">
                                                    <div className="gi-pro-variation-content">
                                                        <ul>
                                                            <li className="active mb-3 h-[50px] font-normal transition-all duration-[0.3s] ease-in-out py-[5px] px-[10px] cursor-pointer flex items-center justify-center text-[12px] leading-[22px] border-[1px] border-solid border-[#eee] float-left rounded-[5px]"><span className=""><img src={Common_Images_Transport?.phonepe} alt="" /></span></li>
                                                            <li className="mb-3 h-[50px] font-normal transition-all duration-[0.3s] ease-in-out ml-[10px] py-[5px] px-[10px] cursor-pointer flex items-center justify-center text-[12px] leading-[22px] border-[1px] border-solid border-[#eee] float-left rounded-[5px]"><span><img src={Common_Images_Transport?.paytm} alt="" /></span></li>
                                                            <li className="mb-3 h-[50px] font-normal transition-all duration-[0.3s] ease-in-out ml-[10px] py-[5px] px-[10px] cursor-pointer flex items-center justify-center text-[12px] leading-[22px] border-[1px] border-solid border-[#eee] float-left rounded-[5px]"><span><img src={Common_Images_Transport?.netbanking} alt="" /></span></li>
                                                            <li className="mb-3 h-[50px] font-normal transition-all duration-[0.3s] ease-in-out ml-[10px] py-[5px] px-[10px] cursor-pointer flex items-center justify-center text-[12px] leading-[22px] border-[1px] border-solid border-[#eee] float-left rounded-[5px]"><span><img src={Common_Images_Transport?.creditcard} alt="" /></span></li>
                                                            <li className="mb-3 h-[50px] font-normal transition-all duration-[0.3s] ease-in-out ml-[10px] py-[5px] px-[10px] cursor-pointer flex items-center justify-center text-[12px] leading-[22px] border-[1px] border-solid border-[#eee] float-left rounded-[5px]"><span><img src={Common_Images_Transport?.paypal} alt="" /></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--cart content End --> */}
                        </div>
                        <div className="gi-checkout-rightside min-[992px]:w-[33.33%] w-full">
                            <div className="gi-sidebar-wrap mb-[30px]">
                                {/* <!-- Sidebar Summary Block --> */}

                                <div className="gi-sidebar-wrap p-[15px] shadow-xl mb-[0]">
                                    {/* <!-- Sidebar Summary Block --> */}
                                    <div className="gi-sidebar-block">
                                        <h4 className="font-bold text-lg text-black mb-4">Order Summery</h4>

                                        <div className="gi-sb-block-content mb-[0] border-b-[0] mt-[15px]">
                                            <div className="gi-cart-summary-bottom">
                                                <div className="gi-cart-summary">
                                                    <div className="flex justify-between items-center mb-[10px]">
                                                        <span
                                                            className="text-left text-[#4b5966] text-[14px] leading-[24px] tracking-[0]">{title}</span>
                                                        <span
                                                            className="text-right text-[#000] text-[14px] leading-[24px] font-medium">Rs.{price}/-</span>
                                                    </div>
                                                    {/* <div className="flex justify-between items-center mb-[10px]">
                                                        <span
                                                            className="text-left text-[#4b5966] text-[14px] leading-[24px] tracking-[0]">Total Amount</span>
                                                        <span
                                                            className="text-right text-[#000] text-[14px] leading-[24px] font-medium">Rs.5000/-</span>
                                                    </div> */}
                                                    {/* <div className="flex justify-between items-center mb-[10px]">
                                                        <span
                                                            className="text-left text-[#4b5966] text-[14px] leading-[24px] tracking-[0]">GST @18%</span>
                                                        <span
                                                            className="text-right text-[#000] text-[14px] leading-[24px] font-medium">Rs.50.00/-</span>
                                                    </div> */}
                                                    <div className="flex justify-between items-center mt-[10px] pt-[10px] border-t border-gray-200">
                                                        <span
                                                            className="text-left text-[#4b5966] text-[16px] font-semibold leading-[24px] tracking-[0]">Total Amount</span>
                                                        <span
                                                            className="text-right text-[#000] text-[16px] font-semibold leading-[24px] font-medium">Rs.{(price || 0)}/-</span>
                                                    </div>


                                                </div>

                                            </div>
                                            <div class="mt-5">
                                                <Link
                                                    class="bg-[#9F2225] h-[40px] leading-[50px] text-center text-[14px] py-[10px] px-[25px] bg-[#4b5966] text-[#fff] transition-all duration-[0.3s] ease-in-out relative rounded-full items-center font-semibold tracking-[0.02rem] border-[0] hover:bg-[#333] hover:text-[#fff]"><i
                                                        class="fi-rr-shopping-bag mr-3 transition-all duration-[0.3s] ease-in-out leading-[0]"></i>
                                                    <Razor_Pay
                                                        Price={price}
                                                        onPaymentSuccess={handlePaymentSuccess}
                                                        buttonContent="Payment Now"
                                                    /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Sidebar Summary Block --> */}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Book_Pooja_Payment