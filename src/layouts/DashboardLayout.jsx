import React from 'react'
import Dnavbar from '../Components/Admin/Dnavbar'
import Dsidebar from '../Components/Admin/Dsidebar'
import { Outlet } from 'react-router-dom'
import Title from '../Components/Admin/Title'

const DashboardLayout = () => {
  return (
    <div className='flex '>
    <Dsidebar/>
    <div className='flex flex-col flex-1 h-screen'>
    <Dnavbar/>
   
      <div className='bg-slate-100 z-10 h-screen w-90% pt-4'>
              <Outlet />
            </div>
       
     </div>
    </div>
  )
}

export default DashboardLayout
