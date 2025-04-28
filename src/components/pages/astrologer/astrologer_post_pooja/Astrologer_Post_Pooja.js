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
        category_id: "",
        title: "",
        short_description: "",
        description: "",
        pooja_date: "",
        from_time: "",
        to_time: "",
        duration: "",
        price: "",
        recording_after_pooja: "1",
        money_back_gurantee: "1",
        poojaImg: "",
    })

    const Handle_change_astro_pooja = (e) => {
        const { name, value, type, files } = e.target;

        set_Astro_Post_Pooja_Form((prevState) => ({
            ...prevState,
            [name]: type === "file" ? files[0] : value,
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
        formdata.append("recording_after_pooja", astro_post_pooja_form?.recording_after_pooja)
        formdata.append("money_back_gurantee", astro_post_pooja_form?.money_back_gurantee)
        formdata.append("poojaImg", astro_post_pooja_form?.poojaImg)

        if (!astro_post_pooja_form.category_id) {
            toast("please select the pooja category")
            setIsLoading(false)
            return;
        }
        if (!astro_post_pooja_form.title) {
            toast("please enter the pooja title")
            setIsLoading(false)
            return;
        }
        if (!astro_post_pooja_form.pooja_date) {
            toast("please enter the pooja date")
            setIsLoading(false)
            return;
        }
        if (!astro_post_pooja_form.from_time) {
            toast("please enter the pooja start time")
            setIsLoading(false)
            return;
        }
        if (!astro_post_pooja_form.to_time) {
            toast("please enter the pooja end time")
            setIsLoading(false)
            return;
        }
        if (!astro_post_pooja_form.price) {
            toast("please enter the pooja price")
            setIsLoading(false)
            return;
        }
        if (!astro_post_pooja_form.duration) {
            toast("please enter the pooja duration")
            setIsLoading(false)
            return;
        }
        if (!astro_post_pooja_form.poojaImg) {
            toast("please enter the pooja image")
            setIsLoading(false)
            return;
        }
        if (!astro_post_pooja_form.short_description) {
            toast("please enter the pooja short description")
            setIsLoading(false)
            return;
        }
        if (!astro_post_pooja_form.description) {
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
                navigate("/astrologer-my-pooja-list")
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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            {/*  */}
            <Astrologer_after_Login_Header />
            <ToastContainer style={{ marginTop: "120px" }} />
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <section className="gi-register py-[40px] max-[767px]:py-[20px]">
                        <div className="justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] px-4">
                            <div className="min-[1000px]:max-w-[1000px] m-auto">
                                <h3 className="text-[22px] mb-2 font-semibold text-[#3B4959]">Pooja Post</h3>
                                <div className="bg_basic_details relative p-3 rounded-lg">
                                    <div className="gi-register-wrapper my-[0] mx-auto bg-[#ffffffc4] rounded-lg">
                                        <div className="gi-login-box w-full px-4">
                                            <form className="multisteps-form__form" onSubmit={Handle_Submit_astro_post_pooja}>
                                                <div className="p-5 pe-0" data-animation="fade">
                                                    <h3 className="text-[22px] mb-2 font-semibold text-[#3B4959]">Post Details</h3>
                                                    <div className="multisteps-form__content">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                                            <div className="max-[767px]:mt-2">
                                                                <label className="input-label block mb-1 text-qgray text-[13px]">Pooja Category</label>
                                                                <select name="category_id" onClick={Handle_change_astro_pooja} className="input-field w-full h-[45px] px-3 border border-gray-300 rounded-md text-sm">
                                                                    <option value="">Select</option>
                                                                    {get_category_list?.map((item) => (
                                                                        <option key={item?.id} value={item?.id}>{item?.title}</option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            <div className="max-[767px]:mt-2">
                                                                <label className="input-label block mb-1 text-qgray text-[13px]">Pooja Title</label>
                                                                <input name="title" value={astro_post_pooja_form?.title} onChange={Handle_change_astro_pooja} className="input-field w-full h-[45px] px-3 border border-gray-300 rounded-md text-sm" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                                            <div className="max-[767px]:mt-2">
                                                                <label className="input-label block mb-1 text-qgray text-[13px]">Pooja Date</label>
                                                                <input name="pooja_date" value={astro_post_pooja_form?.pooja_date} onChange={Handle_change_astro_pooja} className="input-field w-full h-[45px] px-3 border border-gray-300 rounded-md text-sm" type="date" />
                                                            </div>
                                                            <div className="max-[767px]:mt-2">
                                                                <label className="input-label block mb-1 text-qgray text-[13px]">Start Time</label>
                                                                <input name="from_time" value={astro_post_pooja_form?.from_time} onChange={Handle_change_astro_pooja} className="input-field w-full h-[45px] px-3 border border-gray-300 rounded-md text-sm" type="time" />
                                                            </div>
                                                            <div className="max-[767px]:mt-2">
                                                                <label className="input-label block mb-1 text-qgray text-[13px]">End Time</label>
                                                                <input name="to_time" value={astro_post_pooja_form?.to_time} onChange={Handle_change_astro_pooja} className="input-field w-full h-[45px] px-3 border border-gray-300 rounded-md text-sm" type="time" />
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                                            <div className="max-[767px]:mt-2">
                                                                <label className="input-label block mb-1 text-qgray text-[13px]">Duration</label>
                                                                <input name="duration" value={astro_post_pooja_form?.duration} onChange={Handle_change_astro_pooja} className="input-field w-full h-[45px] px-3 border border-gray-300 rounded-md text-sm" type="text" />
                                                            </div>
                                                            <div className="max-[767px]:mt-2">
                                                                <label className="input-label block mb-1 text-qgray text-[13px]">Price (Including GST)</label>
                                                                <input name="price" value={astro_post_pooja_form?.price} onChange={Handle_change_astro_pooja} className="input-field w-full h-[45px] px-3 border border-gray-300 rounded-md text-sm" type="number" />
                                                            </div>
                                                        </div>
                                                        <div className="mb-6 max-[767px]:mt-2">
                                                            <label className="input-label block mb-1 text-qgray text-[13px]">Upload Image</label>
                                                            <input name="poojaImg" onChange={Handle_change_astro_pooja} className="input-field w-full h-[45px] px-3 border border-gray-300 rounded-md text-sm" type="file" />
                                                        </div>
                                                        <div className="mb-6 max-[767px]:mt-2">
                                                            <label className="input-label block mb-1 text-qgray text-[13px]">Pooja Short Description</label>
                                                            <textarea name="short_description" value={astro_post_pooja_form?.short_description} onChange={Handle_change_astro_pooja} className="input-field w-full px-3 border border-gray-300 rounded-md text-sm h-[80px]"></textarea>
                                                        </div>
                                                        <div className="mb-6 max-[767px]:mt-2">
                                                            <label className="input-label block mb-1 text-qgray text-[13px]">Pooja Long Description</label>
                                                            <textarea name="description" value={astro_post_pooja_form?.description} onChange={Handle_change_astro_pooja} className="input-field w-full px-3 border border-gray-300 rounded-md text-sm h-[100px]"></textarea>
                                                        </div>
                                                        <div className="mb-6 max-[767px]:mt-2">
                                                            <label className="input-label block mb-1 text-qgray text-[13px]">
                                                                Will you provide recording after pooja?
                                                            </label>
                                                            <div className="flex items-center gap-4">
                                                                <label className="flex items-center gap-1 cursor-pointer">
                                                                    <input
                                                                        type="checkbox"
                                                                        name="recording_after_pooja"
                                                                        value="yes"
                                                                        checked={astro_post_pooja_form?.recording_after_pooja == "1"}
                                                                        onChange={(e) => Handle_change_astro_pooja({
                                                                            target: { name: "recording_after_pooja", value: e.target.checked ? "yes" : "no" }
                                                                        })}
                                                                        className="w-4 h-4"
                                                                    />
                                                                    Yes
                                                                </label>
                                                                <label className="flex items-center gap-1 cursor-pointer">
                                                                    <input
                                                                        type="checkbox"
                                                                        name="recording_after_pooja"
                                                                        value="no"
                                                                        checked={astro_post_pooja_form?.recording_after_pooja == "0"}
                                                                        onChange={(e) => Handle_change_astro_pooja({
                                                                            target: { name: "recording_after_pooja", value: e.target.checked ? "no" : "yes" }
                                                                        })}
                                                                        className="w-4 h-4"
                                                                    />
                                                                    No
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="mb-6 max-[767px]:mt-2">
                                                            <label className="input-label block mb-1 text-qgray text-[13px]">
                                                                Will you provide 30 days money back guarantee ?
                                                            </label>
                                                            <div className="flex items-center gap-4">
                                                                <label className="flex items-center gap-1 cursor-pointer">
                                                                    <input
                                                                        type="checkbox"
                                                                        name="money_back_gurantee"
                                                                        value="yes"
                                                                        checked={astro_post_pooja_form?.money_back_gurantee == "1"}
                                                                        onChange={(e) => Handle_change_astro_pooja({
                                                                            target: { name: "money_back_gurantee", value: e.target.checked ? "yes" : "no" }
                                                                        })}
                                                                        className="w-4 h-4"
                                                                    />
                                                                    Yes
                                                                </label>
                                                                <label className="flex items-center gap-1 cursor-pointer">
                                                                    <input
                                                                        type="checkbox"
                                                                        name="money_back_gurantee"
                                                                        value="no"
                                                                        checked={astro_post_pooja_form?.money_back_gurantee == "0"}
                                                                        onChange={(e) => Handle_change_astro_pooja({
                                                                            target: { name: "money_back_gurantee", value: e.target.checked ? "no" : "yes" }
                                                                        })}
                                                                        className="w-4 h-4"
                                                                    />
                                                                    No
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div className="flex justify-center w-full mt-4">
                                                            <button className="bg-[#9D2326] p-3 px-6 text-white rounded-md">Submit</button>
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
            <Astrologer_Footer />
        </div>
    )
}

export default Astrologer_Post_Pooja