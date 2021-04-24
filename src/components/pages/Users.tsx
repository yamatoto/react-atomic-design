import React from 'react';
import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

const MOCK_USERS = Array(10)
  .fill(null)
  .map((_, idx) => ({
    id: idx,
    name: 'hoge' + idx,
    imageUrl: 'images/anton-kraev-TuU5tODcrzU-unsplash.jpg',
    mail: `hoge${idx}@example.com`,
    tel: '090-XXXX-XXXX',
    company: { name: `hoge${idx} company` },
    website: `hoge${idx}-web@example.com`,
  }));

export const Users: React.FC<Record<string, unknown>> = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {MOCK_USERS.map((user) => {
          return <UserCard key={user.id} user={user}></UserCard>;
        })}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
