import React, { Component } from 'react'
import { Media, Content, Field, Control, Textarea, Button, Input, Icon, Title } from 'reactbulma'
import { postAction } from "../actions";
import { connect } from 'react-redux'
import Timestamp from 'react-timestamp';
import _ from 'lodash';
import CommentForm from './CommentForm'


class CommentList extends Component{

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        const { id } = this.props;
        console.log("id", id)
        this.props.fetchComments(id)
    }


    handleVote = (e) => {
        const { id, name } = e.currentTarget
        this.props.voteComment(id, name)
    }


    handleDeleteComment = (e) => {
        e.preventDefault();
        const id  = e.target.id;
        this.props.deleteComment(id)

    }

    render(){

        const { detail, id } = this.props;
        const { comments } = detail;

        const filteredComments = _.orderBy(comments, ['voteScore'], ['desc'])

        return(
            <div>
                <Title is='4'>Comments</Title>
                {
                    filteredComments.map((comment) =>
                        <Media>
                            <Media.Left>
                                <a name="upVote" id={comment.id} onClick={ this.handleVote }><Icon><i className="fa fa-caret-up"/></Icon></a>
                                { comment.voteScore}
                                <a name="downVote" id={comment.id} onClick={ this.handleVote }><Icon> <i className="fa fa-caret-down"/> </Icon></a>
                            </Media.Left>
                            <Media.Content>
                                <Content>
                                    <p>
                                        <strong>{comment.author}</strong>
                                        <br/>
                                        {comment.body}
                                        <br/>
                                        <small><a>edit</a> · <a id={comment.id} onClick={ this.handleDeleteComment }>delete</a> · <Timestamp time={comment.timestamp} format='full'/></small>
                                    </p>
                                </Content>
                            </Media.Content>
                        </Media>

                    )
                }
                <CommentForm id={id}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        detail: state.posts.comment.detail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: (id) => { return dispatch(postAction.fetchComments(id))},
        addComment: (data) => { return dispatch(postAction.addComment(data))},
        deleteComment: (id) => { return dispatch(postAction.deleteComment(id))},
        voteComment: (id, option) => { return dispatch(postAction.voteComment(id, option))}
    }
}

CommentList.propTypes = {
};

CommentList.defaultProps = {
    detail: {
        comments: []
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
