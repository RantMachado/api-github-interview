import React from 'react';

import Header from '../atoms/Header';

import NavHeader from '../organisms/NavHeader';

const HeaderTemplate = () => {
  return (
    <Header className="header">
      <NavHeader />
    </Header>
  )
}

export default HeaderTemplate;