import React from 'react'
import { Helmet } from 'react-helmet-async'
import Arrival from '../../Components/Arrival'
import Header from '../../Components/Header'
import Product from '../../Components/Products'
import Watch from '../../Components/Watch'
import WatchTwo from '../../Components/WatchTwo'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header/>
      <Arrival/>
      <Product/>
      <Watch/>
      <WatchTwo/>
    </div>
  )
}

export default Home