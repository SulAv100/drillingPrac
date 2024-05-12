import React,{useContext, useEffect, useState} from "react";
import "./CartSlider.css";
import { ItemContext } from "../../Context/ItemContext";

function CartSlider() {

  const {laptopName, quantity, setQuantity,cartItem} = useContext(ItemContext);

  const [cartUpdate, setCartUpdate] = useState([]);
  let newArray=[];

  useEffect(()=>{

    const itemsArray = Object.entries(cartItem).map(([name,quantity])=>({
        name, 
        quantity
    }));

    setCartUpdate(itemsArray);
    console.log(cartUpdate);

  },[]);
  return (
    <>
      <aside>
        <div className="sidebar-component">
          <h1>Cart </h1>
          <div className="outer-container">
            {
                cartUpdate.map((item,index)=>{   //while using map on object you need to get object entries in the form of arary
                    return <div key={index} className="item-box">
                    <span>{item.name}</span>
                    <span>{item.quantity}</span>
                    <button>Delete</button>
                </div>
                })
            }
          </div>
        </div>
      </aside>
    </>
  );
}

export default CartSlider;
