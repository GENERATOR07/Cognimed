'use client'
import React, { createContext, useState } from 'react';

interface UserModeContextType {
  userMode: boolean;
  toggleUserMode: () => void;
}

interface UserModeProviderProps {
  children: React.ReactNode; 
}

export const UserModeContext = createContext<UserModeContextType | undefined>(undefined);

export const UserModeProvider: React.FC<UserModeProviderProps> = ({ children }) => {
  const [userMode, setUserMode] = useState<boolean>(true);

  const toggleUserMode = () => {
    setUserMode((prevMode) => !prevMode);
  };

  return (
    <UserModeContext.Provider value={{ userMode, toggleUserMode }}>
      {children}
    </UserModeContext.Provider>
  );
};


