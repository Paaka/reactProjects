import React from 'react';
import GlobalStyle from '../../../Theme/GlobalStyle';
import Button from './Button';
import { withKnobs, select } from '@storybook/addon-knobs';

export default { title: 'Atoms/Button', decorators: [withKnobs] };

export const primary = () => {
  const label = `Colors`;

  const options = {
    primary: `hsl(49, 100%, 58%)`,
    secondary: `hsl(196, 83%, 75%)`,
    Tertiary: `hsl(106, 47%, 64%)`,
  };

  const defaultValue = `hsl(49, 100%, 58%)`;
  const groupId = `Group-ID1`;

  const value = select(label, options, defaultValue, groupId);

  return (
    <>
      <GlobalStyle />
      <Button color={value}>Hello Matthew</Button>
    </>
  );
};

export const secondary = () => <Button secondary>Hello </Button>;
