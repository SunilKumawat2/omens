import React from 'react'
import Astrologer_after_Login_Header from '../astrologer_after_login_header/Astrologer_after_Login_Header'
import Astrologer_Home_Call_History from './Astrologer_Home_Call_History'
import Astrologer_Home_Chat_History from './Astrologer_Home_Chat_History'
import Astrologer_Suggested_Remedies from './Astrologer_Suggested_Remedies'
import Astrologer_Wait_List from './Astrologer_Wait_List'
import Astrologer_Footer from '../astrologer_footer/Astrologer_Footer'

const Astrologer_Home_Page = () => {
    return (
        <div>
            {/*  */}
            <Astrologer_after_Login_Header/>
            <div>
                <div
                    className="flex flex-wrap bg-[#EFE9E0] py-4 justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] mt-4 px-2">
                    <div className="flex flex-wrap w-full">
                        <div
                            className="min-[992px]:w-[50%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] max-[575px]:w-[50%] max-[575px]:mx-auto grid_call_chat">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-3">
                                    <img src="https://via.placeholder.com/60" alt="Profile"
                                        className="w-16 h-16 rounded-full border" />
                                    <div>
                                        <button
                                            className="bg-red-600 btn-sm text-white py-1 px-4 rounded-md hover:bg-red-700">Upload</button>
                                        <h5 className="gi-pro-stitle font-normal text-[#3B4959] text-[20px] font-semibold">
                                            Upload Cover Photo</h5>
                                    </div>
                                </div>
                                <a href="#"
                                    className="whitespace-nowrap inline-block text-[#9D2326] hover:text-white hover:bg-gray-900 rounded-full text-sm px-5 py-1 text-center mt-2 border border-1 border-[#9D2326]">Awaiting
                                    Approval</a>
                            </div>
                        </div>
                        <div
                            className="min-[992px]:w-[50%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] max-[575px]:w-[50%] max-[575px]:mx-auto grid_call_chat border-l-2 border-[#D4D4D4]">
                            <p className="text-gray-600 mt-2 text-sm">
                                We Are introduction a new design to present astrologers profile to our users. Astrologers who
                                don't upload a cover photo will not be shown to new customers.
                            </p>
                        </div>
                    </div>
                    {/* <!-- Profile Image and Upload Button --> */}
                </div>
            </div>

            <section className="gi-deal-section py-[40px] max-[767px]:py-[30px] bg-no-repeat bg-cover wow fadeInUp"
                data-wow-duration="2s">
                <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
                        <div className="gi-deal-section w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <table className="table table-fixed text-left border border-gray-100 table-border">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="font-medium p-3">Type</th>
                                            <th className="font-medium p-3">Next Online Time</th>
                                            <th className="font-medium p-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div>
                                                    <span className="text-sm text-gray-400">Chat</span>
                                                    <h5 className="text-[16px] text-[#0F1726] font-medium">indian:Rs.10:00</h5>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-sm bg-gray-100 px-5 rounded-full py-1">10 Nov.24,
                                                    10:00Am</span>
                                            </td>
                                            <td>
                                                <div>
                                                    <label className="inline-flex items-center cursor-pointer">
                                                        <input type="checkbox" value="" className="sr-only peer" />
                                                        <div
                                                            className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                                        </div>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>
                                                    <span className="text-sm text-gray-400">Call</span>
                                                    <h5 className="text-[16px] text-[#0F1726] font-medium">indian:Rs.10:00</h5>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-sm bg-gray-100 px-5 rounded-full py-1">10 Nov.24,
                                                    10:00Am</span>
                                            </td>
                                            <td>
                                                <div>

                                                    <label className="inline-flex items-center cursor-pointer">
                                                        <input type="checkbox" value="" className="sr-only peer" />
                                                        <div
                                                            className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                                        </div>
                                                    </label>

                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>
                                                    <span className="text-sm text-gray-400">Video Call</span>
                                                    <h5 className="text-[16px] text-[#0F1726] font-medium">indian:Rs.10:00</h5>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-sm bg-gray-100 px-5 rounded-full py-1">10 Nov.24,
                                                    10:00Am</span>
                                            </td>
                                            <td>
                                                <div>

                                                    <label className="inline-flex items-center cursor-pointer">
                                                        <input type="checkbox" value="" className="sr-only peer" />
                                                        <div
                                                            className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                                        </div>
                                                    </label>

                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>
                                                    <span className="text-sm text-gray-400">Emergency Chat</span>
                                                    <h5 className="text-[16px] text-[#0F1726] font-medium">indian:Rs.10:00</h5>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-sm px-5 rounded-full py-1">Used : 00</span>
                                            </td>
                                            <td>
                                                <div>

                                                    <label className="inline-flex items-center cursor-pointer">
                                                        <input type="checkbox" value="" className="sr-only peer" />
                                                        <div
                                                            className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                                        </div>
                                                    </label>

                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>
                                                    <span className="text-sm text-gray-400">Emergency Call</span>
                                                    <h5 className="text-[16px] text-[#0F1726] font-medium">indian:Rs.10:00</h5>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-sm  px-5 rounded-full py-1">Total :200</span>
                                            </td>
                                            <td>
                                                <div>

                                                    <label className="inline-flex items-center cursor-pointer">
                                                        <input type="checkbox" value="" className="sr-only peer" />
                                                        <div
                                                            className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                                        </div>
                                                    </label>

                                                </div>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>

                                <div className="w-full order-1 md:order-2 lg:order-2 mb-5 md:mb-0">
                                    <div className="bg-gray-100 p-5">
                                        <h5 className="font-semibold text-lg">Boost Profile</h5>
                                        <div className="tab-content" id="singleTabContent">
                                            <div
                                                className="gi-single-pro-tab-nav w-full m-auto relative block text-center float-left">
                                                <ul className="nav-tabs gap-3 my-4 inline-block flex justify-between autoboostprofile w-full"
                                                    id="singleprotab">
                                                    <li className="active">
                                                        <a href="#gi-spt-nav-details">
                                                            Auto Boost Profile
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#gi-spt-nav-info">
                                                            Boost History
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#info">
                                                            Info
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div id="gi-spt-nav-details" className="tab-single-pane inline-block w-full">
                                                <div className="gi-single-pro-tab-desc">
                                                    <div className="grid-cols-3 grid gap-3">
                                                        <div className="bg-white py-5 text-center">
                                                            <img src="../assets/img/icons/call-icon.png" className="m-auto" alt="" />
                                                            <h2 className="text-md font-bold my-4">Call</h2>
                                                            <div>
                                                                <label className="inline-flex items-center cursor-pointer">
                                                                    <input type="checkbox" value="" className="sr-only peer" />
                                                                    <div
                                                                        className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="bg-white py-5 text-center">
                                                            <img src="../assets/img/icons/chat-icon.png" className="m-auto" alt="" />
                                                            <h2 className="text-md font-bold my-4">Chat</h2>
                                                            <div>
                                                                <label className="inline-flex items-center cursor-pointer">
                                                                    <input type="checkbox" value="" className="sr-only peer" />
                                                                    <div
                                                                        className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="bg-white py-5 text-center">
                                                            <img src="../assets/img/icons/report-icon.png" className="m-auto"
                                                                alt="" />
                                                            <h2 className="text-md font-bold my-4">Report</h2>
                                                            <div>
                                                                <label className="inline-flex items-center cursor-pointer">
                                                                    <input type="checkbox" value="" className="sr-only peer" />
                                                                    <div
                                                                        className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="gi-spt-nav-info" className="tab-single-pane">
                                                <div className="gi-single-pro-tab-moreinfo">
                                                    4546465
                                                </div>
                                            </div>
                                            <div id="info" className="tab-single-pane">
                                                <div className="gi-single-pro-tab-moreinfo">
                                                    dsdf
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

            {/* <!-- Calling History --> */}
          <Astrologer_Home_Call_History/>
          
            {/* <!-- Chat History --> */}
           <Astrologer_Home_Chat_History/>
           
            {/* <!-- Suggested Remedies --> */}
            <Astrologer_Suggested_Remedies/>

            {/* <!-- Suggested Remedies --> */}
           <Astrologer_Wait_List/>
           {/*  */}
           <Astrologer_Footer/>
        </div>
    )
}

export default Astrologer_Home_Page