import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
      <div>
          <nav><Navbar /></nav>
          <Outlet/>
          
    </div>
  )
}

export default Layout