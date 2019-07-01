import React from 'react';

import RedditList from './RedditList';
import RedditDetail from './RedditDetail';

class App extends React.Component {
  render(){
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="ui row">
            <div className="seven wide column">
              <RedditList />
            </div>
            <div className="nine wide column fixed">
              <RedditDetail />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
