import React from 'react';

const DeveloperBy = () => {

  const date = new Date();

  return (
    <div className="container developedBy">
      <p>
        Desenvolvido por: <strong>Randolfo Machado</strong>
      </p>
      <p>Email: <strong>talktorandolph@live.com</strong></p>
      <p>
        Todos os Direitos Reservados {date.getFullYear()}
      </p>
    </div>
  )
}

export default DeveloperBy;