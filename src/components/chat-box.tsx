import { IoSend } from "react-icons/io5";
import { useUserMode } from "@/hooks/useMode";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";
import React, { useState } from "react";
import { useChatDetails } from "@/hooks/useChatDetails";
const DocumentChat = () => {
  const [animation, setAnimation] = useState<string>("animate-spin ");

  setTimeout(() => setAnimation(""), 2000);
  return (
    <div className="flex flex-col gap-8 text-xs h-[470px] py-6 px-4 ">
      <div className="w-[600px] self-end  text-center flex gap-2">
        <p className="w-[500px]  bg-slate-600 p-2 m-1 rounded-t-2xl rounded-l-2xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
        </p>
        <div className="h-7 w-7 rounded-full bg-slate-700 self-end"></div>
      </div>
      <div className="w-[600px] self-start  text-center flex gap-2">
        <div
          className={`h-7 w-7 rounded-full bg-slate-700 self-end ${animation} transition-all delay-200 ease-linear `}
        >
          <FaPlusCircle size={28} />
        </div>
        <p className="w-[500px]  bg-slate-400 p-2 m-1 rounded-t-2xl rounded-r-2xl ">
          www.link1.com/asdsad
          <br />
          www.link2.com/asdsad
          <br />
          www.link3.com/asdsad
          <br />
        </p>
      </div>
    </div>
  );
};
const UserChats = () => {
  return (
    <div className="flex flex-col gap-8 text-xs h-[470px] py-6 px-4 ">
      <div className="w-[600px] self-end  text-center flex gap-2">
        <p className="w-[500px]  bg-slate-600 p-2 m-1 rounded-t-2xl rounded-l-2xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
        </p>
        <div className="h-7 w-7 rounded-full bg-slate-700 self-end"></div>
      </div>
      <div className="w-[600px] self-start  text-center flex gap-2">
        <div className="h-7 w-7 rounded-full bg-slate-700 self-end ">
          <FaPlusCircle size={28} />
        </div>
        <p className="w-[500px]  bg-slate-400 p-2 m-1 rounded-t-2xl rounded-r-2xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloremque
          labore sint, impedit tenetur placeat suscipit illum modi vero illo in
          consequatur incidunt delectus aperiam harum odio cum ducimus quam.
        </p>
      </div>
    </div>
  );
};
export default function ChatBox() {
  const { userMode } = useUserMode();
  const { chatDetails } = useChatDetails();
  let isChatting =
    (userMode && chatDetails!.name!.length > 0) ||
    (!userMode && chatDetails!.topic!.length > 0);
  let BackgroundColor = userMode ? " bg-slate-900" : "bg-gray-200";
  let TextColor = userMode ? "" : "text-black";
  return (
    <div
      className={`bg-gradient-to-r  ${BackgroundColor} flex-1  flex flex-col transition-all delay-200 ${TextColor}`}
    >
      {isChatting ? (
        <>
          <div className="m-2">
            {userMode ? chatDetails?.name : chatDetails?.topic}
          </div>
          <div className="flex items-center gap-4 p-4">
            <div className="h-0 flex-1 border-gray-600 border-t-2"></div>
            <span className="text-sm border-gray-600">Today</span>
            <div className="h-0 flex-1 border-gray-600 border-t-2"></div>
          </div>
          {userMode ? (
            <UserChats key={chatDetails?.id} />
          ) : (
            <DocumentChat key={chatDetails?.id} />
          )}
          <div className="mx-6 my-2 flex items-center gap-2 relative ">
            <span className="absolute right-14 top-3 ">
              <IoSend color="black" />
            </span>
            <input
              placeholder="Type your msg here"
              className=" p-2 bg-slate-300  rounded-xl text-xs flex-1 "
            />
            <button className="h-10 w-10 rounded-full bg-slate-700 p-2">
              <CiMicrophoneOn size={25} />
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
