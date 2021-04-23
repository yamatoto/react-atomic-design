import React from 'react';
import './App.css';
import { SearchInput } from './components/molecules/SearchInput';

export const App: React.FC<Record<string, unknown>> = () => {
  return (
    <div className="App">
      <SearchInput />
    </div>
  );
};
