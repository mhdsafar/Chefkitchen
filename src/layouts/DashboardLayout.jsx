import React from 'react'
import Dnavbar from '../Components/Admin/Dnavbar'
import Dsidebar from '../Components/Admin/Dsidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='flex'>
    <Dsidebar/>
    <div className='flex flex-col flex-1 h-screen'>
    <Dnavbar/>
    
<div className='flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto'>
            <Outlet/>
        </div>
     </div>
    </div>
  )
}

export default DashboardLayout
