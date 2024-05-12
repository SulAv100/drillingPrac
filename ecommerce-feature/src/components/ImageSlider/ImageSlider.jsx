import React,{useEffect, useState, useContext} from 'react'
import './ImageSlider.css'
import { ItemContext } from '../../Context/ItemContext';
function ImageSlider() {

  const {laptopName, quantity, setQuantity,cartItem, setCartItem} = useContext(ItemContext);

  

  const handleIncrease = (item)=>{

    setQuantity(prevQuantity=>({
      ...prevQuantity,
      [item]: (prevQuantity[item]||0)+1
    }));
  };

  const handleDecrease = (item)=>{
    setQuantity(prevQuantity=>({
      ...prevQuantity,
      [item]: Math.max((prevQuantity[item]||0)-1,0)// here ,0 acts as a limiter to limit the value from going below 0
    }))
  }

  const uploadItem = (item)=>{
    console.log(item);
    setCartItem(prevItem=>({
      ...prevItem,
       
      [item]: quantity[item]  
    }))
    console.log(cartItem);
  }
  useEffect(() => {
    console.log("CartItem:", cartItem);
  }, [cartItem]);

  

  return (
    <>
            <div className="item-container">
              {
                 laptopName.map((item,index)=>{
                  return  <div key={index} className="single-item">
                <span>{item}</span>
                <span>Price : $900</span>
                <div className="interaction">
                <button className='add-button' onClick={()=>handleDecrease(item)}>-</button>
                <input className='inputValue' value={quantity[item]}  type="text" readOnly />
                <button className='add-button' onClick={()=>handleIncrease(item)} >+</button>
                </div>  
                <button className='submit-button' onClick={()=> uploadItem(item)}>Add to Cart</button>
              
              </div>
            
                  
                })
              }
              
              
            </div>
        
    </>
)
}

export default ImageSlider