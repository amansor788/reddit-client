import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';

import '../css/RedditListItem.css';
import { selectPost } from '../actions';

class RedditListItem extends React.Component {
  
  //console.log(post);
  render(){
    const { post } = this.props;

    return(
      <div className="item" onClick={() => {this.props.selectPost(post.id)}}>
       <div>
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
         <button>Dismiss Post</button>
         {post.num_comments} comments
       </div>
      </div>
   )
  }
}

export default connect(null, { selectPost }) (RedditListItem);