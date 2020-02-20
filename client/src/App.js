import React from 'react';
import './App.css';

import { useQuery } from 'urql';

function App() {
  const [{fetching, data, error}] = useQuery({
    query: `
      {
        allPosts(orderBy: createdAt_DESC, first: 10, skip: 0){
          id
          title
          votes
          url
          createdAt
        }
      }
    `
  });

  return (
    <pre>{JSON.stringify({fetching, data, error}, null, 2)}</pre>
  );
}

export default App;
