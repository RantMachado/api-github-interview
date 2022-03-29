import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Github} from '../../../../img/github.svg';

const HeaderLogo = () => {
  return (
    <div className='header__logo'>
      <Github />
      <NavLink to="/" end>Finder</NavLink>
    </div>
  )
}

export default HeaderLogo;