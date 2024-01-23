import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../context/WishlistContext'
import './index.scss'
const Card = ({ image, text, price, product,id }) => {
    const { addWish } = useContext(WishlistContext)
    return (
        <>
            <div className="CardArea">
                <div className="CardImage">
                    <img src={image} alt="" />
                </div>
                <div className="CardText">
                    <h1>{text}</h1>
                </div>
                <div className="CardPrice">
                    <p>${price}</p>
                </div>
                <div className="CardIcon">
                    <div className='heart' onClick={() => addWish(product)}> <i class="fa-solid fa-heart"></i></div>
                    <Link to={`/${id}`}><i class="fa-solid fa-eye"></i></Link>

                </div>
            </div>
        </>
    )
}

export default Card