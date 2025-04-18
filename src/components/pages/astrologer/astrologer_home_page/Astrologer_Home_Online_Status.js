import React, { useEffect, useState } from 'react'
import { User_Authentication } from '../../../../user_authentication/User_Authentication'
import { Astro_Permission_Update, get_astro_dashboard } from '../../../../api/astrologer/Astrologer'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'

const Astrologer_Home_Online_Status = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [is_boost_profile, set_Boost_Profile] = useState("0")
    const [astrologer_dashboard, set_Astrologer_Dashboard] = useState([])
    console.log("astrologer_dashboard",astrologer_dashboard)
    const [is_chat, set_Is_Chat] = useState(() => { return localStorage.getItem("is_chat") ? JSON.parse(localStorage.getItem("is_chat")) : 0 });
    const [is_call, set_Is_Call] = useState(() => { return localStorage.getItem("is_call") ? JSON.parse(localStorage.getItem("is_call")) : 0 })
    const [is_video_call, set_Is_Video_Call] = useState(() => { return localStorage.getItem("is_video_call") ? JSON.parse(localStorage.getItem("is_video_call")) : 0 })
    const [is_emergency_chat, set_Is_Emergency_Chat] = useState(() => { return localStorage.getItem("is_emergency_chat") ? JSON.parse(localStorage.getItem("is_emergency_chat")) : 0 })
    const [is_emergency_call, set_Is_Emergency_Call] = useState(() => { return localStorage.getItem("is_emergency_call") ? JSON.parse(localStorage.getItem("is_emergency_call")) : 0 })
    const [is_emergency_video_call, set_Is_Emergency_Video_Call] = useState(() => { return localStorage.getItem("is_emergency_video_call") ? JSON.parse(localStorage.getItem("is_emergency_video_call")) : 0 })


    const Handle_chat_toggle = () => set_Is_Chat((prev) => (prev === 1 ? 0 : 1));
    const Handle_call_toggle = () => set_Is_Call((prev) => (prev === 1 ? 0 : 1));
    const Handle_Video_Call_toggle = () => set_Is_Video_Call((prev) => (prev === 1 ? 0 : 1));
    const Handle_Emergency_Audio_Call = () => set_Is_Emergency_Call((prev) => (prev === 1 ? 0 : 1));
    const Handle_Emergency_Call_toggle = () => set_Is_Emergency_Call((prev) => (prev === 1 ? 0 : 1));
    const Handle_Emergency_Video_Call_toggle = () => set_Is_Emergency_Video_Call((prev) => (prev === 1 ? 0 : 1));

    // Function to fetch API data
    const Handle_get_astro_dashboard = async () => {
        try {
            const token = User_Authentication();
            if (!token) {
                setIsLoading(false);
                throw new Error("User token not found");
            }
            const response = await get_astro_dashboard({ Authorization: `Bearer ${token}` });

            if (response?.data?.status == "200") {
                const astroData = response?.data?.data?.astro_profile;
                console.log("astroData", astroData)
                set_Astrologer_Dashboard(response?.data?.data?.astro_profile?.astro_amounts)
                // Update state
                set_Is_Chat(astroData?.is_chat || 0);
                set_Is_Call(astroData?.is_call || 0);
                set_Is_Video_Call(astroData?.is_video_call || 0);
                set_Is_Emergency_Chat(astroData?.is_emergency_chat || 0);
                set_Is_Emergency_Call(astroData?.is_emergency_call || 0);
                set_Is_Emergency_Video_Call(astroData?.is_emergency_video_call || 0);

                // Store in localStorage
                localStorage.setItem("is_chat", JSON.stringify(astroData?.is_chat || 0));
                localStorage.setItem("is_call", JSON.stringify(astroData?.is_call || 0));
                localStorage.setItem("is_video_call", JSON.stringify(astroData?.is_video_call || 0));
                localStorage.setItem("is_emergency_chat", JSON.stringify(astroData?.is_emergency_chat || 0));
                localStorage.setItem("is_emergency_call", JSON.stringify(astroData?.is_emergency_call || 0));
                localStorage.setItem("is_emergency_video_call", JSON.stringify(astroData?.is_emergency_video_call || 0));
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // <----- handle astro permission update ----------->
    const handle_astro_permission_update = async () => {
        const formData = new FormData();
        formData.append("is_chat", is_chat);
        formData.append("is_call", is_call);
        formData.append("is_video_call", is_video_call);
        formData.append("is_emergency_chat", is_emergency_chat);
        formData.append("is_emergency_call", is_emergency_call);
        formData.append("is_emergency_video_call", is_emergency_video_call);

        try {
            const token = User_Authentication();
            if (!token) {
                setIsLoading(false);
                throw new Error("User token not found");
            }
            const response = await Astro_Permission_Update(formData, { Authorization: `Bearer ${token}` });
            if (response?.data?.status == "200") {
                Handle_get_astro_dashboard();
            }
            localStorage.setItem("is_chat", JSON.stringify(is_chat)); // Save updated value
            localStorage.setItem("is_call", JSON.stringify(is_call)); // Save updated value
            localStorage.setItem("is_video_call", JSON.stringify(is_video_call)); // Save updated value
            localStorage.setItem("is_emergency_chat", JSON.stringify(is_emergency_chat)); // Save updated value
            localStorage.setItem("is_emergency_call", JSON.stringify(is_emergency_call)); // Save updated value
            localStorage.setItem("is_emergency_video_call", JSON.stringify(is_emergency_video_call)); // Save updated value
        } catch (error) {
            console.log("Error updating:", error);
        }
    };

    // Fetch data on component mount
    useEffect(() => {
        Handle_get_astro_dashboard();
    }, []);

    // <------- Auto-update API when any toggle changes --------->
    useEffect(() => {
        handle_astro_permission_update();
    }, [is_chat, is_call, is_video_call, is_emergency_chat, is_emergency_call, is_emergency_video_call]);

    return (
        <div>
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
                                                    <h5 className="text-[16px] text-[#0F1726] font-medium">Indian: Rs.{astrologer_dashboard?.chat_rate}</h5>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-sm bg-gray-100 px-5 rounded-full py-1">10 Nov. 24, 10:00 AM</span>
                                            </td>
                                            <td>
                                                <div>
                                                    <label className="inline-flex items-center cursor-pointer">
                                                        {/* Toggle Checkbox */}
                                                        <input
                                                            type="checkbox"
                                                            checked={is_chat == 1}
                                                            onChange={Handle_chat_toggle}
                                                            className="sr-only peer"
                                                        />
                                                        <div
                                                            className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                            peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer 
                            dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                            peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                            after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                            after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                                                        ></div>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>
                                                    <span className="text-sm text-gray-400">Audio Call</span>
                                                    <h5 className="text-[16px] text-[#0F1726] font-medium">indian:Rs.{astrologer_dashboard?.audio_call_rate}</h5>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-sm bg-gray-100 px-5 rounded-full py-1">10 Nov.24,
                                                    10:00Am</span>
                                            </td>
                                            <td>
                                                <div>

                                                    <label className="inline-flex items-center cursor-pointer">
                                                        <input type="checkbox" checked={is_call == 1}
                                                            onChange={Handle_call_toggle} className="sr-only peer" />
                                                        <div
                                                            className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                            rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full 
                                                            rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
                                                            after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border 
                                                            after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                                        </div>
                                                    </label>

                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>
                                                    <span className="text-sm text-gray-400">Video Call</span>
                                                    <h5 className="text-[16px] text-[#0F1726] font-medium">indian:Rs.{astrologer_dashboard?.video_call_rate}</h5>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-sm bg-gray-100 px-5 rounded-full py-1">10 Nov.24,
                                                    10:00Am</span>
                                            </td>
                                            <td>
                                                <div>

                                                    <label className="inline-flex items-center cursor-pointer">
                                                        <input type="checkbox" checked={is_video_call == 1}
                                                            onChange={Handle_Video_Call_toggle} className="sr-only peer" />
                                                        <div
                                                            className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                                            peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-200 
                                                            peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                                                            peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                                                            after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
                                                            after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                                        </div>
                                                    </label>

                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>
                                                    <span className="text-sm text-gray-400">Emergency Audio Call</span>
                                                    <h5 className="text-[16px] text-[#0F1726] font-medium">indian:Rs.{astrologer_dashboard?.emergency_audio_call_rate}</h5>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-sm px-5 rounded-full py-1">Used : 00</span>
                                            </td>
                                            <td>
                                                <div>

                                                    <label className="inline-flex items-center cursor-pointer">
                                                        <input type="checkbox" checked={is_emergency_call == 1}
                                                            onChange={Handle_Emergency_Audio_Call} className="sr-only peer" />
                                                        <div
                                                            className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                                            peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-200 
                                                            peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white
                                                             after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300
                                                              after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 
                                                              peer-checked:bg-blue-600">
                                                        </div>
                                                    </label>

                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>
                                                    <span className="text-sm text-gray-400">Emergency Video Call</span>
                                                    <h5 className="text-[16px] text-[#0F1726] font-medium">indian:Rs.{astrologer_dashboard?.emergency_video_call_rate}</h5>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-sm  px-5 rounded-full py-1">Total :200</span>
                                            </td>
                                            <td>
                                                <div>

                                                    <label className="inline-flex items-center cursor-pointer">
                                                        <input type="checkbox" checked={is_emergency_video_call == 1}
                                                            onChange={Handle_Emergency_Video_Call_toggle} className="sr-only peer" />
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
                                                    <li className={`${is_boost_profile == "0" ? "active" : null}`} onClick={() => set_Boost_Profile("0")}>
                                                        <p>
                                                            Auto Boost Profile
                                                        </p>
                                                    </li>
                                                    <li className={`${is_boost_profile == "1" ? "active" : null}`} onClick={() => set_Boost_Profile("1")}>
                                                        <p>
                                                            Boost History
                                                        </p>
                                                    </li>
                                                    <li className={`${is_boost_profile == "2" ? "active" : null}`} onClick={() => set_Boost_Profile("2")}>
                                                        <p>
                                                            Info
                                                        </p>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div id="gi-spt-nav-details" className="tab-single-pane inline-block w-full">
                                                <div className="gi-single-pro-tab-desc">
                                                    <div className="grid-cols-3 grid gap-3">
                                                        <div className="bg-white py-5 text-center">
                                                            <img src={Common_Images_Transport?.call_icon} className="m-auto" alt="" />
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
                                                            <img src={Common_Images_Transport?.chat_icon} className="m-auto" alt="" />
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
                                            {/* <div id="gi-spt-nav-info" className="tab-single-pane">
                                                <div className="gi-single-pro-tab-moreinfo">
                                                    4546465
                                                </div>
                                            </div> */}
                                            {/* <div id="info" className="tab-single-pane">
                                                <div className="gi-single-pro-tab-moreinfo">
                                                    dsdf
                                                </div>
                                            </div> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Astrologer_Home_Online_Status
