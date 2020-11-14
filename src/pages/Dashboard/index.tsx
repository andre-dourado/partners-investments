import React from 'react';

import SideBar from './SideBar';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideBar />
    </Container>
  );
};

export default Dashboard;
