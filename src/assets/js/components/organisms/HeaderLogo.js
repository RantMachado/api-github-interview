import React from 'react';

import { ReactComponent as Github} from '../../../img/github.svg';

import Div from '../molecules/Div';

import Span from '../atoms/Span';

const HeaderLogo = () => {
  return (
    <Div className='header__logo'>
      <Github />
      <Span>Finder</Span>
    </Div>
  )
}

export default HeaderLogo;