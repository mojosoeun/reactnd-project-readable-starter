import React, { Component } from 'react'
import { Nav } from 'reactbulma'
import { fetchCategory } from '../actions';
import { connect } from 'react-redux';

class Category extends Component {
  
    render() {
      const { categories } = this.props;
      return (
        <nav className="breadcrumb is-right" aria-label="breadcrumbs">
          <ul>
            <li><a href="#">all</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li className="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
          </ul>
        </nav>
      )
    }
  }

export default Category;
