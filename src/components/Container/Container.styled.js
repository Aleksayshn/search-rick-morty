import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  padding: 0px 15px;

  @media screen and (min-width: 1200px) {
  max-width: 1440px;
  padding: 0px 210px;}
  margin-bottom: 25px;
`;
