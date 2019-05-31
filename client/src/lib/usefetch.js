import { useState, useEffect } from 'react';
import axios from 'axios';
import '@babel/polyfill'; // fix regeneratorruntime is randomly not defined babel issue

const useFetch = (url) => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      // const response = await fetch(url);
      const response = await axios.get(url);
      // const json = await response.json();
      // console.log(window.location.pathname);
      setState(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { loading, state };
};

export default useFetch;
