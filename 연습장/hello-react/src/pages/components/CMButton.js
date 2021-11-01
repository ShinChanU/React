import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  height: 40px;
  width: 300px;
  border-radius:10px;
  border: 2px solid green;
  background-color: #03c45a;
  font-size: 16px;
  font-weight: 700;
`;

function CMButton(props) {
  return <styledButton>{props.text}</styledButton>;
}

export default CMButton;