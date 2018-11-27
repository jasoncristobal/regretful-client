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
        let deletePermission
        // This determines how to display the comments
        let comments
        if (!this.props.mistake.comments) {
            comments = null
        } else if (this.props.mistake.user === this.props.currentUser.id) {
            // This means "else if the creator of this item is also the logged-in user"
            owner = (<div className="your-mistake">(This is your mistake)</div>)
            pronoun = 'you'
            deletePermission = 'You are the author. Only you can delete feedback.'
            comments = this.props.mistake.comments.map(c => (
                <div key={c._id} className="single-comment-div">
                    <p className="single-comment-text">{c.comment}</p>
                    <div className="comment-date comment-date-mine">Posted {new Date(c.date).toLocaleDateString()}</div>
                    <div className="delete-btn-div">
                        <button className="delete-btn" type="button" onClick={e => this.delete(c._id)}>Delete</button>
                        <div className="confirm-delete">Are you sure? (Can't undo)</div>
                    </div>
                </div>
            ))
        } else {
            pronoun = 'they'
            comments = this.props.mistake.comments.map(c => (
                <div key={c._id} className="single-comment-div">
                    <p className="single-comment-text">{c.comment}</p>
                    <div className="delete-btn-div">
                        <div className="comment-date">Posted {new Date(c.date).toLocaleDateString()}</div>
                    </div>
                </div>
            ))
        }
        return (
            <main>
                <Header />
                <section className="nav-row">
                    <div className="logout-bar">
                        <button className="logout-btn" onClick={event => this.props.dispatch(clearAuth())}>Logout</button>
                    </div>
                    <h2 className="item-title">{this.props.mistake.title}</h2>
                    <div className="full-item">
                        <div className="edit-btn-row">
                            <button className="edit-btn"><Link className="edit-btn" to={'/'}>Back</Link></button>
                            {editButton}
                        </div>
                        {owner}
                        <h3 className="item-question">What {pronoun} regret doing (or not doing)</h3><p className="item-content">{this.props.mistake.description}</p>
                        <h3 className="item-question">Why {pronoun} did it (or didn’t)</h3><p className="item-content">{this.props.mistake.question1}</p>
                        <h3 className="item-question">Why it was a mistake</h3><p className="item-content">{this.props.mistake.question2}</p>
                        <h3 className="item-question">What {pronoun} learned / What {pronoun} can do now</h3><p className="item-content">{this.props.mistake.question3}</p>
                    </div>
                    <p className="feedback">Feedback</p>
                    <p className="deletePermission">{deletePermission}</p>
                    {comments}
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