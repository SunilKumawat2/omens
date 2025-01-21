import React from 'react'
import { Link } from 'react-router-dom'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import Horoscope from '../horoscope/Horoscope'

const Similar_Daily_Horoscope_Details = () => {
    return (
        <div
            className="bg-white p-6 min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full max-[575px]:w-[50%] max-[575px]:mx-auto">
            <h5
                className="gi-pro-stitle mb-6 text-center border-b border-gray-100 pb-6 font-normal text-[#9F2225] text-xl font-semibold leading-[1.2] capitalize">
                Horoscopes</h5>
            <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <Horoscope />
            </div>
        </div>

    )
}

export default Similar_Daily_Horoscope_Details