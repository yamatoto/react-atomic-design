import React from 'react';
import styled from 'styled-components';
import { BaseButton } from './BaseButton';

type Props = {
  onClick: () => void;
};

export const PrimaryButton: React.FC<Props> = ({ children, onClick }) => {
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
