import React, { useState } from 'react'
import Footer from '../../../common/footer/Footer'
import Header from '../../../common/header/Header'
import User_Dashbaord_Common_Section from '../user_dashboard_common_section/User_Dashbaord_Common_Section'
import { useNavigate } from 'react-router-dom'

const User_Dashboard_Logout = () => {
  const navigate = useNavigate()
  const [is_Open_logout, set_Is_Open_logout] = useState(true);

// <---------- Open the Logout Modal ----------->
  const Handle_Is_Open_logout = () => {
    set_Is_Open_logout(!is_Open_logout);
  };
 
  // <-------- Handle the Logout Functionlity ---------->
  const Handle_User_logout = ()=>{
    localStorage.clear();
    setTimeout(()=>{
      navigate("/")
    })
  }
  return (
    <div>
      {/* <--------- Header section's ------------> */}
      <Header />
      {/* <----------- Dashboard Order list here -----------> */}
      <div className="bg-[#f8f8f8] py-8">
        <div
          className=" mx-auto min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="myaccount-section w-full">
            <div className="container-x mx-auto">
              <div className="w-full my-10">

                <div className="w-full bg-white shadow-xl p-5">

                  <div className="my_account w-full flex space-x-10">
                    <User_Dashbaord_Common_Section />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <--------- logout modal section's -----------> */}
      {
        is_Open_logout && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
            {/* <!-- Modal Content --> */}
            <div className="bg-white rounded-lg shadow-lg max-w-md">
              {/* <!-- Modal Header --> */}
              <div className="flex justify-between items-center p-3">
                <h2 className="text-lg m-0 font-semibold text-gray-800">Logout User</h2>
                <button className="text-[#9F2225] hover:text-gray-800 text-[25px]" onClick={Handle_Is_Open_logout}>
                  &times;</button>
              </div>

              {/* <!-- Modal Body --> */}
              <div className="text-gray-700">
                <h3 className='p-5'>Are you sure you want to log out?</h3>
                <div className="w-full mt-[30px] flex justify-start">
                  <div className="sm:flex sm:space-x-[10px] items-center p-5">
                    <a href="#"
                      className="danger-btn rounded btn text-sm hover:bg-gray-500 text-white p-3 px-5 bg-[#9F2225]" onClick={Handle_User_logout}>Logout
                    </a>
                    <a href="#"
                      className="danger-btn rounded btn text-sm hover:bg-gray-500 text-white p-3 px-5 bg-gray-600 "
                      onClick={() => {
                        Handle_Is_Open_logout()
                        setTimeout(() => {
                          navigate("/user-dashBaord")
                        }, 500)
                      }}>Cancel</a>
                  </div>
                </div>
              </div>


            </div>
          </div>
        )
      }

      {/* <-------- footer section's --------------> */}
      <Footer />
    </div>
  )
}

export default User_Dashboard_Logout