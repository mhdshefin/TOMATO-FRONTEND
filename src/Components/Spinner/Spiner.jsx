import React from 'react'
import { ClipLoader } from 'react-spinners'
import './spiner.css'

const cssOfSpinner = {
    borderWidth: "5px",
}

const Spiner = () => {
  return (
    <div>
        <div className='spinner-container'>
          <ClipLoader color='tomato' size={130} cssOverride={cssOfSpinner} />
        </div> 
    </div>
  )
}

export default Spiner