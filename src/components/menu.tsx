import { useUserMode } from '@/hooks/useMode'
import React from 'react'

export default function Menu() {
  const {userMode}=useUserMode()
  return (
    <div className="bg-black w-[300px]">
       {userMode?"userMode":"docs mode"}
      menu</div>
  )
}
