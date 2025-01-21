import React, { useEffect, useState } from 'react'
import { Get_Cart_List, Remove_Cart_List } from '../../../api/category_product/Category_Product';
import { User_Authentication } from '../../../user_authentication/User_Authentication';
import { IMG_BASE_URL } from '../../../config/Config';
import Loader from '../../../loader/Loader';
import { Link } from 'react-router-dom';

const Cart_Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [is_loading, set_Is_Loading] = useState(false)
    const [cart_list, set_Cart_List] = useState([]);

    useEffect(() => {
        const Handle_Get_Cart_List = async () => {
            try {
                const token = User_Authentication();
                if (!token) {
                    set_Is_Loading(false);
                    throw new Error("User token not found");
                }
                const response = await Get_Cart_List({ Authorization: `Bearer ${token}` })
                set_Cart_List(response?.data?.data?.cartlist)
            } catch (error) {
            }
        }
        Handle_Get_Cart_List();
    }, [])

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
            }
            console.log("response", response)
        } catch (error) {
            console.log("error", error)
        }
    }
    // Calculate subtotal using reduce()
    const subtotal = cart_list?.reduce((total, cart_list_result) => {
        return total + (cart_list_result?.product?.purchase_price || 0);
    }, 0);
    console.log("sfddsgfdfg", cart_list)
    const toggleOffcanvas = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <>
                        {/* Button to open offcanvas */}
                        <div className='flex gap-2' onClick={toggleOffcanvas}>
                            <i className="fi-rr-shopping-bag text-[#fff] text-[18px] leading-[17px]"></i>
                            <button className="gi-header-btn gi-cart-toggle transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966]
                                 w-[auto] items-center whitespace-nowrap text-[#fff]" ></button>
                        </div>
                        {/* Overlay */}
                        <div
                            className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                            onClick={toggleOffcanvas}></div>
                        {/* Offcanvas Sidebar */}
                        <div
                            className={`fixed top-0 right-0 w-96 h-full bg-white shadow-lg z-50 p-0 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                            <div className="flex flex-col h-full">
                                <div className='flex justify-between p-4 items-center'>
                                    <h2 className="text-xl font-semibold  text-black">My Cart</h2>
                                    <button
                                        onClick={toggleOffcanvas}
                                        className="self-end text-gray-600 hover:text-gray-900">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                {/* Offcanvas Content */}
                                {
                                    cart_list?.length > 0 ? (
                                        <>
                                            <ul className="gi-cart-pro-items bg-[#F6F6F6] p-[20px]">
                                                {
                                                    cart_list?.map((cart_list_result) => {
                                                        return (
                                                            <li
                                                                className="mb-[15px] p-[15px] flex overflow-hidden bg-white rounded-[5px]">
                                                                <a className="gi-pro-img flex grow-[1] basis-[20%] items-center"><img
                                                                    src={`${IMG_BASE_URL}${cart_list_result?.product?.single_image?.image_url}`} className="w-full" alt="product" /></a>
                                                                <div className="gi-pro-content relative grow-[1] basis-[70%] pl-[15px] overflow-hidden">
                                                                    <a className="cart-pro-title w-full font-bold pr-[30px] text-[#000] whitespace-normal text-ellipsis block text-[16px] leading-[18px] font-normal">{cart_list_result?.product?.name}</a>
                                                                    <p
                                                                        className="text-[#939292] text-[15px] leading-5 my-3 overflow-hidden whitespace-nowrap text-ellipsis"
                                                                    >
                                                                        {cart_list_result?.product?.short_description}
                                                                    </p>
                                                                    <span className="cart-price text-[#000] font-bold text-[14px] block mt-[5px]">Rs.{cart_list_result?.product?.purchase_price}</span>

                                                                    <a onClick={() => Handle_Remove_Cart_List(cart_list_result?.id)}
                                                                        className="remove leading-[15px] absolute bottom-[0] right-[0] pl-[10px] text-[#9F2225] text-[14px]">Remove</a>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <div className="gi-cart-bottom bg-white w-full fixed bottom-0 p-3 items-center justify-between">
                                                <div
                                                    className="cart-sub-total flex w-full flex-wrap justify-between pt-[15px] pb-[8px]">
                                                    <table className="table cart-table w-full">
                                                        <tbody className="mt-[10px]">
                                                            <tr>
                                                                <td className="text-left font-medium text-[#777] p-[6px]">Subtotal :</td>
                                                                <td className="text-right font-bold text-[#777] primary-color p-[6px]">
                                                                    Rs.{subtotal}/-
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex items-center justify-center h-screen">
                                                <h3 className="text-center text-[#777] text-lg">
                                                    Your cart is currently empty.
                                                </h3>
                                            </div>
                                        </>
                                    )
                                }
                                <div className="cart_btn flex p-[3px] w-full justify-between mb-[20px]">
                                    <Link to="/cart" onClick={()=>setIsOpen(false)}
                                        className="gi-btn-1 w-[100%]  h-[40px] block uppercase font-medium text-[14px] py-[8px] px-[15px] leading-[22px] bg-[#4b5966] text-[#fff] border-[0] transition-all duration-[0.3s] ease-in-out overflow-hidden text-center relative rounded-[5px] hover:bg-[#9F2225] hover:text-[#fff]">View
                                        Cart</Link>
                                    {/* <Link to="/order_place"
                                        className="gi-btn-2 w-[48%] h-[40px] block uppercase font-medium text-[14px] py-[8px] px-[15px] leading-[22px]
                                         bg-[#9F2225] text-[#fff] text-center rounded-[5px] transition-all dummy-[0.3s] ease-in-out hover:bg-[#4b5966]">Checkout</Link> */}
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div >
    )
}

export default Cart_Sidebar