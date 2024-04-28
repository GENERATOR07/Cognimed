import { User} from '@/dummy/menu-data'
import React from 'react'
interface UserListProps{
    data:User[]
}
interface UserListItemProps{
    id:number,
    name:string,
    lastMessage:string
}
const UserListItem=({id,name,lastMessage}:UserListItemProps)=>{
    return <button className='flex flex-col gap-1 px-4 py-2' key={id}>
              <span className='text-sm'>{name}</span>
            <span className='text-xs'>{lastMessage}</span>
        </button>
}

export default function UserList({data}:UserListProps) {
  return<div className='flex flex-col py-2 gap-4'>
    {
        data.map((data:User)=><UserListItem id={data.id} name={data.name} lastMessage={data.lastMessage}/>)
    }
  </div>
  
}
