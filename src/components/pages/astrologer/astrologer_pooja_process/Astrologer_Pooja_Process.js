import React, { useRef, useState, useEffect } from 'react'
import Astrologer_after_Login_Header from '../astrologer_after_login_header/Astrologer_after_Login_Header'
import { Link, useNavigate } from 'react-router-dom'
import Astrologer_Footer from '../astrologer_footer/Astrologer_Footer'
import { User_Authentication } from '../../../../user_authentication/User_Authentication'
import { Astro_Book_pooja_Order_List, Pooja_Status_Update } from '../../../../api/pooja/Pooja'
import Loader from "../../../../loader/Loader"
import { IMG_BASE_URL } from '../../../../config/Config'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Astrologer_Pooja_Process = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [astro_get_new_booking_list, set_Astro_Get_New_Booking_List] = useState([]);
    const currentDateTime = new Date();

    // Handle modal toggle (open/close)
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Handle image change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    // Trigger file input click when the section is clicked
    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    useEffect(() => {
        const Handle_Astro_Book_New_pooja_Order_List = async () => {
            setIsLoading(true)
            try {
                const token = User_Authentication();
                if (!token) {
                    setIsLoading(false);
                    throw new Error("User token not found");
                }
                const status = "2";
                const response = await Astro_Book_pooja_Order_List(
                    { status },
                    { Authorization: `Bearer ${token}` }
                );
                if (response?.data?.status == "200") {
                    set_Astro_Get_New_Booking_List(response?.data?.data);
                    setIsLoading(false)
                }
                else if (response?.response?.data?.status == "500") {
                    setIsLoading(false)
                }
            } catch (error) {
                setIsLoading(false)
                console.error("Error fetching new bookings:", error);
            }
        };
        Handle_Astro_Book_New_pooja_Order_List();
    }, []);

    const Handle_Accept_New_Pooja_List = async (id) => {

        const data = {
            id,
            status: 3,
            poojaImg: selectedImage
        }
        if (!selectedImage) {

        }
        try {
            const token = User_Authentication();
            if (!token) {
                setIsLoading(false);
                throw new Error("User token not found");
            }
            const response = await Pooja_Status_Update(data, { Authorization: `Bearer ${token}` })
            if (response?.data?.status == "200") {
                setIsLoading(false);
                setIsModalOpen(false)
                navigate('/astrologer_pooja_complete_list')
            }
            else if (response?.response?.data?.status == "500") {
                setIsLoading(false);
            }
        }
        catch (error) {
            setIsLoading(false);
        }
    }

    const formatTime = (time) => {
        const [hours, minutes] = time.split(":");
        const intHours = parseInt(hours, 10);
        const ampm = intHours >= 12 ? "pm" : "am";
        const formattedHours = intHours % 12 || 12;
        return `${formattedHours}:${minutes} ${ampm}`;
    };
    return (
        <div>
            {/*  */}
            <Astrologer_after_Login_Header />
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <section className="gi-product-tab gi-products py-[30px] pb-[60px] max-[767px]:py-[30px] wow fadeInUp"
                            data-wow-duration="2s">
                            <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                                <div className="gi-tab-title w-full inline-flex justify-between px-[12px] max-[991px]:flex-col items-center">
                                    <div className="gi-main-title w-full">
                                        <div className="section-title mb-[20px] pb-[20px] w-full ">
                                            <div className="gi-pro-tab">
                                                <ul className="nav-tabs processingbg flex flex-wrap max-[991px]:justify-start" id="myproTab">
                                                    <li
                                                        className="inline-block align-top text-[14px] text-[#777] uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px] mr-[20px] max-[991px]:mr-[30px] max-[480px]:mr-[20px]">
                                                        <Link className="nav-link activ_tab relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                                                            to="/astrologer_new_Pooja_process_list">
                                                            New</Link>
                                                    </li>
                                                    <li
                                                        className="inline-block align-top text-[14px] text-[#777] uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px] mr-[20px] max-[991px]:mr-[30px] max-[480px]:mr-[20px]">
                                                        <Link className="nav-link activ_tab active relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                                                            to="/astrologer_pooja_process">
                                                            Process</Link>
                                                    </li>
                                                    <li
                                                        className="inline-block align-top text-[14px] text-[#777] uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px]">
                                                        <Link className="nav-link activ_tab  relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                                                            to="/astrologer_pooja_complete_list">
                                                            Complete</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    astro_get_new_booking_list?.pooja_list?.length > 0 ? (
                                        <>
                                            <div className="w-full mb-[-24px]">
                                                <div className="tab-content" id="myproTabContent">
                                                    <div className="tab-pro-pane" id="snack">
                                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6 px-[15px]">
                                                            {
                                                                astro_get_new_booking_list?.pooja_list?.map((astro_get_new_booking_list_result) => {
                                                                    return (
                                                                        <div className="border rounded-lg p-4 bg-white">
                                                                            <div className="flex justify-between items-center">
                                                                                <div className="flex gap-3 items-center">
                                                                                    <img src={`${IMG_BASE_URL}${astro_get_new_booking_list_result?.image}`} className="rounded-md h-16 w-16"
                                                                                        alt="" />
                                                                                    <div>
                                                                                        <h5 className="text-lg font-medium text-black">{astro_get_new_booking_list_result?.title}</h5>
                                                                                        <p class="text-gray-500 text-sm clamped-text">{astro_get_new_booking_list_result?.short_description}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="shadow rounded-md p-4 mt-3">
                                                                                <div className="grid grid-cols-2 gap-4">
                                                                                    <div>
                                                                                        <span className="text-sm text-gray-400">Name</span>
                                                                                        <h5 className="text-[14px] text-[#0F1726] font-medium">{astro_get_new_booking_list_result?.user?.name}</h5>
                                                                                    </div>
                                                                                    <div>
                                                                                        <span className="text-sm text-gray-400">Booking Date</span>
                                                                                        <h5 className="text-[14px] text-[#0F1726] font-medium">{astro_get_new_booking_list_result?.pooja_date}</h5>
                                                                                    </div>

                                                                                    <div>
                                                                                        <span className="text-sm text-gray-400">Pooja Timing</span>
                                                                                        <h5 className="text-[14px] text-[#0F1726] font-medium"> {formatTime(astro_get_new_booking_list_result?.from_time)} to {formatTime(astro_get_new_booking_list_result?.to_time)}</h5>
                                                                                    </div>

                                                                                    <div>
                                                                                        <span className="text-sm text-gray-400">Amount</span>
                                                                                        <h5 className="text-[14px] text-red-700 font-medium">Rs.{astro_get_new_booking_list_result?.price}/-</h5>
                                                                                    </div>
                                                                                    {
                                                                                        currentDateTime > new Date(astro_get_new_booking_list_result?.to_time) && (
                                                                                            <div onClick={toggleModal} >
                                                                                                <Link
                                                                                                    className="bg-green-800 text-white text-sm py-2 px-5 inline-block rounded-full
                                                                                             text-center dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 modal-toggle">Complete</Link>
                                                                                            </div>
                                                                                        )
                                                                                    }

                                                                                    {/* Modal */}
                                                                                    {isModalOpen && (
                                                                                        <div
                                                                                            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                                                                                            onClick={toggleModal}
                                                                                        >
                                                                                            <div
                                                                                                className="bg-white p-6 rounded-lg w-1/2"
                                                                                                onClick={(e) => e.stopPropagation()}
                                                                                            >
                                                                                                <h2 className="text-sm text-gray-400 py-4">Upload Your File</h2>
                                                                                                {selectedImage && (
                                                                                                    <div className="relative">
                                                                                                        <img
                                                                                                            src={selectedImage}
                                                                                                            alt="Preview"
                                                                                                            className="object-cover h-40 w-full rounded-lg mb-4"
                                                                                                        />
                                                                                                        <button className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2" onClick={() => setSelectedImage(null)}
                                                                                                        >
                                                                                                            <i className="fi-rr-trash text-xl"></i>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                )}
                                                                                                <div className="image_galleryss">
                                                                                                    <fieldset className="form-group bg-white border border-gray-100 rounded-lg p-3">
                                                                                                        <a href="javascript:void(0)" className="text-center font-bold text-sm block" onClick={triggerFileInput}
                                                                                                        >
                                                                                                            <i className="fi-rr-cloud-upload-alt text-xl font-bold text-center inline-block text-gray-400 w-full"></i>
                                                                                                            <h5 className="text-gray-400 font-medium">Upload Live Photo</h5>
                                                                                                        </a>
                                                                                                        <input
                                                                                                            type="file"
                                                                                                            id="pro-image"
                                                                                                            name="poojaImg"
                                                                                                            onChange={handleImageChange}
                                                                                                            ref={fileInputRef}
                                                                                                            style={{ display: 'none' }}
                                                                                                            className="form-control"
                                                                                                            required
                                                                                                        />
                                                                                                    </fieldset>
                                                                                                </div>
                                                                                                <div className="flex justify-end gap-3 mt-4">
                                                                                                    <button className="bg-red-800 text-white py-2 px-4 rounded-lg" type='button'
                                                                                                        onClick={() => { Handle_Accept_New_Pooja_List(astro_get_new_booking_list_result?.id) }}>Submit</button>
                                                                                                    <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={toggleModal}>Cancel</button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className='m-auto text-center'>
                                            <h4>No pooja processing available at the moment</h4>
                                        </div>
                                    )
                                }

                            </div>
                        </section>
                        {/*  */}
                        <Astrologer_Footer />

                    </>
                )
            }
        </div>
    )
}

export default Astrologer_Pooja_Process