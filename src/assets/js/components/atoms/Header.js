import React from 'react';

const Header = ({children, ...props}) => {
  return (
    <header {...props}>
      {children}
    </header>
  )
}

export default Header;