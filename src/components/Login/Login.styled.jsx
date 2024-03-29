import styled from 'styled-components';

export const LoginBtn = styled.button`
  font-size: 20px;
  color: black;
  text-decoration: none;
  padding: 10px 15px;
  background-color: beige;
  box-shadow: 1px 1px 1px #393e46;
  border-radius: 24px;
  transition: transform 250ms, box-shadow 250ms;

  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 3px 3px 3px #393e46;
  }
`;

export const NameUser = styled.h2`
color: #393e46;
font-family: monospace;
font-size: 40px;
margin-top: 50px;
text-align: center;
`;

