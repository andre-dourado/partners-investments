import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  padding: 38px 22px 0 38px;
  height: 874px;
  min-width: 232px;
  border-right: solid 2px #383a45;
`;

export const Logo = styled.img`
  width: fit-content;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`;
