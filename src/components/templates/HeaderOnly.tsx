import React from 'react';
import { Header } from '../atoms/layouts/Header';

export const HeaderOnly: React.FC<Record<string, unknown>> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
