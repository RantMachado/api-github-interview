import React from 'react';
import './assets/scss/styles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStorage } from './assets/js/context/GlobalContext'; 

//Templates
import HeaderTemplate from './assets/js/components/templates/headerTemplate/HeaderTemplate'
import FooterTemplate from './assets/js/components/templates/footerTemplate/FooterTemplate'

//Pages
import Home from './assets/js/pages/home/Home';
import NotFound from './assets/js/pages/notFound/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <HeaderTemplate />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
          <Route path="*"element={<NotFound />} />
        </Routes>
        <FooterTemplate />
      </GlobalStorage>
    </BrowserRouter>
  )
}

export default App;