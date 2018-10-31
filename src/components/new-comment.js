import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {saveComment} from '../actions';

export class NewComment extends React.Component {
    onSubmit(values) {
        console.log(values);
        this.props.dispatch(saveComment(values))
    }
    render() {
        return (
        <main>
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="new-comment">Add Comment</label>
                <div><Field name="new-comment" id="new-comment" required type="text" component="textarea" placeholder="Write comment" /></div>
                <button type="submit">Post</button>
            </form>            
        </main>
    );
}
}

const NewCommentRedux = connect()(NewComment)
export default reduxForm({
    form: 'new-comment'
})(NewCommentRedux);