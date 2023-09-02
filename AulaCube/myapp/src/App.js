import React from 'react';
import CommentList from './components/CommentList';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>Comment Filter App</h1>
      <CommentList />
    </div>
  );
}

export default App;
