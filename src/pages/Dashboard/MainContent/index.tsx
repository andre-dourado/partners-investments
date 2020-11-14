import React from 'react';

import TopNavigation from './TopNavigation';

import { Container } from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <TopNavigation />
    </Container>
  );
};

export default MainContent;
