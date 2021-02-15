import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(true);

  async function get() {
    try {
      const res = await fetch(url);
      const jsonRes = await res.json();
      setisLoading(false);
      setData(jsonRes);
    } catch (error) {
      setisLoading(false);
      setError(error);
    }
  }
  useEffect(() => {
    get();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default UseFetch;
