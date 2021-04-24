import React, { createContext, useState } from 'react';

export type UserInfo = {
  isAdmin: boolean;
};

export const UserContext = createContext(
  {} as {
    userInfo: UserInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  }
);

export const UserProvider: React.FC<Record<string, unknown>> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState({ isAdmin: false });
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
