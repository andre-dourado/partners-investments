import React from 'react';

import Thumb1Img from '../../../../assets/thumb1.jpg';
import Thumb2Img from '../../../../assets/thumb2.jpg';

import {
  Container,
  Featured,
  MoreInfoButton,
  FeaturedTitle,
  FeaturedSubtitle,
  List,
  Item,
  DescriptionContainer,
  Description,
  Thumbnail,
  DateContainer,
  Date,
  Hour,
} from './styles';

const Events: React.FC = () => {
  return (
    <Container>
      <Featured>
        <FeaturedTitle>Dubai Design Week 2020</FeaturedTitle>
        <FeaturedSubtitle>January 12, 2020</FeaturedSubtitle>
        <MoreInfoButton>More info</MoreInfoButton>
      </Featured>

      <List>
        <Item>
          <DescriptionContainer>
            <Thumbnail src={Thumb1Img} />
            <Description>Dubai Design Week 2020</Description>
          </DescriptionContainer>

          <DateContainer>
            <Date>Dec 12, 2020, 09:40</Date>
            <Hour>14:00</Hour>
          </DateContainer>
        </Item>

        <Item hasBackground>
          <DescriptionContainer>
            <Thumbnail src={Thumb2Img} />
            <Description>Business Forum Bukovel</Description>
          </DescriptionContainer>

          <DateContainer>
            <Date>Dec 11, 2020, 09:40</Date>
            <Hour>14:00</Hour>
          </DateContainer>
        </Item>
      </List>
    </Container>
  );
};

export default Events;
