import React, { useContext, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';
import { SecondaryButton } from '../atoms/buttons/SecondaryButton';
import { UserContext } from '../../providers/UserProvider';
import { UserType } from '../../types/User';

export const Users: React.FC<Record<string, unknown>> = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [id, setId] = useState('');
  const [users, setUsers] = useState<UserType[]>([]);

  const clickSwitchHandler = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  const clickSearchHandler = () => {
    const queryParam = id === '' ? '' : `?id=${id}`;
    axios
      .get<UserType[]>(
        `https://jsonplaceholder.typicode.com/users${queryParam}`
      )
      .then(({ data }) => setUsers(data))
      .catch((err) => alert(err));
  };

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setId(event.target.value);

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput
        clickSearch={clickSearchHandler}
        inputValue={id}
        changeInput={(event) => changeInputHandler(event)}
      />
      <br />
      <SecondaryButton click={clickSwitchHandler}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => {
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;
