import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AdditionalInfo, List } from './MovieAdditionalInfo.styled';

export const MovieAdditionalInfo = () => {
  return (
    <>
      <AdditionalInfo>
        <h5>Additional information</h5>
        <List>
          <li>
            <NavLink to={`cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`reviews`}>Reviews</NavLink>
          </li>
        </List>
      </AdditionalInfo>
    </>
  );
};
