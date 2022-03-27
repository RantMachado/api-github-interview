import React from 'react';

import Div from '../atoms/Div';
import P from '../atoms/P';

const Welcome = () => {
  return (
    <Div className="welcome">
      <P className="welcome__p">Seja bem vindo, busque pelo seu <strong>usuário</strong></P>
    </Div>
  )
}

export default Welcome;