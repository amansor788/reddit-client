import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

import RedditListItem from './RedditListItem';

class RedditList extends React.Component {    

  render(){
    return (
      <div className="ui relaxed divided list">
        <h3>Reddit Posts</h3>
        <RedditListItem />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.posts),
  };
}

export default connect(mapStateToProps, {fetchPosts}) (RedditList);
