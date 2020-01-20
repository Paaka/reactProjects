import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../../Components/atoms/Button/Button';
import GlobalStyle from '../../Theme/GlobalStyle';
import { theme } from '../../Theme/mainTheme';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello Matthew</h1>
        <Button> Close / Save</Button>
        <Button secondary> Secondary</Button>
      </>
    </ThemeProvider>
  </>
);
export default Root;
