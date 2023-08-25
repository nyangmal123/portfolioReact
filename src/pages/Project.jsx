import React from 'react';
import { styled } from 'styled-components';
import Card from '../components/common/Card';

function Project() {
  return (
    <CardWrapper>
      <Card />
    </CardWrapper>
  );
}

export default Project;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
