import React, { useState } from 'react';
import '../stylingFiles/ToggleInput.css'; // Import the CSS file for styling

export const ToggleInput = ({onToggle}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
    onToggle();
  };

  return (
    <div className="toggle-container">
      <label className="toggle-switch">
        <input type="checkbox" checked={isChecked} onChange={handleToggleChange} />
        <span className="slider"></span>
      </label>
      <span className="toggle-label">{isChecked ? 'Light' : 'Dark'}</span>
    </div>
  );
};
