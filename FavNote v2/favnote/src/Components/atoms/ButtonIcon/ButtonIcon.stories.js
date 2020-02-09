import React from 'react';
import GlobalStyle from '../../../Theme/GlobalStyle';
import ButtonIcon from './ButtonIcon';
import twitterIcon from '../../../Assets/twitter.svg';
import lightbulbIcon from '../../../Assets/lightbulb.svg';
import { theme } from '../../../Theme/mainTheme';
import styled, { ThemeProvider } from 'styled-components';
const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: yellow;
`;

export default { title: 'Atoms/ButtonIcon' };

export const buttonIcon = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <YellowBackground>
            <ButtonIcon active icon={twitterIcon} />
          </YellowBackground>
        </>
      </ThemeProvider>
    </>
  );
};

export const buttonIcon2 = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <YellowBackground>
            <ButtonIcon icon={lightbulbIcon} />
          </YellowBackground>
        </>
      </ThemeProvider>
    </>
  );
};
