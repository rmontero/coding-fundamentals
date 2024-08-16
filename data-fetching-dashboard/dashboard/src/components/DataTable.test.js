import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DataTable from './DataTable';

describe('DataTable Component', () => {
  test('should render the table with posts and authors', () => {
    const posts = [
      { id: 1, title: 'Post 1', userId: 1 },
      { id: 2, title: 'Post 2', userId: 2 },
    ];
    const authors = [
      { id: 1, name: 'Author 1' },
      { id: 2, name: 'Author 2' },
    ];

    render(<DataTable posts={posts} authors={authors} />);

    // Check if the table renders the post details
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();

    // Check if the authors' names are rendered correctly
    expect(screen.getByText('Author 1')).toBeInTheDocument();
    expect(screen.getByText('Author 2')).toBeInTheDocument();
  });

  test('should handle empty posts and authors arrays', () => {
    const { container } = render(<DataTable posts={[]} authors={[]} />);

    // Check that the table is not rendered if there are no posts
    expect(container.querySelector('table')).toBeNull();
  });
});
