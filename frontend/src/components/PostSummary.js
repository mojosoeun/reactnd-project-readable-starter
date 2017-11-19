import React, { Component } from 'react'
import { postAction } from '../actions';
import { Box, Media, Content, Icon } from 'reactbulma'
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';


class PostSummary extends Component {
    constructor(props) {
        super(props)
        this.handleVote = this.handleVote.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleVote(e) {
        const { id, name } = e.currentTarget
        this.props.votePost(id, name)
    }

    handleDelete(e) {
        const { id } = e.currentTarget
        this.props.deletePost(id)
    }

    render() {
        const { post, category, voteScore } = this.props;

        return (
            <Box key={post.id}>
                <Media>
                    <Media.Left>
                        <a name="upVote" id={post.id} onClick={ this.handleVote }><Icon><i className="fa fa-caret-up"/></Icon></a>
                        { post.voteScore}
                        <a name="downVote" id={post.id} onClick={ this.handleVote }><Icon> <i className="fa fa-caret-down"/> </Icon></a>
                    </Media.Left>
                    <Media.Content>
                        <Content>
                            <span>
                                <a href={`/${category}/${post.id}`} post={post}><strong>{post.title}</strong></a> <small>@{post.author}</small> <small><Timestamp time={post.timestamp} format='full'/></small>
                            </span>
                            &nbsp;
                            <Icon small><i className="fa fa-pencil"/></Icon>
                            &nbsp;
                            <a id={post.id} onClick={ this.handleDelete }><Icon small><i className="fa fa-trash"/></Icon></a>
                        </Content>
                    </Media.Content>
                </Media>
            </Box>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        detail: state.posts.post.get('detail')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        votePost: (id, option) => { return dispatch(postAction.votePost(id, option))},
        deletePost: (id) => { return dispatch(postAction.deletePost(id))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostSummary);
