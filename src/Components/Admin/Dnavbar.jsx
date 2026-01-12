import React from 'react'

import { Notification } from '../../constants/icons'
import { Settings, User } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Dnavbar = () => {
  const { user } = useUser();
const { openSignIn } = useClerk();

  return (
    <div className='flex bg-white-500 shadow-md  h-[60px]'>
      
      <div className='flex items-center gap-4 ml-auto mr-4'>
        
           <div className='bg-slate-300 p-1 rounded-full'>
             <Notification className="cursor-pointer  text-amber-500   rounded-full"/>
           </div>
 
{
  !user ? (
    <button
      onClick={openSignIn}
      className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull
      transition rounded-full font-medium cursor-pointer bg-black text-white"
    >
      Login
    </button>
  ) : (
    <div className='flex gap-2 items-center  border-r-2 border-gray-300 pr-2'>
      <UserButton afterSignOutUrl="/admin"  appearance={{
    elements: {
      avatarBox: "w-8 h-8", // Tailwind classes
    },
  }}/>
      <div className='flex flex-col leading-none'>
        <h2 className='font-semibold'>Admin</h2>
        <p className='text-sm   '>Editor</p>
      </div>
    </div>  
  )
}
<Settings className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Dnavbar

