import React from 'react';
import styled from 'styled-components';

type Props = {
  placeholder: string;
  value: string;
  changeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.VFC<Props> = ({
  placeholder = '',
  changeInput,
  value = '',
}) => {
  return (
    <SInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(event) => changeInput(event)}
    />
  );
};

const SInput = styled.input`
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 9999px;
  outline: none;
`;
