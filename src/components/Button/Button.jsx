import React from 'react';
import { ButtonStyles } from './Button.styled';
import { IconContext } from 'react-icons';

export const Button = ({ type, text, icon = null, onClick = () => {} }) => {
  return (
    <ButtonStyles type={type} onClick={onClick}>
      {icon && (
        <IconContext.Provider value={{ style: { marginRight: '8px' } }}>
          {icon}
        </IconContext.Provider>
      )}
      <span>{text}</span>
    </ButtonStyles>
  );
};
