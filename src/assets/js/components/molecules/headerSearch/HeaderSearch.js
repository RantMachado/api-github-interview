import React from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import useFetch from '../../../hooks/useFetch';
import { GET_USER } from '../../../utils/api';

const HeaderSearch = () => {

  const global = React.useContext(GlobalContext);
  const [userName, setUserName] = React.useState(null);
  const { request } = useFetch();

  const handleLoad = () => {
    setTimeout(() => {
      
      const params = window.location.pathname.replace('/', '');
      if(params !== '') 
        setUserName(params);

    }, 1000);
  }

  window.addEventListener('load', handleLoad);
  
  const handleClick = () => {
    const _userName = document.querySelector('[data-input="target"]').value;
    setUserName(_userName);
  }

  React.useEffect(() => {

    const getData = async () => {

      if (userName != null) {
        const { url, options} = GET_USER(userName);
        const { response, json } = await request(url, options);
        json.login !== undefined ? document.title = `Finder - ${json.login}`: document.title = `Finder`;
        global.setContext({ response, json });
      }

    }

    const refreshResults = () => {
      const removeUl = document.querySelector('[data-target="ulResults"] ul');
      
      if(userName !== null && removeUl !== null) {

        const results = document.querySelector('[data-target="ulResults"]');
        const newUl = document.createElement('ul');
        results.removeChild(removeUl);
        results.appendChild(newUl);
        results.classList.remove('containerResults--active');
        document.querySelector('[data-btn="repos"]').classList.remove('containerBtns__repos--active');
        document.querySelector('[data-btn="starred"]').classList.remove('containerBtns__starred--active');
      }
    }

    getData();
    refreshResults();

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