import React, { useEffect, useState } from 'react'
import Header from '../../common/header/Header'
import Card_Slider from '../home_page_components/card_slider/Card_Slider'
import Main_Slider from '../home_page_components/main_slider/Main_Slider'
import Home_Chat_Slider from '../home_page_components/home_chat_slider/Home_Chat_Slider'
import Home_By_Gemstone from '../home_page_components/home_by_gemstone/Home_By_Gemstone'
import Talk_To_Permium_Astrologer from '../home_page_components/talk_to_premium_astrologer/Talk_To_Permium_Astrologer'
import Home_Astro_Chat_Call from '../home_page_components/home_astro_chat_call/Home_Astro_Chat_Call'
import Home_Best_Selling_Products from '../home_page_components/home_best_selling_products/Home_Best_Selling_Products'
import Home_Sales_Banner from '../home_page_components/home_sales_banner/Home_Sales_Banner'
import Home_Exclusive_Design from '../home_page_components/home_exclusive_design/Home_Exclusive_Design'
import Home_Shop_By_Collection from '../home_page_components/home_shop by _collection/Home_Shop_By_Collection'
import Home_Satisfied_Customer from '../home_page_components/home_satisfied_customer/Home_Satisfied_Customer'
import Home_Right_For_You_Banner from '../home_page_components/home_right_for_you_banner/Home_Right_For_You_Banner'
import Home_Why_Astrology from '../home_page_components/home_why_astrology/Home_Why_Astrology'
import Home_Faqs_Section from '../home_page_components/home_faq\'s_section/Home_Faqs_Section'
import Home_Letest_Post from '../home_page_components/home_letest_post/Home_Letest_Post'
import Home_Trusted_Customer from '../home_page_components/home_trusted_customer/Home_Trusted_Customer'
import Home_Private_Confidential from '../home_page_components/home_private_confidential/Home_Private_Confidential'
import Footer from '../../common/footer/Footer'
import { Get_Home_Page } from '../../../api/global/Global'
import Home_Category from '../home_page_components/home_category/Home_Category'
import Our_Celebrity from '../home_page_components/our_celebrity/Our_Celebrity'
import Loader from '../../../loader/Loader'

const Home = () => {
    const [is_loading, set_Is_Loading] = useState(false)
    const [home_data, set_Home_Data] = useState([]);


    useEffect(() => {
        const Handle_Get_Home_Data = async () => {
            set_Is_Loading(true)
            try {
                const response = await Get_Home_Page()
                set_Home_Data(response?.data?.data)
                
                set_Is_Loading(false)
            } catch (error) {
                set_Is_Loading(false)
                console.log("error", error)
            }
        }
        Handle_Get_Home_Data()
    }, [])
    console.log("home_data", home_data)
    return (
        <div>
            {
                is_loading ? (
                    <Loader />
                ) : (
                    <>
                        {/* <---------- Header section's -------------> */}
                        <Header />

                        {/* <!-- Cart sidebar Start --> */}
                        <Card_Slider />

                        {/* <!-- Hero Slider Start --> */}
                        <Main_Slider data={home_data} />

                        {/* <!-- Home_Chat_Slider section --> */}
                        <Home_Chat_Slider />

                        {/* <-------- Category section's ------> */}
                        {/* <Home_Category data={home_data} /> */}
                        
                        {/* <!--  Home_By_Gemstone Start --> */}
                        <Home_By_Gemstone data={home_data} />

                        {/* <!-- Banner section --> */}
                        <Talk_To_Permium_Astrologer data={home_data} />

                        {/* <!-- Home_Astro_Chat_Call section's --> */}
                        <Home_Astro_Chat_Call data={home_data} />

                        {/* <!-- Home Best Selling Products --> */}
                        <Home_Best_Selling_Products data={home_data} />

                        {/* <!-- Banner section --> */}
                        <Home_Sales_Banner />

                        {/* <------- Our Ceebrity --------> */}
                        <Our_Celebrity data={home_data} />

                        {/* <!-- Exclusive Custom Designs Start --> */}
                        <Home_Exclusive_Design />

                        {/* <!-- Home_Shop_By_Collection Start --> */}
                        <Home_Shop_By_Collection />

                        {/* <!-- Home_Satisfied_Customer section --> */}
                        {/* <Home_Satisfied_Customer /> */}
                        {/* // <!--  Day Of The Deal Start End --> */}

                        <Home_Right_For_You_Banner />
                        {/* <----- Home Why astrology ------------> */}
                        <Home_Why_Astrology />

                        {/* <!-- Faq section --> */}
                        <Home_Faqs_Section />
                        {/* <!-- Faq section End --> */}

                        {/* <!-------- Home_Letest_Post Section Start --> */}
                        <Home_Letest_Post data={home_data}/>

                        {/* <!-- Trusted customer --> */}
                        {/* <Home_Trusted_Customer /> */}
                        {/* <!-- Trusted customer End --> */}

                        {/* <--------- Private & Confidential  ---------> */}
                        <Home_Private_Confidential />

                        {/* <---------- footer section's ------------> */}
                        <Footer />
                    </>
                )
            }

        </div >
    )
}

export default Home