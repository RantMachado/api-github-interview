import React from 'react';

import HeaderTemplate from '../../components/templates/headerTemplate/HeaderTemplate';
import MainTemplate from '../../components/templates/mainTemplate/MainTemplate';
import FooterTemplate from '../../components/templates/footerTemplate/FooterTemplate';

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