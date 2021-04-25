import React from 'react';
import styled from 'styled-components';
import { BaseButton } from './BaseButton';

type Props = {
  children: React.ReactNode;
  click: () => void;
};
export const SecondaryButton: React.VFC<Props> = ({ children, click }) => {
  return <SButton onClick={click}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
