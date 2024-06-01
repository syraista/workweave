import React, { useState, useEffect } from 'react';
import '../../css/minorel.css';

export default function Notificationbar({
  read = 0,
  title,
  content,
  time
}) {

  const [isChecked, setIsChecked] = useState(read === 1);

  useEffect(() => {
    setIsChecked(read === 1);
  }, [read]);

  const notifbarStyle = {
    backgroundColor: read === 0 ? '#F4FAFC' : 'inherit'
  };

  return (
    <div className='notifbar' style={notifbarStyle}>
      <div className='notifbar-header'>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={() => setIsChecked(!isChecked)}
        />
        <p>{title}</p>
        {read === 0 && <span className='blue-dot'></span>}
      </div>
      <p>{content}</p>
      <p>{time}</p>
    </div>
  );
}
