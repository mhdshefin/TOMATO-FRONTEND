import React, { useRef, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { storeContext } from '../../Context/storeContext'


const Navbar = ({ setShowLogin }) => {
  const menuRef = useRef()
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }


  const [menu, setmenu] = useState("home")
  const { getTotalCartAmount, token, setToken, setVisible, visible } = useContext(storeContext)

  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem("token")
    setToken("");
    navigate("/")
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        scrollToSection('explore-menu')
      }, 300)
    } else {
      scrollToSection('explore-menu')
    }
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const handlelogin = (e) => {
    if (!token) {
      e.preventDefault();
      setShowLogin(true)
    } else {
      navigate('/cart')
    }
  }
  return (
    <div className='Navbar'>
      <Link to={'/'}><img src={assets.logo} alt="" className="logo" /></Link>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={assets.menu} alt="..." />
      <ul ref={menuRef} className="nav-menu">
        <Link to='/' onClick={() => { setmenu("home") }} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => { setmenu("menu") }} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#appDownload' onClick={() => { setmenu("mobile-app") }} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => { setmenu("contact-us") }} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <a href='#explore-menu' onClick={() => handleSearch}><img onClick={() => setVisible(!visible)} src={assets.search_icon} alt="" /></a>
        <div className="navbar-search-icon">
          <Link to={'/cart'} onClick={handlelogin} ><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() <= 0 ? "" : "dot"}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)}>Sign in</button> : <div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className='nav-profile-dropdown'>
            <div>
              <li onClick={() => { navigate("/myorders") }}><img src={assets.bag_icon} alt="" /></li><p onClick={() => { navigate("/myorders") }}>Orders</p>
            </div>
            <hr />
            <div>
              <li onClick={logOut}><img src={assets.logout_icon} alt="" /></li><p onClick={logOut}>Logout</p>
            </div>
          </ul>
        </div>}

      </div>
    </div>
  )
}

export default Navbar