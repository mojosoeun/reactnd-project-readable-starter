import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Category from './Category'
import PostList from './PostList'
import PostForm from './PostForm'
import PostDetail from './PostDetail'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Category/>
                <Switch>
                <Route exact path='/:category?' component={PostList}/>
                <Route exact path="/edit/post" component={PostForm} />
                <Route exact path="/:category/:id" component={PostDetail} />
                <Route exact path="/:category/:id/edit" component={PostForm} />
                </Switch>

            </div>
        );
    }
}

export default App;
