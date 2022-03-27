import React from 'react';

import Header from '../components/templates/Header';
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer';

const Home = () => {

  React.useEffect(() => {
    
    document.body.classList.add('home');

  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Home;