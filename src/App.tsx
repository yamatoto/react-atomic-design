import React from 'react';
import './App.css';
import { UserProvider } from './providers/UserProvider';
import { Router } from './routers/Router';

export const App: React.FC<Record<string, unknown>> = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
};
