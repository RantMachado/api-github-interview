import React from 'react';

import HeaderLogo from '../../molecules/headerLogo/HeaderLogo';
import HeaderSearch from '../../molecules/headerSearch/HeaderSearch';

const NavHeader = () => {
  return (
    <nav className="container header__nav">
      <HeaderLogo />
      <HeaderSearch />
    </nav>
  )
}

export default NavHeader;