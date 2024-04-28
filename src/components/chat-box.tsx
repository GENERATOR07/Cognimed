
import { useUserMode } from '@/hooks/useMode'
import React from 'react'

export default function ChatBox() {
  const {userMode}=useUserMode()
  return (
    <div className="bg-blue-950 flex-1  ">
      {userMode?"userMode":"docs mode"}
      chatbox</div>
  )
}
