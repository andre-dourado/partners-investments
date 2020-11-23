import React from 'react';
import { BiExit } from 'react-icons/bi';

import { SIDE_BAR_NAVIGATION } from '../../../constants';

import LogoImg from '../../../assets/logo.svg';

import MenuItem from './MenuItem';
import { Container, MenuList, Logo } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <Logo src={LogoImg} alt="logo" />

      <MenuList>
        {Object.entries(SIDE_BAR_NAVIGATION).map(([key, value]) => (
          <MenuItem
            key={key}
            icon={value.icon}
            itemName={key}
            isSelected={value.isSelected}
            isAccordion={value.isAccordion}
          />
        ))}
      </MenuList>

      <MenuItem icon={<BiExit />} itemName="Log Out" />
    </Container>
  );
};

export default SideBar;
