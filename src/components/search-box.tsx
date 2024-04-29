import { useUserMode } from '@/hooks/useMode';
import React from 'react'
import { IoIosSearch } from "react-icons/io";
interface SearchBoxProps{
    value:string
    onSearch:any
}
export default function SearchBox({value,onSearch}:SearchBoxProps) {
  const {userMode}=useUserMode()
  let placeholder=userMode?"Search ID":"Search topic"
  const handelChange=(e:any)=>{
   
     onSearch(e.target.value)
  }
  return (
    <div className='py-6 px-4 flex relative'>
        <span className='absolute top-8 left-6'><IoIosSearch /></span>
        <input className=' py-1 px-2 rounded-md bg-slate-800 text-slate-400 text-center text-sm' onChange={handelChange} type="text" placeholder={placeholder}/>
        
    </div>
  )
}
