import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { UserContext } from '../../providers/UserProvider';
import { SecondaryButton } from '../atoms/buttons/SecondaryButton';

export const Top: React.FC<Record<string, unknown>> = () => {
  const history = useHistory();

  const { setUserInfo } = useContext(UserContext);

  const clickAdminHandler = () => {
    setUserInfo({ isAdmin: true });
    history.push('/users');
  };
  const clickGeneralHandler = () => {
    setUserInfo({ isAdmin: false });
    history.push('/users');
  };

  return (
    <SContainer>
      <h2>React atomic-designの練習TOPページ</h2>
      <SecondaryButton click={() => clickAdminHandler()}>
        管理者ユーザー
      </SecondaryButton>
      <SecondaryButton click={() => clickGeneralHandler()}>
        一般ユーザー
      </SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
