import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';
import { SecondaryButton } from '../atoms/buttons/SecondaryButton';
import { UserContext } from '../../providers/UserProvider';
import { useFetchUsers } from '../hooks/useFetchUsers';

export const Users: React.VFC<Record<string, unknown>> = () => {
  const { fetchUsers, users, setId, id, loading, error } = useFetchUsers();
  const { userInfo, setUserInfo } = useContext(UserContext);

  const clickSwitchHandler = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setId(event.target.value);

  const clickSearchHandler = () => fetchUsers();

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput
        clickSearch={clickSearchHandler}
        inputValue={id}
        changeInput={(event) => changeInputHandler(event)}
      />
      <SecondaryButton click={clickSwitchHandler}>切り替え</SecondaryButton>
      {error ? (
        <>
          <p style={{ color: 'red' }}>データの取得に失敗しました</p>
          <br />
        </>
      ) : null}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <SUserArea>
            {users.map((user) => (
              <UserCard key={user.id} user={user}></UserCard>
            ))}
          </SUserArea>
        </>
      )}
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
