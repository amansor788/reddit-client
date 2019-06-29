import React from 'react';
import moment from 'moment';

import '../css/RedditListItem.css';

const RedditListItem = ({post}) => {
  
  console.log(post);
  
  return(
     <div className="item">
      <div>
        <strong>{post.author}</strong> {moment(post).fromNow()}
      </div>
      <div className="item reddit-item">   
          <div class="ui tiny image">
            <img src={post.thumbnail} alt="alt" />
          </div>
          <div className="content">
              {post.title}
          </div>
      </div>      
      <div>
        <button>Dismiss Post</button>
        {post.num_comments} comments
      </div>
     </div>
  )
}

export default RedditListItem;