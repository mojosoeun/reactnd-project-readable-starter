import React, { Component } from 'react';
import { Textarea, Field, Control, Input, Button, Section } from 'reactbulma'


class PostForm extends Component {
    render() {
        return (
            <Section medium>
                <form>
                    <Field>
                        <label className="label">title</label>
                        <Control>
                            <Input placeholder="Text input" />
                        </Control>
                        <p className="help">This is a help text</p>
                    </Field>
                    <Field>
                        <label className="label">author</label>
                        <Control>
                            <Input placeholder="Text input" />
                        </Control>
                        <p className="help">This is a help text</p>
                    </Field>
                    <Field>
                        <label className="label">body</label>
                        <Control>
                            <Textarea placeholder="e.g. Hello world"/>
                        </Control>
                        <p className="help">This is a help text</p>
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

export default PostForm;