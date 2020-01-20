import React from 'react';
import GlobalStyle from '../../../Theme/GlobalStyle';
import Paragraph from './Paragraph';
import { theme } from '../../../Theme/mainTheme';
import { ThemeProvider } from 'styled-components';

export default { title: 'Paragraph' };

export const paragraph = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Paragraph>This is my main Heading</Paragraph>
        </>
      </ThemeProvider>
    </>
  );
};
