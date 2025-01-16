import React, { useEffect, useState } from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
    const [windowLength, setWindowLength] = useState(window.innerWidth)

    useEffect(()=>{
     setWindowLength(window.innerWidth)   
    })
    return (
        <>
            {windowLength > 450 ? <div className='Header' id='Header'>
                <div className='header-contents'>
                    <h2>Order your favourite food here</h2>
                    <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your cravings and elevate your dinning exprerience. One delicious meel at a time </p>
                    <a href="#explore-menu"><button  >View Menu</button></a>
                </div>
            </div> :
                <div className='header-mobile'>
                    <img src={assets.header_mobile} alt="" />
                </div>
            }

        </>
    )
}

export default Header