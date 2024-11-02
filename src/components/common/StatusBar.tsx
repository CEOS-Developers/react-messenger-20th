import React from 'react';
import styled from 'styled-components';

import Clock from '@components/Clock';
import statusIcon from '@assets/status.svg';

export default function StatusBar() {
  return (
    <div className="flex justify-between mx-5  h-10">
      <Clock />
      <StyledStatus>
        <img
          alt="status"
          src={statusIcon}
        />
      </StyledStatus>
    </div>
  );
}

const StyledStatus = styled.div`
  width: 70px;
  display: flex;
  // position: fixed;

  justify-content: center;
  img {
    width: 70px;
    height: 40px;
    object-fit: contain;
  }
`;
