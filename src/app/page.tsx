import ChatBox from "@/components/chat-box";
import Menu from "@/components/menu";
import Sidebar from "@/components/sidebar"


export default function Home() {
  return (
   <div className="flex h-screen w-screen text-white">
   <Sidebar/>
   <Menu/>
   <ChatBox/>
   </div> 
    
  );
}
