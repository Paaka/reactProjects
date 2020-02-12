import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../Theme/mainTheme';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Headimg from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import PropTypes from 'prop-types';
import iconLink from '../../../Assets/link.svg';

const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${props => (props.activeColor ? theme[props.activeColor] : 'white')};
  display: ${props => (props.flex ? 'flex' : 'block')};
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  :first-of-type {
    z-index: 9999;
  }
`;

const Wrapper = styled.div`
  box-shadow: 11px 11px 10px 0px rgba(212, 212, 212, 1);
  border-radius: 10px;
  overflow: hidden;
  min-height: 380px;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const TwitterAvatar = styled.div`
  height: 86px;
  width: 86px;
  position: absolute;
  top: 25px;
  right: 22px;
  background-image: url(${props => props.src});
  background-position: 50% 50%;
  background-size: 86px;
  border-radius: 50%;
  border: 5px solid ${theme.twitter};
`;

const DaysCounter = styled(Paragraph)`
  font-size: ${theme.s};
  font-weight: ${theme.bold};
`;

const LinkIcon = styled.a`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 50%;
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-image: url(${() => iconLink});
`;

const Card = ({ cardType, title, created, twitterName, articleURL, content }) => (
  <Wrapper>
    <InnerWrapper activeColor={cardType}>
      <Headimg>{title}</Headimg>
      <DaysCounter>{created}</DaysCounter>
      {cardType === 'twitter' ? <TwitterAvatar src={twitterName}></TwitterAvatar> : null}
      {cardType === 'article' ? <LinkIcon href={articleURL}></LinkIcon> : null}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>{content}</Paragraph>
      <Button secondary>DELET DIS</Button>
    </InnerWrapper>
  </Wrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf('note', 'twitter', 'article'),
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleURL: PropTypes.string,
};

Card.defaultProps = {
  cardType: 'note',
  twitterName: null,
  articleURL: null,
};
export default Card;
