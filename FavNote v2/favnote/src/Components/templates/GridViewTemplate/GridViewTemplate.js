import React from 'react';
import Sidebar from '../../organisms/sidebar/sidebar';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Search from '../../atoms/Search/Search';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import UserPageTemplate from '../UserPageTemplate/UserPageTemplate';

const NoteGridWrapper = styled.div`
  grid-column: 2;
  padding-left: 70px;
  padding-right: 120px;
`;

const NoteWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
`;

const StyledHeadingWrapper = styled.div`
  padding: 20px 0px;
`;

const StyledHeading = styled(Heading)`
  ::first-letter {
    text-transform: uppercase;
  }
`;

const GridViewTemplate = ({ pageType, children }) => (
  <UserPageTemplate pageType={pageType}>
    <NoteGridWrapper>
      <StyledHeadingWrapper>
        <Search search></Search>
        <StyledHeading>{pageType}s</StyledHeading>
        <Paragraph>6 notes</Paragraph>
      </StyledHeadingWrapper>
      <NoteWrapper>{children}</NoteWrapper>
    </NoteGridWrapper>
  </UserPageTemplate>
);

GridViewTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default GridViewTemplate;
