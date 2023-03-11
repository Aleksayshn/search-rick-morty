import styled from 'styled-components';

export const InfoWrap = styled.section`
max-width: 413px;
text-align: center;
`;

export const Cicle = styled.div`
width: 300px;
margin: 0 auto 16px;
border: 5px solid #F2F2F7;
border-radius: 150px;
overflow: hidden;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Title = styled.h1`
margin-bottom: 48px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 1.16;
text-align: center;
color: #081F32;
`;

export const Details = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
gap: 15px;
font-family: 'Roboto';

>h2 {
font-weight: 500;
font-size: 20px;
line-height: 1.2;
letter-spacing: 0.15px;
color: #8E8E93;
}
`;


export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: start;
font-weight: 500;
font-size: 20px;
line-height: 1.2;
letter-spacing: 0.15px;
color: #8E8E93;
border-bottom: 1px solid rgba(33, 33, 33, 0.08);
width: 100%;
>h3 {
  font-size: 16px;
line-height: 1.5;
letter-spacing: 0.15px;
color: #081F32;
}
>p {
font-weight: 400;
font-size: 14px;
line-height: 1.43;
letter-spacing: 0.25px;
color: #6E798C;
}
`;

