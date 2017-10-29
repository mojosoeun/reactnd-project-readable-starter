import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Category from './Category'
import PostList from './PostList'
import { fetchCategory, fetchPost } from '../actions';
import { connect } from 'react-redux';

class App extends Component {

    componentDidMount() {
        this.props.fetchCategory();
        this.props.fetchPost();
    }
  
    render() {
        const { categories, posts } = this.props;
        return (
          <div className='App'>
            <Category categories={categories}/>
            {
                <Route path='/:category?' render={(props) => (
                    <PostList {...props} posts={posts} />
                )}/>
            }
            {
            /*
              <Route path='/add' render={() => (
                  <Form />
              )}/>
              <Route path='/posts/:id' render={(props) => (
                  <PostDetail {...props}/>
              )}/> */}
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      categories: state.category.list,
      posts: state.post.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategory: () => { return dispatch(fetchCategory());},
        fetchPost: () => { return dispatch(fetchPost());}
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
  