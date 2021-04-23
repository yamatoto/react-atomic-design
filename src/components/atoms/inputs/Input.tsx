import React from 'react';
import styled from 'styled-components';

type Props = {
  placeholder: string;
};

export const Input: React.FC<Props> = ({ placeholder = '' }) => {
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 9999px;
  outline: none;
`;
