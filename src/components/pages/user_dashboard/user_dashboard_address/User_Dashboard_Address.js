import React, { useEffect, useState } from 'react'
import Header from '../../../common/header/Header'
import Footer from '../../../common/footer/Footer'
import User_Dashbaord_Common_Section from '../user_dashboard_common_section/User_Dashbaord_Common_Section'
import { Link } from 'react-router-dom'
import { Shipping_Address } from '../../../../api/category_product/Category_Product'
import { User_Authentication } from '../../../../user_authentication/User_Authentication'
import Loader from '../../../../loader/Loader'

const User_Dashboard_Address = () => {
  const [is_loading, set_Is_Loading] = useState(false);
  const [address_list, set_address_list] = useState([]);

  // <----------- Shipping_Address -------------->
  useEffect(() => {
    const Handle_Shipping_Address = async () => {
      set_Is_Loading(true)
      try {
        const token = User_Authentication();
        if (!token) {
          set_Is_Loading(false);
          throw new Error("User token not found");
        }
        const response = await Shipping_Address({ Authorization: `Bearer ${token}` })
        if (response?.data?.status == "200") {
          set_Is_Loading(false)
          set_address_list(response?.data?.data?.shipping_addresses);
        }
        else if (response?.response?.data?.status == "500") {
          set_Is_Loading(false)
        }
      } catch (error) {
        set_Is_Loading(false)
      }
    }
    Handle_Shipping_Address();
  }, [])


  return (
    <div>
      {/* <-------- Header section's -------------> */}
      <Header />
      {/* <-------- User Dashbaord Address section's -----------> */}
      {
        is_loading ? (
          <Loader />
        ) : (
          <>
            <div className="bg-[#f8f8f8] py-8">
              <div
                className=" mx-auto min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                <div className="myaccount-section w-full">
                  <div className="container-x mx-auto">
                    <div className="w-full my-10">
                      <div className="w-full bg-white shadow-xl p-5">
                        <div className="my_account w-full flex space-x-10">
                          <User_Dashbaord_Common_Section />
                          <div className="flex-1">
                            <div className="max-sm:p-5">
                              <h1 className="font-bold text-[24px] text-qblack mb-4">Address
                              </h1>
                              <div className="flex-wrap flex sm:mb-6 mb-2">

                                {
                                  address_list?.length > 0 && address_list?.map((address_list_result) => {
                                    return (
                                      <div className="md:w-1/2 w-full mb-7.5">
                                        <div className="mr-3">
                                          <div className="p-5 shadow-xl rounded-t-lg">
                                            <h6 className="mb-3 text-lg font-semibold">Billing address</h6>
                                            <ul className="text-sm text-[#A6A6A6]">
                                              <ul className="text-sm text-[#A6A6A6]">
                                                <li className="mb-2"><strong>Name: </strong>{address_list_result?.name}</li>
                                                <li className="mb-2"><strong>Address: </strong>{address_list_result?.address}</li>
                                                <li className="mb-2"><strong>Landmark: </strong>{address_list_result?.landmark} <strong>pin_code: </strong>{address_list_result?.pin_code}</li>
                                              </ul>
                                            </ul>
                                          </div>
                                          {/* <div className="flex border-t-0 rounded-b-lg bg-gray-100 p-3 px-5">
                                            <a href="#" className="block mr-4 hover:text-primary"><i className="fi-rs-edit mr-2"></i> Edit</a>
                                            <a href="javascript:void(0);" className="block mr-4 hover:text-primary"><i className="fi-rr-trash mr-2"></i> Remove</a>
                                          </div> */}
                                        </div>
                                      </div>
                                    )
                                  })
                                }
                              </div>
                              {/* <div className="h-[50px] mt-4"><Link to="/user_add_new_address"
                                className="danger-btn rounded btn hover:bg-gray-500 text-white p-3 px-5 bg-[#9F2225]">Add New Address</Link>
                                </div> */}
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
          </>
        )
      }

    </div>
  )
}

export default User_Dashboard_Address