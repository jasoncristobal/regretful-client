import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';

import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';

import './loginform.css';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <p className="login-register"><label htmlFor="username">Username</label></p>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <p className="login-register padding"><label htmlFor="password">Password</label></p>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <div className="padding"><button className="sign" disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button></div>
                <div className="padding"><Link className="underlinedLink" to="/register">No account? Sign up here</Link></div>
                <p className="demo">Demo username: user</p><p className="demo demo-password">Demo password: password</p>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
