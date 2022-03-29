import React from 'react';
import { GlobalContext } from '../../../context/GlobalContext'

import Welcome from '../../atoms/welcome/Welcome';
import ContainerCardUser from '../../molecules/containerCardUser/ContainerCardUser';
import ContainerBtns from '../../molecules/containerBtns/ContainerBtns';
import ContainerResults from '../../molecules/containerResults/ContainerResults';

const UserSection = () => {

  const global = React.useContext(GlobalContext);

  return (
    <section className="container">
      {
        global.context === '' ? <Welcome /> : 
        <>
          <ContainerCardUser global={global} />
          <ContainerBtns global={global} />
          <ContainerResults />
        </>
      }
    </section>
  )
}

export default UserSection;