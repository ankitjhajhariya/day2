import React from 'react';

function Button({ text, icon }) {
  return (
    <button style={{ padding: '10px', fontSize: '16px', backgroundColor: '#4169E1', border: 'none', borderRadius: '0.3rem', color: 'white' }}>
      {text} {icon}
    </button>
  );
}

export default Button;

