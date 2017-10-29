import React, { Component } from 'react';
import { Card, Content, Icon } from 'reactbulma'

class PostList extends Component {
    render() {
        const { posts } = this.props;
        const category = this.props.match.params.category;
        let filtersPost;
        if (category) {
            filtersPost = posts.filter((post) => {
                return post.category === category
            })
        } else {
            filtersPost = posts            
        }
         return (
            <article>
                {
                    filtersPost.map((post) => {
                        return (
                            <Card key={post.id}>
                                <Card.Header>
                                    <Card.Header.Title>
                                        <Icon><i className="fa fa-caret-up"/></Icon> / <Icon><i className="fa fa-caret-down"/></Icon> 
                                        <a href="#">{post.title} - {post.author}</a>
                                    </Card.Header.Title>
                                </Card.Header>
                                <Card.Content>
                                    <Content>
                                        {post.body}
                                    </Content>
                                </Card.Content>
                            </Card>
                        )
                    })
                }
            </article>
            
        )
    }
}

export default PostList;