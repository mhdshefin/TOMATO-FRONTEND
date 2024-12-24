import React, { useContext, useEffect, useState } from 'react'
import { storeContext } from '../../Context/storeContext'
import { assets } from '../../assets/assets'
import './searchbar.css'

const SearchBar = () => {

    const { visible, setVisible , search , setSearch } = useContext(storeContext)
    

    return visible ? (
        <div className='searchbar'>
            <div className='search'>
                <input className='search-input' onChange={(e)=>setSearch(e.target.value)} placeholder='Search here...' type="text" />
                <img onClick={()=>setVisible(!visible)} src={assets.cross_icon} alt="" />
            </div>
        </div>
    ) : null
}

export default SearchBar