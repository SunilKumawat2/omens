import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const Protected_Routes = (props) => {
    const {Component} = props
    const navigate = useNavigate();
    useEffect(() => {
        let User_Login = localStorage.getItem("user_is_active")
        if(User_Login){
         navigate("/")
        }
       
    },[navigate])
  return (
    <div>
    <Component/>
    </div>
  )
}

export default Protected_Routes