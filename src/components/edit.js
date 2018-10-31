import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {saveUpdatedMistake} from '../actions';

export class Edit extends React.Component {
    onSubmit(values) {
        console.log(values);
        this.props.dispatch(saveUpdatedMistake(values))
    }
    render() {
        return (
            <main>
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="title">Description</label>
                <div><Field name="title" id="title" required type="text" component="textarea" /></div>
                <label htmlFor="input1">Text input 1</label>
                <div><Field name="input1" id="password" required type="text" component="textarea" /></div>
                <label htmlFor="input2">Text input 2</label>
                <div><Field name="input2" id="password" required type="text" component="textarea" /></div>
                <button><Link to="/dashboard">Cancel</Link></button>
                <button type="submit">Save</button>
            </form>            
        </main>
    );
}
}

const UpdatedItemRedux = connect()(Edit)
export default reduxForm({
    form: 'updated-item'
})(UpdatedItemRedux);