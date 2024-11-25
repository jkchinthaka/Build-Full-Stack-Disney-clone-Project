import React from 'react';
import logo from './../assets/logo.png';

function Header() {
  return (
    <div>
      <img
        src={logo}
        alt="Logo"
        className="w-[80px] md:w-[115px] object-cover"
      />
    </div>
  );
}

export default Header;
