import React from 'react';
import { BiExit } from 'react-icons/bi';

import { SIDE_BAR_NAVIGATION } from '../../../constants';

import MenuItem from './MenuItem';
import { Container, Logo, MenuList } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <Logo>
        <h1>Partners</h1>
        <p>
          <span>Ü</span>Need Group
        </p>
      </Logo>

      <MenuList>
        {Object.entries(SIDE_BAR_NAVIGATION).map(([key, value]) => (
          <MenuItem key={key} icon={value.icon} sectionName={key} />
        ))}
      </MenuList>

      <MenuItem icon={<BiExit />} sectionName="Log Out" />
    </Container>
  );
};

export default SideBar;
