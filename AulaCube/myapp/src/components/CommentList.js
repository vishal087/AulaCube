import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCard from './CommentCard';


function App() {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments?_limit=100')
      .then((response) => {
        setComments(response.data);
        setFilteredComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, []);

  const handleFilter = (postId) => {
    if (postId === '') {
      setFilteredComments(comments);
    } else {
      const filtered = comments.filter(comment => comment.postId.toString() === postId);
      setFilteredComments(filtered);
    }
  };

  const handleCardClick = (comment) => {
    setSelectedPostId(comment.id);
  };

  return (
    <div className="app">
      <div className="left-panel">
        <h2>Posts</h2>
        <div className="filter">
          <input
            type="text"
            placeholder="Filter by postId"
            onChange={(e) => handleFilter(e.target.value)}
          />
          <button onClick={() => handleFilter(' ')}>Clear Filter</button>
        </div>
        <div className="post-list">
          {filteredComments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
      <div className="right-panel">
        <h2>Comments</h2>
        <div className="comments-list">
          {selectedPostId !== null &&
            comments
              .filter(comment => comment.id === selectedPostId)
              .map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;
