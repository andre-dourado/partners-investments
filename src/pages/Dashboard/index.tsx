import React from 'react';

import SideBar from './SideBar';
import MainContent from './MainContent';
import TopNavigation from './TopNavigation';

import { Container, CenterContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container style={{ justifyContent: 'flex-start' }}>
      <SideBar />
      <CenterContainer>
        <TopNavigation />
        <MainContent />
      </CenterContainer>
    </Container>
  );
};

export default Dashboard;
