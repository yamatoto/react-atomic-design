import React from 'react';
import styled from 'styled-components';
import { BaseButton } from './BaseButton';

export const PrimaryButton: React.FC<Record<string, unknown>> = ({
  children,
}) => {
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
