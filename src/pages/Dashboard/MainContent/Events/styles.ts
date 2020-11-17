import styled from 'styled-components';

import EventBannerImg from '../../../../assets/event-banner.png';

export const Container = styled.div`
  border: solid 2px #383a45;
  margin-top: 22px;
  border-radius: 24px;
`;

export const Featured = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url(${EventBannerImg});
  background-size: cover;
  height: 238px;
  width: 668px;
  border-radius: 24px;
  margin: 22px 22px 36px;
`;

export const FeaturedTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
`;

export const FeaturedSubtitle = styled.h4`
  font-weight: 300;
  font-size: 14px;
  margin-top: 2px;
`;

export const MoreInfoButton = styled.button`
  margin-top: 26px;
  background: #dcacfe;
  padding: 16px 46px;
  border-radius: 16px;
`;

export const List = styled.ul`
  border-top: solid 2px #383a45;
  padding: 22px 16px;
  list-style: none;
`;

interface ItemProps {
  hasBackground?: boolean;
}

export const Item = styled.li<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 16px;
  background: ${(props) => (props.hasBackground ? '#3d404c' : 'none')};
  padding: 6px 14px;

  & + & {
    margin-top: 14px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Thumbnail = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 12px;
  margin-right: 12px;
`;
export const Description = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #c8cad2;
`;

export const DateContainer = styled.div`
  display: flex;
`;

export const Date = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: #c8cad2;
`;

export const Hour = styled.span`
  margin-left: 30px;
  font-size: 12px;
  font-weight: 500;
`;
