import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Category from './Category'
import PostList from './PostList'
import PostForm from './PostForm'
import PostDetail from './PostDetail'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Category/>
                <Route exact path='/:category?' component={PostList}/>
                <Route exact path="/add/post" component={PostForm} />
                <Route exact path="/:category/:id" component={PostDetail} />
            </div>
        );
    }
}

export default App;
