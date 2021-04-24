import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { SecondaryButton } from '../atoms/buttons/SecondaryButton';

export const Top: React.FC<Record<string, unknown>> = () => {
  const history = useHistory();

  const clickAdminHandler = () =>
    history.push({ pathname: '/users', state: { isAdmin: true } });
  const clickGeneralHandler = () =>
    history.push({ pathname: '/users', state: { isAdmin: false } });

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
