import React, { Component } from 'react'
import { Nav } from 'reactbulma'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { categoryAction } from '../actions';

class Category extends Component {
  constructor(props) {
    super(props)
    this.fHandleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
      this.props.fetchCategory();
  }

  state = {
    active : 'all'
  }

  render() {
    const { categories } = this.props;

    return (
      <nav className="breadcrumb is-right" aria-label="breadcrumbs">
        <ul>
          <li key="all" aria-current="page" className={this.state.active == 'all'? 'is-active': ''} onClick={this.fHandleClick}><Link name="all" to="/" >all</Link></li>
          {
            categories.map(category =>
              <li key={category.name} aria-current="page" className={this.state.active == `${category.name}`? 'is-active': ''} onClick={this.fHandleClick}><Link name={category.name} to={`/${category.path}`} aria-current="page">{category.name}</Link></li>)
          }
          <li key="add post" aria-current="page" className={this.state.active == 'add post'? 'is-active': ''} onClick={this.fHandleClick}><Link name="add post" to="/add/post">add post</Link></li>

        </ul>
      </nav>
    )
  }

  handleClick(e) {
    this.setState({active: e.target.name})
  }
}

const mapStateToProps = (state) => {
    return {
        categories: state.category.get('list'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategory: () => { return dispatch(categoryAction.fetchCategory());},
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Category);
