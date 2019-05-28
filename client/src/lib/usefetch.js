import { useState, useEffect } from 'react';
import '@babel/polyfill'; // fix regeneratorruntime is randomly not defined babel issue
// TODO: define fallback
const useFetch = (url) => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setState(json);
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
