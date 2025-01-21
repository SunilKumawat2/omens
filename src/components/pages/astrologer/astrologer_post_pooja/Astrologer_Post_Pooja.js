import React, { useEffect, useState } from 'react'
import Astrologer_after_Login_Header from '../astrologer_after_login_header/Astrologer_after_Login_Header'
import Astrologer_Footer from '../astrologer_footer/Astrologer_Footer'
import { get_pooja_list_category, Post_Pooja } from '../../../../api/astrologer/Astrologer';
import { User_Authentication } from '../../../../user_authentication/User_Authentication';
import Loader from '../../../../loader/Loader';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Astrologer_Post_Pooja = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [get_category_list, set_Category_List] = useState([]);

    const [astro_post_pooja_form, set_Astro_Post_Pooja_Form] = useState({
        category_id:"",
        title: "",
        short_description: "",
        description: "",
        pooja_date: "",
        from_time: "",
        to_time: "",
        duration: "",
        price: "",
        poojaImg: "",
    })

    const Handle_change_astro_pooja = (e) => {
        const { name, value, type, files } = e.target;

        set_Astro_Post_Pooja_Form((prevState) => ({
            ...prevState,
            [name]: type === "file" ? files[0] : value, // Handle file input differently
        }));
    };


    const Handle_Submit_astro_post_pooja = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const formdata = new FormData()
        formdata.append("category_id", astro_post_pooja_form?.category_id)
        formdata.append("title", astro_post_pooja_form?.title)
        formdata.append("title", astro_post_pooja_form?.title)
        formdata.append("short_description", astro_post_pooja_form?.short_description)
        formdata.append("description", astro_post_pooja_form?.description)
        formdata.append("pooja_date", astro_post_pooja_form?.pooja_date)
        formdata.append("from_time", astro_post_pooja_form?.from_time)
        formdata.append("to_time", astro_post_pooja_form?.to_time)
        formdata.append("duration", astro_post_pooja_form?.duration)
        formdata.append("price", astro_post_pooja_form?.price)
        formdata.append("poojaImg", astro_post_pooja_form?.poojaImg)

        if(!astro_post_pooja_form.category_id){
            toast("please select the pooja category")
            setIsLoading(false)
            return;
        }
        if(!astro_post_pooja_form.title){
            toast("please enter the pooja title")
            setIsLoading(false)
            return;
        }
        if(!astro_post_pooja_form.pooja_date){
            toast("please enter the pooja date")
            setIsLoading(false)
            return;
        }
        if(!astro_post_pooja_form.from_time){
            toast("please enter the pooja start time")
            setIsLoading(false)
            return;
        }
        if(!astro_post_pooja_form.to_time){
            toast("please enter the pooja end time")
            setIsLoading(false)
            return;
        }
        if(!astro_post_pooja_form.price){
            toast("please enter the pooja price")
            setIsLoading(false)
            return;
        }
        if(!astro_post_pooja_form.duration){
            toast("please enter the pooja duration")
            setIsLoading(false)
            return;
        }
        if(!astro_post_pooja_form.poojaImg){
            toast("please enter the pooja image")
            setIsLoading(false)
            return;
        }
        if(!astro_post_pooja_form.short_description){
            toast("please enter the pooja short description")
            setIsLoading(false)
            return;
        }
        if(!astro_post_pooja_form.description){
            toast("please enter the pooja description")
            setIsLoading(false)
            return;
        }
        try {
            const token = User_Authentication();
            if (!token) {
                setIsLoading(false);
                toast("token not found's")
                throw new Error("User token not found");
            }
            const response = await Post_Pooja(formdata, { Authorization: `Bearer ${token}` })
            if (response?.data?.status == "200") {
                toast(response?.data?.message)
                set_Astro_Post_Pooja_Form({})
                setIsLoading(false)
                navigate("/astrologer_my_pooja_list")
            }
            else if (response?.response?.data?.status == "500") {
                toast(response?.response?.data?.message)
                setIsLoading(false)
            }
            console.log("response", response)
        }
        catch (error) {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const Handle_Get_Category_List = async () => {
            try {
                const response = await get_pooja_list_category();
                if (response?.data?.status == "200") {
                    set_Category_List(response?.data?.data?.pooja_category)
                    setIsLoading(false)
                }
                else if (response?.response?.data?.status == "500") {
                    setIsLoading(false)
                }
            }
            catch (error) {
                setIsLoading(false)
            }
        }
        Handle_Get_Category_List();
    }, [])

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
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
                    <section className="gi-register py-[40px] max-[767px]:py-[30px]">
                        <div className=" justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                            <div className="min-[1000px]:max-w-[1000px] m-auto">
                                <h3 className="text-[22px] mb-2 font-semibold text-[#3B4959]">Pooja Post</h3>
                                <div className="bg_basic_details relative p-3 rounded-lg">
                                    <div className="gi-register-wrapper my-[0] mx-auto bg-[#ffffffc4] rounded-lg">
                                        <div className="gi-login-box w-[100%] px-[15px] max-[991px]:w-full max-[991px]:p-[0]">
                                            <form className="multisteps-form__form" onSubmit={Handle_Submit_astro_post_pooja}>
                                                <div className=" p-5 pe-0" data-animation="fade">
                                                    <h3 className="text-[22px] mb-2 font-semibold text-[#3B4959]">Post Details</h3>
                                                    <div className="multisteps-form__content">
                                                        <div className="input-grid flex space-x-2.5 mb-6">
                                                            <div className="w-1/2 h-full">
                                                                <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Pooja Category</label>
                                                                    <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                        <select name="category_id"  onClick={Handle_change_astro_pooja} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]">
                                                                            <option value="">Select</option>
                                                                            {
                                                                                get_category_list?.map((get_category_list_result) => {
                                                                                    return (
                                                                                        <>
                                                                                            <option key={get_category_list_result?.id} value={get_category_list_result?.id} >{get_category_list_result?.title}</option>
                                                                                        </>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/2 h-full">
                                                                <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Pooja Title</label>
                                                                    <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                        <input placeholder="" name='title' value={astro_post_pooja_form?.title} onChange={Handle_change_astro_pooja} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="input-grid flex space-x-2.5 mb-6">
                                                            <div className="w-1/2 h-full">
                                                                <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Pooja Date</label>
                                                                    <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                        <input placeholder="Pooja Date" name='pooja_date' value={astro_post_pooja_form?.pooja_date} onChange={Handle_change_astro_pooja} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="date" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/2 h-full">
                                                                <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Start Time</label>
                                                                    <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                        <input placeholder="time" name='from_time' value={astro_post_pooja_form?.from_time} onChange={Handle_change_astro_pooja} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="time" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/1 text-center h-full m-auto">To</div>
                                                            <div className="w-1/2 h-full">
                                                                <div className="input-com ">
                                                                    <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">End Time</label>
                                                                    <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                        <input placeholder="" name='to_time' value={astro_post_pooja_form?.to_time} onChange={Handle_change_astro_pooja} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="time" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="input-grid flex space-x-2.5 mb-6">
                                                            <div className="w-1/2 h-full">
                                                                <div className="input-com"><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Duration</label>
                                                                    <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                        <input placeholder="" name='duration' value={astro_post_pooja_form?.duration} onChange={Handle_change_astro_pooja} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/2 h-full">
                                                                <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Price ( Including the GST  )</label>
                                                                    <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                        <input placeholder="" name='price' value={astro_post_pooja_form?.price} onChange={Handle_change_astro_pooja} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="number" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-1/2 h-full">
                                                                <div className="input-com"><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Upload Image</label>
                                                                    <div className="input-wrapper border border-qgray-border  overflow-hidden relative ">
                                                                        <input placeholder="" name='poojaImg' onChange={Handle_change_astro_pooja} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px] pt-3" type="file" value="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="input-grid">
                                                            <div className="w-full mb-6">
                                                                <div className="input-com "><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Pooja Sort Description</label>
                                                                    <div className="input-wrapper border border-qgray-border  overflow-hidden relative">
                                                                        <textarea placeholder="" name='short_description' value={astro_post_pooja_form?.short_description} onChange={Handle_change_astro_pooja} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px] py-3"></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-full mb-6">
                                                                <div className="input-com"><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Pooja Long Description</label>
                                                                    <div className="input-wrapper border border-qgray-border  overflow-hidden relative">
                                                                        <textarea placeholder="" name='description' value={astro_post_pooja_form?.description} onChange={Handle_change_astro_pooja} className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[50px] py-3"></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="button-row flex justify-between w-full mt-4">
                                                            <button className="btn btn-primary js-btn-next bg-[#9D2326] p-2 px-5 text-white" title="submit">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
            {/*  */}
            <Astrologer_Footer />
        </div>
    )
}

export default Astrologer_Post_Pooja