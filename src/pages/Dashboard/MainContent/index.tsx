import React from 'react';
import { BiGroup, BiWallet, BiDollarCircle } from 'react-icons/bi';

import InfoCard from '../../../components/Card';
import CalendarButton from '../../../components/CalendarButton';
import AsideRanking from './AsideRanking';
import Events from './Events';

import {
  Container,
  WelcomeContainer,
  WelcomeMessage,
  CenterContentContainer,
  RightContainer,
  CardsContainer,
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
          <CardsContainer>
            <InfoCard
              icon={BiGroup}
              infoText="Earnings from partners"
              value={1340}
            />
            <InfoCard
              icon={BiWallet}
              infoText="Earnings from investments"
              value={12340}
            />
            <InfoCard
              icon={BiDollarCircle}
              infoText="Total earned"
              value={1340}
            />
          </CardsContainer>

          <Events />
        </RightContainer>
      </CenterContentContainer>
    </Container>
  );
};

export default MainContent;
