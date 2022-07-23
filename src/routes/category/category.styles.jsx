import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 35px;
  row-gap: 50px;
`;

export const Title = styled.h2`
  font-size: 35px;
  margin-bottom: 25px;
  text-align: center;
`;