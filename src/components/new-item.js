import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {saveNewMistake} from '../actions';

import Header from './header';
import NavBar from './nav-bar';

export class NewItem extends React.Component {
    onSubmit(values) {
        console.log(values);
        this.props.dispatch(saveNewMistake(values))
        .then(()=> {
            this.props.history.push("/dashboard")
        })
    }
    render() {
        return (
        <main>
            <Header />
            <NavBar />
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

const NewItemRedux = withRouter(connect()(NewItem))
export default reduxForm({
    form: 'new-item'
})(NewItemRedux);