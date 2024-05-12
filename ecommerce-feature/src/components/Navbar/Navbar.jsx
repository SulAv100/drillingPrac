import React from 'react'
import logo from '../../assets/logo.png'
import {Link, Route, Routes} from 'react-router-dom'
import ImageSlider from '../ImageSlider/ImageSlider'
import About from '../About/About'
import CartSlider from '../CartSlider/CartSlider'
import './Navbar.css'

function Navbar() {
  return (
    <>
        <nav>
            <div className="navbar-element">
                <div className="left-element">
                    <span><img src={logo} alt="" /> </span>
                </div>
                <div className="middle-element">
                    <Link className='span' to='/'>Home</Link>
                    <Link className='span' to='/about'>About</Link>
                </div>
                <div className="right-element">
                    <span>Login</span>
                    <Link to='/cartslider'><i className="fa-solid fa-cart-shopping"></i></Link>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<ImageSlider/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/cartslider' element={<CartSlider/>}/>
            </Routes>
            
        </nav>
    </>
)
}

export default Navbar