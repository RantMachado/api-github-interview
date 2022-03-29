import React from 'react';

const ContainerResults = ({global}) => {

  const { response } = global.context;
  
  return (
    response.ok === false ? 
      <></> : 
      <div className='containerResults' data-target="ulResults">
        <ul></ul>
      </div>
  )
}

export default ContainerResults;