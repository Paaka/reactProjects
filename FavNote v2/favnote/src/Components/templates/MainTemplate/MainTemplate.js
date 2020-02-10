import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../../Theme/GlobalStyle';
import { theme } from '../../../Theme/mainTheme';
import PropTypes from 'prop-types';
import Sidebar from '../../organisms/sidebar/sidebar';

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
