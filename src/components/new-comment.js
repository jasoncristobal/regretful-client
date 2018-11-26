import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { readMistake, saveComment } from '../actions';

import './new-comment.css'

export class NewComment extends React.Component {
    onSubmit(values) {
        console.log(values.comments);
        this.props.dispatch(saveComment(values.comments, this.props.mistakeID))
            .then(() => {
                this.props.dispatch(readMistake(this.props.mistakeID))
            })
    }
    render() {
        return (
            <div className="new-comment-div">
                <form
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <label htmlFor="comments">
                        <div className="post-comment-div">
                            <Field className="post-comment" name="comments" id="comments" required type="text" component="textarea" placeholder="Share a thought" />
                        </div>
                    </label>
                    <button className="post-comment" type="submit">Post</button>
                </form>
            </div>
        );
    }
}

const NewCommentRedux = withRouter(connect()(NewComment))
export default reduxForm({
    form: 'comments'
})(NewCommentRedux);