import { useState, useEffect } from "react";

const usePromise = (promiseCreator: Function, deps: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [resolved, setResolved] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
};

export default usePromise;
