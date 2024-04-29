"use client";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export interface ChatDetailsType {
  id: number;
  name?: string;
  topic?: string;
}

export interface ChatDetailsContextType {
  chatDetails: ChatDetailsType | null;
  setChatDetails: Dispatch<SetStateAction<ChatDetailsType | null>>;
}

const initialChatDetails: ChatDetailsType = {
  id: -1,
  name: "",
  topic: "",
};

export const ChatDetailsContext = createContext<ChatDetailsContextType>({
  chatDetails: initialChatDetails,
  setChatDetails: () => {},
});
interface ChatDetailsProviderProps {
  children: React.ReactNode;
}
export const ChatDetailsProvider: React.FC<ChatDetailsProviderProps> = ({
  children,
}) => {
  const [chatDetails, setChatDetails] = useState<ChatDetailsType | null>(
    initialChatDetails
  );
  return (
    <ChatDetailsContext.Provider value={{ chatDetails, setChatDetails }}>
      {children}
    </ChatDetailsContext.Provider>
  );
};
