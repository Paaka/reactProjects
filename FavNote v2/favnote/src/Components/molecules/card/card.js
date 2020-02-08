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

const Card = ({ cardType }) => (
  <Wrapper>
    <InnerWrapper activeColor={cardType}>
      <Headimg>Hello Matt</Headimg>
      <DaysCounter> 3 days</DaysCounter>
      {cardType === 'twitter' ? (
        <TwitterAvatar src="https://avatars.io/static/default_128.jpg"></TwitterAvatar>
      ) : null}
      {cardType === 'article' ? (
        <LinkIcon href="https://www.youtube.com/watch?v=u21W_tfPVrY"></LinkIcon>
      ) : null}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum ut fugiat cupidatat minim fugiat cupidatat et ipsum occaecat eu magna.
      </Paragraph>
      <Button secondary>DELET DIS</Button>
    </InnerWrapper>
  </Wrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf('note', 'twitter', 'article'),
};

Card.defaultProps = {
  cardType: 'note',
};
export default Card;
