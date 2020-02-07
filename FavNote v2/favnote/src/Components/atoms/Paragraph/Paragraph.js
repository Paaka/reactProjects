import styled, { css } from 'styled-components';

const Paragraph = styled.h1`
  font-weight: ${props => props.theme.bold || 300};
  font-size: ${props => props.theme.paraSize || '14px'};
  color: red;
`;

export default Paragraph;
