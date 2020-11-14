import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons/lib';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IconType;
};

const Button: React.FC<ButtonProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      <Icon />
    </Container>
  );
};

export default Button;
