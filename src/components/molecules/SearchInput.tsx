import React, { memo } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../atoms/buttons/PrimaryButton';
import { Input } from '../atoms/inputs/Input';

type Props = {
  changeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  clickSearch: () => void;
};
export const SearchInput: React.VFC<Props> = memo(
  ({ clickSearch, changeInput, inputValue }) => {
    return (
      <SContainer>
        <Input
          placeholder="検索条件を入力"
          value={inputValue}
          changeInput={(event) => changeInput(event)}
        />
        <SButtonWrapper>
          <PrimaryButton onClick={clickSearch}>検索</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
    );
  }
);

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

SearchInput.displayName = 'SearchInput';
