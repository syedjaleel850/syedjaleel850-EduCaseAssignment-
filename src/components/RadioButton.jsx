
import React from 'react';

function RadioButton({ options, selected, onChange }) {
  return (
    <div className="radio-group">
      {options.map((option) => (
        <div 
          key={option.value} 
          className="radio-option"
          onClick={() => onChange(option.value)}
        >
          <div className={`radio-circle ${selected === option.value ? 'selected' : ''}`}>
            <div className="radio-inner"></div>
          </div>
          <span className="radio-label">{option.label}</span>
        </div>
      ))}
    </div>
  );
}

export default RadioButton;
