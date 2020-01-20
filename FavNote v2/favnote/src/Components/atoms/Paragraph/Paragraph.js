import styled, { css } from 'styled-components';

const Paragraph = styled.h1`
  font-weight: ${props => props.theme.bold || 300};
  font-size: ${props => props.theme.headingSize || '24px'};
`;

export default Paragraph;
