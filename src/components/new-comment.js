import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {withRouter} from 'react-router-dom';
import { readMistake, saveComment} from '../actions';

export class NewComment extends React.Component {
    onSubmit(values) {
        console.log(values.comments);
        this.props.dispatch(saveComment(values.comments, this.props.mistakeID))
        .then(()=> {
            this.props.dispatch(readMistake(this.props.mistakeID))
        })
    }
    render() {
        return (
        <main>
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="comments">Add Comment</label>
                <div><Field name="comments" id="comments" required type="text" component="textarea" placeholder="Write comment" /></div>
                <button type="submit">Post</button>
            </form>            
        </main>
    );
}
}

const NewCommentRedux = withRouter(connect()(NewComment))
export default reduxForm({
    form: 'comments'
})(NewCommentRedux);