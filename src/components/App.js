import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPosts } from "../actions/posts";
import { PostList } from "./index";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log("Props ", this.props);
    const { posts } = this.props;
    return (
      <div>
        <PostList posts={posts}></PostList>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.protoTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
