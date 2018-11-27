import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {saveNewMistake} from '../actions';
import { clearAuth } from '../actions/auth'

import Header from './header';

import './read.css'
import './edit.css'

export class NewItem extends React.Component {
    onSubmit(values) {
        this.props.dispatch(saveNewMistake(values))
        .then(()=> {
            this.props.history.push("/dashboard")
        })
    }
    render() {
        return (
            <main>
                <Header />
                <section className="nav-row">
                    <div className="logout-bar">
                        <button className="logout-btn" onClick={event => this.props.dispatch(clearAuth())}>Logout</button>
                    </div>
                    <form className="bottom-padding"
                        onSubmit={this.props.handleSubmit(values =>
                            this.onSubmit(values))}>
                        <h2 className="item-title"><label htmlFor="title">Title:</label>
                            <Field className="title" name="title" id="title" required type="text" component="input" />
                        </h2>
                        <div className="full-item-edit">
                            <div className="edit-btn-row">
                                <button className="edit-btn"><Link className="edit-btn" to='/'>Cancel</Link></button>
                                <button className="edit-btn" type="submit">Save</button>
                            </div>
                            <h3 className="item-question"><label htmlFor="description">What you regret doing (or not doing)</label></h3>
                            <div className="left-align"><Field className="item-question" name="description" id="description" required type="text" component="textarea" placeholder="(Remember, you're anonymous)" /></div>
                            <h3 className="item-question"><label htmlFor="question1">Why you did it (or didn’t)</label></h3>
                            <div className="left-align"><Field className="item-question" name="question1" id="question1" required type="text" component="textarea" /></div>
                            <h3 className="item-question"><label htmlFor="question2">   Why it was a mistake</label></h3>
                            <div className="left-align"><Field className="item-question" name="question2" id="question2" required type="text" component="textarea" /></div>
                            <h3 className="item-question"><label htmlFor="question3">What you learned / What you can do now</label></h3>
                            <div className="left-align last-question-new-item"><Field className="item-question" name="question3" id="question3" required type="text" component="textarea" /></div>
                        </div>
                    </form>
                </section>
            </main>

    );
}
}

const NewItemRedux = withRouter(connect()(NewItem))
export default reduxForm({
    form: 'new-item'
})(NewItemRedux);