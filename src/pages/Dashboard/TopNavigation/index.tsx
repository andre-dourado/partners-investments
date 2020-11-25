import React from 'react';
import { BiMenuAltLeft, BiMoon, BiBell } from 'react-icons/bi';

import Avatar from 'src/assets/avatar.png';

import MenuButton from 'src/components/Button';
import ThemeButton from 'src/components/Button';
import NotificationButton from 'src/components/Button';
import DropdownCurrency from 'src/components/Dropdown';
import DropdownLanguage from 'src/components/Dropdown';

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
