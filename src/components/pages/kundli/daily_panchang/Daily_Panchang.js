import React, { useEffect, useState } from 'react'
import Header from '../../../common/header/Header'
import Kundli_Main_Banner from '../kundli_main_bannner/Kundli_Main_Banner'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import Kundli_Common_Section from '../kundli_common_section/Kundli_Common_Section'
import Kundli_Faq from '../kundli_faq/Kundli_Faq'
import Home_Private_Confidential from '../../home_page_components/home_private_confidential/Home_Private_Confidential'
import Footer from '../../../common/footer/Footer'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Daily_Panchang = () => {
    const [panchangform, setPanchangeForm] = useState({
        location: "",
        date: ""
    })

    const handlePanchangeChange = (e) => {
        const { name, value } = e.target;
        setPanchangeForm({
            ...panchangform,
            [name]: value
        })
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (!panchangform.location) {
            toast("Please enter your location ")
            return;
        }
        if (!panchangform.date) {
            toast("Please select the panchang date")
            return;
        }
        console.log("panchangform",panchangform)
        try {

        } catch (error) {

        }

    }
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div>
            {/* <----------- Header section's --------------> */}
            <Header />
            {/* <------------Kundli Main Banner ------------> */}
            <Kundli_Main_Banner />
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            <section className="gi-category py-[40px] max-[767px]:py-[30px] bg-[#F0F4F8]">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">


                    <div className="kundli_form w-full mt-6">
                        <div className="flex flex-wrap w-full">
                            <div
                                className="min-[992px]:w-[66.33%] flex min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full max-[575px]:w-[50%] max-[575px]:mx-auto pr-6">
                                <div className="bg-white w-full">
                                    <div className="p-4 border-b">
                                        <h4 className="mb-1 text-lg font-semibold text-[#3B4959]">Panchang</h4>
                                        <p className="text-gray-400">Generate panchang using Ayanamsa, place, date</p>
                                    </div>
                                    <form accept="#" method="post" onSubmit={HandleSubmit}>
                                        <div className="py-5 pl-6 pr-6">
                                            <div className="input-grid flex space-x-2.5 mb-6">
                                                <div className="w-4/5 h-full">
                                                    <div className="input-com "><label
                                                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Location</label>
                                                        <div
                                                            className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                            <input placeholder="Location" value={panchangform.location} name='location'
                                                                onChange={handlePanchangeChange}
                                                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[45px]"
                                                                type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 h-full">
                                                    <div className="input-com ">
                                                        <label
                                                            className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Date</label>
                                                        <div
                                                            className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                            <input placeholder="Location" value={panchangform.date} name='date'
                                                                onChange={handlePanchangeChange}
                                                                className="input-field w-full placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[45px]"
                                                                type="Date" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 h-full mt-auto">
                                                    <div className="input-com ">
                                                        <button type="submit"
                                                            className="w-[100%] h-[45px] bg-[#9F2225] text-white text-sm">Get Result</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div
                                className="bg-white min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full max-[575px]:w-[50%] max-[575px]:mx-auto">
                                <img src={Common_Images_Transport?.panchange2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* <----------- Kundli_Common_Section -------------->  */}
            <Kundli_Common_Section />
            {/* <----------- Kundli Faq -------------------->*/}
            <Kundli_Faq />
            {/* <------------ Home Private Confidential ------->*/}
            <Home_Private_Confidential />
            {/* <-------- Footer section's ----------> */}
            <Footer />
        </div>
    )
}

export default Daily_Panchang