# usePromise

`usePromise` is a custom hook that allows you to handle promises in your React application.

## Usage

To use the `usePromise` hook, pass in a promise as an argument and destructure the returned object in your component:

```javascript
import { usePromise } from './usePromise';

function MyComponent() {
  const { data, error, loading } = usePromise < MyDataType > fetchData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) return <p>Data: {data}</p>;
}
```

The hook will re-run if the promise passed in changes.

## Properties

The hook returns an object with the following properties:

- `data`: The resolved value of the promise. Will be `null` if the promise is still pending or if an error occurred.
- `error`: The error that occurred if the promise was rejected. Will be `null` if the promise is still pending or if it was resolved.
- `loading`: A boolean that indicates if the promise is still pending (`true`) or if it has been resolved or rejected (`false`).

## TypeScript

This hook is written in TypeScript and it's generic, so you need to specify the type of data that the promise is going to return, otherwise you will get type errors.

```javascript
const { data, error, loading } = usePromise < MyDataType > fetchData();
```

Here MyDataType is the type of data that the promise fetchData is going to return.

## Example

Here is an example of how you could use the usePromise hook to fetch data from an API and display it in a component:

```javascript
import { usePromise } from './usePromise';

function MyComponent() {
  const { data, error, loading } =
    usePromise <
    MyDataType >
    fetch('https://jsonplaceholder.typicode.com/todos/1');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) return <p>Data: {data.title}</p>;
}
```

In this example, the usePromise hook is used to fetch data from the https://jsonplaceholder.typicode.com/todos/1 API endpoint, and the response is destructured into the data, error, and loading variables. Depending on the state of the promise, the component will render either a loading message, an error message, or the data that was fetched from the API.
