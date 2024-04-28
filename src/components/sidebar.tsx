import React, { useState } from 'react'
import { TiMessage } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useUserMode } from '@/hooks/useMode';





export default function Sidebar() {
   const {userMode,toggleUserMode}=useUserMode()
    
  return (
    <div className="bg-blue-950 w-[70px] flex flex-col justify-between pb-8 items-center">
       
      <div className='flex flex-col items-center '>
      <span className='p-4'> <div className='bg-gray-900 w-10 h-10 rounded-full'></div></span> 
       <span  className='p-4'><TiMessage size={20}/></span>
       <span  className='p-4'><FaRegUser size={20}/></span>
       <span  className='p-4'><IoSettingsOutline size={20}/></span>
      </div>

     <div className='flex flex-col items-center gap-2 '>
        <span className='text-xs'>mode 1</span>
        <button onClick={toggleUserMode} className=' flex flex-col bg-white rounded-2xl p-2 gap-2 w-8 items-center'>

         <div className={`bg-gray-900 w-5 h-5 rounded-full ${userMode ? 'opacity-100' : 'opacity-0'} transition-all  duration-500`} ></div>
         <div className={`bg-blue-700 w-5 h-5 rounded-full ${userMode ? 'opacity-0' : 'opacity-100'} transition-all  duration-500`} ></div>
        </button>
        <span className='text-xs'>mode 2</span>
     </div>
         
      


    </div>
  )
}
