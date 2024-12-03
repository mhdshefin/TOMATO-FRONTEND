import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { storeContext } from '../../Context/storeContext'
import { useNavigate } from 'react-router-dom'



const FoodItem = ({ id, name, price, image, description }) => {
  
  const navigate = useNavigate()
  const url = "https://tomato-backend-3e3n.onrender.com"
  
  
  const { cartItems,addToCart,removeFromCart,token,setShowLogin} = useContext(storeContext)
  console.log(token);

  
  
  return (
    
    <div className='fooditem'>
      <div className="fooditem-img-container">
        <img className='fooditem-img' src={`${url}/images/`+image} alt="" />
        
        {!cartItems[id]
        ?<img onClick={()=>{!token?setShowLogin(true):addToCart(id)}} src={assets.add_icon_white} alt="" className="add" />
         :<div className='food-item-counter'>
          <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
          <p>{cartItems[id]}</p>
          <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
         </div>
        }
      </div>
      <div className="fooditem-info">
        <div className="fooditem-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='fooditem-description'>{description}</p>
        <p className='fooditem-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem