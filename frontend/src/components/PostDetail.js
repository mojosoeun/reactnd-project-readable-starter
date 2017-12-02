import React, { Component } from 'react'
import { postAction } from '../actions'
import { Section, Container, Title, SubTitle, Icon } from 'reactbulma'
import CommentList from './CommentList'
import Moment from 'react-moment';
import { connect } from 'react-redux';


class PostDetail extends Component{

    constructor(props){
        super(props)
        this.handleDeletePost = this.handleDeletePost.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchPostDetail(id)
    }

    handleDeletePost(e) {
        e.preventDefault();
        const id = e.currentTarget.id;
        this.props.deletePost(id)

        window.location.href = '/'
    }

    handleVote(e) {
        const { id, name } = e.currentTarget
        this.props.votePost(id, name)
    }

    render() {
        const { detail } = this.props;
        const { post } = detail;
        return (
            <Section medium>
                <Container fluid>
                    <Title>{post.title}</Title>
                    <SubTitle>{post.voteScore} <Moment date={post.timestamp} /> <strong>@{post.author}</strong></SubTitle>
                    <a name="upVote" id={post.id} onClick={ this.handleVote }><Icon><i className="fa fa-caret-up"/></Icon></a>
                    { post.voteScore}
                    <a name="downVote" id={post.id} onClick={ this.handleVote }><Icon> <i className="fa fa-caret-down"/> </Icon></a>
                    <Icon><i className="fa fa-comment-o" aria-hidden="true"></i></Icon>
                    <Icon small><i className="fa fa-pencil"/></Icon>
                    &nbsp;
                    <a id={post.id} onClick={ this.handleDeletePost }><Icon small><i className="fa fa-trash"/></Icon></a>
                    <Container fluid>
                        {post.body}
                    </Container>
                    <hr/>
                    <CommentList id={detail.id}/>
                </Container>
            </Section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        detail: state.posts.post.detail
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostDetail: (id) => { return dispatch(postAction.fetchPostDetail(id))},
        deletePost: (id) => { return dispatch(postAction.deletePost(id)) },
        votePost: (id, option) => { return dispatch(postAction.votePost(id, option))},
    }
};

PostDetail.propTypes = {

};

PostDetail.defaultProps = {
    detail: {
        post: {}
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
