import React from 'react';
import { Header } from '../atoms/layouts/Header';

type Props = {
  children: React.ReactNode;
};

export const HeaderOnly: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
