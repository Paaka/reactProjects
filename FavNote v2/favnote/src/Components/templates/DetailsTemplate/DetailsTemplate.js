import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from '../UserPageTemplate/UserPageTemplate';

const DetailsTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <div>
      {children}
      <Link to="/">Go Back</Link>
    </div>
  </UserPageTemplate>
);

export default DetailsTemplate;
