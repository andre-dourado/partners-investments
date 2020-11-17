import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 228px;
  height: 148px;
  border-radius: 18px;
  background: #3d404c;
  padding: 24px;
  border: solid 1px #383a45;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background: #2a2d3a;
  border-radius: 50%;
  color: #90929b;
  font-size: 22px;
`;

export const InfoText = styled.p`
  font-size: 12px;
  color: #a4a8b2;
`;

export const Value = styled.p`
  line-height: 1;
  font-size: 28px;
  font-weight: 500;
  background: linear-gradient(
    90deg,
    rgba(250, 253, 255, 1) 25%,
    rgba(180, 181, 188, 1) 75%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
