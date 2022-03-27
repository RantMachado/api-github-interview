import React from 'react';

const useFetch = () => {

  const [data, setData] = React.useState(null);

  const request = async (url, options) => {

    let response;
    let json;

    try {

      response = await fetch(url, options);
      json = await response.json();

    } catch (err) {

      json = null;
      console.log(`error on fetch: ${err}`);

    } finally {

      setData(json);

      return {
        response, 
        json
      }

    }

  }

  return (
    {
      data,
      request
    }
  )
}

export default useFetch;