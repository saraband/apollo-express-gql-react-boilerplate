import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  width: 100vw;
`;

export default ({ children }) => (
  <StyledLayout>
  
    {/* Header */}

    {children}

    {/* Footer */}

  </StyledLayout>
);