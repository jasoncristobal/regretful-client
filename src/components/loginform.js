import React from 'react';
import {reduxForm, Field} from 'redux-form';

export class LoginForm extends React.Component {
    onSubmit(values) {
        console.log(values);
    }
    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="username">Username</label>
                <Field name="username" id="username" required type="text" component="input" />
                <label htmlFor="password">Password</label>
                <Field name="password" id="password" required type="password" component="input" />
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login'
})(LoginForm);