import { useState, useEffect } from 'react';

const useFetchData = () => {
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, authorsResponse] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts'),
          fetch('https://jsonplaceholder.typicode.com/users'),
        ]);
        const postsData = await postsResponse.json();
        const authorsData = await authorsResponse.json();

        setPosts(postsData);
        setAuthors(authorsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { posts, authors, loading, error };
};

export default useFetchData;
