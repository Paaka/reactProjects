import React from 'react';
import MainTemplate from './MainTemplate';
import PropTypes from 'prop-types';

export default { title: 'Main Template' };

export const mainTemplate = () => {
  return (
    <>
      <MainTemplate></MainTemplate>
    </>
  );
};

mainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
