import { useState, useEffect } from 'react';

type PromiseData<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

export function usePromise<T>(promise: Promise<T>): PromiseData<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    promise
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [promise]);

  return { data, error, loading };
}
