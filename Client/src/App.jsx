import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './Layout/Main'
import Home from './Pages/HomePage'
import Wishlist from './Pages/Wishlist'
import Add from './Pages/AddPage'
import Detail from './Pages/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='home' element={<Home />}></Route>
          <Route path='wishlist' element={<Wishlist />}></Route>
          <Route path='add' element={<Add />}></Route>
          <Route path='/:id' element={<Detail />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
