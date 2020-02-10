import React from 'react';
import Sidebar from '../../organisms/sidebar/sidebar';
import PropTypes from 'prop-types';

const UserPageTemplate = ({ pageType, children }) => (
  <>
    <Sidebar colorType={pageType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  pageType: PropTypes.element.isRequired,
};

export default UserPageTemplate;
