import React, { useEffect, useState, useContext } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Explore from '../../Components/explore-menu/Explore'
import FoodDisplay from '../../Components/foodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'
import SearchBar from '../../Components/Search/SearchBar'


const Home = ({ setShowlogin }) => {
  const [category, setCategory] = useState('All')


  return (
    <div className='home'>
      <Header />
      <Explore category={category} setCategory={setCategory} />
      <SearchBar />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home