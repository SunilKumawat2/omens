import React from 'react'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'

const Home_Sales_Banner = () => {
  return (
    <div>
        <section className="w-full gi-banner py-[40px] max-[767px]:py-[30px] wow fadeInUp" data-wow-duration="2s">
        <div className="w-full">
            <img width="100%" src={Common_Images_Transport?.sales_banner} className="w-fill" alt="" />
        </div>
    </section>
    </div>
  )
}

export default Home_Sales_Banner