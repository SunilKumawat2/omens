import React from 'react'
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport'
import { IMG_BASE_URL } from '../../../../config/Config'

const Talk_To_Permium_Astrologer = (home_data) => {
  const Talk_To_Permium_Astrologer_banner = home_data?.data?.home_mid_sliders
  console.log("Talk_To_Permium_Astrologer_banner",Talk_To_Permium_Astrologer_banner)
  return (
    <div>
         <section className="gi-banner py-[40px] max-[767px]:py-[20px] max-[767px]:pt-[0px] wow fadeInUp" data-wow-duration="2s">
        <div
            className="justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="w-full">
                <img width="100%" src={`${IMG_BASE_URL}${Talk_To_Permium_Astrologer_banner?.image}`} className="w-fill" alt="" />
            </div>
        </div>
    </section>
    </div>
  )
}

export default Talk_To_Permium_Astrologer