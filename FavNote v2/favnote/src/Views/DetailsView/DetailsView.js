import React from 'react';
import DetailsTemplate from '../../Components/templates/DetailsTemplate/DetailsTemplate';
import { routes } from '../../Routes/index';

const DetailsView = ({ match }) => (
  <DetailsTemplate>
    <p>{`is this note ${match.path === routes.article}`}</p>
  </DetailsTemplate>
);

export default DetailsView;
