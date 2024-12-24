import React, { useContext, useEffect, useState } from 'react'
import './fooddisplay.css'
import { storeContext } from '../../Context/storeContext'
import FoodItem from '../foodItem/FoodItem'



const FoodDisplay = ({ category, setShowlogin }) => {


    const { foodList, visible, search } = useContext(storeContext)
    const [Food, setFood] = useState([])

    const filteredFood = () => {
        let foodCopy = foodList.slice()

        if (search && visible) {
            foodCopy = foodCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFood(foodCopy)
    }

    useEffect(() => {
        filteredFood()
    }, [search, visible, foodList])

    return (
        <div className='foodDisplay' id='foodDisplay'>
            <h1>Top dishes near you</h1>
            <div className="food-display-list">
                {Food.map((item, index) => {
                    if (category === 'All' || category === item.category) {
                        console.log(item.image);
                        
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay