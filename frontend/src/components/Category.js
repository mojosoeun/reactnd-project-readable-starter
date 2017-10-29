import React, { Component } from 'react'
import { Nav } from 'reactbulma'
import { connect } from 'react-redux';

class Category extends Component {  
  render() {
    const { categories } = this.props;

    return (
      <nav className="breadcrumb is-right" aria-label="breadcrumbs">
        <ul>
          <li key="all" className="is-active"><a href="/" aria-current="page">all</a></li>
          {
            categories.map((category) => {
              return (<li key={category.name}><a href={`/${category.path}`} aria-current="page"> {category.name} </a></li>)
            })
          }
        </ul>
      </nav>
    )
  }
}

export default Category;
