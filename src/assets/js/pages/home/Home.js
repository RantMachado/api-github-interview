import React from 'react';
import MainTemplate from '../../components/templates/mainTemplate/MainTemplate';


const Home = () => {

  React.useEffect(() => {
    
    document.body.classList.add('home');

  }, []);

  return (
    <>
      <MainTemplate />
    </>
  )

}

export default Home;