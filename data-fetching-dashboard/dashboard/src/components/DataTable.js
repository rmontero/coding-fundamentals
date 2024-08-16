import React from 'react';

const DataTable = ({ posts, authors }) => {
  if (!posts.length || !authors.length) return null;

  const getAuthorName = (authorId) => {
    const author = authors.find((user) => user.id === authorId);
    return author ? author.name : 'Unknown';
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Post ID</th>
          <th>Title</th>
          <th>Author Name</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{getAuthorName(post.userId)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
