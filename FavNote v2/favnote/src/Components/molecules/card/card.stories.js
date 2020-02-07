import React from 'react';
import Card from './card';
import GlobalStyle from '../../../Theme/GlobalStyle';
import { theme } from '../../../Theme/mainTheme';
import styled, { ThemeProvider } from 'styled-components';

export default { title: 'Card' };

export const card = () => {
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
