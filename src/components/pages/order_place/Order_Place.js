import React, { useState } from 'react'
import Header from '../../common/header/Header'
import Common_Images_Transport from '../../common/common_imges_transport/Common_Images_Transport'
import { useLocation, useNavigate } from 'react-router-dom'
import { IMG_BASE_URL } from '../../../config/Config'
import { Submit_Order_Place } from '../../../api/category_product/Category_Product'
import { User_Authentication } from '../../../user_authentication/User_Authentication'
import Loader from '../../../loader/Loader'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Razor_Pay from '../../../razor_pay/Razor_Pay'

const Order_Place = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [is_loading, set_Is_Loading] = useState(false)
    const { cart_list, coupanResponse, activeShippingAddress } = location.state || {};
    console.log("Order_Place", { cart_list, coupanResponse, activeShippingAddress })

    // Calculate the total price before discount
    const totalCartPrice = cart_list?.filter((item) => item?.product?.current_stock > 0)?.
        reduce((total, item) => total + item?.qty * item?.product?.purchase_price, 0);

    // Calculate the discounted price
    const afterDiscountPrice = totalCartPrice - (coupanResponse?.discount_amount || 0);

    // Filter the cart list to include only products with current_stock > 0
    const validCartItems = cart_list?.filter(item => item?.product?.current_stock > 0);

    // Get the IDs of valid carts and join them into a comma-separated string
    const cartIds = validCartItems?.map(item => item?.id).join(",");

    // <------------ Submit_Order_Place ------------>
    const Handle_Submit_Order_Place = async () => {
        set_Is_Loading(true)
        const data = {
            cartIds: cartIds,
            shipping_addressId: activeShippingAddress,
            coupon_code: coupanResponse?.coupan_code,
            coupon_amount: coupanResponse?.discount_amount,
            discount_type: coupanResponse?.discount_type,
            discount: "0",
            currency_code: "Inr",
            total_amount: totalCartPrice,
            shipping_cost: "50",
            final_amount: afterDiscountPrice,
            payment_type: "Online",
            paymentmethod: "Rozer pay",
            payment_status: "Success",
            transaction_id: "ORD-1112510"
        }
        try {
            const token = User_Authentication();
            if (!token) {
                set_Is_Loading(false);
                throw new Error("User token not found");
            }
            const response = await Submit_Order_Place(data, { Authorization: `Bearer ${token}` })
            if (response?.data?.status == "200") {
                set_Is_Loading(false)
                toast(response?.data?.message)
                navigate("/user_orders")

            }
            else if (response?.response?.data?.status == "500") {
                set_Is_Loading(false)
            }
        } catch (error) {
            set_Is_Loading(false)
        }
    }

    const handlePaymentSuccess = ({ transaction_id, payment_status }) => {
        if (payment_status === "Success") {
            Handle_Submit_Order_Place(transaction_id);
        }
    };

    return (
        <div>
            {/* <------ Header section's ----------> */}
            <Header />
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            {/* <!-- Breadcrumb start --> */}
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="gi-breadcrumb mb-[40px] bg-center bg-no-repeat bg-cover"
                            style={{
                                backgroundImage: `url(${Common_Images_Transport?.product_bg})`, // Add your image URL here
                            }}>
                            <div
                                className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
                                <div className="flex flex-wrap w-full">
                                    <div className="w-full px-[12px]">
                                        <div className="flex flex-wrap m-0 py-[35px]">
                                            <div className="min-[768px]:w-[50%] w-full">
                                                <h2
                                                    className="gi-breadcrumb-title text-white block text-3xl leading-[22px] font-semibold my-[0] mx-auto capitalize max-[767px]:mb-[5px] max-[767px]:text-center">
                                                    Place Order</h2>
                                                <ul className="gi-breadcrumb-list mt-5">
                                                    <li
                                                        className="gi-breadcrumb-item inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize">
                                                        <a href="index.html" className="relative text-white"><i
                                                            className="fi-rr-home text-[#fff]"></i> Home</a>
                                                    </li>
                                                    <li
                                                        className="gi-breadcrumb-item inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize">
                                                        <span className="relative text-white">/ Place Order</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="gi-checkout-section py-[40px] text-[14px] max-[767px]:py-[30px]">
                            <h2 className="hidden">Checkout Page</h2>
                            <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
                                <div className="flex flex-wrap w-full">
                                    <div className="gi-checkout-rightside min-[992px]:w-[70%] w-full">
                                        <div className="gi-sidebar-wrap mb-[30px]">
                                            <div className="gi-sidebar-wrap p-[15px] shadow-xl mb-[0]">
                                                <div className="gi-sidebar-block">
                                                    <h4 className="font-bold text-lg text-black mb-4">Order Summery</h4>
                                                    {
                                                        cart_list?.map((order_place_result) => {
                                                            return (
                                                                <>
                                                                    {
                                                                        order_place_result?.product?.current_stock > 0 && (
                                                                            <>
                                                                                <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out  flex items-center w-full gap-6 overflow-hidden ">
                                                                                    <div className="gi-pro-image overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px] w-[180px] text-center">
                                                                                        <div className="image relative block overflow-hidden pointer-events-none transition-all duration-[0.3s] ease-in-out">
                                                                                            <img className="main-image m-auto max-w-full z-[1] transition-all duration-[0.3s] ease delay-[0s]"
                                                                                                width="150" height="150" src={`${IMG_BASE_URL}${order_place_result?.product?.single_image?.image_url}`}
                                                                                                alt="Product" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="gi-pro-content relative z-[10] text-left w-full">
                                                                                        <div>
                                                                                            <h3 className="gi-pro-stitle mb-[10px] font-bold text-[#000] text-[16px] capitalize tracking-[0.01rem] leading-[1.2]">
                                                                                                {order_place_result?.product?.name}</h3>
                                                                                            <div className="gi-single-cart text-[#9F2225] text-md font-medium">
                                                                                                Rs. {order_place_result?.total_price}
                                                                                            </div>
                                                                                        </div>
                                                                                        <div>

                                                                                        </div>
                                                                                        <div className="gi-single-qty flex flex-wrap w-full gap-3 w-full mt-4 items-center">
                                                                                            <div className="font-medium text-[#A6A6A6] text-md w-[150px]">Qty:<span
                                                                                                className="ml-2 text-black">{order_place_result?.qty}</span></div>
                                                                                            <div className="font-medium text-[#A6A6A6] text-md">Shape:<span
                                                                                                className="ml-2 text-black">{order_place_result?.product?.shape?.name}</span></div>

                                                                                        </div>
                                                                                        <div className="gi-single-qty flex flex-wrap w-full gap-3 w-full mt-2 items-center">
                                                                                            <div className="font-medium text-[#A6A6A6] text-md w-[150px]">Color: <span
                                                                                                className="ml-2 text-black">{order_place_result?.product?.color?.name}</span></div>
                                                                                            <div className="font-medium text-[#A6A6A6] text-md">Origin: <span
                                                                                                className="ml-2 text-black">{order_place_result?.product?.origin?.name}</span></div>
                                                                                        </div>
                                                                                        <div className="gi-single-qty flex flex-wrap w-full gap-3 w-full mt-2 items-center">
                                                                                            <div className="font-medium text-[#A6A6A6] text-md w-[150px]">SKU: <span
                                                                                                className="ml-2 text-black">{order_place_result?.product?.sku}</span></div>
                                                                                            <div className="font-medium text-[#A6A6A6] text-md">Certification: <span
                                                                                                className="ml-2 text-black">{order_place_result?.product?.certificate?.name}</span></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="border-t-[1px] border-solid border-[#eee] my-4"></div>
                                                                            </>
                                                                        )
                                                                    }
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div
                                        className="gi-sidebar-wrap gi-checkout-pay-wrap shadow-xl mb-[30px] lg:w-[30%] p-[15px] rounded-[5px] ">
                                        <div className="gi-sidebar-block ">
                                            <div className="gi-sb-title">
                                                <h3 className="d text-[20px] max-[1199px]:text-[18px] font-semibold tracking-[0] mb-[0] relative text-[#4b5966] leading-[1.2]">
                                                    Payment Method</h3>
                                            </div>
                                            <div className="gi-sb-block-content mt-[15px]">
                                                <div className="gi-checkout-pay">
                                                    <div className="gi-cart-summary-bottom">
                                                        <div className="gi-cart-summary">
                                                            <div className="flex justify-between items-center mb-[10px]">
                                                                <span className="text-left text-[#4b5966] text-[14px] leading-[24px] tracking-[0]">Price</span>
                                                                <span className="text-right text-[#000] text-[14px] leading-[24px] font-medium">    Rs.{cart_list
                                                                    ?.filter((item) => item?.product?.current_stock > 0)
                                                                    ?.reduce((total, item) => total + item?.total_price, 0)}/-</span>
                                                            </div>
                                                            {
                                                                coupanResponse?.discount_amount && (
                                                                    <div className="flex justify-between items-center mb-[10px]">
                                                                        <span className="text-left text-[#4b5966] text-[14px] leading-[24px] tracking-[0]">Discount</span>
                                                                        <span className="text-right text-[#000] text-[14px] leading-[24px] font-medium">    Rs.{coupanResponse?.discount_amount}/-</span>
                                                                    </div>
                                                                )
                                                            }
                                                            {
                                                                coupanResponse?.discount_amount && (
                                                                    <div className="flex justify-between items-center mb-[10px]">
                                                                        <span className="text-left text-[#4b5966] text-[14px] leading-[24px] tracking-[0]">After Discount</span>
                                                                        <span className="text-right text-[#000] text-[14px] leading-[24px] font-medium">    Rs.{afterDiscountPrice}/-</span>
                                                                    </div>
                                                                )
                                                            }
                                                            <div className="flex justify-between items-center mb-[10px]">
                                                                <span
                                                                    className="text-left text-[#4b5966] text-[14px] leading-[24px] tracking-[0]">Shipping</span>
                                                                <span className="text-right text-[#000] text-[14px] leading-[24px] font-medium">Rs.00.00/-</span>
                                                            </div>
                                                            <div className="gi-cart-coupan-content mt-3 hidden">
                                                                <form className="gi-cart-coupan-form flex gap-4" name="gi-cart-coupan-form"
                                                                    method="post" action="#">
                                                                    <input
                                                                        className="gi-coupan inline-block align-top leading-[35px] h-[40px] text-[#777] text-[14px] w-[80%] border-[1px] border-solid border-[#eee] bg-transparent text-left px-[10px] tracking-[0.5px] outline-[0] rounded-[0px]"
                                                                        type="text" required="" placeholder="Enter Your Coupan Code"
                                                                        name="gi-coupan" value="" />
                                                                    <button type="submit"
                                                                        className="gi-btn-2 transition-all duration-[0.3s] ease-in-out overflow-hidden text-center relative py-[10px] max-[767px]:py-[6px] px-[15px] max-[767px]:px-[10px] bg-[#9F2225] text-[#fff]  text-[14px] max-[767px]:text-[13px] tracking-[0] font-medium inline-flex items-center hover:bg-[#4b5966] hover:text-[#fff]"
                                                                        name="subscribe" value="">Apply</button>
                                                                </form>
                                                            </div>
                                                            <div
                                                                className="gi-cart-summary-total border-t-[1px] border-solid border-[#eee] pt-[19px] mb-[0] mt-[16px] flex justify-between items-center">
                                                                <span
                                                                    className="text-left text-[16px] font-semibold text-[#939393] leading-[24px] tracking-[0]">Total
                                                                    Payment</span>
                                                                <span
                                                                    className="text-right text-[16px] font-semibold text-[#9D2326] leading-[24px] tracking-[0]">Rs.{cart_list?.filter(item => item?.product?.current_stock > 0)?.reduce((total, item) => total + item?.total_price, 0) - (coupanResponse?.discount_amount || 0) + 0}/-</span>
                                                            </div>
                                                            <div className="gi-pay-desc text-[#777] text-[14px] font-light leading-[24px] mb-[15px] block tracking-[0]">
                                                                Please select the preferred payment method to use on this order.</div>
                                                            <div className="gi-check-order-btn flex flex-end p-[0] mb-0 mt-5">
                                                                 <Razor_Pay Price={afterDiscountPrice + 0}
                                                                    onPaymentSuccess={handlePaymentSuccess}
                                                                    buttonContent="Place Order" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )
            }

        </div>
    )
}

export default Order_Place