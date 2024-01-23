import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import WishlistProvider from './context/WishlistContext.jsx'
import {HelmetProvider} from 'react-helmet-async'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <WishlistProvider>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>

    </WishlistProvider>


  </React.StrictMode>,
)
