import React from 'react';
import { BiGroup, BiWallet, BiDollarCircle } from 'react-icons/bi';

import InfoCard from 'src/components/Card';

import { Container } from './styles';

const EarningCards: React.FC = () => {
  return (
    <Container>
      <InfoCard icon={BiGroup} infoText="Earnings from partners" value={1340} />
      <InfoCard
        icon={BiWallet}
        infoText="Earnings from investments"
        value={12340}
      />
      <InfoCard icon={BiDollarCircle} infoText="Total earned" value={1340} />
    </Container>
  );
};

export default EarningCards;
