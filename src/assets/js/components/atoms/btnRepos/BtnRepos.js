import React from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { GET_REPOS } from '../../../utils/api';
import useFetch from '../../../hooks/useFetch';

const BtnRepos = () => {
  
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

    const { url, options } = GET_REPOS(login);
    const { json } = await request(url, options);

    json.forEach((element) => {
      const { name } = element;
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(name));
      document.querySelector('[data-target="ulResults"] ul').appendChild(li);
    });

    document.querySelector('[data-btn="starred"]').classList.remove('containerBtns__starred--active');
    document.querySelector('[data-btn="repos"]').classList.add('containerBtns__repos--active');
  }

  return (
    <button className='containerBtns__repos' onClick={getRepos} data-btn="repos">Repos</button>
  )
}

export default BtnRepos;