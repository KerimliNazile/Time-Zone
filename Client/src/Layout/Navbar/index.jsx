import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="navLog">
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp" alt="" />
                </div>
                <div className="Main">
                    <ul id='Navin'>
                        <li><NavLink to={'/home'}>Home</NavLink></li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Latest</li>
                        <li>Blog</li>
                        <li>Pages</li>
                        <li>Contact</li>
                        <li><NavLink to={'/add'}>Add Page</NavLink></li>
                        <li><NavLink to={'/wishlist'}><i class="fa-solid fa-heart"></i></NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar