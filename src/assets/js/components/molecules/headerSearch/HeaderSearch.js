import React from 'react';

import { GlobalContext } from '../../../context/GlobalContext';
import useFetch from '../../../hooks/useFetch';
import { GET_USER } from '../../../utils/api';


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
        const { response, json } = await request(url, options);
        document.title = `Finder - ${json.login}`;
        global.setContext({ response, json });
      }

    }

    getData();

  }, [userName]);

  return (
    <div className="header__search">
      <label htmlFor="buscar" name="buscar">
        <input className="header__input" type="text" name="buscar" placeholder="buscar" data-input="target" />
      </label>
      <button className="header__button" onClick={handleClick}>OK</button>
    </div>
  )
}

export default HeaderSearch;