# Data Fetching Dashboard Example

This code is meant to demonstrate my ability to write "Meaningful React Code". In this React.js App you will find a very basic example of a React.js application.

 - Data Fetching.
 - State Management.
 - Complex components.
 - React Hooks.

## Data Fetching:

The app consumes a freely available [API](https://jsonplaceholder.typicode.com/). 

The `useFetchData` hook fetches data from the two API endpoints (posts and authors), demonstrating effective use of asynchronous operations and handling API responses.

### State Management:

The hook manages the state for posts, authors, loading, and error. It uses `useState` to handle state and `useEffect` to perform side effects like data fetching, which shows a good grasp of state management.

### Complex Components:

The `DataTable` component is not just rendering static markup; it dynamically generates table rows based on the fetched data. It also includes logic to find and display author names for each post, which adds complexity.

### React Hooks:

The solution uses `useState` and `useEffect` hooks to manage data fetching and component state, demonstrating a good understanding of React hooks.

### Additional Considerations:

Handling Loading and Error States: The App component manages loading and error states effectively, providing feedback to the user based on the application's state.