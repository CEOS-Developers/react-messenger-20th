import React from 'react';
import styled from 'styled-components';
interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}

const StyledMain = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  flex-grow: 1;
`;
