import React from 'react';
import GlobalStyle from '../../../Theme/GlobalStyle';
import { theme } from '../../../Theme/mainTheme';
import styled, { ThemeProvider } from 'styled-components';
import Sidebar from './sidebar';
import StoryRouter from 'storybook-react-router';
import SideBar from './sidebar';

export default {
  title: 'Organisms/SideBar',
  decorators: [StoryRouter()],
};

export const sideBar = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Sidebar></Sidebar>
        </>
      </ThemeProvider>
    </>
  );
};
