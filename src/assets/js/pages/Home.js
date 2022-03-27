import React from 'react';

import HeaderTemplate from '../components/templates/HeaderTemplate';
import MainTemplate from '../components/templates/MainTemplate';
import FooterTemplate from '../components/templates/FooterTemplate';

const Home = () => {

  React.useEffect(() => {
    
    document.body.classList.add('home');

  }, []);

  return (
    <>
      <HeaderTemplate />
      <MainTemplate />
      <FooterTemplate />
    </>
  )

}

export default Home;