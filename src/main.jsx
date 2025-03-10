import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import {  HelmetProvider  } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider'


 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <AuthProvider>
   <HelmetProvider>
    <RouterProvider router={routes}></RouterProvider>
    </HelmetProvider>
   </AuthProvider>
  </StrictMode>,
)
