import React, { useState, useEffect } from 'react'
import Api from '../api'
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";

function Login() {
  let history =  useHistory()
  useEffect(() => {
    handleLogin()
  })
  const handleLogin = async () => {
    let params = {
      phoneNumber: 13799661218,
      password: 'Aa123456',
      client_id: 'plat',
      grant_type: 'phone',
      client_secret: 'plat',
      terminal: 'plat',
      systemType: 'chrome',
      systemVersion: '96.0.4664.55',
    }
    const res:any = await Api.user.login(params)
    Cookies.set('ACCESS_TOKEN' , res.accessToken)

    localStorage.setItem('userToken', res.accessToken)
    if(res.accessToken){
      history.push("/admin/index");
    }
  }
  return (
    <>
      <h3>login</h3>
    </>
  )
}
export default Login
