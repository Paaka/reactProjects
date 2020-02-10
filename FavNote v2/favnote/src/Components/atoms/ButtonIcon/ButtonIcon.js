import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  height: 67px;
  width: 67px;
  background-color: transparent;
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 30px;
  border: none;
  border-radius: 8px;

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
