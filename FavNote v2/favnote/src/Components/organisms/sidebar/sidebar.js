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
  background-color: ${({ colorType }) => (colorType ? theme[colorType] : theme.note)};
  align-items: center;
  height: 100%;
  min-height: 100vh;
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

const SideBar = ({ colorType }) => (
  <Wrapper colorType={colorType}>
    <LogoWrapper>
      <LogoParagraphBig>FAV</LogoParagraphBig>
      <LogoParagraphSmall>Note</LogoParagraphSmall>
    </LogoWrapper>
    <WrapperList>
      <div>
        <li>
          <ButtonIcon as={NavLink} to="/notes" icon={penIcon} activeClassName="active" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeClassName="active" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/articles" icon={lightbulbIcon} activeClassName="active" />
        </li>
      </div>
    </WrapperList>
    <ButtonIcon as={NavLink} to="/exit" icon={logoutIcon} />
  </Wrapper>
);

export default SideBar;
