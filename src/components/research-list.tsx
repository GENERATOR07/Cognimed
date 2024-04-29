import { ResearchTopic } from "@/dummy/menu-data";
import { useChatDetails } from "@/hooks/useChatDetails";
import React from "react";
interface ResearchListProps {
  data: ResearchTopic[];
}
interface ResearchListItemProps {
  id: number;
  topic: string;
  date: string;
}
const ResearchListItem = ({ id, topic, date }: ResearchListItemProps) => {
  const { chatDetails, setChatDetails } = useChatDetails();
  const handelClick = () => {
    setChatDetails({ id, topic, name: "" });
  };
  let selected =
    chatDetails?.id === id && chatDetails?.topic === topic ? "bg-gray-800" : "";
  return (
    <button
      onClick={handelClick}
      className={`flex flex-col gap-1 px-4 py-2 ${selected} hover:bg-gray-800`}
    >
      <span className="text-sm">{topic}</span>
      <span className="text-xs">{date}</span>
    </button>
  );
};
export default function ReasearchList({ data }: ResearchListProps) {
  return (
    <div className="flex flex-col py-2 gap-4 font-light">
      {data.map((data: ResearchTopic) => (
        <ResearchListItem
          key={data.id}
          id={data.id}
          topic={data.topic}
          date={data.dateOfSearch}
        />
      ))}
    </div>
  );
}
