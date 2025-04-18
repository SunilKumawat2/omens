import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Post_pooja_review } from '../../../../api/pooja/Pooja';
import Header from '../../../common/header/Header';
import Footer from '../../../common/footer/Footer';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { User_Authentication } from '../../../../user_authentication/User_Authentication';
import Loader from '../../../../loader/Loader';

const Add_Pooja_Review = () => {
    const navigate = useNavigate();
    const [is_Loading, set_Is_Loading] = useState(false)
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const pooja_id = localStorage.getItem("pooja_id")
    const astro_user_id = localStorage.getItem("astro_user_id")
    const booking_id = localStorage.getItem("booking_id")


    const Handle_Add_to_review = async () => {
        set_Is_Loading(true);
        const data = {
            pooja_id: pooja_id,
            astro_id: astro_user_id,
            booking_id: booking_id,
            rating: rating,
            review: review
        }
        try {
            const token = User_Authentication();
            if (!token) {
                set_Is_Loading(false);
                throw new Error("User token not found");
            }
            const response = await Post_pooja_review(data, { Authorization: `Bearer ${token}` })
            if (response?.data?.status == "200") {
                set_Is_Loading(false)
                toast(response?.data?.message)
                navigate("/user_orders");
                setRating(0)
                setReview("")
            }
            else if (response?.response?.data?.status == "500") {
                set_Is_Loading(false)
                toast(response?.response?.data?.message)
            }
        }
        catch (error) {
            set_Is_Loading(false)
        }
    }
    return (
        <div>
            {/* <------ Add  */}
            <Header />
            {/* <-------- ToastContainer ------------> */}
            <ToastContainer style={{ marginTop: "120px" }} />
            {
                is_Loading ? (
                    <Loader />
                ) : (
                    <section className="gi-register bg-[#F0F4F8] py-[40px] max-[767px]:py-[30px] min-h-screen w-full">
                        <div className="flex items-center justify-center min-h-screen font-poppins">
                            <div className="bg-white p-6 rounded-lg overflow-hidden shadow-xl w-[60%] max-w-[800px] sm:w-[90%]">
                                <div className="text-left my-2">
                                    <div className="gi-login-box w-[100%] px-[15px] max-[991px]:w-full max-[991px]:p-[0]" id="login_modal">
                                        <div className="section-title-2 w-full mb-[20px] pb-[20px]">
                                            <h2 className="gi-title mb-[0] font-manrope text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">
                                                Add Pooja Review
                                            </h2>
                                        </div>
                                        <div className="gi-login-wrapper my-[0] mx-auto">
                                            <div className="gi-login-container">
                                                <div className="gi-login-form">
                                                    <form
                                                        action="#"
                                                        method="post"
                                                        className="flex flex-col"
                                                        onSubmit={(e) => {
                                                            e.preventDefault(); 
                                                            if (rating === 0) {
                                                                alert("Please provide a star rating before submitting your review.");
                                                                return;
                                                            }
                                                            if (review.trim() === "") {
                                                                alert("Please provide feedback before submitting your review.");
                                                                return;
                                                            }
                                                            Handle_Add_to_review(); 
                                                        }}
                                                    >
                                                        <div className="w-full flex flex-col items-start justify-content-center">
                                                            <label className="mb-[10px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                                                Review:
                                                            </label>
                                                            <div className="flex">
                                                                {[...Array(5)].map((_, index) => {
                                                                    const starValue = index + 1;
                                                                    return (
                                                                        <label
                                                                            key={index}
                                                                            title={`${starValue} rating`}
                                                                            style={{ fontSize: "1.5rem", cursor: "pointer" }}
                                                                            className={starValue <= rating ? "text-[#FFD700]" : "text-gray-200"}
                                                                            onClick={() => setRating(starValue)}
                                                                        >
                                                                            ★
                                                                        </label>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                        <div className="gi-login-wrap flex flex-col w-full mt-3">
                                                            <label className="mb-[10px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                                                                Feedback
                                                            </label>
                                                            <div className="iconflex">
                                                                <textarea
                                                                    name="review"
                                                                    value={review}
                                                                    placeholder="Enter your feedback here"
                                                                    onChange={(e) => setReview(e.target.value)}
                                                                    className="w-full mb-[15px] px-[15px] bg-transparent border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] outline-[0] h-[100px]"
                                                                    required
                                                                ></textarea>
                                                            </div>
                                                        </div>

                                                        <div className="gi-login-wrap">
                                                            <button
                                                                type="submit"
                                                                className="w-full mt-[20px] block p-[14px] text-center text-[#fff] bg-gradient-to-r from-[#9F2225] to-[#FFB500] rounded-[5px] text-[#777] text-[16px] outline-[0] h-[50px]"
                                                            >
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                )
            }
            {/*  */}
            <Footer />
        </div>
    )
}

export default Add_Pooja_Review