import React from 'react';
import styled from 'styled-components';
import { BaseButton } from './BaseButton';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export const PrimaryButton: React.VFC<Props> = ({ children, onClick }) => {
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
