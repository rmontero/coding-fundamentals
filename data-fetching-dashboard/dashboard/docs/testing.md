# Automated Testing Example

Automated tests are implemented using Jest and React Testing Library. These tests ensure that the components behave as expected and handle various states correctly.

## Installation

To run the tests, you need to install the necessary testing libraries. Use the following command:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
Test Coverage
Test coverage is aimed at verifying the following:
```

## Component Rendering:

- Ensure that the DataTable component correctly renders posts and authors.
- Verify that the component handles empty states and mismatched data.

## Custom Hook Functionality:

- Confirm that the useFetchData hook correctly fetches data and manages loading and error states.

## Testing Approach

### Testing DataTable Component:

File: [src/components/DataTable.test.js](src/components/DataTable.test.js)

#### Tests:

- Rendering with Data: Verifies that the DataTable displays posts and authors correctly.
- Handling Empty Arrays: Checks that no table is rendered when posts and authors arrays are empty.
- Handling Mismatched IDs: Ensures that posts are displayed even if there are author IDs that do not match any in the authors array.

Example Test:

```jsx
test('should render the table with posts and authors', () => {
  const posts = [{ id: 1, title: 'Post 1', userId: 1 }];
  const authors = [{ id: 1, name: 'Author 1' }];

  render(<DataTable posts={posts} authors={authors} />);

  expect(screen.getByText('Post 1')).toBeInTheDocument();
  expect(screen.getByText('Author 1')).toBeInTheDocument();
});
```

### Testing useFetchData Hook:

File: [src/hooks/useFetchData.test.js](src/hooks/useFetchData.test.js)

#### Tests:

- Fetching Data: Verifies that data is fetched correctly and updates the component state.
- Handling Loading State: Ensures that the loading state is displayed while data is being fetched.
- Handling Errors: Checks that errors are properly handled and displayed.

Example Test:

```jsx
test('should handle loading and error states', async () => {
  const mockFetch = jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue([]),
  });

  const { result, waitForNextUpdate } = renderHook(() => useFetchData());

  expect(result.current.loading).toBe(true);

  await waitForNextUpdate();

  expect(result.current.loading).toBe(false);
  expect(result.current.data).toEqual([]);

  mockFetch.mockRestore();
});
```

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

This will execute all test suites and provide a report of the results.

## Common Issues

### Dependency Conflicts:

If you encounter dependency issues, try running npm install with the `--legacy-peer-deps` flag to resolve conflicts.

### Warnings About act:

If you see warnings about updates not being wrapped in act(...), ensure that state updates within tests are correctly wrapped.

[Back](../README.md)