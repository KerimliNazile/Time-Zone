import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'
import './index.scss'
const Detail = () => {
  const [deatil, setDetail] = useState()
  const { id } = useParams()
  const fetchDetail = async () => {
    const res = await axios(`http://localhost:3000/sons/${id}`)
    setDetail(res.data)

  }
  useEffect(() => {
    fetchDetail()
  }, [])
  return (
    <>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <div className="Detaill">
        <h1>Detail</h1>
        {deatil ? <>
          <ul>
            <li><img src={deatil.image} alt="" /></li>
            <li>{deatil.text}</li>
            <li>{deatil.price}</li>
          </ul>

        </> : ''}
      </div>

    </>
  )
}

export default Detail