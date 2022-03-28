import React from 'react';

import { ReactComponent as Github} from '../../../../img/github.svg';

const HeaderLogo = () => {
  return (
    <div className='header__logo'>
      <Github />
      <span>Finder</span>
    </div>
  )
}

export default HeaderLogo;