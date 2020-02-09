import React from 'react';
import GlobalStyle from '../../../Theme/GlobalStyle';
import Search from './Search';
import { theme } from '../../../Theme/mainTheme';
import { ThemeProvider } from 'styled-components';

export default { title: 'Atoms/Search' };

export const search = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Search placeholder="Login" search></Search>
        </>
      </ThemeProvider>
    </>
  );
};
