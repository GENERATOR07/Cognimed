import React from 'react'
interface SearchBoxProps{
    value:string
    onSearch:any
}
export default function SearchBox({value,onSearch}:SearchBoxProps) {
    
  const handelChange=(e:any)=>{
   
     onSearch(e.target.value)
  }
  return (
    <div>
        <input className='text-black' onChange={handelChange} type="text" placeholder='enter id or name'/>
        <span>search</span>
    </div>
  )
}
