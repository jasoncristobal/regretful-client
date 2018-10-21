import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';

export class NewComment extends React.Component {
    onSubmit(values) {
        console.log(values);
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

export default reduxForm({
    form: 'new-comment'
})(NewComment);