import React from 'react';
import { GlobalContext } from '../../context/GlobalContext'

import Welcome from '../atoms/Welcome';
import ContainerCardUser from '../molecules/ContainerCardUser';

const UserInfoSection = () => {

  const global = React.useContext(GlobalContext);

  return (
    <section className="container">
      {
        global.context === '' ? <Welcome /> : <ContainerCardUser global={global} />
      }
    </section>
  )
}

export default UserInfoSection;