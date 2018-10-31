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

export const READ_MISTAKE = 'READ_MISTAKE';
export const readMistake = (mistakeID) => ({
    type: READ_MISTAKE,
    mistakeID
});

export const SAVE_COMMENT = 'SAVE_COMMENT';
export const saveComment = (newComment) => ({
    type: SAVE_COMMENT,
    newComment
});

export const GET_MY_MISTAKES = 'GET_MY_MISTAKES';
export const getMyMistakes = () => ({
    type: GET_MY_MISTAKES
});

export const GET_MOST_DISCUSSED = 'GET_MOST_DISCUSSED';
export const getMostDiscussed = () => ({
    type: GET_MOST_DISCUSSED
});

export const GET_MOST_RECENT = 'GET_MOST_RECENT';
export const getMostRecent = () => ({
    type: GET_MOST_RECENT
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
        fetch(`${API_BASE_URL}/mistakes/`, {
            method: 'PUT',
            headers: {
                'authorization': 'bearer ' + localStorage.authToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                updatedMistake
            })
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