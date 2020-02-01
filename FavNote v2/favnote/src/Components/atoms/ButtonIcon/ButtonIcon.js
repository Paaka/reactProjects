import styled from 'styled-components';

const ButtonIcon = styled.button`
  height: 67px;
  width: 67px;
  background-color: white;
  background-image: url(${props => props.icon});
  background-size: 30px;
  border: none;
  border-radius: 8px;
`;
