import React from 'react';
import './assets/scss/styles.scss';
import { GlobalStorage } from './assets/js/context/GlobalContext'; 

import Home from './assets/js/pages/Home';

const App = () => {
  return (
    <GlobalStorage>
      <Home />
    </GlobalStorage>
  )
}

export default App;