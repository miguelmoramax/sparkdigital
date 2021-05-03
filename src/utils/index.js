import { useEffect, useState } from 'react';
import Axios from 'axios';

const usePostData = (initialUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    let source = Axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const result = await Axios.get(url, { cancelToken: source.token });
        setData(result.data);
        setLoading((loading) => !loading);
      } catch (error) {
        setIsError((isError) => !isError);
      }
    };
    fetchData();
  }, [url]);
  return [{ data, loading, isError }, setUrl];
};

export default usePostData;
