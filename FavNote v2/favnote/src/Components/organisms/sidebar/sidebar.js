import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import penIcon from '../../../Assets/pen.svg';
import logoutIcon from '../../../Assets/logout.svg';
import lightbulbIcon from '../../../Assets/lightbulb.svg';
import twitterIcon from '../../../Assets/twitter.svg';
import { theme } from '../../../Theme/mainTheme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  width: 153px;
  background-color: ${theme.note};
  align-items: center;
  height: 100vh;
`;

const WrapperList = styled.ul`
  list-style: none;
`;

const LogoWrapper = styled.div`
  padding-top: 15px;
  align-self: top;
`;

const LogoParagraphBig = styled.p`
  font-size: 32px;
  font-weight: 700;
`;

const LogoParagraphSmall = styled(LogoParagraphBig)`
  font-size: 26px;
  margin-top: -11px;
`;

const SideBar = () => (
  <Wrapper>
    <LogoWrapper>
      <LogoParagraphBig>FAV</LogoParagraphBig>
      <LogoParagraphSmall>Note</LogoParagraphSmall>
    </LogoWrapper>
    <WrapperList>
      <div>
        <li>
          <ButtonIcon exact as={NavLink} to="/" icon={penIcon} activeClass="active" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeClass="active" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/articles" icon={lightbulbIcon} activeClass="active" />
        </li>
      </div>
      <ButtonIcon as={NavLink} to="/" icon={logoutIcon} />
    </WrapperList>
  </Wrapper>
);

export default SideBar;
