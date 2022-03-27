import React from 'react';

import Nav from '../atoms/Nav';

import HeaderLogo from '../molecules/HeaderLogo';
import HeaderSearch from '../molecules/HeaderSearch';

const NavHeader = () => {
  return (
    <Nav className="container header__nav">
      <HeaderLogo />
      <HeaderSearch />
    </Nav>
  )
}

export default NavHeader;
