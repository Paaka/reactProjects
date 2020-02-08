import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${props => props.theme.note};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #e6e6e6;
      width: 105px;
      height: 30px;
      font-size: 15px;
    `}
`;

//background-color: ${({ color }) => color || ' #ffd82b'};

export default Button;
