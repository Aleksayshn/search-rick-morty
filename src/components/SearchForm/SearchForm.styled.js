import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;  overflow: hidden;
  min-height: 56px;
  padding: 10px 16px;
  font-size: 16px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Button = styled.button`
  display: flex;
  width: 24px;
  padding: 0;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  &:hover,
  :focus {
    opacity: 1;
  }
  >svg {
    fill: #2c302b;
    background-color: #fff;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.5);

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;