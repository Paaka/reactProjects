import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../../Theme/GlobalStyle';
import { theme } from '../../../Theme/mainTheme';
import PropTypes from 'prop-types';
import Sidebar from '../../organisms/sidebar/sidebar';
import styled from 'styled-components';

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 154px 1fr;
  width: 100%;
  height: 100%;
`;

const MainTemplate = ({ children }) => (
  <InnerWrapper>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </InnerWrapper>
);
export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
