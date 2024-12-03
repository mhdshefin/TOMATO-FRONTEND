import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { storeContext } from '../../Context/storeContext'
import { useNavigate } from 'react-router-dom'


const Cart = () => {

  const { foodList, cartItems, removeFromCart ,getTotalCartAmount,url} = useContext(storeContext)
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
      <div className="cart-items-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      {foodList.map((item,index)=>{
        if(cartItems[item._id]>0){
          
          return (
            <React.Fragment key={item._id}>
            <div className="cart-items-title cart-items-item">
              <img src={url+"/images/"+item.image} alt="" />
              <p>{item.name}</p>
              <p className='p-tag'>${item.price}</p>
              <p className='p-tag'>{cartItems[item._id]}</p>
              <p className='p-tag'>${item.price*cartItems[item._id]}</p>
              <p className='cross p-tag' onClick={()=>{removeFromCart(item._id)}}>X</p>
            </div>
            <hr />
            </React.Fragment>
          )
        }
      })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>free</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>${getTotalCartAmount()}</b>
            </div>
          </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHEKOUT</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code , Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart