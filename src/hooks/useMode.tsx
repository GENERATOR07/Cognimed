'use client'
import { UserModeContext } from "@/context/modeContext";
import { useContext } from "react";

export const useUserMode = () => {
    const context = useContext(UserModeContext);
    if (!context) {
      throw new Error('useUserMode must be used within a UserModeProvider');
    }
    return context;
  };