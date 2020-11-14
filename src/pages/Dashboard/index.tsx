import React from 'react';

import MainContent from './MainContent';
import SideBar from './SideBar';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <MainContent />
    </Container>
  );
};

export default Dashboard;
