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

type Props = {
  children: React.ReactNode;
};

export const UserProvider: React.VFC<Props> = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ isAdmin: false });
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
