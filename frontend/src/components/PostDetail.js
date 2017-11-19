import React, { Component } from 'react'
import { postAction } from '../actions'
import { Section, Container, Title, SubTitle } from 'reactbulma'
import CommentList from './CommentList'
import Timestamp from 'react-timestamp';
import { connect } from 'react-redux';


class PostDetail extends Component{
    constructor(props){
        super(props)

    }

    componentDidMount() {
        const id = this.props.match.params.id;
        // this.props.fetchPostDetail(id)
    }

    render() {
        const { post } = this.props

        const id = this.props.match.params.id;

        return (
            <Section medium>
                <Container fluid>
                    <Title>{post.title}</Title>
                    <SubTitle><Timestamp time={post.timestamp} format='full'/> <strong>@{post.author}</strong></SubTitle>
                    <Container fluid>
                        {post.body}
                    </Container>
                </Container>
                <CommentList id={id}/>
            </Section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.posts.post.detail || {}
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostDetail: (id) => { return dispatch(postAction.fetchPostDetail(id))}
    }
};

// export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
export default PostDetail;
