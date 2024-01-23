import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FormAdd from '../../Components/FormAdd'
import {Helmet} from 'react-helmet-async'
import './indx.scss'
const Add = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [proporty, setProporty] = useState(null)
  async function getData() {
    const res = await axios("http://localhost:3000/sons")
    setData(res.data)
  }
  async function deleteData(id) {
    const res = await axios.delete(`http://localhost:3000/sons/${id}`)
    getData()
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
    <Helmet>
      <title>Add Page</title>
    </Helmet>
      <FormAdd getData={getData} />
      <div className="filter">
        <input className='searh' type="search" value={search} placeholder='search' onChange={(e) => setSearch(e.target.value)} />

        <button onClick={() => setProporty({ name: "text", asc: null })}>Default</button>
        <button onClick={() => setProporty({ name: "text", asc: true })}>A-Z</button>
        <button onClick={() => setProporty({ name: "text", asc: false })}>Z-A</button>
        <button onClick={() => setProporty({ name: "price", asc: true })}>INC</button>
        <button onClick={() => setProporty({ name: "price", asc: false })}>DEC</button>

      </div>
      <table>
        <thead>
          <tr>
            <td>Image</td>
            <td>Text</td>
            <td>Price</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {data && data

            .filter(x => x.text.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
              if (proporty && proporty.asc === true) {
                return (a[proporty.name] < b[proporty.name]) ? -1 : ((b[proporty.name] < a[proporty.name]) ? 1 : 0)
              } else if (proporty && proporty.asc === false) {
                return (a[proporty.name] > b[proporty.name]) ? -1 : ((b[proporty.name] > a[proporty.name]) ? 1 : 0)
              } else {
                return 0;
              }


            })








            .map(x =>
              <tr>
                <th><img src={x.image} alt="" /></th>
                <th>{x.text}</th>
                <th>{x.price}</th>
                <th><button onClick={()=> deleteData(x._id)}>Delete</button></th>
              </tr>

            )}
        </tbody>
      </table>
    </>
  )
}

export default Add