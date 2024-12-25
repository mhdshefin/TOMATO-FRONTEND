import React, { useContext, useEffect, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import { storeContext } from '../../Context/storeContext'
import axios from 'axios'

const LoginPopUp = ({ setShowLogin }) => {

    const { url, setToken, setLoading } = useContext(storeContext)
    const [currentState, setCurrentState] = useState('Sign Up')

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData((data) => ({ ...data, [name]: value }))
    }


    const onLogin = async (event) => {
        event.preventDefault()

        let newUrl = url;

        if (currentState === "Login") {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl, data)
        setLoading(true)
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
            setLoading(false)
        }
        else {
            alert(response.data.message)
        }
    }


    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => { setShowLogin(false) }} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currentState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Your Password' required />
                </div>
                <button type='submit'>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree the term of use & privacy policy.</p>
                </div>
                {
                    currentState === "Login" ?
                        <p>Creat a new accouny?<span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
                        : <p>Already have an account?<span onClick={() => setCurrentState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopUp