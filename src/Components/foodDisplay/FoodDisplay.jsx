import React, { useContext } from 'react'
import './fooddisplay.css'
import { storeContext } from '../../Context/storeContext'
import FoodItem from '../foodItem/FoodItem'



const FoodDisplay = ({ category,setShowlogin }) => {


    const { foodList } = useContext(storeContext)
  
    return (
        <div className='foodDisplay' id='foodDisplay'>
            <h1>Top dishes near you</h1>
            <div className="food-display-list">
                {foodList.map((item, index) => {
                    
                    if (category === 'All' || category === item.category) {
                        return <FoodItem  key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay