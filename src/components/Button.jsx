
import React from 'react';

function Button({ children, type = 'primary', onClick, disabled = false }) {
  const buttonClass = `${type}-button ${disabled ? 'button-disabled' : ''}`;
  
  return (
    <button 
      className={buttonClass} 
      onClick={onClick} 
      disabled={disabled}
      type={onClick ? 'button' : 'submit'}
    >
      {children}
    </button>
  );
}

export default Button;
