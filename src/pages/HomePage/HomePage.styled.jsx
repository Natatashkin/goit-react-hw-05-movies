import styled from 'styled-components';

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  padding-top: ${({ theme: { spacing } }) => spacing(4)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(2)};
  text-align: center;
`;

export { HomeStyles, Title };
