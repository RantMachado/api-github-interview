import React from 'react';

const NotFound = () => {

  React.useEffect( () => {
    document.title = `Finder - 404`;
  }, []);

  return (
    <div className='notFound'>
      <p className="notFound__p">Erro 404: Poxa, usuário não encontrado</p>
    </div>
  )
}

export default NotFound;