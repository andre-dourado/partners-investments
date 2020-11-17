import React from 'react';
import { IconType } from 'react-icons';

import { Container, IconContainer, InfoText, Value } from './styles';

interface CardProps {
  icon: IconType;
  infoText: string;
  value: number;
}

const Card: React.FC<CardProps> = ({ icon: Icon, infoText, value }) => {
  const formattedValue = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value);

  return (
    <Container>
      <IconContainer>
        <Icon />
      </IconContainer>
      <InfoText>{infoText}</InfoText>
      <Value>{formattedValue}</Value>
    </Container>
  );
};

export default Card;
