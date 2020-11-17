import React from 'react';

import {
  Container,
  MedalContainer,
  Medal,
  DescriptionContainer,
  Description,
  AlreadyDone,
  Percentage,
} from './styles';

interface ObjectiveProps {
  medal: string;
  description: string;
  alreadyDone: string;
  percentage: number;
  isFeatured?: boolean;
}

const Objective: React.FC<ObjectiveProps> = ({
  medal,
  description,
  alreadyDone,
  percentage,
  isFeatured,
}) => {
  return (
    <Container isFeatured={!!isFeatured} percentage={percentage}>
      <MedalContainer>
        <Medal src={medal} alt="Medal" />
      </MedalContainer>

      <DescriptionContainer isFeatured={!!isFeatured}>
        <Description>{description}</Description>
        <AlreadyDone>{alreadyDone}</AlreadyDone>
      </DescriptionContainer>

      <Percentage>{percentage}%</Percentage>
    </Container>
  );
};

export default Objective;
