import React from 'react';
import { GlobalContext } from '../../context/GlobalContext'

import Section from '../atoms/Section';

import Welcome from '../molecules/Welcome';
import CardUSer from '../molecules/CardUSer';

const UserInfoSection = () => {

  const global = React.useContext(GlobalContext);

  return (
    <Section className="container">
      {
        global.context === '' ? <Welcome /> : <CardUSer global={global} />
      }
    </Section>
  )
}

export default UserInfoSection;