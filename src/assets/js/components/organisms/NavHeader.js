import React from 'react';

import HeaderLogo from '../molecules/HeaderLogo';
import HeaderSearch from '../molecules/HeaderSearch';

const NavHeader = () => {
  return (
    <nav className="container header__nav">
      <HeaderLogo />
      <HeaderSearch />
    </nav>
  )
}

export default NavHeader;
