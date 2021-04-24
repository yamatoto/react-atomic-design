import React, { memo } from 'react';
import styled from 'styled-components';
import { Card } from '../../atoms/cards/Card';
import { UserIconWithName } from '../../molecules/user/UserIconWithName';

type Props = {
  user: {
    name: string;
    imageUrl: string;
    mail?: string;
    tel?: string;
    company?: { name: string };
    website?: string;
  };
};

export const UserCard: React.FC<Props> = memo(({ user }) => {
  console.log('UserCard');
  const { name, imageUrl, mail, tel, company, website } = user;
  return (
    <Card>
      <UserIconWithName name={name} imageUrl={imageUrl}></UserIconWithName>
      <SDL>
        <div>
          <dt>メール</dt>
          <dd>{mail}</dd>
        </div>
        <div>
          <dt>TEL</dt>
          <dd>{tel}</dd>
        </div>
        <div>
          <dt>会社名</dt>
          <dd>{company?.name}</dd>
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
      width: 50px;
    }
    dd {
      margin-left: 15px;
      overflow-wrap: anywhere;
    }
  }
`;
