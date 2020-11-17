import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 306px;

  background: #3d404c;
  border-radius: 18px;
  padding: 24px;
  position: relative;
`;

export const HelpButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 14px;
  right: 16px;
  padding: 4px;
  font-size: 16px;
  background: #51545e;
  border-radius: 50%;
`;

export const Featured = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MedalFeatured = styled.img`
  width: 128px;
  margin-bottom: 54px;
`;

export const NextRankContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 18px 0 28px;
  font-size: 12px;
  font-weight: 500;
`;

export const NextRankDescription = styled.span`
  color: #e1e2eb;
`;

export const NextLevel = styled.span`
  color: #7ec3c1;
`;

export const Divider = styled.hr`
  background: #2a2d3a;
  height: 1px;
  border: 0;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  margin-top: 14px;
`;
