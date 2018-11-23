import {normalizeResponseErrors} from './utils';
import {API_BASE_URL} from '../config';
import {SubmissionError} from 'redux-form';

export const SAVE_NEW_MISTAKE_SUCCESS = 'SAVE_NEW_MISTAKE_SUCCESS';
export const saveNewMistakeSuccess = () => ({
    type: SAVE_NEW_MISTAKE_SUCCESS
});

export const SAVE_UPDATED_MISTAKE_SUCCESS = 'SAVE_UPDATED_MISTAKE_SUCCESS';
export const saveUpdatedMistakeSuccess = () => ({
    type: SAVE_UPDATED_MISTAKE_SUCCESS
});

export const READ_MISTAKE_SUCCESS = 'READ_MISTAKE_SUCCESS';
export const readMistakeSuccess = (mistake) => ({
    type: READ_MISTAKE_SUCCESS,
    mistake
});

export const SAVE_COMMENT_SUCCESS = 'SAVE_COMMENT_SUCCESS';
export const saveCommentSuccess = () => ({
    type: SAVE_COMMENT_SUCCESS
});

export const GET_MY_MISTAKES_SUCCESS = 'GET_MY_MISTAKES_SUCCESS';
export const getMyMistakesSuccess = (myMistakes) => ({
    type: GET_MY_MISTAKES_SUCCESS,
    myMistakes
});

export const GET_MOST_RECENT_SUCCESS = 'GET_MOST_RECENT_SUCCESS';
export const getMostRecentSuccess = (mostRecent) => ({
    type: GET_MOST_RECENT_SUCCESS,
    mostRecent
});

export const GET_BY_TITLES_SUCCESS = 'GET_BY_TITLES_SUCCESS';
export const getByTitlesSuccess = (getByTitles) => ({
    type: GET_BY_TITLES_SUCCESS,
    getByTitles
});

export const DELETE_MISTAKE_SUCCESS = 'DELETE_MISTAKE_SUCCESS';
export const deleteMistakeSuccess = (mistake) => ({
    type: DELETE_MISTAKE_SUCCESS,
    mistake
});


export const saveNewMistake = (newMistake) => dispatch => {
    return (
        fetch(`${API_BASE_URL}/mistakes/`, {
            method: 'POST',
            headers: {
                'authorization': 'bearer ' + localStorage.authToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                newMistake
            })
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(res => {
                dispatch(saveNewMistakeSuccess());
            })
            .catch(err => {
                return Promise.reject(
                    new SubmissionError({
                        _error: err.message
                    })
                );
            })
    );
};

export const saveUpdatedMistake = (updatedMistake) => dispatch => {
    return (
        fetch(`${API_BASE_URL}/mistakes/${updatedMistake.id}`, {
            method: 'PUT',
            headers: {
                'authorization': 'bearer ' + localStorage.authToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedMistake)
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(res => {
                dispatch(saveUpdatedMistakeSuccess());
            })
            .catch(err => {
                return Promise.reject(
                    new SubmissionError({
                        _error: err.message
                    })
                );
            })
    );
};

// Read mistake
export const readMistake = (mistakeID) => dispatch => {
    return (
        fetch(`${API_BASE_URL}/mistakes/${mistakeID}`, {
            method: 'GET',
            headers: {
                'authorization': 'bearer ' + localStorage.authToken,
                'Content-Type': 'application/json'
            }
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(res => {
                dispatch(readMistakeSuccess(res));
            })
            .catch(err => {
                return Promise.reject(
                    new SubmissionError({
                        _error: err.message
                    })
                );
            })
    );
};

// Save comment
export const saveComment = (comments, mistakeID) => dispatch => {
    return (
        fetch(`${API_BASE_URL}/mistakes/comment/${mistakeID}`, {
            method: 'POST',
            headers: {
                'authorization': 'bearer ' + localStorage.authToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comments
            })
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(res => {
                dispatch(saveCommentSuccess());
            })
            .catch(err => {
                return Promise.reject(
                    new SubmissionError({
                        _error: err.message
                    })
                );
            })
    );
};

// Get my mistakes
export const getMyMistakes = () => dispatch => {
    return (
        fetch(`${API_BASE_URL}/mistakes/`, {
            method: 'GET',
            headers: {
                'authorization': 'bearer ' + localStorage.authToken,
                'Content-Type': 'application/json'
            }
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch(getMyMistakesSuccess(res));
            })
            .catch(err => {
                console.log(err)
                return Promise.reject(
                    new SubmissionError({
                        _error: err.message
                    })
                );
            })
    );
};

// Get/sort by titles
export const getByTitles = () => dispatch => {
    return (
        fetch(`${API_BASE_URL}/mistakes/titles`, {
            method: 'GET',
            headers: {
                'authorization': 'bearer ' + localStorage.authToken,
                'Content-Type': 'application/json'
            }
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(res => {
                dispatch(getByTitlesSuccess(res));
            })
            .catch(err => {
                return Promise.reject(
                    new SubmissionError({
                        _error: err.message
                    })
                );
            })
    );
};

// Get most recent mistakes
export const getMostRecent = () => dispatch => {
    return (
        fetch(`${API_BASE_URL}/mistakes/recent`, {
            method: 'GET',
            headers: {
                'authorization': 'bearer ' + localStorage.authToken,
                'Content-Type': 'application/json'
            }
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(res => {
                dispatch(getMostRecentSuccess(res));
            })
            .catch(err => {
                return Promise.reject(
                    new SubmissionError({
                        _error: err.message
                    })
                );
            })
    );
};

// Delete mistake
export const deleteMistake = (mistakeID) => dispatch => {
    return (
        fetch(`${API_BASE_URL}/mistakes/${mistakeID}`, {
            method: 'DELETE',
            headers: {
                'authorization': 'bearer ' + localStorage.authToken,
                'Content-Type': 'application/json'
            }
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .catch(err => {
                return Promise.reject(
                    new SubmissionError({
                        _error: err.message
                    })
                );
            })
    );
};

// Delete comment
export const deleteComment = (mistakeID, commentID) => dispatch => {
    return (
        fetch(`${API_BASE_URL}/mistakes/comment/${mistakeID}/${commentID}`, {
            method: 'DELETE',
            headers: {
                'authorization': 'bearer ' + localStorage.authToken,
                'Content-Type': 'application/json'
            }
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .catch(err => {
                return Promise.reject(
                    new SubmissionError({
                        _error: err.message
                    })
                );
            })
    );
};