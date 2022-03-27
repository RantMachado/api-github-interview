import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  
  const [context, setContext] = React.useState('');

  return(    
    <GlobalContext.Provider value={{context, setContext}}>
      {children}
    </GlobalContext.Provider>
  )
}
