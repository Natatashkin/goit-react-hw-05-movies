import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AdditionalInfo, List } from './MovieAdditionalInfo.styled';

export const MovieAdditionalInfo = ({ location }) => {
  return (
    <>
      <AdditionalInfo>
        <h5>Additional information</h5>
        <List>
          <li>
            <NavLink to={`cast`} state={{ from: location }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to={`reviews`} state={{ from: location }}>
              Reviews
            </NavLink>
          </li>
        </List>
      </AdditionalInfo>
    </>
  );
};
