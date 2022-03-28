import React from 'react';
import srcNotFound from '../../../../img/notFound.png';

const NotFound = () => {

  React.useEffect( () => {
    document.title = `Finder - 404`;
  }, []);

  return (
    <div className='notFound'>
      <img src={srcNotFound} className="notFound__img" width="300" alt="Não encontrado" />
      <p className="notFound__p">...Ops, usuário não encontrado</p>
      <a href="/" className="notFound__goBack">Voltar</a>
    </div>
  )
}

export default NotFound;