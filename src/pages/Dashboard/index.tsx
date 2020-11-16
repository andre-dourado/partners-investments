import React from 'react';

import MainContent from './MainContent';
import SideBar from './SideBar';

import { Container, CenterContainer } from './styles';
import TopNavigation from './TopNavigation';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <CenterContainer>
        <TopNavigation />
        <MainContent />
      </CenterContainer>
    </Container>
  );
};

export default Dashboard;
