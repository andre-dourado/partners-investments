import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 28px 38px 32px;
  min-height: fit-content;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WelcomeMessage = styled.h1`
  font-size: 38px;
  background: linear-gradient(
    90deg,
    rgba(205, 206, 209, 1) 25%,
    rgba(180, 181, 188, 1) 75%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  span {
    font-weight: 400;
  }
`;

export const CenterContentContainer = styled.div`
  display: flex;
  margin-top: 22px;
`;

export const RightContainer = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 22px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: fit-content;
`;
