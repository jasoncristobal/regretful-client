import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { clearAuth } from '../actions/auth'

import Header from './header'
import NewComment from './new-comment'

import './read.css'

import { readMistake, deleteComment } from '../actions/index';

export class Read extends React.Component {
    delete(id) {
        this.props.dispatch(deleteComment(this.props.match.params.id, id))
            .then(() => {
                this.props.dispatch(readMistake(this.props.match.params.id))
            })
    }
    componentDidMount() {
        this.props.dispatch(readMistake(this.props.match.params.id))
    }
    render() {
        /* This is to determine if the Edit button should be dispayed 
        (it's not displayed if the item/mistake belongs to someone else)*/
        let editButton
        if (this.props.mistake.user === this.props.currentUser.id) {
            editButton = (<button className="edit-btn"><Link className="edit-btn" to={'/edit/' + this.props.mistake.id}>Edit</Link></button>)
        }
        // Second-person pronoun if it's your items. Third-person for others' items.
        let pronoun
        let owner
        // This determines how to display the comments
        let comments
        let deletePermission
        if (!this.props.mistake.comments) {
            comments = null
        } else if (this.props.mistake.user === this.props.currentUser.id) {
            owner = 'You:'
            pronoun = 'you'
            deletePermission = 'We encourage an open dialogue. However you may delete comments since you’re the author.'
            comments = this.props.mistake.comments.map(c => (
                <div className="single-comment-div">
                <p className="single-comment-text">{c.comment}</p>
                <div className="delete-btn-div"><button className="delete-btn" type="button" onClick={e => this.delete(c._id)}>Delete</button></div>
                </div>
            ))
        } else {
            pronoun = 'they'
            comments = this.props.mistake.comments.map(c => (
                <div className="single-comment-div"><p className="single-comment-text">{c.comment}</p></div>
            ))
        }
        return (
            <main>
                <Header />
                <section className="nav-row">
                    <div className="logout-bar">
                        <button className="logout-btn" onClick={event => this.props.dispatch(clearAuth())}>Logout</button>
                    </div>
                    <h2 className="item-title"><span className="item-title-you">{owner}</span> {this.props.mistake.title}</h2>
                    <div className="full-item">
                        <div className="edit-btn-row">
                            <button className="edit-btn"><Link className="edit-btn" to={'/'}>Back</Link></button>
                            {editButton}
                        </div>
                        <h3 className="item-question">What {pronoun} regret doing (or not doing):</h3><p className="item-content">{this.props.mistake.description}</p>
                        <h3 className="item-question">Why {pronoun} did it (or didn’t):</h3><p className="item-content">{this.props.mistake.question1}</p>
                        <h3 className="item-question">Why it was a mistake:</h3><p className="item-content">{this.props.mistake.question2}</p>
                        <h3 className="item-question">What {pronoun} would do differently, if {pronoun} could, and why:</h3><p className="item-content">{this.props.mistake.question3}</p>
                    </div>
                    <p className="discussion">Discussion</p>
                    {deletePermission} {comments}
                    <NewComment mistakeID={this.props.match.params.id} />
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