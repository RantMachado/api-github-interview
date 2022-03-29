import React from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { GET_STARRED } from '../../../utils/api';
import useFetch from '../../../hooks/useFetch';


const BtnStarred = () => {

  const { request } = useFetch();
  const global = React.useContext(GlobalContext);
  const { json } = global.context;
  const { login } = json;

  const getRepos = async () => {
    const results = document.querySelector('[data-target="ulResults"]');
    const removeUl = document.querySelector('[data-target="ulResults"] ul');
    const newUl = document.createElement('ul');

    results.removeChild(removeUl);

    results.appendChild(newUl);

    const { url, options } = GET_STARRED(login);
    const { json } = await request(url, options);

    json.forEach((element) => {
      const { name } = element;
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(name));
      document.querySelector('[data-target="ulResults"] ul').appendChild(li);
    });

    document.querySelector('[data-btn="repos"]').classList.remove('containerBtns__repos--active');
    document.querySelector('[data-btn="starred"]').classList.add('containerBtns__starred--active');
  }

  return (
    <button className='containerBtns__starred' onClick={getRepos} data-btn="starred">Starred</button>
  )
}

export default BtnStarred;