import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { readMistake, saveUpdatedMistake, deleteMistake } from '../actions';

import Header from './header';
import NavBar from './nav-bar';

export class Edit extends React.Component {
    onSubmit(values) {
        console.log(values);
        this.props.dispatch(saveUpdatedMistake(values))
            .then(() => {
                this.props.history.push("/dashboard")
            })
    }
    delete() {
        this.props.dispatch(deleteMistake(this.props.match.params.id))
            .then(() => {
                this.props.history.push("/dashboard")
            })
    }
    componentDidMount() {
        this.props.dispatch(readMistake(this.props.match.params.id))
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
                    <button type="button" onClick={e => this.delete()}>Delete</button>
                    <button><Link to="/dashboard">Cancel</Link></button>
                    <button type="submit">Save</button>
                </form>
            </main>
        );
    }
}

Edit = reduxForm({
    form: 'updated-item',
    enableReinitialize: true
})(Edit);

const mapStateToProps = state => ({
    initialValues: state.mistake.mistake
});

export default withRouter(connect(mapStateToProps)(Edit));