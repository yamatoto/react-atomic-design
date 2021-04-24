import React from 'react';
import './App.css';
import { Router } from './routers/Router';

export const App: React.FC<Record<string, unknown>> = () => {
  return <Router />;
};
