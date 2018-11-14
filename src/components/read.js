import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NewComment from './new-comment';
import { readMistake } from '../actions/index';

export class Read extends React.Component {
    componentDidMount() {
        this.props.dispatch(readMistake(this.props.match.params.id))
    }    
    render() {
        let button
        if (this.props.mistake.user === this.props.currentUser.id) {
            button = (<button><Link to={'/edit/' + this.props.mistake.id}>Edit</Link></button>)
        }
        return (
            <main>
                <h2>{this.props.mistake.title}</h2>
                {this.props.mistake.description}
                {this.props.mistake.question1}
                {this.props.mistake.question2}
                {this.props.mistake.question3}
                <div>Content for this item will be here</div>
                <button><Link to="/dashboard">Back</Link></button>
                {button}
                <section>
                    <NewComment />
                    Comments will be displayed below
            </section>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,
    mistake: state.mistake.mistake
});

export default connect(mapStateToProps)(Read)