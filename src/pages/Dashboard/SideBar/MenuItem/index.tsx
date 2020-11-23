import React from 'react';
import { BiCaretDown } from 'react-icons/bi';

import { Container, NameContainer, Icon } from './styles';

interface MenuItemProps {
  icon: React.ReactNode;
  itemName: string;
  isSelected?: boolean;
  isAccordion?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  itemName,
  isSelected,
  isAccordion,
}) => {
  return (
    <Container isSelected={!!isSelected}>
      <NameContainer>
        <Icon>{icon}</Icon>
        {itemName}
      </NameContainer>

      {isAccordion && <BiCaretDown />}
    </Container>
  );
};

export default MenuItem;
