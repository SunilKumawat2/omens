import React, { useState } from 'react'
import Header from '../../../common/header/Header'
import Kundli_Main_Banner from '../kundli_main_bannner/Kundli_Main_Banner'
import Kundli_Common_Section from '../kundli_common_section/Kundli_Common_Section'
import Kundli_Faq from '../kundli_faq/Kundli_Faq'
import Home_Private_Confidential from '../../home_page_components/home_private_confidential/Home_Private_Confidential'
import Footer from '../../../common/footer/Footer'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import Horoscope from '../horoscope/Horoscope'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Love_Calculator = () => {
  const [love_calculator_form, set_Love_Calculator_Form] = useState({
    name: "",
    your_gender: "",
    partner_name: "",
    partner_gender: ""
  })

  // <--------------- Love Calculator onchnage section's ----------->
  const HandleLoveCalclatorChange = (e) => {
    const { name, value } = e.target;
    set_Love_Calculator_Form({
      ...love_calculator_form,
      [name]: value
    })
  }

  // <--------------- Submit the Love Calculator Form -------------->
  const HandleSubmitLoveCalculator = (e) => {
    e.preventDefault();
    if (!love_calculator_form.name) {
      toast("please enter your name")
      return;
    }
    else if (!love_calculator_form.your_gender) {
      toast("please select your gender")
      return;
    }
    else if (!love_calculator_form.partner_name) {
      toast("please enter your partner name ")
      return;
    }
    else if (!love_calculator_form.partner_gender) {
      toast("please select your partner's gender ")
      return;
    }
    console.log("HandleSubmitLoveCalculator",love_calculator_form)
    try {

    } catch (error) {

    }
  }
  return (
    <div>
      {/* <----------- Header section's -----------> */}
      <Header />
      {/*  */}
      <Kundli_Main_Banner />

      {/* <-------- ToastContainer ------------> */}
      <ToastContainer style={{ marginTop: "120px" }} />
      <section className="gi-category py-[40px] max-[767px]:py-[30px] bg-[#F0F4F8]">
        <div
          className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">


          <div className="kundli_form w-full mt-6">
            <div className="flex flex-wrap w-full">
              <div
                className="min-[992px]:w-[70%] flex min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full max-[575px]:w-[50%] max-[575px]:mx-auto pr-6">
                <div className="bg-white w-full">
                  <div className="p-4 border-b">
                    <h4 className="mb-1 text-lg font-semibold text-[#3B4959]">Love Calculator</h4>
                    <p className="text-gray-400">Zodiac signs have predestined love matches that are indicated
                      to form highly compatible matches as per astrological resources available on these
                      signs. Water signs get along well with likeminded people and similar is the case
                      with air, fire or earth signs. Opposites attract too! But getting insights into how
                      well you get along with another sign and what to expect in terms of love can be more
                      helpful than you think. </p>
                  </div>
                  <form accept="#" method="post" onSubmit={HandleSubmitLoveCalculator}>
                    <div className="py-5 pl-6 pr-6">
                      <div className="input-grid flex space-x-2.5 mb-6">
                        <div className="w-1/2 h-full">
                          <div className="input-com "><label
                            className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Your
                            Name</label>
                            <div
                              className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                              <input placeholder="Enter Name"
                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal
                                                         bg-white focus:ring-0 focus:outline-none h-[45px]"
                                type="text" value={love_calculator_form.name} name='name' onChange={HandleLoveCalclatorChange} />
                            </div>
                            <div className="flex gap-4 mt-4">
                              <div className="flex items-center">
                                <input id="default-radio-1" type="radio"
                                  value="male" name='your_gender' onChange={HandleLoveCalclatorChange}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
                                                             dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
                                                              dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-radio-1"
                                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">Male</label>
                              </div>
                              <div className="flex items-center">
                                <input  id="default-radio-2" type="radio" value="female" 
                                name='your_gender' onChange={HandleLoveCalclatorChange}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 
                                                            focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800
                                                             focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-radio-2"
                                  className="ms-2 text-sm text-gray-900 dark:text-gray-500">Female</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-1/1 text-center h-full m-auto"><img
                          src={Common_Images_Transport?.love_calendar} className="m-auto" alt="" /></div>
                        <div className="w-1/2 h-full">
                          <div className="input-com ">
                            <label
                              className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Partner's
                              Name</label>
                            <div
                              className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                              <input placeholder="Enter Name"
                                className="input-field w-full placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[45px]"
                                type="text"    value={love_calculator_form.partner_name} name='partner_name' onChange={HandleLoveCalclatorChange} />
                            </div>
                            <div className="flex gap-4 mt-4" id="group1">
                              <div className="flex items-center">
                                <input id="default-radio-3" type="radio"    value="male" name='partner_gender' onChange={HandleLoveCalclatorChange}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-radio-3"
                                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">Male</label>
                              </div>
                              <div className="flex items-center">
                                <input id="default-radio-4" type="radio"    value="female" name='partner_gender'
                                 onChange={HandleLoveCalclatorChange}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-radio-4"
                                  className="ms-2 text-sm text-gray-900 dark:text-gray-500">Female</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input-grid flex space-x-2.5 mb-6">
                        <div className="w-1/2 h-full mt-auto">
                          <div className="input-com ">
                            <button type="submit"
                              className="w-[320px] h-[45px] bg-[#9F2225] text-white text-sm">Calculate
                              Love Percentage</button>
                          </div>
                        </div>


                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="bg-white min-[992px]:w-[30%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full max-[575px]:w-[50%] max-[575px]:mx-auto">
                <img src={Common_Images_Transport?.love_banner} width="100%" alt="" />
              </div>
              <div
                className="w-full mt-12">
                <h5
                  className="gi-pro-stitle border-b border-gray-100 pb-6 font-normal text-[#9F2225] text-2xl font-semibold leading-[1.2] capitalize">
                  Horoscopes</h5>
                <div className="w-full grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-6">
                  {/* <---------- Horoscope ---------------> */}
                  <Horoscope />

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/*  */}
      <Kundli_Common_Section />
      {/*  */}
      <Kundli_Faq />
      {/*  */}
      <Home_Private_Confidential />
      {/*  */}
      <Footer />
    </div>
  )
}

export default Love_Calculator