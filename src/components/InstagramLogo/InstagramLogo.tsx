import React from 'react';

const InstagramLogo = () => {
  return (
    <div
      style={{ cursor: 'pointer', textAlign: 'left', marginLeft: '20px', marginTop: '20px' }}
    >
      <i
        style={{
          backgroundImage:
            'url("https://static.cdninstagram.com/rsrc.php/v3/ym/r/BQdTmxpRI6f.png")',
          backgroundPosition: '0px 0px',
          backgroundSize: '176px 181px',
          width: '175px',
          height: '51px',
          backgroundRepeat: 'no-repeat',
          display: 'inline-block',
        
        }}
      ></i>
    </div>
  );
};

export default InstagramLogo;
