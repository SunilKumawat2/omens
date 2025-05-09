import React, { useEffect, useState } from 'react'
import User_Dashbaord_Common_Section from '../user_dashboard_common_section/User_Dashbaord_Common_Section'
import Header from '../../../common/header/Header'
import Footer from '../../../common/footer/Footer'
import { web_user_dashboard } from '../../../../api/category_product/Category_Product'
import { User_Authentication } from '../../../../user_authentication/User_Authentication'

const User_DashBaord_DashBoard = () => {
    const [user_dashboard_details, set_User_Dashbaord_Details] = useState({})
    const [is_loading, set_Is_Loading] = useState(false)

    useEffect(() => {
        const Get_web_user_dashboard = async () => {
            set_Is_Loading(true)
            try {
                const token = User_Authentication();
                if (!token) {
                    set_Is_Loading(false);
                    throw new Error("User token not found");
                }
                const response = await web_user_dashboard({ Authorization: `Bearer ${token}` })
                if (response?.data?.status == "200") {
                    set_Is_Loading(false)
                    set_User_Dashbaord_Details(response?.data?.data)
                }
                else if (response?.data?.status == "500") {
                    set_Is_Loading(false)
                }

            }
            catch (error) {
                set_Is_Loading(false)
            }
        }
        Get_web_user_dashboard();
    }, [])
    return (
        <div>
            {/* <---------- Header section's -----------> */}
            <Header />
            {/* <------------- User Dashbaord Common Profile section's ----------> */}
            <div className="bg-[#f8f8f8] py-8">
                <div
                    className=" mx-auto min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="myaccount-section w-full">
                        <div className="container-x mx-auto">
                            <div className="w-full my-10">
                                <div className="w-full bg-white shadow-xl p-5">
                                    <div className="my_account w-full md:flex md:space-x-10">
                                        <User_Dashbaord_Common_Section />
                                        
                                        <div className="flex-1 md:w-[70%]">
                                            <div className="item-body w-full">
                                                <div className="welcome-msg w-full">
                                                    <div>
                                                        <h1 className="font-bold text-[24px] text-qblack">Dashboard</h1>
                                                    </div>
                                                </div>
                                                <div className="w-full gap-3 md:flex space-y-5 md:space-y-0 justify-between items-center mt-3 ">
                                                    <div
                                                        className="w-full transition-all duration-300 ease-in-out p-3 md:p-6 bg-gray-100">
                                                        <div
                                                            className="w-[62px] h-[62px] rounded bg-white flex justify-center items-center">
                                                            <span><svg width="36" height="37" viewBox="0 0 36 37" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M32.4473 8.03086C32.482 8.37876 32.5 8.73144 32.5 9.08829C32.5 14.919 27.7564 19.6625 21.9258 19.6625C16.0951 19.6625 11.3516 14.919 11.3516 9.08829C11.3516 8.73144 11.3695 8.37876 11.4042 8.03086H8.98055L8.05537 0.628906H0.777344V2.74375H6.18839L8.56759 21.7774H34.1868L35.8039 8.03086H32.4473Z"
                                                                    fill="#9F2225"></path>
                                                                <path
                                                                    d="M9.09669 26.0074H6.06485C4.31566 26.0074 2.89258 27.4305 2.89258 29.1797C2.89258 30.9289 4.31566 32.352 6.06485 32.352H6.24672C6.12935 32.6829 6.06485 33.0386 6.06485 33.4094C6.06485 35.1586 7.48793 36.5816 9.23711 36.5816C11.4247 36.5816 12.9571 34.4091 12.2274 32.352H22.1081C21.377 34.413 22.9157 36.5816 25.0985 36.5816C26.8476 36.5816 28.2707 35.1586 28.2707 33.4094C28.2707 33.0386 28.2061 32.6829 28.0888 32.352H30.3856V30.2371H6.06485C5.48178 30.2371 5.00742 29.7628 5.00742 29.1797C5.00742 28.5966 5.48178 28.1223 6.06485 28.1223H33.4407L33.9384 23.8926H8.83233L9.09669 26.0074Z"
                                                                    fill="#9F2225"></path>
                                                                <path
                                                                    d="M21.9262 17.5477C26.5907 17.5477 30.3856 13.7528 30.3856 9.08829C30.3856 4.42378 26.5907 0.628906 21.9262 0.628906C17.2616 0.628906 13.4668 4.42378 13.4668 9.08829C13.4668 13.7528 17.2617 17.5477 21.9262 17.5477ZM20.8688 5.91602H22.9836V8.6503L24.7886 10.4554L23.2932 11.9508L20.8687 9.5262V5.91602H20.8688Z"
                                                                    fill="#9F2225"></path>
                                                            </svg></span>
                                                        </div>
                                                        <p className="text-md mt-5">New
                                                            Orders
                                                        </p>
                                                        <span className="text-2xl font-bold mt-1 block">{user_dashboard_details?.new_orders}</span>
                                                    </div>
                                                    <div
                                                        className="w-full transition-all duration-300 ease-in-out p-3 md:p-6 bg-gray-100">
                                                        <div
                                                            className="w-[62px] h-[62px] rounded bg-white flex justify-center items-center">
                                                            <span><svg width="36" height="37" viewBox="0 0 36 37" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M32.4473 8.03086C32.482 8.37876 32.5 8.73144 32.5 9.08829C32.5 14.919 27.7564 19.6625 21.9258 19.6625C16.0951 19.6625 11.3516 14.919 11.3516 9.08829C11.3516 8.73144 11.3695 8.37876 11.4042 8.03086H8.98055L8.05537 0.628906H0.777344V2.74375H6.18839L8.56759 21.7774H34.1868L35.8039 8.03086H32.4473Z"
                                                                    fill="#9F2225"></path>
                                                                <path
                                                                    d="M9.09669 26.0074H6.06485C4.31566 26.0074 2.89258 27.4305 2.89258 29.1797C2.89258 30.9289 4.31566 32.352 6.06485 32.352H6.24672C6.12935 32.6829 6.06485 33.0386 6.06485 33.4094C6.06485 35.1586 7.48793 36.5816 9.23711 36.5816C11.4247 36.5816 12.9571 34.4091 12.2274 32.352H22.1081C21.377 34.413 22.9157 36.5816 25.0985 36.5816C26.8476 36.5816 28.2707 35.1586 28.2707 33.4094C28.2707 33.0386 28.2061 32.6829 28.0888 32.352H30.3856V30.2371H6.06485C5.48178 30.2371 5.00742 29.7628 5.00742 29.1797C5.00742 28.5966 5.48178 28.1223 6.06485 28.1223H33.4407L33.9384 23.8926H8.83233L9.09669 26.0074Z"
                                                                    fill="#9F2225"></path>
                                                                <path
                                                                    d="M21.9262 17.5477C26.5907 17.5477 30.3856 13.7528 30.3856 9.08829C30.3856 4.42378 26.5907 0.628906 21.9262 0.628906C17.2616 0.628906 13.4668 4.42378 13.4668 9.08829C13.4668 13.7528 17.2617 17.5477 21.9262 17.5477ZM20.8688 5.91602H22.9836V8.6503L24.7886 10.4554L23.2932 11.9508L20.8687 9.5262V5.91602H20.8688Z"
                                                                    fill="#9F2225"></path>
                                                            </svg></span>
                                                        </div>
                                                        <p className="text-md mt-5">Total Cart
                                                        </p>
                                                        <span className="text-2xl font-bold mt-1 block">{user_dashboard_details?.carts}</span>

                                                    </div>
                                                    <div
                                                        className="w-full transition-all duration-300 ease-in-out p-3 md:p-6 bg-gray-100">
                                                        <div
                                                            className="w-[62px] h-[62px] rounded bg-white flex justify-center items-center">
                                                            <span><svg width="27" height="31" viewBox="0 0 27 31" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M9.79749 18.4331C6.71621 20.0289 5.95627 20.8019 4.64859 23.6816C3.76653 22.8387 2.90107 22.0123 2.00953 21.1599C2.5288 20.3146 3.03267 19.4942 3.53535 18.6726C3.88035 18.1071 3.46066 17.0579 2.82282 16.899C1.88623 16.6666 0.94845 16.4426 0 16.2114C0 14.4034 0 12.6274 0 10.7827C0.921182 10.561 1.85422 10.3405 2.78489 10.1117C3.46777 9.94331 3.8922 8.90476 3.52705 8.30605C3.03385 7.49868 2.5371 6.6925 2.06051 5.91596C3.35514 4.62014 4.62251 3.35396 5.92426 2.05339C6.70673 2.53355 7.52832 3.03978 8.35347 3.54246C8.88698 3.8673 9.94331 3.44524 10.0927 2.84416C10.3262 1.90638 10.5491 0.965048 10.7839 0C12.5883 0 14.3785 0 16.2197 0C16.4366 0.906955 16.6548 1.8234 16.8777 2.73865C17.0555 3.46777 18.0763 3.89694 18.7082 3.50926C19.5144 3.01489 20.3182 2.52051 21.0829 2.05102C22.3763 3.34447 23.6318 4.59998 24.943 5.9124C24.4783 6.67235 23.9756 7.49038 23.4753 8.31079C23.1114 8.90713 23.5405 9.93976 24.2258 10.1081C25.1434 10.3334 26.0646 10.5503 27 10.7756C27 12.5954 27 14.3892 27 16.2197C26.1298 16.426 25.2667 16.6287 24.4048 16.8338C23.4658 17.0579 23.0651 18.0122 23.5654 18.8267C24.029 19.5819 24.4914 20.3383 24.9727 21.122C24.1487 22.004 23.3473 22.8612 22.4901 23.7776C21.5393 21.1741 19.8297 19.4243 17.3163 18.4592C20.5565 15.5332 19.8558 11.4668 17.659 9.41099C15.2973 7.19992 11.5995 7.26157 9.31378 9.56393C7.15368 11.7406 6.71858 15.6885 9.79749 18.4331Z"
                                                                    fill="#9F2225"></path>
                                                                <path
                                                                    d="M21.0695 30.3147C16.0415 30.3147 11.0847 30.3147 6.03891 30.3147C6.03891 29.9768 6.03416 29.6496 6.04009 29.3224C6.06262 28.0396 5.97963 26.7426 6.13612 25.4752C6.53566 22.2576 9.12611 19.9244 12.3722 19.8213C13.5886 19.7821 14.8417 19.7762 16.0249 20.0169C18.8643 20.5954 20.8916 23.0258 21.0552 25.9364C21.1359 27.3709 21.0695 28.8138 21.0695 30.3147Z"
                                                                    fill="#9F2225"></path>
                                                                <path
                                                                    d="M13.5375 17.9235C11.2244 17.9093 9.35005 16.0112 9.38325 13.7195C9.41763 11.4124 11.3169 9.55701 13.6157 9.58428C15.8849 9.61036 17.7486 11.5013 17.7403 13.7693C17.7332 16.0752 15.8481 17.9378 13.5375 17.9235Z"
                                                                    fill="#9F2225"></path>
                                                            </svg></span>
                                                        </div>
                                                        <p className="text-md mt-5">Total Wishlist
                                                        </p>
                                                        <span className="text-2xl font-bold mt-1 block">{user_dashboard_details?.wishlists}</span>
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
            </div>
            {/* <------------ Footer section's ------------> */}
            <Footer />
        </div>
    )
}

export default User_DashBaord_DashBoard