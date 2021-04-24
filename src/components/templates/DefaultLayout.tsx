import React from 'react';
import { Footer } from '../atoms/layouts/Footer';
import { Header } from '../atoms/layouts/Header';

export const DefaultLayout: React.FC<Record<string, unknown>> = ({
  children,
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
