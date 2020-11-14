import React from 'react';
import ContainerDropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import { BiCaretDown } from 'react-icons/bi';

import { DropdownButton, StyledMenu, StyledMenuItem } from './styles';

const menu = (
  <StyledMenu>
    <StyledMenuItem key="1">USD</StyledMenuItem>
    <StyledMenuItem key="2">BRL</StyledMenuItem>
  </StyledMenu>
);

interface DropdownProps {
  selectedText: string;
  style?: React.CSSProperties;
}

const Dropdown: React.FC<DropdownProps> = ({ selectedText, style }) => {
  return (
    <ContainerDropdown trigger={['click']} overlay={menu} animation="slide-up">
      <DropdownButton type="button" style={style}>
        {selectedText}
        <BiCaretDown />
      </DropdownButton>
    </ContainerDropdown>
  );
};

export default Dropdown;
