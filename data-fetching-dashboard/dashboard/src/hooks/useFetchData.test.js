import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // Add this import
import useFetchData from './useFetchData';

// Test component to use the custom hook
const TestComponent = () => {
  const { posts, authors, loading, error } = useFetchData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

describe('useFetchData Hook', () => {
  beforeEach(() => {
    // Mock fetch responses
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, title: 'Test Post', userId: 1 }]),
      })
    );
  });

  test('should fetch data and handle loading and error states', async () => {
    render(<TestComponent />);

    // Check loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for data to load and check if loading state disappears
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull();
      expect(screen.getByText('Test Post')).toBeInTheDocument();
    });
  });

  test('should handle errors', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Network Error')));

    render(<TestComponent />);

    // Check loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for error to be handled
    await waitFor(() => {
      expect(screen.getByText('Error: Network Error')).toBeInTheDocument();
    });
  });
});
