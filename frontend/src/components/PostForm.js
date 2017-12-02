import React, { Component } from 'react';
import { Textarea, Field, Control, Input, Button, Section } from 'reactbulma'
import { postAction } from '../actions'
import { connect } from 'react-redux';
import { categoryAction } from '../actions';
import serialize from 'form-serialize';
import shortid from 'shortid';
import _ from 'lodash';


class PostForm extends Component {

    state =  {
        value: this.props.detail.post
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id)
        this.props.fetchPostDetail(id)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = serialize(e.target, { hash: true })
        if (this.props.location.pathname == '/edit/post') {
            const id = data.id;
            const filteredData =   _.pick(data, ['title', 'body']);
            console.log(filteredData);
            this.props.updatePost(id, filteredData);
        } else {
            this.props.addPost(data);
        }
        // window.location.href = '/'

    }

    handleOnChange = (e) => {
        this.setState(
            {
                value: {
                    [e.target.name] : e.target.value
                }
            }
        );
    }

    render() {
        const { categories, detail} = this.props;
        const { post } = detail;

        return (
            <Section medium>
                <form onSubmit={this.handleSubmit}>
                    <input type="hidden" name="id" value={post.id || shortid.generate()}/>
                    <input type="hidden" name="timestamp" value={Date.now()} />
                    <Field>
                        <label className="label">title</label>
                        <Control>
                            <Input name="title" placeholder="title" value={this.state.value.title} onChange={ this.handleOnChange}/>
                        </Control>
                    </Field>
                    <Field>
                        <label className="label">author</label>
                        <Control>
                            <Input name="author" placeholder="author" value={this.state.value.author} disabled={post.id ? true: false}/>
                        </Control>
                    </Field>
                    <Field>
                        <label className="label">body</label>
                        <Control>
                            <Textarea name="body" placeholder="e.g. Hello world" value={this.state.value.body} onChange={ this.handleOnChange}/>
                        </Control>
                    </Field>
                    <Field>
                        <label className="label">category</label>
                        <Control>
                            {
                                categories.map(category =>
                                    <label className="label"><input key={shortid.generate()} checked={this.state.value.category === category.name} id={category.name} type="radio" name="category" value={category.name} /> {category.name}</label>
                                )
                            }

                        </Control>
                    </Field>
                    <Field groupedRight>
                        <Control>
                            <Button primary>
                                Submit
                            </Button>
                        </Control>
                    </Field>
                </form>
            </Section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.category.get('list'),
        detail: state.posts.post.detail
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategory: () => { return dispatch(categoryAction.fetchCategory());},
        addPost: (data) => { return dispatch(postAction.addPost(data))},
        fetchPostDetail: (id) => { return dispatch(postAction.fetchPostDetail(id))},
        updatePost: (id, data) => { return dispatch(postAction.updatePost(id, data))}
    }
};

PostForm.propTypes = {
};

PostForm.defaultProps = {
    detail: {
        post: {}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
