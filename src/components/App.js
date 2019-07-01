import React from 'react';

import RedditList from './RedditList';
import RedditDetail from './RedditDetail';

class App extends React.Component {
  render(){
    return (
        <div className="ui padded grid cust">
            <div className="seven wide column cust">
              <RedditList />
            </div>
            <div className="nine wide column cust">
              <RedditDetail />
            </div>
        </div>
    )
  }
}

export default App;
