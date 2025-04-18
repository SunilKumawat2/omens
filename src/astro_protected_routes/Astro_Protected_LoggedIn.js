import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const Astro_Protected_LoggedIn = (props) => {
    const {Component} = props
    const navigate = useNavigate();
    useEffect(() => {
        let User_Login = localStorage.getItem("astro_is_active")
        let user_token = localStorage.getItem("user_token")
        if(User_Login){
         navigate("/astrologer-home")
        }
      //  if(user_token){
      //   navigate("/astrologer_profile")
      //  }
    },[navigate])
  return (
    <div>
    <Component/>
    </div>
  )
}

export default Astro_Protected_LoggedIn