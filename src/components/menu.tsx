import { useMenuData } from '@/hooks/useMenuData'
import { useUserMode } from '@/hooks/useMode'
import React, { useState } from 'react'
import UserList from './user-list'
import { ResearchTopic, User } from '@/dummy/menu-data'
import ReasearchList from './research-list'
import SearchBox from './search-box'


export default function Menu() {
  const {userMode}=useUserMode()
  const [searchValue,setSearchValue]=useState<string>("")
  const data=useMenuData(searchValue)
  const handelSearch=(value:string)=>{
    setSearchValue(value)
  }
 
  return (
    <div className="bg-black w-[300px] flex flex-col ">
       <SearchBox onSearch={handelSearch} value={searchValue} />
       {userMode?<UserList data={data as User[]} />:<ReasearchList data={data as ResearchTopic[]}/>}
    </div>
  )
}
