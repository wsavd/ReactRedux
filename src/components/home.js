import _ from 'lodash';
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions/index';

class Home extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  
  //метод который мапит посты
  renderPosts() {
    /*
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </li>
      );
    });
  }
    */
    return _.map(this.props.posts, (post) => {
      return (
        <li key={post.id}>
          <Link to={"/posts/" + post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <ul>
          <li><Link to="/item0">Item0</Link></li>
          <li><Link to="/item1">Item1</Link></li>
        </ul>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(Home)
