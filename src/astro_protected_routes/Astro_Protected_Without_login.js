import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const Astro_Protected_Without_login = (props) => {
    const { Component } = props
    const navigate = useNavigate();
    useEffect(() => {
        let User_Login = localStorage.getItem("astro_is_active")
        let profile_step = localStorage.getItem("profile_step")
        if (!User_Login) {
            navigate("/astrologerlogin")
        }
      
        if(profile_step == "1"){
            navigate("/astrologer-profile")
       }  
        if(profile_step == "2"){
            navigate("/astrologer-profile")
       }  
    //     if(profile_step == "3"){
    //         navigate("/astrologer_home")
    //    }  
       
      
    }, [navigate])
    return (
        <div>
            <Component />
        </div>
    )
}

export default Astro_Protected_Without_login