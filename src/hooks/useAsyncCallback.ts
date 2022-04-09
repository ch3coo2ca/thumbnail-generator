import {useState} from 'react';

const useAsyncCallback = (asyncFunction: () => Promise<void>) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const execute = () => {
    setLoading(true);

    asyncFunction()
      .then(() => setLoading(false))
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return {execute, isLoading: loading, isError: error};
};

export default useAsyncCallback;
