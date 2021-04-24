import React from 'react';
import styled from 'styled-components';
import { BaseButton } from './BaseButton';

type Props = {
  click: () => void;
};
export const SecondaryButton: React.FC<Props> = ({ children, click }) => {
  return <SButton onClick={click}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
