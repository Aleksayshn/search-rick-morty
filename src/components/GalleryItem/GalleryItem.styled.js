import styled from 'styled-components';

export const Item = styled.li`
  width: 100%;
  margin: 15px;
  background: #FFFFFF;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus-visible {
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 0px 10px 1px #00FF00;
  }

  @media screen and (min-width: 361px) {
    width: calc((100% - 60px) / 2);
    margin: 15px;}

    @media screen and (min-width: 761px) {
    width: calc((100% - 120px) / 4);
    margin: 15px;}
`;

export const About = styled.div`
padding: 12px 16px;
font-family: Roboto;
line-height: 1.5;

`;

export const Title = styled.h3`
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.15px;
    `;

export const Specie = styled.p`
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.25px;
`;