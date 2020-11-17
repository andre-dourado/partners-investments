import React from 'react';

import MainContent from './MainContent';

import { Container, CenterContainer } from './styles';
import TopNavigation from './TopNavigation';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <CenterContainer>
        <TopNavigation />
        <MainContent />
      </CenterContainer>
    </Container>
  );
};

export default Dashboard;
