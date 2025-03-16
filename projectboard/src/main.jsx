import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './html/Router.jsx'
import Navbar from './components/Navbar.jsx'
import "./css/Navbar.css"
import "./css/General.css"
import { QueryClient,  QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient();

// Main file for frontend, add HTML that'll be used by all pages like Navbar or required to navigate to them like Router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Navbar />
          <Router />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)