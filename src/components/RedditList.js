import React from 'react';
import RedditListItem from './RedditListItem';

const RedditList = () => {  
  return (
    <div className="ui relaxed divided list">
      <h3>Reddit Posts</h3>
      <RedditListItem />
    </div>
  )
}

export default RedditList;
