import React, { Component } from 'react'
import { Media, Content, Image, Field, Control, Textarea, Button   } from 'reactbulma'
import { postAction } from "../actions";
import { connect } from 'react-redux'


class CommentList extends Component{

    componentDidMount(){
        const { id } = this.props;
        this.props.fetchComments(id)
    }

    render(){

        const { comments } = this.props;
        return(
            <div>
                {
                    comments.map(() => {
                        <Media>
                            <Media.Left>
                                <Image is='64x64' src="http://bulma.io/images/placeholders/128x128.png"/>
                            </Media.Left>
                            <Media.Content>
                                <Content>
                                    <p>
                                        <strong>Barbara Middleton</strong>
                                        <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                                        <br/>
                                        <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
                                    </p>
                                </Content>
                            </Media.Content>
                        </Media>
                    })
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.posts.post.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: (id) => { return dispatch(postAction.fetchComments(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);

// export default CommentList
