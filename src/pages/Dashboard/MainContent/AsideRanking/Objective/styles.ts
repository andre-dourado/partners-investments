import styled, { css } from 'styled-components';

interface ContainerProps {
  isFeatured: boolean;
  percentage: number;
}

interface DescriptionContainerProps {
  isFeatured: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: flex-start;

  min-height: fit-content;
  height: 80px;
  width: 100%;
  padding: 8px 14px 8px 8px;
  border-radius: 12px;

  background: ${(props) =>
    `linear-gradient(
      90deg,
      rgba(75,79,90,1) ${props.percentage}%,
      rgba(66, 69, 84, 1) ${props.percentage}%)
    `};

  ${(props) =>
    props.isFeatured &&
    css`
      align-items: center;
      height: auto};
    `}
`;

export const MedalContainer = styled.div`
  width: 42px;
  height: 42px;
  padding: 6px;
  border-radius: 12px;
  background: #3d404c;
`;

export const Medal = styled.img`
  width: 30px;
  height: 28px;
`;

export const DescriptionContainer = styled.div<DescriptionContainerProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 10px;

  ${(props) =>
    !props.isFeatured &&
    css`
      height: 100%;
      justify-content: space-between;
    `}
`;

export const Description = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #e1e2eb;
`;

export const AlreadyDone = styled.span`
  font-size: 12px;
  color: #a4a8b2;
`;

export const Percentage = styled.span`
  font-size: 14px;
  font-weight: 500;
  justify-self: flex-end;
  color: #e1e2eb;
  margin-left: 10px;
`;
