import styled from 'styled-components';

export const CardContainer = styled.li`
  width: 250px;
  height: auto;
  border-radius: 5px;
  box-shadow: ${({ theme: { options } }) => options.shadow};

  margin-bottom: 20px;
`;
