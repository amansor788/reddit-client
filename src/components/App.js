import React from 'react';

import RedditList from './RedditList';
import RedditDetail from './RedditDetail';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        App Component
        <RedditList />
        <RedditDetail />
      </div>
    )
  }
}

export default App;
