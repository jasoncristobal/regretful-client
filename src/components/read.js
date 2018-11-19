import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NewComment from './new-comment';
import { readMistake, deleteComment } from '../actions/index';

export class Read extends React.Component {
    delete(id) {
        this.props.dispatch(deleteComment(this.props.match.params.id, id))
        .then(()=> {
            this.props.dispatch(readMistake(this.props.match.params.id))
        })
    }
    componentDidMount() {
        this.props.dispatch(readMistake(this.props.match.params.id))
    }    
    render() {
        let editButton
        if (this.props.mistake.user === this.props.currentUser.id) {
            editButton = (<button><Link to={'/edit/' + this.props.mistake.id}>Edit</Link></button>)
        }
        let comments
        if (this.props.mistake.comments === undefined) {
            comments = '<p>No Comments</p>'
        } else if (this.props.mistake.user !== this.props.currentUser.id) {
            comments = this.props.mistake.comments.map(c => (
                <p>{c.comment}
                </p>
            ))
        } else {
            comments = this.props.mistake.comments.map(c => (
                <p>{c.comment}
                <button type="button" onClick={e => this.delete(c._id)}>Delete Comment</button>
                </p>
            ))
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
                {editButton}
                <section>
                    <NewComment mistakeID={this.props.match.params.id} />
                    Comments will be displayed below
                {comments}
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