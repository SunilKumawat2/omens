import React from 'react'
import { Link } from 'react-router-dom'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'

const Astrologer_Header = () => {
    return (
        <div>
            <header className="gi-header bg-[#fff] shadow-lg z-[14] max-[991px]:z-[16] relative">

                <div
                    className="gi-header-bottom py-[10px] max-[991px]:py-[15px] max-[991px]:border-b-[1px] border-solid border-[#eee]">
                    <div
                        className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                        <div className="w-full flex flex-wrap px-[12px] ">
                            <div className="gi-flex flex flex-row justify-center w-full max-[575px]:flex-col">
                                {/* <!-- Header Logo Start --> */}
                                <div className="self-center gi-header-logo max-[575px]:mb-[15px]">
                                    <div className="header-logo text-left">
                                        <Link to="/"><img src={Common_Images_Transport?.logo} alt="Site Logo"
                                            className="w-[200px] max-[1199px]:w-[130px] max-[991px]:w-[120px] max-[767px]:w-[100px] " /></Link>
                                    </div>
                                </div>
                                {/* <!-- Header Logo End --> */}

                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Header Button End --> */}
            </header>
        </div>
    )
}

export default Astrologer_Header