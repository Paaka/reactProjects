import React from 'react';
import GlobalStyle from '../../../Theme/GlobalStyle';
import Heading from './Heading';
import { theme } from '../../../Theme/mainTheme';
import { ThemeProvider } from 'styled-components';

export default { title: 'Heading' };

export const heading = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Heading>This is my main Heading</Heading>
        </>
      </ThemeProvider>
    </>
  );
};
