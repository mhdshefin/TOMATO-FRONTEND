import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Explore from '../../Components/explore-menu/Explore'
import FoodDisplay from '../../Components/foodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = ({setShowlogin}) => {
  const [category,setCategory] = useState('All')
  return (
    <div className='home'>
      <Header/>
      <Explore category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home