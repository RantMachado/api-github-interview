import React from 'react';
import { GlobalContext } from '../../context/GlobalContext'

import Section from '../molecules/Section'

import P from '../atoms/P';

const UserInfoSection = () => {

  const global = React.useContext(GlobalContext);

  return (
    <Section className="main__section">
      {
        global && <P>{global.context.login}</P>
      }
    </Section>
  )
}

export default UserInfoSection;