import { ResearchTopic } from '@/dummy/menu-data'
import React from 'react'
interface ResearchListProps{
    data:ResearchTopic[]
}
interface ResearchListItemProps{
    id:number,
    topic:string,
    date:string
}
const ResearchListItem=({id,topic,date}:ResearchListItemProps)=>{
    return<button className='flex flex-col gap-1 px-4 py-2' key={id}>
    <span className='text-sm'>{topic}</span>
  <span className='text-xs'>{date}</span>
</button>
}
export default function ReasearchList({data}:ResearchListProps) {
    return<div className='flex flex-col py-2 gap-4'>
    {
        data.map((data:ResearchTopic)=><ResearchListItem id={data.id} topic={data.topic} date={data.dateOfSearch}/>)
    }
  </div>
}
