import React from 'react';
import './App.css';

import { useQuery } from 'urql';

import Upvote from './components/Upvote';

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
    // <pre>{JSON.stringify({fetching, data, error}, null, 2)}</pre>
    <>
    {fetching ? <div>Loading...</div> :
        <ul>
          {data.allPosts.map(post => (
            <li key={post.id}>
              <a href={post.url}>{post.title}</a> * <Upvote post={post} />
            </li>
          ))}
        </ul>
    }

    </>
  );
}

export default App;
