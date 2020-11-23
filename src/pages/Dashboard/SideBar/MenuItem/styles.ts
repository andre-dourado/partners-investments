import styled, { css } from 'styled-components';

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin: 17px 0 17px;
  font-weight: 500;
  color: #90929b;

  ${(props) =>
    props.isSelected &&
    css`
      color: #fff;

      &:after {
        content: '';
        background: #3d4148;
        width: 220px;
        height: 68px;
        position: absolute;
        right: 0;
        z-index: -1;
        border-radius: 12px;
      }
    `}
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  margin-right: 18px;
`;
