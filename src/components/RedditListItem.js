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
       <div>
         <i className={`bullseye icon ${post.visited ? `grey` : `orange`}`}></i>
         {post.visited}
         <strong>{post.author}</strong> {moment(post).fromNow()}
       </div>
       <div className="item reddit-item">   
           <div className="ui tiny image">
             <img src={post.thumbnail} alt="alt" />
           </div>
           <div className="content">
               {post.title}
           </div>
       </div>      
       <div>
        <button className="ui compact basic olive button tiny" onClick={() => {this.props.dismissPost(post.id)}}>
          <i className="icon close"></i>
            Dismiss Post
        </button>
        {post.num_comments} comments
       </div>
      </div>
   )
  }
}

export default connect(null, { selectPost, dismissPost }) (RedditListItem);