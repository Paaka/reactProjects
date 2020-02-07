import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../Theme/mainTheme';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Headimg from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

const Wrapper = styled.div`
  padding: 17px 30px;
`;

const Card = () => (
  <Wrapper>
    <Headimg>Hello Matt</Headimg>
    <Paragraph>
      Lorem ipsum ut fugiat cupidatat minim fugiat cupidatat et ipsum occaecat eu magna.
    </Paragraph>
    <Button>DELET DIS</Button>
  </Wrapper>
);

export default Card;
