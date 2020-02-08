import React from 'react';
import Card from './card';
import GlobalStyle from '../../../Theme/GlobalStyle';
import { theme } from '../../../Theme/mainTheme';
import styled, { ThemeProvider } from 'styled-components';

export default { title: 'Card' };

export const noteCard = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Card></Card>
        </>
      </ThemeProvider>
    </>
  );
};

export const twitterCard = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Card cardType="twitter"></Card>
        </>
      </ThemeProvider>
    </>
  );
};

export const articleCard = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Card cardType="article"></Card>
        </>
      </ThemeProvider>
    </>
  );
};
