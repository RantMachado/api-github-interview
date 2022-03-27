import React from 'react'

const CardUSer = ({global}) => {

  const { json } = global.context;

  return (
    json && <div className="card">
      <h1 className="card__h1">Usuário: {json.login}</h1>
      <img className="card__img" src={json.avatar_url} />
    </div>
  )
}

export default CardUSer;