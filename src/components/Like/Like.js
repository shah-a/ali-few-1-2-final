import { useState } from 'react';
import './Like.css';

function Like() {
  const [likes, setLikes] = useState(0);
  return (
    <div className="Like">
      <button onClick={() => setLikes(likes + 1)}>
        👍
      </button>
      <h1>{likes}</h1>
      <button onClick={() => setLikes(likes - 1)}>
        👎
      </button>
    </div>
  );
}

export default Like;
