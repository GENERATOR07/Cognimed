import { User } from "@/dummy/menu-data";
import { useChatDetails } from "@/hooks/useChatDetails";
import React from "react";
interface UserListProps {
  data: User[];
}
interface UserListItemProps {
  id: number;
  name: string;
  lastMessage: string;
}
const UserListItem = ({ id, name, lastMessage }: UserListItemProps) => {
  const { chatDetails, setChatDetails } = useChatDetails();
  const handelClick = () => {
    setChatDetails({ id, name, topic: "" });
  };
  let selected =
    chatDetails?.id === id && chatDetails?.name === name ? "bg-gray-800" : "";
  return (
    <button
      onClick={handelClick}
      className={`flex flex-col gap-1 px-4 py-2 ${selected} hover:bg-gray-800`}
    >
      <span className="text-sm">{name}</span>
      <span className="text-xs">{lastMessage}</span>
    </button>
  );
};

export default function UserList({ data }: UserListProps) {
  return (
    <div className="flex flex-col py-2 gap-4 font-light">
      {data.map((data: User) => (
        <UserListItem
          key={data.id}
          id={data.id}
          name={data.name}
          lastMessage={data.lastMessage}
        />
      ))}
    </div>
  );
}
