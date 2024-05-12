
import './App.css'
import Navbar from './components/Navbar/Navbar'
import React, {useState} from 'react'
import { ItemContext } from './Context/ItemContext'

function App() {
  const [laptopName, setLaptopName] = useState(['AsusROG', 'AsusTUF', 'AcerNitro5', 'HPVictus', 'LenevoLegion']);
  const [quantity, setQuantity] = useState({});
  const [cartItem, setCartItem] = useState({});


  

  return (
    <>
      <ItemContext.Provider  value={{laptopName, quantity, setQuantity, cartItem, setCartItem}}>
      <Navbar/>
      </ItemContext.Provider>

    </>
  )
}

export default App
