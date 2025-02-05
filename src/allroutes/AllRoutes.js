import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Astrologer_Register from '../auth/astrologer_register/Astrologer_Register'
import Home from '../components/pages/home/Home'
import User_Login from '../auth/user_login/User_Login'
import User_Register from '../auth/user_register/User_Register'
import User_Login_Otp_Verify from '../auth/user_login_otp_verify/User_Login_Otp_Verify'
import User_Register_Otp_Verify from '../auth/user_register_otp_verify/User_Register_Otp_Verify'
import User_DashBaord_DashBoard from '../components/pages/user_dashboard/user_dashbaord_dashboard/User_DashBaord_DashBoard'
import User_Dashboard_Profile from '../components/pages/user_dashboard/user_dashboard_profile/User_Dashboard_Profile'
import User_Dashboard_Orders from '../components/pages/user_dashboard/user_dashboard_orders/User_Dashboard_Orders'
import User_Dashboard_Wishlist from '../components/pages/user_dashboard/user_dashboard_wishlist/User_Dashboard_Wishlist'
import User_Dashboard_Address from '../components/pages/user_dashboard/user_dashboard_address/User_Dashboard_Address'
import User_Dashboard_Change_Password from '../components/pages/user_dashboard/user_dashboard_change_password/User_Dashboard_Change_Password'
import Protected_Routes from '../protected_routes/Protected_Routes'
import User_Dashboard_Logout from '../components/pages/user_dashboard/user_dashboard_logout/User_Dashboard_Logout'
import Protected_Routes_without_Login from '../protected_routes/Protected_Routes_without_Login'
import Product_Details from '../components/pages/product_details/Product_Details'
import Free_Kundli from '../components/pages/kundli/free_kundli/Free_Kundli'
import Daily_Horoscope from '../components/pages/kundli/daily_horoscope/Daily_Horoscope'
import Daily_Horoscope_Details from '../components/pages/kundli/daily_horoscope_details/Daily_Horoscope_Details'
import Daily_Panchang from '../components/pages/kundli/daily_panchang/Daily_Panchang'
import Love_Calculator from '../components/pages/kundli/love_calculator/Love_Calculator'
import User_Dashboard_Order_Details from '../components/pages/user_dashboard/user_dashbaord_order_details/User_Dashboard_Order_Details'
import User_dashbaord_Add_New_Address from '../components/pages/user_dashboard/user_dashboard_address/User_dashbaord_Add_New_Address'
import Kundli_Matching from '../components/pages/kundli/kundli_matching/Kundli_Matching'
import Wow_Animation from '../wow_animation/Wow_Animation'
import Astrologer_List from '../components/pages/astrologer/astrologer_list/Astrologer_List'
import Sub_Category_List from '../components/pages/category/sub_category_list/Sub_Category_List'
import Terms_Conditions from '../components/pages/terms_conditions/Terms_Conditions'
import Privacy_Policy from '../components/pages/privacy_policy/Privacy_Policy'
import Product_List from '../components/pages/product/Product_List'
import Cart from '../components/pages/cart/Cart'
import Order_Place from '../components/pages/order_place/Order_Place'
import Astrologer_Details from '../components/pages/astrologer/Astrologer_Details'
import Astrologer_Register_Otp_Verify from '../auth/astrologer_register_otp_verify/Astrologer_Register_Otp_Verify'
import Book_Pooja_List from '../components/pages/pooja/book_pooja_list/Book_Pooja_List'
import Astrologer_Profile from '../components/pages/astrologer/astrologer_profile/Astrologer_Profile'
import Astrologer_Login from '../auth/astrologer_login/Astrologer_Login'
import Astrologer_Home_Page from '../components/pages/astrologer/astrologer_home_page/Astrologer_Home_Page'
import Astrologer_Login_Otp_Verify from '../auth/astrologer_login_otp_verify/Astrologer_Login_Otp_Verify'
import Astro_Protected_Without_login from '../astro_protected_routes/Astro_Protected_Without_login'
import Book_Pooja_Details from '../components/pages/pooja/book_pooja_details/Book_Pooja_Details'
import Book_Pooja_Payment from '../components/pages/pooja/book_pooja_payment/Book_Pooja_Payment'
import Astrologer_Post_Pooja from '../components/pages/astrologer/astrologer_post_pooja/Astrologer_Post_Pooja'
import Astrologer_My_Pooja_List from '../components/pages/astrologer/astrologer_my_pooja_list/Astrologer_My_Pooja_List'
import Astrologer_New_Pooja_Process_List from '../components/pages/astrologer/astrologer_pooja_process/Astrologer_New_Pooja_Process_List'
import Astrologer_Pooja_Process from '../components/pages/astrologer/astrologer_pooja_process/Astrologer_Pooja_Process'
import Astrologer_Pooja_Complete_List from '../components/pages/astrologer/astrologer_pooja_process/Astrologer_Pooja_Complete_List'
import User_Dashboard_My_Pooja_List from '../components/pages/user_dashboard/user_dashbaord_my_pooja_list/User_Dashboard_My_Pooja_List'
import Astrologer_Save_Profile from '../components/pages/astrologer/astrologer_save_profile/Astrologer_Save_Profile'
import Astrologer_Save_Profile_Update from '../components/pages/astrologer/astrologer_save_profile/Astrologer_Save_Profile_Update'
import Astrologer_Calling_History from '../components/pages/astrologer/astrologer_calling_history/Astrologer_Calling_History'
import Astrologer_Privacy_Policy from '../components/pages/astrologer/astrologer_privacy_policy/Astrologer_Privacy_Policy'
import Astrologer_Terms_Conditions from '../components/pages/astrologer/astrologer_terms_condtions/Astrologer_Terms_Conditions'
import Astro_Protected_LoggedIn from '../astro_protected_routes/Astro_Protected_LoggedIn'
import Home_View_All_Product from '../components/pages/home_page_components/home_view_all_product/Home_View_All_Product'
import Home_Letest_Post_Details from '../components/pages/home_page_components/home_letest_post_details/Home_Letest_Post_Details'
import All_Letest_Post from '../components/pages/all_letest_post/All_Letest_Post'
import About_Us from '../components/pages/about_us/About_Us'
import Disclaimer from '../components/pages/disclaimer/Disclaimer'
import Annanprashan_Muhurat from '../components/shubh_muhurat/annanprashan_muhurat/Annanprashan_Muhurat'
import Naamkaran_Muhurat from '../components/shubh_muhurat/naamkaran_muhurat/Naamkaran_Muhurat'
import Car_Bike_Muhurat from '../components/shubh_muhurat/car_bike_muhurat/Car_Bike_Muhurat'
import Marriage_Muhurat from '../components/shubh_muhurat/marriage_muhurat/Marriage_Muhurat'
import Gold_Buying_Muhurat from '../components/shubh_muhurat/gold_buying_muhurat/Gold_Buying_Muhurat'
import Bhoomi_Pujan_Muhurat from '../components/shubh_muhurat/bhoomi_pujan_muhurat/Bhoomi_Pujan_Muhurat'
import Griha_Pravesh_Muhurat from '../components/shubh_muhurat/griha_pravesh_muhurat.js/Griha_Pravesh_Muhurat'
import Mundan_Muhurat from '../components/shubh_muhurat/mundan_muhurat/Mundan_Muhurat'
import Astrotalk_Reviews from '../components/pages/astrotalk_reviews/Astrotalk_Reviews'
import Astrology_Yoga from '../components/pages/astrology_yoga/Astrology_Yoga'
import Kaalsarp_Doshas from '../components/pages/kaalsarp_doshas/Kaalsarp_Doshas'
import Nakshatras_Constellations from '../components/pages/nakshatras_constellations/Nakshatras_Constellations'
import Numerology from '../components/pages/numerology/Numerology'
import Add_Product_Review from '../components/pages/add_product_review/Add_Product_Review'
import User_Dashbaord_wallet from '../components/pages/user_dashboard/user_dashboard_wallet/User_Dashbaord_wallet'
import User_Dasboard_Wallet_Recharge from '../components/pages/user_dashboard/user_dasboard_wallet_recharge/User_Dasboard_Wallet_Recharge'
import User_Dashboard_Follow_List from '../components/pages/user_dashboard/user_dashboard_follow_list/User_Dashboard_Follow_List'
import Astrologer_Wallet from '../components/pages/astrologer/astrologer_wallet/Astrologer_Wallet'
import Astrologer_Bank_Deatils from '../components/pages/astrologer/astrologer_bank_details/Astrologer_Bank_Deatils'
import App_Privacy_Policy from '../components/pages/app_privacy_policy/App_Privacy_Policy'
import App_Terms_Condtion from '../components/pages/app_terms_condtion/App_Terms_Condtion'
import Festivals from '../components/pages/festivals/Festivals'
import Add_Pooja_Review from '../components/pages/pooja/add_pooja_review/Add_Pooja_Review'
import Geo_Location from '../geo_location/Geo_Location'
import Voice_Call from '../agora/agora_voice_call/Agora_Voice_Call'
import Page_Not_Found from '../page_not_found/Page_Not_Found'
import Astrologer_Agora_Voice_Call from '../components/pages/astrologer/astrologer_agora_voice_call/Astrologer_Agora_Voice_Call'
import Agora_Video_Call from '../agora/agora_video_call/Agora_Video_Call'
import Agora_Chat from '../agora/agora_chat/Agora_Chat'
import Astrologer_Agora_Chat from '../components/pages/astrologer/astrologer_agora_chat/Astrologer_Agora_Chat'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <-------- Routes of the Pages---------> */}
        <Route path='/' element={<Home />} />
        <Route path='/letest_post_details/:id' element={<Home_Letest_Post_Details />} />
        <Route path='/all_letest_post' element={<All_Letest_Post />} />
        <Route path='/about_us' element={<About_Us />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
        {/* <Route path='/annanprashan_muhurat/:id' element={<Annanprashan_Muhurat />} /> */}

        <Route path="/:title/:id" element={<Annanprashan_Muhurat />} />
        <Route path='/naamkaran_muhurat' element={<Naamkaran_Muhurat />} />
        <Route path='/car_bike_muhurat' element={<Car_Bike_Muhurat />} />
        <Route path='/marriage_muhurat' element={<Marriage_Muhurat />} />
        <Route path='/gold_buying_muhurat' element={<Gold_Buying_Muhurat />} />
        <Route path='/bhoomi_pujan_muhurat' element={<Bhoomi_Pujan_Muhurat />} />
        <Route path='/griha_pravesh_muhurat' element={<Griha_Pravesh_Muhurat />} />
        <Route path='/mundan_muhurat' element={<Mundan_Muhurat />} />
        <Route path='/astrotalk_reviews' element={<Astrotalk_Reviews />} />
        <Route path='/astrology_yoga' element={<Astrology_Yoga />} />
        <Route path='/kaalsarp_doshas' element={<Kaalsarp_Doshas />} />
        <Route path='/nakshatras_constellations' element={<Nakshatras_Constellations />} />
        <Route path='/numerology' element={<Numerology />} />
        <Route path='/festivals' element={<Festivals />} />

        {/* <--------- User Auth Section's ----------> */}
        <Route path='/user_login' element={<Protected_Routes Component={User_Login} />} />
        <Route path='/user_register' element={<Protected_Routes Component={User_Register} />} />
        <Route path='/user_login_otp_verify' element={<Protected_Routes Component={User_Login_Otp_Verify} />} />
        <Route path='/user_register_otp_verify' element={<Protected_Routes Component={User_Register_Otp_Verify} />} />

        {/* <------------ user Dashbaord section's --------------> */}
        <Route path='/user_dashBaord' element={<Protected_Routes_without_Login Component={User_DashBaord_DashBoard} />} />
        <Route path='/user_profile' element={<Protected_Routes_without_Login Component={User_Dashboard_Profile} />} />
        <Route path='/user_orders' element={<Protected_Routes_without_Login Component={User_Dashboard_Orders} />} />
        <Route path='/user_orders_details/:id' element={<Protected_Routes_without_Login Component={User_Dashboard_Order_Details} />} />
        <Route path='/user_wishlist' element={<Protected_Routes_without_Login Component={User_Dashboard_Wishlist} />} />
        <Route path='/user_address' element={<Protected_Routes_without_Login Component={User_Dashboard_Address} />} />
        <Route path='/user_add_new_address' element={<Protected_Routes_without_Login Component={User_dashbaord_Add_New_Address} />} />
        <Route path='/user_my_pooja_list' element={<Protected_Routes_without_Login Component={User_Dashboard_My_Pooja_List} />} />
        <Route path='/user_wallet' element={<Protected_Routes_without_Login Component={User_Dashbaord_wallet} />} />
        <Route path='/user_wallet_recharge' element={<Protected_Routes_without_Login Component={User_Dasboard_Wallet_Recharge} />} />
        <Route path='/user_logout' element={<Protected_Routes_without_Login Component={User_Dashboard_Logout} />} />
        <Route path='/add_product_review' element={<Protected_Routes_without_Login Component={Add_Product_Review} />} />
        <Route path='/follow_list' element={<Protected_Routes_without_Login Component={User_Dashboard_Follow_List} />} />
        <Route path='/add_pooja_review' element={<Protected_Routes_without_Login Component={Add_Pooja_Review} />} />
        <Route path='/astrologer_list' element={<Astrologer_List />} />
        <Route path='/astrologer_details/:id' element={<Protected_Routes_without_Login Component={Astrologer_Details} />} />

        {/* <--------- cart section's ----------> */}
        <Route path='/cart' element={<Protected_Routes_without_Login Component={Cart} />} />

        {/* <---------- Product Deatils ------------------------> */}
        <Route path='/product_details' element={<Product_Details />} />
        <Route path='/product_list' element={<Product_List />} />
        <Route path='/home_view_all_product' element={<Home_View_All_Product />} />


        {/* <---------- Astrolger Auth section's ------------> */}
        <Route path='/astrologer_register' element={<Astrologer_Register />} />
        <Route path='/astrologer_register_otp_verify' element={<Astro_Protected_LoggedIn Component={Astrologer_Register_Otp_Verify} />} />
        <Route path='/astrologer_login_otp_Verify' element={<Astro_Protected_LoggedIn Component={Astrologer_Login_Otp_Verify} />} />
        <Route path='/astrologer_login' element={<Astrologer_Login />} />
        <Route path='/astrologer_profile' element={<Astro_Protected_LoggedIn Component={Astrologer_Profile} />} />
        <Route path='/astrologer_home' element={<Astro_Protected_Without_login Component={Astrologer_Home_Page} />} />
        <Route path='/astrologer_post_pooja' element={<Astro_Protected_Without_login Component={Astrologer_Post_Pooja} />} />
        <Route path='/astrologer_my_pooja_list' element={<Astro_Protected_Without_login Component={Astrologer_My_Pooja_List} />} />
        <Route path='/astrologer_new_Pooja_process_list' element={<Astro_Protected_Without_login Component={Astrologer_New_Pooja_Process_List} />} />
        <Route path='/astrologer_pooja_process' element={<Astro_Protected_Without_login Component={Astrologer_Pooja_Process} />} />
        <Route path='/astrologer_pooja_complete_list' element={<Astro_Protected_Without_login Component={Astrologer_Pooja_Complete_List} />} />
        <Route path='/astrologer_save_profile' element={<Astro_Protected_Without_login Component={Astrologer_Save_Profile} />} />
        <Route path='/astrologer_calling_history' element={<Astro_Protected_Without_login Component={Astrologer_Calling_History} />} />
        <Route path='/astrologer_privacy_policy' element={<Astro_Protected_Without_login Component={Astrologer_Privacy_Policy} />} />
        <Route path='/astrologer_terms_conditions' element={<Astro_Protected_Without_login Component={Astrologer_Terms_Conditions} />} />
        <Route path='/astrologer_bank_details' element={<Astro_Protected_Without_login Component={Astrologer_Bank_Deatils} />} />
        {/* <Route path='/astrologer_agora_voice_call' element={<Astro_Protected_Without_login Component={Astrologer_Agora_Voice_Call} />} /> */}
        <Route path='/astrologer_agora_voice_call' element={<Astrologer_Agora_Voice_Call/>} />
        <Route path='/astrologer_save_Profile_update' element={<Astrologer_Save_Profile_Update />} />
        <Route path='/astrologer_wallet' element={<Astrologer_Wallet />} />
        <Route path='/astrologer_agora_chat' element={<Astro_Protected_Without_login Component={Astrologer_Agora_Chat} />} />

        {/* <----------- kundli section's ----------------> */}
        <Route path='/free_kundli' element={<Free_Kundli />} />
        <Route path='/daily_horoscope' element={<Daily_Horoscope />} />
        <Route path='/daily_horoscope_details' element={<Daily_Horoscope_Details />} />
        <Route path='/daily_panchang' element={<Daily_Panchang />} />
        <Route path='/love_calculator' element={<Love_Calculator />} />
        <Route path='/kundli_matching' element={<Kundli_Matching />} />

        {/* <--------- category section's ----------> */}
        <Route path='/sub_category_list' element={<Sub_Category_List />} />

        {/* <------ Terms & condtion's and Privacy and policy page ---------> */}
        <Route path='/terms_conditions' element={<Terms_Conditions />} />
        <Route path='/privacy_policy' element={<Privacy_Policy />} />

        {/* <------- app Terms & Condtions and Privacy and Policy -------> */}
        <Route path='/app_privacy_policy' element={<App_Privacy_Policy />} />
        <Route path='/app_terms_conditions' element={<App_Terms_Condtion />} />

        {/* <--------- Order Place ---------------> */}
        <Route path='/order_place' element={<Order_Place />} />

        {/* <--------- Pooja section's -----------> */}

        <Route path='/book_pooja_list' element={<Book_Pooja_List />} />
        <Route path='/book_pooja_details' element={<Book_Pooja_Details />} />
        <Route path='/book_pooja_payment' element={<Protected_Routes_without_Login Component={Book_Pooja_Payment} />} />


        {/* <--------- agora --------> */}
        <Route path='/Geo_Location' element={<Geo_Location />} />
        <Route path='/Voice_Call' element={<Voice_Call />} />
        <Route path='/agora_video_call' element={<Agora_Video_Call />} />
        <Route path='/agora_chat' element={<Agora_Chat />} />
        <Route path='/*' element={<Page_Not_Found />} />
       
      </Routes>
    </div>
  )
}

export default AllRoutes