import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { DefaultLayout } from './components/templates/DefaultLayout';

const MOCK_USERS = [
  {
    id: 1,
    name: 'hoge',
    imageUrl: 'images/anton-kraev-TuU5tODcrzU-unsplash.jpg',
    mail: 'hoge@example.com',
    tel: '090-XXXX-XXXX',
    company: { name: 'hoge company' },
    website: 'hoge-web@example.com',
  },
  {
    id: 2,
    name: 'fuga',
    imageUrl: 'images/logo192.png',
    mail: 'fuga@example.com',
    tel: '080-XXXX-XXXX',
    company: { name: 'fuga company' },
    website: 'fuga-web@example.com',
  },
];

export const App: React.FC<Record<string, unknown>> = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <SearchInput />
        {MOCK_USERS.map((user) => {
          return <UserCard key={user.id} user={user}></UserCard>;
        })}
      </DefaultLayout>
    </BrowserRouter>
  );
};
