import React from 'react';
import srcNotFound from '../../../../img/notFound.png';

const UserNotFound = () => {

  React.useEffect( () => {
    document.title = `Finder - 404`;
  }, []);

  return (
    <div className='userNotFound'>
      <img src={srcNotFound} className="userNotFound__img" width="300" alt="Usúario não encontrado" />
      <p className="userNotFound__p">...Ops, usuário não encontrado</p>
      <a href="/" className="userNotFound__goBack">Voltar</a>
    </div>
  )
}

export default UserNotFound;