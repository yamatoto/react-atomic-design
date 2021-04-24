import React from 'react';
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
  isAdmin: boolean;
};

export const UserCard: React.FC<Props> = ({ user, isAdmin }) => {
  const { name, imageUrl, mail, tel, company, website } = user;
  return (
    <Card>
      <UserIconWithName
        name={name}
        imageUrl={imageUrl}
        isAdmin={isAdmin}></UserIconWithName>
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
};

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
