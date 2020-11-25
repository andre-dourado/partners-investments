import React from 'react';
import { BiHelpCircle } from 'react-icons/bi';

import NewbieMedalImg from 'src/assets/newbie-medal.png';
import ProfessionalMedalImg from 'src/assets/professional-medal.png';
import HardMedalImg from 'src/assets/hard-medal.png';
import NoviceMedalImg from 'src/assets/novice-medal.png';
import ExpertMedalImg from 'src/assets/expert-medal.png';

import Objective from './Objective';

import {
  Container,
  HelpButton,
  Featured,
  MedalFeatured,
  NextRankContainer,
  NextRankDescription,
  NextLevel,
  Divider,
  List,
} from './styles';

const AsideRanking: React.FC = () => {
  return (
    <Container>
      <HelpButton>
        <BiHelpCircle />
      </HelpButton>
      <Featured>
        <MedalFeatured src={NewbieMedalImg} alt="Medal" />

        <Objective
          medal={ProfessionalMedalImg}
          description="It remains to execute"
          alreadyDone="3 tasks"
          percentage={34}
          isFeatured
        />

        <NextRankContainer>
          <NextRankDescription>Next Rank</NextRankDescription>
          <NextLevel>Professional</NextLevel>
        </NextRankContainer>
      </Featured>

      <Divider />

      <List>
        <Objective
          medal={HardMedalImg}
          description="Invite 9 people to the system"
          alreadyDone="3 invited"
          percentage={34}
        />

        <Objective
          medal={NoviceMedalImg}
          description="Generate a turnover of $12,000"
          alreadyDone="$9,930"
          percentage={82}
        />

        <Objective
          medal={ExpertMedalImg}
          description="Invest in hostels 2 times"
          alreadyDone="1 ready"
          percentage={49}
        />
      </List>
    </Container>
  );
};

export default AsideRanking;
