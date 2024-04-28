import { useMenuData } from '@/hooks/useMenuData'
import { useUserMode } from '@/hooks/useMode'
import React from 'react'
import UserList from './user-list'
import { ResearchTopic, User } from '@/dummy/menu-data'
import ReasearchList from './research-list'


export default function Menu() {
  const {userMode}=useUserMode()
  const data=useMenuData("")
 
  return (
    <div className="bg-black w-[300px] flex flex-col ">
       <div className='h-14'></div>
       {userMode?<UserList data={data as User[]}/>:<ReasearchList data={data as ResearchTopic[]}/>}
    </div>
  )
}
