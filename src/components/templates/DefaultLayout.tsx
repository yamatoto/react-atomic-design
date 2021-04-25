import React from 'react';
import { Footer } from '../atoms/layouts/Footer';
import { Header } from '../atoms/layouts/Header';

type Props = {
  children: React.ReactNode;
};

export const DefaultLayout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
