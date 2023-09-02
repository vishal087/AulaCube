import React from 'react';

function CommentCard({ comment, onClick }){
  return (
    <div className="comment-card" onClick={() => onClick(comment)}>
      <h3>{comment.id}{". "}{comment.name}</h3>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
 
    </div>
  );
}

export default CommentCard;
