import React, { memo } from 'react';
import styled from 'styled-components';
import { UserType } from '../../../types/user';
import { Card } from '../../atoms/cards/Card';
import { UserIconWithName } from '../../molecules/user/UserIconWithName';

type Props = {
  user: Omit<UserType, 'id' | 'address'>;
};

export const UserCard: React.VFC<Props> = memo(({ user }) => {
  const { name, imageUrl, email, phone, company, website } = user;
  return (
    <Card>
      <UserIconWithName name={name} imageUrl={imageUrl}></UserIconWithName>
      <SDL>
        <div>
          <dt>メール</dt>
          <dd>{email}</dd>
        </div>
        <div>
          <dt>TEL</dt>
          <dd>{phone}</dd>
        </div>
        <div>
          <dt>会社名</dt>
          <dd>{company.name}</dd>
        </div>
        <div>
          <dt>WEB</dt>
          <dd>{website}</dd>
        </div>
      </SDL>
    </Card>
  );
});

UserCard.displayName = 'UserCard';

const SDL = styled.dl`
  div {
    text-align: left;
    display: flex;
    align-items: center;
    padding-bottom: 4px;
    dt {
      min-width: 50px;
    }
    dd {
      margin-left: 15px;
      overflow-wrap: anywhere;
    }
  }
`;
