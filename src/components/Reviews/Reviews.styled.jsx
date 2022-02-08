import styled from 'styled-components';

const List = styled.ul`
  width: 90%;
`;

const Review = styled.li`
  margin-bottom: ${({ theme: { spacing } }) => spacing(4)};
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme: { spacing } }) => spacing(4)};
  font-weight: 700;
`;

const ReviewText = styled.p`
  padding: ${({ theme: { spacing } }) => spacing(4)};
`;

export { List, ListHeader, Review, ReviewText };
