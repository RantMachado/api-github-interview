import React from 'react';

import NotFound from '../../atoms/notFound/NotFound';
import CardUSer from '../../atoms/cardUser/CardUSer';

const ContainerCardUser = ({global}) => {

  const { response } = global.context;

  return (
    response.ok === false ? <NotFound /> : <CardUSer global={global}/>
  )
}

export default ContainerCardUser;