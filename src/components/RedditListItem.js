import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';

import '../css/RedditListItem.css';
import { selectPost, dismissPost } from '../actions';

class RedditListItem extends React.Component {
  
  render(){
    const { post } = this.props;
    
    return(
      <div className="item" onClick={() => {this.props.selectPost(post.id)}}>
       <div className="paddle">
         <i className={`bullseye icon ${post.visited ? `grey` : `blue`}`}></i>
         {post.visited}
         <strong>{post.author}</strong> {moment(post).fromNow()}
       </div>
       <div className="reddit-item paddle">   
          <img src={post.thumbnail.includes('https://') ? post.thumbnail : 'favicon.ico'} alt="alt" />
          {post.title}
       </div>      
       <div>
        <button className="ui compact basic orange button tiny" onClick={() => {this.props.dismissPost(post.id)}}>
          <i className="icon close"></i>
            Dismiss Post
        </button>
        <span className="comment">{post.num_comments} comments</span>
       </div>
      </div>
   )
  }
}

export default connect(null, { selectPost, dismissPost }) (RedditListItem);