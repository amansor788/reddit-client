import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

import RedditListItem from './RedditListItem';
import Paginator from './Paginator';
import '../css/RedditListItem.css';

class RedditList extends React.Component { 
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderList = () => {
    return this.props.posts.map(post => {
      return <RedditListItem key={post.data.id} post={post.data} />
    })
  }

  render(){
    return (
      <div className="ui relaxed divided list reddit-general-item">
        <h3>Reddit Posts</h3>
        <Paginator />
        {this.renderList()}
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
