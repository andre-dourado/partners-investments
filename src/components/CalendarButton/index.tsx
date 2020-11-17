import React from 'react';
import { BiCaretDown, BiCalendar } from 'react-icons/bi';

import { Container } from './styles';

const CalendarButton: React.FC = () => {
  return (
    <Container type="button">
      <BiCalendar />
      December
      <BiCaretDown />
    </Container>
  );
};

export default CalendarButton;
