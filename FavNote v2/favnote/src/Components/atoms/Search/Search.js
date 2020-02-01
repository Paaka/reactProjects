import styled, { css } from 'styled-components';
import magnifiedGlass from '../../../Assets/search.svg';

const search = styled.input`
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: ${props => props.theme.s};
  background-color: ${props => props.theme.gray100};

  ::placeholder {
    color: ${props => props.theme.gray300};
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${props => props.theme.xs};
      background-image: url(${() => magnifiedGlass});
      background-size: 15px;
      background-position: 10px 50%;
      background-repeat: no-repeat;
    `}
`;

export default search;
