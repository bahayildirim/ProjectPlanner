import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './html/Router.jsx'
import Navbar from './html/Navbar.jsx'
import "./css/Navbar.css"
import "./css/General.css"

// Main file for frontend, add HTML that'll be used by all pages like Navbar or required to navigate to them like Router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
)