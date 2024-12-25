import React, { useContext, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'
import { storeContext } from './Context/storeContext'
import Verify from './Pages/Verify/Verify'
import MyOrders from './Pages/myOrders/MyOrders'
import { ClipLoader } from 'react-spinners'
import { useEffect } from 'react'
import './app.css'

const App = () => {

  const { setShowLogin, showLogin, loading, setLoading } = useContext(storeContext)

  useEffect(() => {
    setLoading(loading)
  }, [loading])

  return (
    <>
      {loading ?
        <div className='spinner-container'>
          <ClipLoader color='tomato' size={100} />
        </div> : <>
          <div className='app'>
            {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
            <div>
              <Navbar setShowLogin={setShowLogin} />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/order' element={<PlaceOrder />} />
                <Route path='/verify' element={<Verify />} />
                <Route path='/myorders' element={<MyOrders />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </>
      }

    </>

  )
}

export default App