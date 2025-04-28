import React, { useState, useEffect } from 'react'
import Header from '../../common/header/Header'
import Home_Private_Confidential from '../home_page_components/home_private_confidential/Home_Private_Confidential'
import Footer from '../../common/footer/Footer'
import Common_Images_Transport from '../../common/common_imges_transport/Common_Images_Transport'
import { User_Authentication } from '../../../user_authentication/User_Authentication'
import { Get_Cart_List, Remove_Cart_List, Update_Cart_List } from '../../../api/category_product/Category_Product'
import Loader from '../../../loader/Loader'
import { IMG_BASE_URL } from '../../../config/Config'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Apply_Coupan_Code from './Apply_Coupan_Code'
import Address_List from '../address/Address_List'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartList } from '../../../redux/actions/cartActions'

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [is_loading, set_Is_Loading] = useState(false)
    const [activeShippingAddress, setActiveShippingAddress] = useState(null);
    const [coupanResponse, setCoupanResponse] = useState(null);
    const {cartlist,isloading,error} = useSelector((state)=>state.cartlist);
    const [cart_list, set_Cart_List] = useState(cartlist ||[]);


    const handleCoupanResponse = (response) => {
        setCoupanResponse(response);
    };
    const totalCartPrice = cart_list?.filter((item) => item?.product?.current_stock > 0)?.
        reduce((total, item) => total + item?.qty * item?.product?.purchase_price, 0);
    const afterDiscountPrice = totalCartPrice - (coupanResponse?.discount_amount || 0);

    // Function to handle the active shipping address
    const handleActiveShippingAddress = (addressId) => {
        setActiveShippingAddress(addressId);
    };

     // Sync the local state cart_list with the Redux cartlist when it changes
     useEffect(() => {
        set_Cart_List(cartlist);
    }, [cartlist]);

      // Dispatch Redux action to fetch profile data
      useEffect(() => {
        dispatch(fetchCartList());
    }, [dispatch]);
    
    // <------- Remove Cart List ----------->
    const Handle_Remove_Cart_List = async (cart_id) => {
        try {
            const token = User_Authentication();
            if (!token) {
                set_Is_Loading(false);
                throw new Error("User token not found");
            }
            const data = {
                cart_id: cart_id
            }
            const response = await Remove_Cart_List(data, { Authorization: `Bearer ${token}` })
            if (response?.data?.status == "200") {
                set_Cart_List((prevList) => prevList?.filter(item => item.id !== cart_id));
                window.location.reload()
            }
            console.log("response", response)
        } catch (error) {
            console.log("error", error)
        }
    }

    // <------- Update Cart List -------------->
    const Handle_Update_Cart_list = async (cart_id, newQty, energization, certificate) => {
        const cartItem = cart_list?.find(item => item.id === cart_id);
        const maxStock = cartItem?.product?.current_stock;
        if (newQty > maxStock) {
            toast.error(`Current stocks only ${maxStock} items.`);
            return;
        }
        if (newQty <= 0) {
            Handle_Remove_Cart_List(cart_id);
            return;
        }
        const totalPrice = cartItem?.product?.purchase_price * newQty; // Recalculate the total price
        const update_data = {
            cart_id,
            quantity: newQty,
            energization,
            certificate,
            total_price: totalPrice,
        };
        try {
            const token = User_Authentication();
            if (!token) {
                throw new Error("User token not found");
            }
            const response = await Update_Cart_List(update_data, { Authorization: `Bearer ${token}` });
            if (response?.data?.status == "200") {
                set_Cart_List(prevList =>
                    prevList?.map(item =>
                        item.id === cart_id ? { ...item, qty: newQty, total_price: totalPrice } : item
                    )
                );
            } else {
                toast.error('Failed to update cart');
            }
        } catch (error) {
            toast.error('Error updating cart');
        }
    };
    return (
        <div>
            {/* <-------- Header section's  ---------> */}
            <Header />
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            {
                isloading ? (
                    <Loader />
                ) : (
                    <>
                        <div class="gi-breadcrumb mb-[40px] bg-center bg-no-repeat bg-cover"
                            style={{
                                backgroundImage: `url(${Common_Images_Transport?.product_bg})`,
                            }}>
                            <div
                                class="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
                                <div class="flex flex-wrap w-full">
                                    <div class="w-full px-[12px]">
                                        <div class="flex flex-wrap m-0 py-[35px]">
                                            <div class="min-[768px]:w-[50%] w-full">
                                                <h2
                                                    class="gi-breadcrumb-title text-white block text-3xl leading-[22px] font-semibold my-[0] mx-auto capitalize max-[767px]:mb-[5px] max-[767px]:text-center">Shopping Cart</h2>
                                                <ul class="gi-breadcrumb-list mt-5">
                                                    <li
                                                        class="gi-breadcrumb-item inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize">
                                                        <a href="index.html" class="relative text-white"><i
                                                            class="fi-rr-home text-[#fff]"></i> Home</a>
                                                    </li>
                                                    <li
                                                        class="gi-breadcrumb-item inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize">
                                                        <span class="relative text-white">/ Shopping Cart</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <------- Address section's -----------> */}
                        {
                            cart_list?.length > 0 ? (
                                <>
                                    {
                                        cart_list && (
                                            <section className="gi-cart-section py-[40px] max-[767px]:py-[30px]">
                                                <h2 className="hidden">Cart Page</h2>
                                                <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
                                                    <div className="flex flex-wrap w-full">
                                                        <div className="gi-cart-leftside min-[992px]:w-[66.66%] w-full px-[12px] max-[991px]:mt-[30px]">
                                                            <Address_List  // Pass the address list (or any other required props)
                                                                onActiveShippingAddressChange={handleActiveShippingAddress} />
                                                            {/* <!-- cart content Start --> */}
                                                            {
                                                                cart_list?.map((cart_list_result) => {
                                                                    return (
                                                                        <div className="gi-product-content mt-5 shadow-xl p-5">
                                                                            <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex w-full gap-6 overflow-hidden ">
                                                                                <div className="gi-pro-image overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px] w-[180px] text-center">
                                                                                    <a href="#" className="image relative block overflow-hidden pointer-events-none transition-all duration-[0.3s] ease-in-out">
                                                                                        <img className="main-image m-auto max-w-full z-[1] transition-all duration-[0.3s] ease delay-[0s]"
                                                                                            width="130" height="130" src={`${IMG_BASE_URL}${cart_list_result?.product?.single_image?.image_url}`} alt="Product" />
                                                                                    </a>
                                                                                </div>
                                                                                <div className="gi-pro-content relative z-[10] text-left w-full">
                                                                                    <a href="#">
                                                                                        <h3
                                                                                            className="gi-pro-stitle mb-[10px] font-bold text-[#000] text-[20px] capitalize  tracking-[0.01rem] leading-[1.2]">
                                                                                            {cart_list_result?.product?.name}</h3>
                                                                                    </a>
                                                                                    <div className="flex gap-3">
                                                                                        <div>
                                                                                            <p className="text-[#A6A6A6] font-normal text-sm mt-1">Rs.<span className="text-[#0F1726]">{cart_list_result?.product?.purchase_price}</span></p>
                                                                                            <p className="text-[#A6A6A6] font-normal text-sm mt-1">color:<span className="text-[#0F1726]"> {cart_list_result?.product?.color?.name}</span></p>
                                                                                            <p className="text-[#A6A6A6] font-normal text-sm mt-1">Certification: <span className="text-[#0F1726]">{cart_list_result?.product?.certificate?.name}</span></p>
                                                                                            <p className="text-[#A6A6A6] font-normal text-sm mt-1">SKU: <span className="text-[#0F1726]">{cart_list_result?.product?.sku}</span></p>
                                                                                            <p className="text-[#A6A6A6] font-normal text-sm mt-1">Select for: <span className="text-[#0F1726]">{cart_list_result?.producttype?.name}</span></p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p className="text-[#A6A6A6] font-normal text-sm mt-1">Origin: <span className="text-[#0F1726]">{cart_list_result?.product?.origin?.name}</span></p>
                                                                                            <p className="text-[#A6A6A6] font-normal text-sm mt-1">Pooja/Energization: <span className="text-[#0F1726]">{cart_list_result?.energization?.name}</span></p>
                                                                                            <p className="text-[#A6A6A6] font-normal text-sm mt-1">Shape: <span className="text-[#0F1726]">{cart_list_result?.product?.shape?.name}</span></p>
                                                                                            <p className="text-[#A6A6A6] font-normal text-sm mt-1">size: <span className="text-[#0F1726]">{cart_list_result?.product?.size?.name}</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="gi-single-qty flex flex-wrap w-full gap-3 w-full mt-4 items-center">
                                                                                        <div className="font-medium text-[#000]">Qty</div>
                                                                                        <div
                                                                                            className="qty-plus-minus w-[120px] h-[40px] p-[10px] border-[1px] border-solid border-[#eee] overflow-hidden m-[5px] relative
                                                                                             flex items-center justify-between rounded-[5px]">
                                                                                            <div className="dec gi-qtybtn" onClick={() => Handle_Update_Cart_list(cart_list_result?.id, cart_list_result?.qty - 1, cart_list_result?.energization?.id, cart_list_result?.certificate)}>-</div>
                                                                                            <input className="qty-input w-8 text-center" type="text" name="ms_qtybtn" value={cart_list_result?.qty} />
                                                                                            <div className="inc gi-qtybtn" onClick={() => Handle_Update_Cart_list(cart_list_result?.id, cart_list_result?.qty + 1, cart_list_result?.energization?.id, cart_list_result?.certificate)}>+</div>
                                                                                        </div>

                                                                                        {/* <------ Total Price of the One products ------------> */}
                                                                                        <div className="gi-single-cart text-[#9F2225] text-lg font-medium">
                                                                                            Rs.{cart_list_result?.qty * cart_list_result?.product?.purchase_price}
                                                                                        </div>
                                                                                        {
                                                                                            cart_list_result?.product?.current_stock > 0 ? (
                                                                                                <div className="text-lg text-green-500 ml-2">
                                                                                                    ({cart_list_result?.product?.current_stock} IN STOCK)
                                                                                                </div>
                                                                                            ) : (
                                                                                                <div className="text-lg text-red-500 ml-2">
                                                                                                    (OUT OF STOCK)
                                                                                                </div>
                                                                                            )
                                                                                        }

                                                                                        {/* <----------- Remove the Add To Cart Product's ------------> */}
                                                                                        <div className="gi-single-cart text-[#9F2225] text-lg font-medium absolute right-0" onClick={() => Handle_Remove_Cart_List(cart_list_result?.id)}>
                                                                                            <i className="fi-rr-trash mr-2"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                            {/* <!--cart content End --> */}
                                                        </div>
                                                        <div className="gi-cart-rightside min-[992px]:w-[33.33%] w-full px-[12px] mt-4">
                                                            <Apply_Coupan_Code onCoupanApply={handleCoupanResponse} />
                                                            <div className="gi-sidebar-wrap p-[15px] shadow-xl mb-[0]">
                                                                <div className="gi-sidebar-block">
                                                                    <div className="gi-sb-block-content mb-[0] border-b-[0] mt-[15px]">
                                                                        <div className="gi-cart-summary-bottom">
                                                                            <div className="gi-cart-summary">
                                                                                <h4 className="font-bold text-lg text-black mb-4">Cart Totals</h4>
                                                                                <div className="flex justify-between items-center mb-[10px]">
                                                                                    <span className="text-left text-[#4b5966] text-[14px] leading-[24px] tracking-[0]">Price</span>
                                                                                    <span className="text-right text-[#9D2326] text-[14px] leading-[24px] font-medium">
                                                                                        Rs.{cart_list?.filter((item) => item?.product?.current_stock > 0)?.reduce((total, item) => total + (item?.qty * item?.product?.purchase_price), 0)}/-
                                                                                    </span>
                                                                                </div>
                                                                                {
                                                                                    coupanResponse?.discount_amount && (
                                                                                        <div className="flex justify-between items-center mb-[10px]">
                                                                                            <span className="text-left text-[#4b5966] text-[14px] leading-[24px] tracking-[0]">Discount: </span>
                                                                                            <span className="text-right text-[#9D2326] text-[14px] leading-[24px] font-medium">
                                                                                                Rs.{coupanResponse?.discount_amount}/-
                                                                                            </span>
                                                                                        </div>
                                                                                    )
                                                                                }
                                                                                {coupanResponse?.discount_amount && (
                                                                                    <div className="flex justify-between items-center mb-[10px]">
                                                                                        <span className="text-left text-[#4b5966] text-[14px] leading-[24px] tracking-[0]">
                                                                                            After Discount:
                                                                                        </span>
                                                                                        <span className="text-right text-[#9D2326] text-[14px] leading-[24px] font-medium">
                                                                                            Rs.{afterDiscountPrice}/-
                                                                                        </span>
                                                                                    </div>
                                                                                )}
                                                                                {/* Shipping Fee (this can be a static value or dynamic based on certain conditions) */}
                                                                                <div className="flex justify-between items-center mb-[10px]">
                                                                                    <span className="text-left text-[#4b5966] text-[14px] leading-[24px] tracking-[0]">Shipping</span>
                                                                                    <span className="text-right text-[#9D2326] text-[14px] leading-[24px] font-medium">Rs.00.00/-</span>
                                                                                </div>
                                                                                {/* Total Payment including the shipping fee */}
                                                                                <div className="gi-cart-summary-total border-t-[1px] border-solid border-[#eee] pt-[19px] mb-[0] mt-[16px] flex justify-between items-center">
                                                                                    <span className="text-left text-[16px] font-semibold text-[#939393] leading-[24px] tracking-[0]">
                                                                                        Total Payment
                                                                                    </span>
                                                                                    <span className="text-right text-[16px] font-semibold text-[#9D2326] leading-[24px] tracking-[0]">
                                                                                        Rs.{cart_list?.filter(item => item?.product?.current_stock > 0)?.reduce((total, item) => total + item?.total_price, 0) - (coupanResponse?.discount_amount || 0) + 0}/-
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="button" onClick={() => {
                                                                if (!activeShippingAddress) {
                                                                    toast("Please add a shipping address before proceeding.");
                                                                    return;
                                                                }
                                                                navigate("/order-place", {
                                                                    state: {
                                                                        cart_list: cart_list,
                                                                        coupanResponse: coupanResponse,
                                                                        activeShippingAddress: activeShippingAddress
                                                                    }
                                                                });
                                                            }} className="gi-btn-3 w-full text-center mt-5 transition-all duration-[0.3s] ease-in-out overflow-hidden
                                                             text-center relative rounded-[5px] py-[10px] max-[767px]:py-[6px] px-[15px] max-[767px]:px-[10px]
                                                              bg-[#9F2225] text-[#fff] border-[0] text-[15px] max-[767px]:text-[13px] tracking-[0] font-medium 
                                                              items-center hover:bg-[#4b5966] hover:text-[#fff]">Checkout</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        )
                                    }
                                </>
                            ) : (
                                <div className="flex items-center justify-center h-screen">
                                    <h3 className="text-center text-[#777] text-lg">
                                        Your cart is currently empty. Start exploring our products and add your favorites to the cart!
                                    </h3>
                                </div>
                            )
                        }
                        {/* <---------- Home_Private_Confidential -------> */}
                        <Home_Private_Confidential />
                        {/* <-------- Footer section's ----------> */}
                        <Footer />
                    </>
                )
            }
        </div>
    )
}

export default Cart