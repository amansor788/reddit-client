import React from 'react';

import RedditList from './RedditList';
import RedditDetail from './RedditDetail';

class App extends React.Component {
  render(){
    return (
        <div className="ui padded grid cust">
            <div className="six wide column cust">
              <RedditList />
            </div>
            <div className="ten wide column cust">
              <RedditDetail />
            </div>
        </div>
    )
  }
}

export default App;
