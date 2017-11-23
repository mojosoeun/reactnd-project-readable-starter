import React, { Component } from 'react';
import { Tabs, Section } from 'reactbulma'
import _ from 'lodash';
import PostSummary from './PostSummary'
import { postAction } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class PostList extends Component {

    componentDidMount() {
        this.handleClick = this.handleClick.bind(this);
        this.props.fetchPost();
    }

    state = {
        order: 'voteScore'
    }

    handleClick(e) {
        const { name } = e.target
        this.setState({ order: name })
    }


    render() {
        const { posts } = this.props;
        const category = this.props.match.params.category;
        let filteredPosts;
        if (category) {
            filteredPosts = posts.filter((post) => {
                return post.category === category
            })
        } else {
            filteredPosts = posts
        }

        // filteredPosts = _.sortBy(filteredPosts, [this.state.order])

        return (
            <Section medium>
                <Tabs>
                    <ul>
                        <li className={this.state.order == 'voteScore'? 'is-active': ''}><a href="#" name="voteScore"  onClick={this.handleClick}>VoteScore</a></li>
                        <li className={this.state.order == 'timeStamp'? 'is-active': ''}><a href="#" name="timeStamp" onClick={this.handleClick}>TimeStamp</a></li>
                    </ul>
                </Tabs>
                {
                    filteredPosts.map((post) => {
                        return (
                            <PostSummary post={post} category={category} />
                        )
                    })
                }
            </Section>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.post.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: () => { return dispatch(postAction.fetchPost());}
    }
};

PostList.propTypes = {
};

PostList.defaultProps = {
  posts: []
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
