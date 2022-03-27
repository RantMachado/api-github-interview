import React from 'react';

import Main from '../atoms/Main';

import UserInfoSection from '../organisms/UserInfoSection';

const MainTemplate = () => {
  return (
    <Main className="main">
      <UserInfoSection />
    </Main>
  )
}

export default MainTemplate;