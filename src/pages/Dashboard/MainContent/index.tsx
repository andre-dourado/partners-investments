import React from 'react';

import CalendarButton from 'src/components/CalendarButton';
import AsideRanking from './AsideRanking';
import EarningCards from './EarningCards';
import Events from './Events';

import {
  Container,
  WelcomeContainer,
  WelcomeMessage,
  CenterContentContainer,
  RightContainer,
} from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <WelcomeContainer>
        <WelcomeMessage>
          Welcome, <span>André</span>
        </WelcomeMessage>
        <CalendarButton />
      </WelcomeContainer>

      <CenterContentContainer>
        <AsideRanking />

        <RightContainer>
          <EarningCards />

          <Events />
        </RightContainer>
      </CenterContentContainer>
    </Container>
  );
};

export default MainContent;
