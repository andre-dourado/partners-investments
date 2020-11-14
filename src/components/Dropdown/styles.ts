import styled from 'styled-components';
import Menu, { Item as MenuItem } from 'rc-menu';

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 112px;
  padding: 0 20px 0 24px;
  background: #3d404c;
  border-radius: 18px;
  color: #bdbfc7;
  font-size: 14px;
  font-weight: bold;
`;

export const StyledMenu = styled(Menu)`
  background: #3d404c;
  border: 0;
  box-shadow: none;
`;

export const StyledMenuItem = styled(MenuItem)`
  font-size: 14px !important;
  color: #bdbfc7 !important;

  &.rc-dropdown-menu-item-active,
  &.rc-dropdown-menu-item-selected {
    background: #777a88 !important;
  }
`;
