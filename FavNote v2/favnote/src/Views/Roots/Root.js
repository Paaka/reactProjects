import React from 'react';
import Button from '../../Components/Button/Button';
import GlobalStyle from '../../Theme/GlobalStyle';

const Root = () => (
  <>
    <GlobalStyle />
    <h1>Hello Matthew</h1>
    <Button width="500px"> Close / Save</Button>
    <Button secondary> Secondary</Button>
  </>
);
export default Root;
