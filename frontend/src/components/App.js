import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Category from './Category'
import { fetchCategory } from '../actions';
import { connect } from 'react-redux';

class App extends Component {

    componentDidMount() {
        this.props.fetchCategory();
    }
  
    render() {
        const { categories } = this.props;

        console.log(categories);

        return (
          <div className='App'>
              <Category categories={categories}/>

              {/* <Navigation categories={this.state.categories}/> */}
              {/* <Route path='/:category?' render={(props) => (
                  <PostList {...props}/>
              )}/>
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
      categories: state.categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategory: () => { return dispatch(fetchCategory());}
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
  