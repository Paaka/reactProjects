import React from 'react';
import Sidebar from '../../organisms/sidebar/sidebar';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Search from '../../atoms/Search/Search';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';

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

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 154px 1fr;
  width: 100%;
  height: 100%;
`;

const StyledHeadingWrapper = styled.div`
  padding: 20px 0px;
`;

const StyledHeading = styled(Heading)`
  ::first-letter {
    text-transform: uppercase;
  }
`;

const UserPageTemplate = ({ pageType, children }) => (
  <InnerWrapper>
    <Sidebar colorType={pageType} />
    <NoteGridWrapper>
      <StyledHeadingWrapper>
        <Search search></Search>
        <StyledHeading>{pageType}s</StyledHeading>
        <Paragraph>6 notes</Paragraph>
      </StyledHeadingWrapper>
      <NoteWrapper>{children}</NoteWrapper>
    </NoteGridWrapper>
  </InnerWrapper>
);

UserPageTemplate.propTypes = {
  pageType: PropTypes.element.isRequired,
};

export default UserPageTemplate;
