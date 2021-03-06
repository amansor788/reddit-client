import React from 'react';
import { connect } from 'react-redux';

import { getPostSelector } from '../reducers/selectReducer';

class RedditDetail extends React.Component {
  render(){
    const { post } = this.props;

    if (!post) { return <div>Please select a post to show...</div>}  
  
    return (
      <div>
        <div className="ui cust">
           <h2>{post.author}</h2>
           <a href={post.url} target="_blank">
            <img 
                src={post.thumbnail.includes('https://') ? post.thumbnail : 'favicon.ico'} 
                alt="alt"/>
            </a>
           <p>{post.title}</p>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    post: getPostSelector(state),
  };
}

export default connect(mapStateToProps) (RedditDetail);