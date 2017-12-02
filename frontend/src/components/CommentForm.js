import React, { Component } from 'react'
import shortid from 'shortid';
import serialize from 'form-serialize';
import { Media, Field, Control, Textarea, Button, Input } from 'reactbulma'



class CommentForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const data = serialize(e.target, { hash: true })
        this.props.addComment(data)
        const form = document.getElementById("form");
        form.reset();
    }

    render() {
        const { id } = this.props;
        return (
            <Media>
                <Media.Content>
                    <form id="form" onSubmit={this.handleSubmit}>
                        <input type="hidden" name="id" value={shortid.generate()}/>
                        <input type="hidden" name="timestamp" value={Date.now()}/>
                        <input type="hidden" name="parentId" value={id}/>
                        <Field>
                            <Control>
                                <Textarea name="body" placeholder="Add a comment..."/>
                            </Control>
                        </Field>
                        <Field>
                            <label className="label">author</label>
                            <Control>
                                <Input name="author" placeholder="author"/>
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Button>Post comment</Button>
                            </Control>
                        </Field>
                    </form>
                </Media.Content>
            </Media>
        )
    }
}

export default CommentForm;