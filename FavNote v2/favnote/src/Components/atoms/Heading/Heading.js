import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-weight: ${props => props.theme.bold || 300};
  font-size: ${props => props.theme.headingSize || '24px'};

  ${({ small }) =>
    small &&
    css`
      font-weight: ${props => props.theme.bold || 600};
      font-size: ${props => props.theme.headingSizeSmall || '24px'};
    `}
`;

export default Heading;
