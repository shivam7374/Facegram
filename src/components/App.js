import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchPosts } from "../actions/posts";
import { Home, Navbar, Page404, Login } from "./index";

// const Login = () => {
//   return <div>Login</div>;
// };
const Signup = () => {
  return <div>Signup</div>;
};
// const Home = (props) => {
//   // some props are send by defalut when we use route
//   console.log(props);
//   return <div>Home</div>;
// };

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log("Props ", this.props);
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          {/* <PostList posts={posts}></PostList> */}

          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul> */}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts}></Home>;
              }}
            ></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route component={Page404}></Route>
            {/* for any random url default page 404 */}
          </Switch>
        </div>
      </Router>
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
