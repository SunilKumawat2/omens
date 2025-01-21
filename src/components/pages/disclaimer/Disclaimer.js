import React, { useEffect } from 'react'
import Header from '../../common/header/Header'
import Home_Private_Confidential from '../home_page_components/home_private_confidential/Home_Private_Confidential'
import Footer from '../../common/footer/Footer'

const Disclaimer = () => {
     // Scroll to the top of the page when the component is rendered
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
  return (
    <div>
        {/*  */}
        <Header/>
        <section class="gi-faq py-[40px] max-[767px]:py-[30px]">
        <div
            class="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div class="custome_viewbox">
                <h1>Our Disclaimer</h1>
                <p>The AstroSagga website's data and information are only meant to be used for your own amusement. You should always seek the guidance, programs, and treatment of a licensed professional, such as a lawyer, doctor, psychiatrist, or financial advisor, before acting on any prediction or other message you receive. As a result, astrosagga.com does not offer any guarantees, implied warranties, or assurances of any kind, and it will not be held accountable for any interpretation or use that the recipient of the aforementioned data and information may make of it.
                </p>
                <p>
                    Additionally, astrosagga.com is not a legal business. Astrological Services & Technical Research Organization developed it. AstroSagga has access to all of the transaction data as well as the data gathered.
                </p>
        </div>
        </div>
    </section>
    {/*  */}
    <Home_Private_Confidential/>
    {/*  */}
    <Footer/>
    </div>
  )
}

export default Disclaimer