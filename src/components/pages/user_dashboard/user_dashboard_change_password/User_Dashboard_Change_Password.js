import React from 'react'
import Header from '../../../common/header/Header'
import User_Dashbaord_Common_Section from '../user_dashboard_common_section/User_Dashbaord_Common_Section'

const User_Dashboard_Change_Password = () => {
  return (
    <div>
      {/* <--------- Header section's -------------> */}
      <Header/>
      {/* <--------- user Dashboard change password section's ------------> */}
      <div className="bg-[#f8f8f8] py-8">
        <div
            className=" mx-auto min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="myaccount-section w-full">
                <div className="container-x mx-auto">
                    <div className="w-full my-10">

                        <div className="w-full bg-white shadow-xl p-5">

                            <div className="my_account w-full flex space-x-10">
                               <User_Dashbaord_Common_Section/>
                                <div className="flex-1">
                                    <div className="changePasswordTab w-full">
                                        <div className="space">
                                            <h1 className="font-bold text-[24px] text-qblack mb-4">Change Password
                                            </h1>
                                            <div className="input-field mb-6"><label
                                                    className="input-label text-gray-400 hover:text-gray-900 text-sm block mb-2.5"
                                                    for="old_password">Old Password*</label>
                                                <div
                                                    className="input-wrapper border border-qgray-border w-full overflow-hidden relative ">
                                                    <input placeholder="● ● ● ● ● ●"
                                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                        type="password" id="old_password"/>
                                                    <div className="absolute right-6 bottom-[17px] z-10 cursor-pointer">
                                                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.5483 16.3524C20.156 15.9557 19.7696 15.5605 19.3802 15.1683C18.7802 14.5653 18.1787 13.9638 17.5728 13.3667C17.4972 13.2911 17.4871 13.2388 17.5379 13.1415C19.3482 9.66037 17.2125 5.46008 13.3332 4.87747C12.1143 4.69441 10.9534 4.89636 9.85791 5.46299C9.78672 5.49931 9.73587 5.53563 9.65596 5.45572C8.88157 4.67262 8.10136 3.89678 7.32261 3.11803C7.30082 3.09624 7.28338 3.07154 7.24561 3.0265C7.5667 2.90591 7.8689 2.78387 8.17837 2.67926C10.0758 2.03563 12.0242 1.83513 14.0132 2.05161C18.879 2.58337 23.1752 5.85381 24.9768 10.3926C25 10.4522 25.0073 10.5379 24.9826 10.596C24.0484 12.8916 22.5955 14.792 20.6282 16.2986C20.6137 16.3117 20.5963 16.3219 20.5483 16.3524Z"
                                                                fill="#797979"></path>
                                                            <path
                                                                d="M4.44163 4.65918C4.91528 5.13573 5.3773 5.6021 5.84222 6.06703C6.36962 6.59442 6.89703 7.12327 7.42733 7.64776C7.49853 7.7175 7.51015 7.7669 7.4622 7.85989C5.81462 11.0228 7.40118 14.873 10.801 15.9336C12.2829 16.3956 13.7271 16.2576 15.1161 15.5573C15.1626 15.534 15.2076 15.5093 15.2468 15.489C16.0735 16.3186 16.893 17.1424 17.724 17.9778C17.6862 17.9952 17.6383 18.0199 17.5874 18.0403C15.5069 18.8844 13.3493 19.1909 11.1162 18.9657C6.18511 18.4674 1.87 15.2275 0.02773 10.6364C0.000124928 10.5666 -0.0114982 10.4693 0.0146539 10.4039C0.941602 8.12286 2.38433 6.23411 4.33557 4.73328C4.36317 4.71003 4.39514 4.69114 4.44163 4.65918Z"
                                                                fill="#797979"></path>
                                                            <path
                                                                d="M2.04297 1.0577C2.36406 0.732254 2.72292 0.370486 3.09051 0C9.71717 6.64695 16.3482 13.2968 22.9749 19.9438C22.645 20.2721 22.2833 20.631 21.9128 21C15.2905 14.3531 8.66237 7.70174 2.04297 1.0577Z"
                                                                fill="#797979"></path>
                                                            <path
                                                                d="M13.5471 13.7324C12.655 14.071 11.1164 14.0158 10.0093 12.8433C9.16664 11.9512 8.80197 10.3283 9.27125 9.46387C10.698 10.8877 12.116 12.3028 13.5471 13.7324Z"
                                                                fill="#797979"></path>
                                                            <path
                                                                d="M11.519 7.24656C12.3123 6.80779 13.9425 7.17247 14.8389 8.01369C16.0172 9.11933 16.071 10.6638 15.7528 11.4933C14.342 10.0797 12.9269 8.66022 11.519 7.24656Z"
                                                                fill="#797979"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-field mb-6"><label
                                                    className="input-label text-gray-400 hover:text-gray-900 text-sm block mb-2.5"
                                                    for="old_password">Password*</label>
                                                <div
                                                    className="input-wrapper border border-qgray-border w-full overflow-hidden relative ">
                                                    <input placeholder="● ● ● ● ● ●"
                                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                        type="password" id="new_password"/>
                                                    <div className="absolute right-6 bottom-[17px] z-10 cursor-pointer">
                                                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.5483 16.3524C20.156 15.9557 19.7696 15.5605 19.3802 15.1683C18.7802 14.5653 18.1787 13.9638 17.5728 13.3667C17.4972 13.2911 17.4871 13.2388 17.5379 13.1415C19.3482 9.66037 17.2125 5.46008 13.3332 4.87747C12.1143 4.69441 10.9534 4.89636 9.85791 5.46299C9.78672 5.49931 9.73587 5.53563 9.65596 5.45572C8.88157 4.67262 8.10136 3.89678 7.32261 3.11803C7.30082 3.09624 7.28338 3.07154 7.24561 3.0265C7.5667 2.90591 7.8689 2.78387 8.17837 2.67926C10.0758 2.03563 12.0242 1.83513 14.0132 2.05161C18.879 2.58337 23.1752 5.85381 24.9768 10.3926C25 10.4522 25.0073 10.5379 24.9826 10.596C24.0484 12.8916 22.5955 14.792 20.6282 16.2986C20.6137 16.3117 20.5963 16.3219 20.5483 16.3524Z"
                                                                fill="#797979"></path>
                                                            <path
                                                                d="M4.44163 4.65918C4.91528 5.13573 5.3773 5.6021 5.84222 6.06703C6.36962 6.59442 6.89703 7.12327 7.42733 7.64776C7.49853 7.7175 7.51015 7.7669 7.4622 7.85989C5.81462 11.0228 7.40118 14.873 10.801 15.9336C12.2829 16.3956 13.7271 16.2576 15.1161 15.5573C15.1626 15.534 15.2076 15.5093 15.2468 15.489C16.0735 16.3186 16.893 17.1424 17.724 17.9778C17.6862 17.9952 17.6383 18.0199 17.5874 18.0403C15.5069 18.8844 13.3493 19.1909 11.1162 18.9657C6.18511 18.4674 1.87 15.2275 0.02773 10.6364C0.000124928 10.5666 -0.0114982 10.4693 0.0146539 10.4039C0.941602 8.12286 2.38433 6.23411 4.33557 4.73328C4.36317 4.71003 4.39514 4.69114 4.44163 4.65918Z"
                                                                fill="#797979"></path>
                                                            <path
                                                                d="M2.04297 1.0577C2.36406 0.732254 2.72292 0.370486 3.09051 0C9.71717 6.64695 16.3482 13.2968 22.9749 19.9438C22.645 20.2721 22.2833 20.631 21.9128 21C15.2905 14.3531 8.66237 7.70174 2.04297 1.0577Z"
                                                                fill="#797979"></path>
                                                            <path
                                                                d="M13.5471 13.7324C12.655 14.071 11.1164 14.0158 10.0093 12.8433C9.16664 11.9512 8.80197 10.3283 9.27125 9.46387C10.698 10.8877 12.116 12.3028 13.5471 13.7324Z"
                                                                fill="#797979"></path>
                                                            <path
                                                                d="M11.519 7.24656C12.3123 6.80779 13.9425 7.17247 14.8389 8.01369C16.0172 9.11933 16.071 10.6638 15.7528 11.4933C14.342 10.0797 12.9269 8.66022 11.519 7.24656Z"
                                                                fill="#797979"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-field mb-6"><label
                                                    className="input-label text-gray-400 hover:text-gray-900 text-sm block mb-2.5"
                                                    for="old_password">Re-enter Password*</label>
                                                <div
                                                    className="input-wrapper border border-qgray-border w-full overflow-hidden relative ">
                                                    <input placeholder="● ● ● ● ● ●"
                                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                                        type="password" id="confirm_password"/>
                                                    <div className="absolute right-6 bottom-[17px] z-10 cursor-pointer">
                                                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.5483 16.3524C20.156 15.9557 19.7696 15.5605 19.3802 15.1683C18.7802 14.5653 18.1787 13.9638 17.5728 13.3667C17.4972 13.2911 17.4871 13.2388 17.5379 13.1415C19.3482 9.66037 17.2125 5.46008 13.3332 4.87747C12.1143 4.69441 10.9534 4.89636 9.85791 5.46299C9.78672 5.49931 9.73587 5.53563 9.65596 5.45572C8.88157 4.67262 8.10136 3.89678 7.32261 3.11803C7.30082 3.09624 7.28338 3.07154 7.24561 3.0265C7.5667 2.90591 7.8689 2.78387 8.17837 2.67926C10.0758 2.03563 12.0242 1.83513 14.0132 2.05161C18.879 2.58337 23.1752 5.85381 24.9768 10.3926C25 10.4522 25.0073 10.5379 24.9826 10.596C24.0484 12.8916 22.5955 14.792 20.6282 16.2986C20.6137 16.3117 20.5963 16.3219 20.5483 16.3524Z"
                                                                fill="#797979"></path>
                                                            <path
                                                                d="M4.44163 4.65918C4.91528 5.13573 5.3773 5.6021 5.84222 6.06703C6.36962 6.59442 6.89703 7.12327 7.42733 7.64776C7.49853 7.7175 7.51015 7.7669 7.4622 7.85989C5.81462 11.0228 7.40118 14.873 10.801 15.9336C12.2829 16.3956 13.7271 16.2576 15.1161 15.5573C15.1626 15.534 15.2076 15.5093 15.2468 15.489C16.0735 16.3186 16.893 17.1424 17.724 17.9778C17.6862 17.9952 17.6383 18.0199 17.5874 18.0403C15.5069 18.8844 13.3493 19.1909 11.1162 18.9657C6.18511 18.4674 1.87 15.2275 0.02773 10.6364C0.000124928 10.5666 -0.0114982 10.4693 0.0146539 10.4039C0.941602 8.12286 2.38433 6.23411 4.33557 4.73328C4.36317 4.71003 4.39514 4.69114 4.44163 4.65918Z"
                                                                fill="#797979"></path>
                                                            <path
                                                                d="M2.04297 1.0577C2.36406 0.732254 2.72292 0.370486 3.09051 0C9.71717 6.64695 16.3482 13.2968 22.9749 19.9438C22.645 20.2721 22.2833 20.631 21.9128 21C15.2905 14.3531 8.66237 7.70174 2.04297 1.0577Z"
                                                                fill="#797979"></path>
                                                            <path
                                                                d="M13.5471 13.7324C12.655 14.071 11.1164 14.0158 10.0093 12.8433C9.16664 11.9512 8.80197 10.3283 9.27125 9.46387C10.698 10.8877 12.116 12.3028 13.5471 13.7324Z"
                                                                fill="#797979"></path>
                                                            <path
                                                                d="M11.519 7.24656C12.3123 6.80779 13.9425 7.17247 14.8389 8.01369C16.0172 9.11933 16.071 10.6638 15.7528 11.4933C14.342 10.0797 12.9269 8.66022 11.519 7.24656Z"
                                                                fill="#797979"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full mt-[30px] flex justify-start">
                                                <div className="sm:flex sm:space-x-[10px] items-center">
                                                    <a href="#"
                                                        className="danger-btn rounded btn text-sm hover:bg-gray-500 text-white p-3 px-5 bg-[#9F2225]">Update
                                                        Password</a>
                                                    <a href="#"
                                                        className="danger-btn rounded btn text-sm hover:bg-gray-500 text-white p-3 px-5 bg-gray-600 ">Cancel</a>
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
    </div>
    </div>
  )
}

export default User_Dashboard_Change_Password