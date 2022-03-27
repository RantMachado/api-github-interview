import React from 'react';

import Header from '../molecules/Header';
import Nav from '../molecules/Nav';

import HeaderLogo from '../organisms/HeaderLogo';
import HeaderSearch from '../organisms/HeaderSearch';

const HeaderTemplate = () => {
  return (
    <Header className="header">
    <Nav className="container header__nav">
      <HeaderLogo />
      <HeaderSearch />
    </Nav>
  </Header>
  )
}

export default HeaderTemplate;