import {
  ChatDetailsContext,
  ChatDetailsContextType,
} from "@/context/chatDetailsContext";
import { useContext } from "react";

export const useChatDetails = (): ChatDetailsContextType => {
  const context = useContext(ChatDetailsContext);
  if (!context) {
    throw new Error("useChatDetails must be used within a ChatDetailsProvider");
  }
  return context;
};
