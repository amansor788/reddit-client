import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts, dismissAll} from '../actions';

import RedditListItem from './RedditListItem';
//import Paginator from './Paginator';
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
      <div className="reddit-general-item cust">
        <div className="list-header">
          <h3>Reddit Posts</h3>
          {/* <Paginator /> */}
        </div>
        <div className="ui relaxed divided list scroll-list">
          {this.renderList()}
        </div>
        <div className="list-footer">
          <button className="ui compact basic olive button tiny" onClick={() => {this.props.dismissAll()}}>
              Dismiss All
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.posts),
  };
}

export default connect(mapStateToProps, {fetchPosts, dismissAll}) (RedditList);
