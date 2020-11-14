import React from 'react';

import { Container, Icon } from './styles';

interface MenuItemProps {
  icon: React.ReactNode;
  sectionName: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, sectionName }) => {
  return (
    <Container>
      <Icon>{icon}</Icon>
      {sectionName}
    </Container>
  );
};

export default MenuItem;
