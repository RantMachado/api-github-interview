import React from 'react'

const CardUSer = ({global}) => {

  const { json } = global.context;

  return (
    json && <div className="card anima-left">
      <h1 className="card__h1">Usuário: <strong>{json.login}</strong></h1>
      <img className="card__img" src={json.avatar_url} alt="foto do usuário"/>
    </div>
  )
}

export default CardUSer;