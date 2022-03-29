import React from 'react';

import { ReactComponent as Github} from '../../../../img/github.svg';

const HeaderLogo = () => {
  return (
    <div className='header__logo'>
      <Github />
      <a href="/">Finder</a>
    </div>
  )
}

export default HeaderLogo;