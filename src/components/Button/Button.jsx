import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
};
