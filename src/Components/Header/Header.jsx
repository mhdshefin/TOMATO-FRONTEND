import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='Header' id='header'>
            <div className="header-contents">
                <h2>Order your favourite food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your cravings and elevate your dinning exprerience. One delicious meel at a time </p>
                <a href="#explore-menu"><button  >View Menu</button></a>
            </div>
        </div>
    )
}

export default Header