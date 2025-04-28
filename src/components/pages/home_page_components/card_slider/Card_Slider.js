import React from 'react'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'

const Card_Slider = () => {
  return (
    <div>
         <div className="gi-side-cart-overlay w-full h-screen fixed top-[0] left-[0] bg-[#000000cc] z-[17] hidden"></div>
    <div id="gi-side-cart"
        className="gi-side-cart w-[400px] max-[480px]:w-[300px] h-full pt-[15px]  text-[14px] font-normal fixed z-[17] top-[0] right-0 left-auto block transition-all duration-[0.5s] ease delay-0 bg-[#fff] overflow-auto">
        <div className="gi-cart-inner relative z-[9] flex flex-col h-full justify-between">
            <div className="gi-cart-top">
                <div className="gi-cart-title w-full flex flex-wrap justify-between px-[20px]">
                    <span className="cart_title text-[15px] text-[#4b5966] font-Poppins font-semibold mb-[20px]"><i
                            className="fi-rr-shopping-bag mr-3 transition-all duration-[0.3s] text-[#9F2225] ease-in-out leading-[0]"></i>
                        My
                        Cart</span>
                    <a href="javascript:void(0)"
                        className="gi-cart-close relative border-[0] text-[30px] leading-[20px] text-[#4b5966]">
                        <i className="fi-rr-cross-small text-[20px] leading-[0]"></i>
                    </a>
                </div>
                <ul className="gi-cart-pro-items bg-[#F6F6F6] p-[20px]">
                    <li className="mb-[15px] p-[15px] flex overflow-hidden bg-white rounded-[5px]">
                        <a href="#" className="gi-pro-img flex grow-[1] basis-[20%] items-center"><img
                                src={Common_Images_Transport?.product_images} className="w-full" alt="product"/></a>
                        <div className="gi-pro-content relative grow-[1] basis-[70%] pl-[15px] overflow-hidden">
                            <a href="#"
                                className="cart-pro-title w-full font-bold pr-[30px] text-[#000] whitespace-normal text-ellipsis block text-[16px] leading-[18px] font-normal">Emerald
                                - 5.81 carats</a>
                            <p
                                className="text-[#A6A6A6] whitespace-normal font-normal text-ellipsis block text-[13px] leading-[18px] font-normal">
                                Natural Blue Sapphire (Heated) weighing 0.16 cara</p>
                            <span className="cart-price text-[#000] font-bold text-[14px] block mt-[5px]">Rs.26,200</span>

                            <a href="javascript:void(0)"
                                className="remove leading-[15px] absolute bottom-[0] right-[0] pl-[10px] text-[#9F2225] text-[14px]">Remove</a>
                        </div>
                    </li>

                    <li className="mb-[15px] p-[15px] flex overflow-hidden bg-white rounded-[5px]">
                        <a href="#" className="gi-pro-img flex grow-[1] basis-[20%] items-center"><img
                                src="assets/img/product-images/03.png" className="w-full" alt="product"/></a>
                        <div className="gi-pro-content relative grow-[1] basis-[70%] pl-[15px] overflow-hidden">
                            <a href="#"
                                className="cart-pro-title w-full font-bold pr-[30px] text-[#000] whitespace-normal text-ellipsis block text-[16px] leading-[18px] font-normal">Emerald
                                - 5.81 carats</a>
                            <p
                                className="text-[#A6A6A6] whitespace-normal font-normal text-ellipsis block text-[13px] leading-[18px] font-normal">
                                Natural Blue Sapphire (Heated) weighing 0.16 cara</p>
                            <span className="cart-price text-[#000] font-bold text-[14px] block mt-[5px]">Rs.26,200</span>

                            <a href="javascript:void(0)"
                                className="remove leading-[15px] absolute bottom-[0] right-[0] pl-[10px] text-[#9F2225] text-[14px]">Remove</a>
                        </div>
                    </li>
                    <li className="mb-[15px] p-[15px] flex overflow-hidden bg-white rounded-[5px]">
                        <a href="#" className="gi-pro-img flex grow-[1] basis-[20%] items-center"><img
                                src="assets/img/product-images/02.png" className="w-full" alt="product"/></a>
                        <div className="gi-pro-content relative grow-[1] basis-[70%] pl-[15px] overflow-hidden">
                            <a href="#"
                                className="cart-pro-title w-full font-bold pr-[30px] text-[#000] whitespace-normal text-ellipsis block text-[16px] leading-[18px] font-normal">Emerald
                                - 5.81 carats</a>
                            <p
                                className="text-[#A6A6A6] whitespace-normal font-normal text-ellipsis block text-[13px] leading-[18px] font-normal">
                                Natural Blue Sapphire (Heated) weighing 0.16 cara</p>
                            <span className="cart-price text-[#000] font-bold text-[14px] block mt-[5px]">Rs.26,200</span>

                            <a href="javascript:void(0)"
                                className="remove leading-[15px] absolute bottom-[0] right-[0] pl-[10px] text-[#9F2225] text-[14px]">Remove</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="gi-cart-bottom px-[20px]">
                <div className="cart-sub-total flex flex-wrap justify-between pt-[15px] pb-[8px]">
                    <table className="table cart-table w-full">
                        <tbody className="mt-[10px]">

                            <tr>
                                <td className="text-left font-medium text-[#777] p-[6px]">Subtotal :</td>
                                <td className="text-right font-bold text-[#777] primary-color p-[6px]">Rs.58000/-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cart_btn flex justify-between mb-[20px]">
                    <a href="cart.html"
                        className="gi-btn-1 w-[48%] h-[40px] block uppercase font-medium text-[14px] py-[8px] px-[15px] leading-[22px] bg-[#4b5966] text-[#fff] border-[0] transition-all duration-[0.3s] ease-in-out overflow-hidden text-center relative rounded-[5px] hover:bg-[#9F2225] hover:text-[#fff]">View
                        Cart</a>
                    <a href="checkout.html"
                        className="gi-btn-2 w-[48%] h-[40px] block uppercase font-medium text-[14px] py-[8px] px-[15px] leading-[22px] bg-[#9F2225] text-[#fff] text-center rounded-[5px] transition-all dummy-[0.3s] ease-in-out hover:bg-[#4b5966]">Checkout</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card_Slider