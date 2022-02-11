import React from 'react';
import { AppBarStyles } from './AppBar.styled';

const AppBar = ({ children }) => {
  return <AppBarStyles>{children}</AppBarStyles>;
};

export { AppBar };