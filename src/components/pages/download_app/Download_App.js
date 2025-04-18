import React, { useEffect, useState } from 'react'
import Common_Images_Transport from '../../common/common_imges_transport/Common_Images_Transport'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'
import { Global_Settings } from '../../../api/global/Global'

const Download_App = () => {
    const [get_settings, setGet_Settings] = useState({});

    useEffect(() => {
        const Handle_Get_settings = async () => {
            try {
                const response = await Global_Settings();
                setGet_Settings(response?.data?.data?.setting)
            } catch (error) {
                console.log("error", error)
            }
        }
        Handle_Get_settings()
    }, [])

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div>
            {/*  */}
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
                {/* Phone Image */}
                <div className="relative mb-6">
                    <div className="w-40 h-72 bg-gray-200 rounded-lg flex items-center justify-center shadow-lg">
                        <img src={Common_Images_Transport?.logo} alt="Astrotalk" className="w-16 h-16" />
                    </div>
                </div>

                {/* Text */}
                <h2 className="text-lg font-semibold text-gray-800">
                    To use this feature please,
                </h2>
                <h3 className="text-xl font-bold text-gray-900">
                    Download Our Mobile App
                </h3>

                {/* App Store & Google Play Buttons */}
                <div className="mt-4 flex gap-4">
                    <a
                        href={`${get_settings && get_settings[0]?.app_store}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Common_Images_Transport?.apple}
                            alt="Download on the App Store"
                            className="w-40 h-12"
                        />
                    </a>
                    <a
                        href={`${get_settings && get_settings[0]?.play_store}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Common_Images_Transport?.android}
                            alt="Get it on Google Play"
                            className="w-40 h-12"
                        />
                    </a>
                </div>
            </div>
            {/*  */}
            <Footer />
        </div>

    )
}

export default Download_App
