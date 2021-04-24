import React from 'react';
import styled from 'styled-components';

export const Top: React.FC<Record<string, unknown>> = () => {
  return (
    <SContainer>
      <h2>React atomic-designの練習TOPページ</h2>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
