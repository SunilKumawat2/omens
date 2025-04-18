import React from 'react'
import Header from '../../../common/header/Header'
import Footer from '../../../common/footer/Footer'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'

const Astrologer_Live = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center text-center my-8">
                <img
                    src={Common_Images_Transport?.punchang}
                    className="rounded-full w-[200px] h-[200px]"
                    alt="Test Image"
                />
                <h1 className='text-2xl'>To use this feature please,
                    Download Our Mobile App</h1>
                    <div className='flex gap-5 mt-[30px]'>
                        <div>
                            <img src={Common_Images_Transport?.android}/>
                        </div>
                        <div>
                        <img src={Common_Images_Transport?.apple}/>
                        </div>
                    </div>
            </div>


            <Footer />
        </div>
    )
}

export default Astrologer_Live
