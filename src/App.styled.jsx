import styled from 'styled-components';

const AppBar = styled.header`
  position: sticky;
  top: 0;

  border-bottom: 2px solid lightgrey;
  box-shadow: ${({ theme: { options } }) => options.shadow};

  background-color: ${({ theme: { colors } }) => colors.white};
`;

export { AppBar };
