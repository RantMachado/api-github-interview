import React from 'react'

import Div from '../atoms/Div';
import H1 from '../atoms/H1';
import Img from '../atoms/Img';

const CardUSer = ({global}) => {
  return (
    <Div className="card">
      <H1 className="card__h1">Usuário: {global.context.login}</H1>
      <Img className="card__img" src={global.context.avatar_url} />
    </Div>
  )
}

export default CardUSer;