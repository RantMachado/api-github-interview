import React from 'react';

import Div from '../atoms/Div';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

import { GlobalContext } from '../../context/GlobalContext';
import useFetch from '../../hooks/useFetch';
import { GET_USER } from '../../utils/api';


const HeaderSearch = () => {
  
  const global = React.useContext(GlobalContext);
  const [userName, setUserName] = React.useState(null);
  const { request } = useFetch();

  function handleClick() {
    const _userName = document.querySelector('[data-input="target"]').value;
    setUserName(_userName);
  }

  React.useEffect(() => {

    async function getData() {

      if (userName != null) {
        const { url, options} = GET_USER(userName);
        const { json } = await request(url, options);
        document.title = `Finder - ${json.login}`;
        global.setContext(json);
      }

    }

    getData();

  }, [userName]);

  return (
    <Div className="header__search">
      <Label htmlFor="buscar" name="buscar">
        <Input className="header__input" type="text" name="buscar" placeholder="buscar" data-input="target" />
      </Label>
      <Button className="header__button" onClick={handleClick}>OK</Button>
    </Div>
  )
}

export default HeaderSearch;