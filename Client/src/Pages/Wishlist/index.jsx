import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'

import { WishlistContext } from '../../context/WishlistContext'
import './index.scss'
const Wishlist = () => {
  const { wish, deleteWish } = useContext(WishlistContext)
  { console.log(wish) }
  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <h1>Wishlist</h1>
      <div className="Wisho">
        {wish && wish.map(x =>
          <ul className='wish'>
            <li><img src={x.image} alt="" /></li>
            <li>{x.text}</li>
            <li>{x.price}</li>
            <li><button onClick={() => deleteWish(x)}>Delete</button></li>
          </ul>
          // <ul>

          //   <Card key={x._id} id={x._id} image={x.image} text={x.text} price={x.price} />
          // //   <li><button onClick={() => deleteWish(x)}>delete</button></li>
          // </ul>
        )}
      </div>

    </>
  )
}

export default Wishlist