import styled from 'styled-components';

export const FooterStyled = styled.footer`
  padding: 12px 0;
  color: #ffffff;
  background-color: rgba(0,0,0,0.6);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Text = styled.p`
  font-size: 20px;

  & span {
    opacity: 0.7;
  }
`;
