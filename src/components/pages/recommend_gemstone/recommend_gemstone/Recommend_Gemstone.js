
import React from 'react'

const Recommend_Gemstone = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                <div className="kundli_form w-full mt-6">

                    <h4 class="text-2xl mb-2 font-bold text-gray-800 mb-5 border-b border-gray-300 pb-3 text-center">Gemstone Recommendation by Date of Birth & Kundali, Gemstone Astrology</h4>

                    <div className="flex flex-wrap w-full">
                        <div
                            className="min-[992px]:w-[50%] flex min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full max-[575px]:w-[50%] max-[575px]:mx-auto pr-6">
                            <div className="w-full">
                                <div className="mb-4">
                                    <h4 className="mb-2 text-lg font-semibold text-[#3B4959]">Gem recommendation tool</h4>
                                    <p className="text-sm text-gray-500">An Intelligently-designed Tool for Quick & Accurate Astrological Gem Recommendation</p>
                                </div>
                                <div className="bg-gray-100 p-6">
                                <form accept="#" method="post">
                                    <div className="space-y-3">
                                        <div className="input-grid flex space-x-2.5">
                                            <div className="w-1/2 h-full">
                                                <div className="input-com "><label
                                                    className="text-gray-600 text-sm pb-1 inline-block">
                                                    Name*</label>
                                                    <div
                                                        className="input-wrapper bg-white relative ">
                                                        <input placeholder="Name"
                                                            className="input-field  placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[40px] w-full"
                                                            type="text" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/2 h-full">
                                                <div className="input-com "><label
                                                    className="text-gray-600 text-sm pb-1 inline-block">Email ID</label>
                                                    <div
                                                        className="input-wrapper bg-white  overflow-hidden relative ">
                                                        <input placeholder="Email id"
                                                            className="input-field placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[40px]"
                                                            type="email" required/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-grid flex space-x-2.5">
                                            <div className="w-1/2 h-full">
                                                <div className="input-com "><label
                                                    className="text-gray-600 text-sm pb-1 inline-block">Phone No.</label>
                                                    <div
                                                        className="input-wrapper bg-white overflow-hidden relative ">
                                                        <input type="number" oninput="numberOnly(this.id);"
                                                            maxlength="10" name="number" placeholder="Enter your number"
                                                            class="input-field placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[40px] w-full"
                                                            required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/2 h-full">
                                                <div className="input-com "><label
                                                    className="text-gray-600 text-sm pb-1 inline-block">Select Gender</label>
                                                    <div
                                                        className="input-wrapper bg-white  overflow-hidden relative ">
                                                        <select
                                                            className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[40px]">
                                                            <option>Select</option>
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-grid flex space-x-2.5">
                                            <div className="w-1/2 h-full">
                                                <div className="input-com "><label
                                                    className="text-gray-600 text-sm pb-1 inline-block">Select Purpose</label>
                                                    <div
                                                        className="input-wrapper bg-white  overflow-hidden relative ">
                                                        <select
                                                            className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[40px]">
                                                            <option>Select</option>
                                                            <option>--</option>
                                                            <option>--</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/2 h-full">
                                                <div className="input-com "><label
                                                    className="text-gray-600 text-sm pb-1 inline-block">Select Budget</label>
                                                    <div
                                                        className="input-wrapper bg-white  overflow-hidden relative ">
                                                        <select
                                                            className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[40px]">
                                                            <option>Select</option>
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-grid flex space-x-2.5">
                                            <div className="w-1/2 h-full">
                                                <div className="input-com "><label
                                                    className="text-gray-600 text-sm pb-1 inline-block">Body Weight (in kgs)</label>
                                                    <div
                                                        className="input-wrapper bg-white overflow-hidden relative ">
                                                        <input type="text"
                                                            name="Weight" placeholder="Enter Weight"
                                                            class="w-full px-4 bg-transparent border-0 text-[#777] text-[14px] outline-[0] h-[40px]"
                                                            required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/2 h-full">
                                                <div className="input-com "><label
                                                    className="text-gray-600 text-sm pb-1 inline-block">Place of Birth</label>
                                                    <div
                                                        className="input-wrapper bg-white overflow-hidden relative ">
                                                        <input type="text"
                                                            name="text" placeholder="Enter place of birth"
                                                            class="w-full px-4 bg-transparent border-0 text-[#777] text-[14px] outline-[0] h-[40px]"
                                                            required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-grid">
                                            <div className="w-full h-full">
                                                <div className="input-com "><label
                                                    className="text-gray-600 text-sm pb-1 inline-block">Birth
                                                    Date and Time Details</label>
                                                    <div
                                                        className="input-wrapper bg-white overflow-hidden relative ">
                                                        <input placeholder="datetime-local"
                                                            className="input-field w-full placeholder:text-sm text-sm px-4 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none h-[40px]"
                                                            type="datetime-local" value="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-grid">
                                            <div className="w-full">
                                                <div className="input-com "><button type="button"
                                                    className="w-full h-[45px] bg-[#9F2225] text-white text-sm">Get Recommendation Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-white min-[992px]:w-[50%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full max-[575px]:w-[50%] max-[575px]:mx-auto">
                            <div className="mb-4">
                                <h4 className="mb-2 text-lg font-semibold text-[#3B4959]">Why wear gemstones?</h4>
                                <p className="text-sm text-gray-500">Do astrological gemstones really work? Watch this video to get your answer</p>
                            </div>
                            <iframe src="https://rasatva.apponedemo.top/omens/public/uploads/product/videos/19056.mp4" width="100%" height="510px" title="W3Schools Free Online Web Tutorials"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommend_Gemstone
