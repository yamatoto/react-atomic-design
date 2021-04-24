import React from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
  imageUrl: string;
};
export const UserIconWithName: React.FC<Props> = ({ name, imageUrl }) => {
  return (
    <SContainer>
      <div className="img-wrapper">
        <SImg src={imageUrl} alt={`${name}プロフィール画像`} />
      </div>
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
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
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
