
import React from 'react';

function Input({ 
  label, 
  type = 'text', 
  placeholder, 
  required = false, 
  value, 
  onChange,
  name
}) {
  return (
    <div className="form-group">
      <label className={`form-label ${required ? 'form-label-required' : ''}`}>
        {label}
      </label>
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
      />
    </div>
  );
}

export default Input;
