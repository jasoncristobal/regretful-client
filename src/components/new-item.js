import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {saveNewMistake} from '../actions';

export class NewItem extends React.Component {
    onSubmit(values) {
        console.log(values);
        this.props.dispatch(saveNewMistake(values))
    }
    render() {
        return (
        <main>
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="title">Title</label>
                <div><Field name="title" id="title" required type="text" component="input" /></div>
                <label htmlFor="description">Description</label>
                <div><Field name="description" id="description" required type="text" component="textarea" /></div>
                <label htmlFor="question1">Question 1</label>
                <div><Field name="question1" id="question1" required type="text" component="textarea" /></div>
                <label htmlFor="question2">Question 2</label>
                <div><Field name="question2" id="question2" required type="text" component="textarea" /></div>
                <label htmlFor="question3">Question 3</label>
                <div><Field name="question3" id="question3" required type="text" component="textarea" /></div>
                <button><Link to="/dashboard">Cancel</Link></button>
                <button type="submit">Save</button>
            </form>            
        </main>
    );
}
}

const NewItemRedux = connect()(NewItem)
export default reduxForm({
    form: 'new-item'
})(NewItemRedux);