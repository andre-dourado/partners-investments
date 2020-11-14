import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: 200px;
  border-right: solid 2px #474c60;
`;

export const Logo = styled.div`
  padding: 36px 0 0 32px;
  text-transform: uppercase;

  h1 {
    font-weight: 300;
    font-size: 24px;
    line-height: 1;
  }

  p {
    font-weight: 200;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.7px;

    span {
      color: #a55feb;
    }
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`;
