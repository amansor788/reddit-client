import React from 'react';

const RedditDetail = ( {post} ) => {
  if (!post) { return <div>Loading...</div>}  
  
  const redditSrc = '++TODO: url reddit selected post';

  return (
    <div>
      <div className="ui embed">
         RedditDetail Component
      </div>
    </div>
  )
};

export default RedditDetail;