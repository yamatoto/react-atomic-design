import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../providers/UserProvider';

type Props = {
  name: string;
  imageUrl?: string;
};
export const UserIconWithName: React.FC<Props> = memo(
  ({ name, imageUrl = 'images/anton-kraev-TuU5tODcrzU-unsplash.jpg' }) => {
    const { userInfo } = useContext(UserContext);

    return (
      <SContainer>
        <div className="img-wrapper">
          <SImg src={imageUrl} alt={`${name}プロフィール画像`} />
        </div>
        <SName>{name}</SName>
        {userInfo?.isAdmin ? <SEdit>編集</SEdit> : null}
      </SContainer>
    );
  }
);

UserIconWithName.displayName = 'UserIconWithName';

const SContainer = styled.div`
  text-align: center;

  div.img-wrapper {
    margin: 0 auto;
    width: 160px;
    height: 160px;
    position: relative;
  }
`;

const SImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
