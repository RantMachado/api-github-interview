import React from 'react';
import BtnRepos from '../../atoms/btnRepos/BtnRepos';
import BtnStarred from '../../atoms/btnStarred/BtnStarred';

const ContainerBtns = () => {
  return (
    <div className="containerBtns">
      <BtnRepos />
      <BtnStarred />
    </div>
  )
}

export default ContainerBtns;