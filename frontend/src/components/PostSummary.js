import React, { Component } from 'react'
import { postAction } from '../actions';
import { Box, Media, Content, Icon } from 'reactbulma'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'



class PostSummary extends Component {

    constructor(props) {
        super(props)
        this.handleVote = this.handleVote.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        const id = this.props.post.id;
        this.props.fetchComments(id)
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
        const { post, category, detail } = this.props;
        const { comments } = detail;

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
                                <Link to={`/${category}/${post.id}`}>
                                    <strong>{post.title}</strong>
                                </Link>
                                <span> <small>@{post.author}</small> </span>
                                <span> <small><Moment format="YYYY-MM-DD-HH:SS" date={post.timestamp}/></small> </span>
                                <small><Icon><i className="fa fa-comment-o" aria-hidden="true"></i></Icon> {comments.length}</small>
                            </span>
                            <div>
                                <Link to={`${category}/${post.id}/edit`}><Icon small><i className="fa fa-pencil"/></Icon></Link>
                                &nbsp;
                                <a id={post.id} onClick={ this.handleDelete }><Icon small><i className="fa fa-trash"/></Icon></a>
                            </div>
                        </Content>
                    </Media.Content>
                </Media>
            </Box>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        detail: state.posts.comment.detail
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        votePost: (id, option) => { return dispatch(postAction.votePost(id, option))},
        deletePost: (id) => { return dispatch(postAction.deletePost(id))},
        fetchComments: (id) => { return dispatch(postAction.fetchComments(id))},
    }
};

PostSummary.propTypes = {

};

PostSummary.defaultProps = {
    category: 'all',
    detail: {
        comments: []
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostSummary);
