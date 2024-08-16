import React from 'react';
import useFetchData from './hooks/useFetchData';
import DataTable from './components/DataTable';

const App = () => {
  const { posts, authors, loading, error } = useFetchData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts Dashboard</h1>
      <DataTable posts={posts} authors={authors} />
    </div>
  );
};

export default App;
