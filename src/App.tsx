import React from 'react';
import './App.css';
import { PrimaryButton } from './components/atoms/buttons/PrimaryButton';
import { SecondaryButton } from './components/atoms/buttons/SecondaryButton';

export const App: React.FC<Record<string, unknown>> = () => {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
};
