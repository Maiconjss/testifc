import React from 'react';
import Logo from '../../assets/images/logo.jpg';

export const ViewData: React.FC = () => {
  return (
    <div>
      <img 
        src={Logo}
        alt="Logo A.Yoshii"
        style={{
          position:'absolute',
          zIndex:1,
          width: '100px',
          top: 30,
          left: 1615
        }}
        />
    </div>
  );
}

