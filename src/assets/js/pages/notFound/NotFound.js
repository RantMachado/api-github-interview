import React from 'react';
import srcNotFound from '../../../img/notFound.png';

const NotFound = () => {
  return (
    <div className="notFound">
      <img src={srcNotFound} className="notFound__img" width="300" alt="Usúario não encontrado" />
      <p className="notFound__p">Página não encontrada</p>
    </div>
  )
}

export default NotFound;