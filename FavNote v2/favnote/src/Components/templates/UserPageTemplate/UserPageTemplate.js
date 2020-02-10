import React from 'react';
import Sidebar from '../../organisms/sidebar/sidebar';

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

export default UserPageTemplate;
