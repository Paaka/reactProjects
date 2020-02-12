import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DetailsTemplate = () => (
  <>
    <h1>Title</h1>
    <h3>Created</h3>
    <p>
      Voluptate sint aliqua voluptate minim ad id amet laborum consectetur reprehenderit Lorem. Sit
      sint laboris irure commodo sint. Cillum dolore id ea sunt. Eiusmod reprehenderit ut dolor
      irure dolore labore elit. Duis esse esse ipsum fugiat ut. Tempor laboris amet id non aliqua
      commodo nulla amet ut duis tempor deserunt.
    </p>
    <Link to="/">Go Back</Link>
  </>
);
