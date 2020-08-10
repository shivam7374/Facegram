import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log("Props ", this.props);
    const { posts } = this.props;
    return (
      <div>
        <div className="posts-list">
          {posts.map((post) => {
            return (
              <div className="post-wrapper" key={post._id}>
                <div className="post-header">
                  <div className="post-avatar">
                    <img
                      src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                      alt="user-pic"
                    ></img>
                    <div>
                      <span className="post-author">{post.user.name}</span>
                      <span className="post-time">a minute ago</span>
                    </div>
                  </div>
                  <div className="post-content">{post.content}</div>
                  <div className="post-actions">
                    <div className="post-like">
                      <img
                        src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                        alt="likes-icon"
                      ></img>
                      <span>{post.likes.length}</span>
                    </div>
                    <div className="post-comments-icon">
                      <img
                        src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                        alt="comments-icon"
                      ></img>
                      <span>{post.comments.length}</span>
                    </div>
                  </div>
                  <div className="post-comment-box">
                    <input placeholder="Start typing a comment."></input>
                  </div>
                  <div className="post-comments-list">
                    <div className="post-comments-item">
                      <div className="post-comment-header">
                        <span className="post-comment-author">Bill</span>
                        <span className="post-comment-time">A minute ago</span>
                        <span className="post-comment-likes">22</span>
                      </div>
                      <div className="post-comment-content">Random Comment</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
