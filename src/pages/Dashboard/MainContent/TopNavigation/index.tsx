import React from 'react';
import { BiMenuAltLeft, BiMoon, BiBell } from 'react-icons/bi';

import Avatar from '../../../../assets/avatar.png';

import MenuButton from '../../../../components/Button';
import ThemeButton from '../../../../components/Button';
import NotificationButton from '../../../../components/Button';
import DropdownCurrency from '../../../../components/Dropdown';
import DropdownLanguage from '../../../../components/Dropdown';

import {
  Container,
  MenuButtonContainer,
  CenterContainer,
  DropdownsContainer,
  NotificatonButtonContainer,
  ProfileContainer,
  UsernameText,
  AvatarImage,
} from './styles';

const TopNavigation: React.FC = () => {
  return (
    <Container>
      <MenuButtonContainer>
        <MenuButton icon={BiMenuAltLeft} />
      </MenuButtonContainer>

      <CenterContainer>
        <DropdownsContainer>
          <DropdownCurrency selectedText="USD" style={{ marginRight: 10 }} />
          <DropdownLanguage selectedText="Eng" />
        </DropdownsContainer>

        <ThemeButton icon={BiMoon} />
      </CenterContainer>

      <NotificatonButtonContainer>
        <NotificationButton icon={BiBell} />
      </NotificatonButtonContainer>

      <ProfileContainer>
        <UsernameText>André Dourado</UsernameText>
        <AvatarImage src={Avatar} />
      </ProfileContainer>
    </Container>
  );
};

export default TopNavigation;
