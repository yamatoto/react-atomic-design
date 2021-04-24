import React, { memo } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../atoms/buttons/PrimaryButton';
import { Input } from '../atoms/inputs/Input';

export const SearchInput: React.FC<Record<string, unknown>> = memo(() => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

SearchInput.displayName = 'SearchInput';
