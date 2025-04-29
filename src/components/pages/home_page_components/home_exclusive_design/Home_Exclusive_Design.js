<<<<<<< HEAD
import React, { useState } from 'react'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'

const Home_Exclusive_Design = () => {
    const [isOpen_Custom_video, set_Is_Open_Custom_Video] = useState(false);


    const Handle_Is_Open_Custom_video = () => {
        set_Is_Open_Custom_Video(!isOpen_Custom_video);
    };
console.log("isOpen_Custom_video",isOpen_Custom_video)

=======
import React, { useEffect, useState } from 'react'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import {Get_Custom_Designs} from '../../../../api/global/Global'
import {IMG_BASE_URL} from '../../../../config/Config'
const Home_Exclusive_Design = () => {
    const [isOpen_Custom_video, set_Is_Open_Custom_Video] = useState(false);
    const [customDesigns, setCustomdesigns] = useState(null)
    const [selectedVideo, setSelectedVideo] = useState(null);

    const Handle_Is_Open_Custom_video = (videoUrl) => {
        set_Is_Open_Custom_Video(!isOpen_Custom_video);
        setSelectedVideo(videoUrl)
    };
console.log("isOpen_Custom_video",isOpen_Custom_video)

useEffect(()=>{
const getcustom_designs= async()=>{
    try {
        const response=await Get_Custom_Designs()
        console.log(response);
        if(response?.data?.status==200){
            setCustomdesigns(response?.data?.data)
        }
        
        console.log("status fail", response);
        

    } catch (error) {
        console.log(error.message);
        
    }
}
getcustom_designs()
},[])
console.log(customDesigns);
console.log(selectedVideo);


>>>>>>> omens_solving_bug_till_29-04-2025_evening
    return (
        <div>
            <section className="gi-deal-section px-5 py-[40px] max-[767px]:py-[30px] wow fadeInUp" data-wow-duration="2s">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
                        <div className="gi-deal-section w-full">
                            <div className="gi-products">
                                <div className="section-title mb-[20px] relative text-center pb-[20px] z-[5]" data-aos="fade-up"
                                    data-aos-duration="2000" data-aos-delay="200">
                                    <div className="section-detail">
                                        <h2
                                            className="gi-title mb-[0] text-[25px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-Poppins max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
                                            Exclusive Custom Designs</h2>
                                        <p className="mt-[10px] text-[14px] text-[#777] leading-[18px]">Artistic Expression in Terms
                                            of Jewellery</p>
                                    </div>

                                </div>
                                <div className="gi-deal-block mx-[-12px]" data-aos="fade-up" data-aos-duration="2000"
                                    data-aos-delay="300">
                                    <div
                                        className="custome_jewellery grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
<<<<<<< HEAD

                                        <div className="gi-products bg-no-repeat text-center bg-cover h-[350px] rounded overflow-hidden"
=======
{
    customDesigns?.map((designs)=>(
        
        <div className="gi-products bg-no-repeat text-center bg-cover h-[350px] rounded overflow-hidden"
        style={{
            backgroundImage: `url(${IMG_BASE_URL}/${designs?.thumbnail_img})`, // Add your image URL here
        }}

    >
        <div
            className="bg-gradient-to-t relative from-[#000] opacity-0 hover:opacity-100 p-5 flags h-full">
            <a onClick={()=>{Handle_Is_Open_Custom_video(`${IMG_BASE_URL}${designs?.video}`)}} href="javascript:void(0)">
                <div
                    className="absolute w-12 rounded-full leading-[52px] h-12 bg-white m-auto left-0 right-0 top-0 bottom-0">
                    <i className="fi-rr-play" ></i>
                </div>
            </a>
            <a href="javascript:void(0)" className="absolute bottom-0 left-0 w-full" >
                <div
                    className=" inset-center text-white mx-4 mb-4 border px-3 text-sm rounded py-2 hover:bg-[#9F2225] hover:border-gray-900">
                    Write to us</div>
            </a>
        </div>
    </div>
    ))
}
                                        {/* <div className="gi-products bg-no-repeat text-center bg-cover h-[350px] rounded overflow-hidden"
>>>>>>> omens_solving_bug_till_29-04-2025_evening
                                            style={{
                                                backgroundImage: `url(${Common_Images_Transport?.custom_designs1})`, // Add your image URL here
                                            }}

                                        >
                                            <div
                                                className="bg-gradient-to-t relative from-[#000] opacity-0 hover:opacity-100 p-5 flags h-full">
                                                <a onClick={Handle_Is_Open_Custom_video} href="javascript:void(0)">
                                                    <div
                                                        className="absolute w-12 rounded-full leading-[52px] h-12 bg-white m-auto left-0 right-0 top-0 bottom-0">
                                                        <i className="fi-rr-play" ></i>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="absolute bottom-0 left-0 w-full" >
                                                    <div
                                                        className=" inset-center text-white mx-4 mb-4 border px-3 text-sm rounded py-2 hover:bg-[#9F2225] hover:border-gray-900">
                                                        Write to us</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gi-products bg-no-repeat text-center bg-cover h-[350px] rounded overflow-hidden"
                                            style={{
                                                backgroundImage: `url(${Common_Images_Transport?.custom_designs2})`, // Add your image URL here
                                            }}
                                        >
                                            <div
                                                className="bg-gradient-to-t relative from-[#000] opacity-0 hover:opacity-100 p-5 flags h-full">
                                                <a onClick={Handle_Is_Open_Custom_video} href="javascript:void(0)">
                                                    <div
                                                        className="absolute w-12 rounded-full leading-[52px] h-12 bg-white m-auto left-0 right-0 top-0 bottom-0">
                                                        <i className="fi-rr-play"></i>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="absolute bottom-0 left-0 w-full" onclick="toggleModal('myModal2')">
                                                    <div
                                                        className=" inset-center text-white mx-4 mb-4 border px-3 text-sm rounded py-2 hover:bg-[#9F2225] hover:border-gray-900">
                                                        Write to us</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gi-products bg-no-repeat text-center bg-cover h-[350px] rounded overflow-hidden"
                                            style={{
                                                backgroundImage: `url(${Common_Images_Transport?.custom_designs3})`, // Add your image URL here
                                            }}
                                        >
                                            <div
                                                className="bg-gradient-to-t relative from-[#000] opacity-0 hover:opacity-100 p-5 flags h-full">
                                                <a onClick={Handle_Is_Open_Custom_video} href="javascript:void(0)">
                                                    <div
                                                        className="absolute w-12 rounded-full leading-[52px] h-12 bg-white m-auto left-0 right-0 top-0 bottom-0">
                                                        <i className="fi-rr-play"></i>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="absolute bottom-0 left-0 w-full" onclick="toggleModal('myModal2')">
                                                    <div
                                                        className=" inset-center text-white mx-4 mb-4 border px-3 text-sm rounded py-2 hover:bg-[#9F2225] hover:border-gray-900">
                                                        Write to us</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gi-products bg-no-repeat text-center bg-cover h-[350px] rounded overflow-hidden"
                                            style={{
                                                backgroundImage: `url(${Common_Images_Transport?.custom_designs4})`, // Add your image URL here
                                            }}
                                        >
                                            <div
                                                className="bg-gradient-to-t relative from-[#000] opacity-0 hover:opacity-100 p-5 flags h-full">
                                                <a onClick={Handle_Is_Open_Custom_video} href="javascript:void(0)">
                                                    <div
                                                        className="absolute w-12 rounded-full leading-[52px] h-12 bg-white m-auto left-0 right-0 top-0 bottom-0">
                                                        <i className="fi-rr-play"></i>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="absolute bottom-0 left-0 w-full" onclick="toggleModal('myModal2')">
                                                    <div
                                                        className=" inset-center text-white mx-4 mb-4 border px-3 text-sm rounded py-2 hover:bg-[#9F2225] hover:border-gray-900">
                                                        Write to us</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gi-products bg-no-repeat text-center bg-cover h-[350px] rounded overflow-hidden"
                                            style={{
                                                backgroundImage: `url(${Common_Images_Transport?.custom_designs5})`, // Add your image URL here
                                            }}
                                        >
                                            <div
                                                className="bg-gradient-to-t relative from-[#000] opacity-0 hover:opacity-100 p-5 flags h-full">
                                                <a onClick={Handle_Is_Open_Custom_video} href="javascript:void(0)">
                                                    <div
                                                        className="absolute w-12 rounded-full leading-[52px] h-12 bg-white m-auto left-0 right-0 top-0 bottom-0">
                                                        <i className="fi-rr-play"></i>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="absolute bottom-0 left-0 w-full" onclick="toggleModal('myModal2')">
                                                    <div
                                                        className=" inset-center text-white mx-4 mb-4 border px-3 text-sm rounded py-2 hover:bg-[#9F2225] hover:border-gray-900">
                                                        Write to us</div>
                                                </a>
                                            </div>
<<<<<<< HEAD
                                        </div>
=======
                                        </div> */}
>>>>>>> omens_solving_bug_till_29-04-2025_evening
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <-------- Modal section's Custome Video ----------> */}
            {
<<<<<<< HEAD
                isOpen_Custom_video && (
=======
                isOpen_Custom_video && selectedVideo && (
>>>>>>> omens_solving_bug_till_29-04-2025_evening
                    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
                        {/* <!-- Modal Content --> */}
                        <div className="bg-white rounded-lg shadow-lg max-w-md">
                            {/* <!-- Modal Header --> */}
                            <div className="flex justify-between items-center p-3">
                                <h2 className="text-lg m-0 font-semibold text-gray-800">Custome Video</h2>
                                <button className="text-[#9F2225] hover:text-gray-800 text-[25px]" onClick={Handle_Is_Open_Custom_video}>
                                    &times;</button>
                            </div>

                            {/* <!-- Modal Body --> */}
                            <div className="text-gray-700">
                                <video controls>
<<<<<<< HEAD
                                    <source src={Common_Images_Transport?.custom_video1} type="video/mp4" />
=======
                                    <source src={selectedVideo} type="video/mp4" />
>>>>>>> omens_solving_bug_till_29-04-2025_evening
                                </video>
                            </div>


                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Home_Exclusive_Design