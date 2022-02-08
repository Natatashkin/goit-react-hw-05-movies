import React from 'react';
import { List, ListHeader, Review, ReviewText } from './Reviews.styled';

export const Reviews = ({ reviews, baseImgUrl }) => {
  const { total_results, results } = reviews;
  return (
    <List>
      {total_results > 0 ? (
        results.map(({ author, content, created_at, id }) => (
          <Review key={id}>
            <ListHeader>
              <div className="name">User: {author}</div>
              <div className="date">{created_at}</div>
            </ListHeader>
            <ReviewText>{content}</ReviewText>
          </Review>
        ))
      ) : (
        <p>No reviews!</p>
      )}
    </List>
  );
};
