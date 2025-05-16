import { useState, useEffect, useCallback } from "react";

// A custom hook that allows to fetch data from different kinds of url patterns
// It could be from a single url or an array of urls

const useFetch = (initialUrl) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchJson = async (u) => {
    const response = await fetch(u);
    if (!response.ok) throw new Error("Fetch failed");
    return response.json();
  };
  // useCallback for the memorization of the fetchData function so that it won't be created on ever re-render
  // on recreated when the url changes
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = Array.isArray(url)
        ? await Promise.all(url.map(fetchJson))
        : await fetchJson(url);
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (url) fetchData();
  }, [fetchData, url]);

  return { data, error, loading, setUrl };
};

export default useFetch;
