import React from 'react';

import RedditList from './RedditList';
import RedditDetail from './RedditDetail';

class App extends React.Component {
  render(){
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="ui row">
            <div className="five wide column">
              <RedditList />
            </div>
            <div className="eleven wide column">
              <RedditDetail />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
