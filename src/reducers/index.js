import {SAVE_NEW_MISTAKE_SUCCESS, SAVE_UPDATED_MISTAKE_SUCCESS, READ_MISTAKE,
        SAVE_COMMENT, GET_MY_MISTAKES, GET_MOST_DISCUSSED, 
        GET_MOST_RECENT} from '../actions/index';

const initialState = {
    mistakes: [],
    mistake: {
        
    },
    comment: {}
};

export default function reducer(state = initialState, action) {
    if (action.type === SAVE_NEW_MISTAKE_SUCCESS) {
        console.log(action)
    }

    if (action.type === SAVE_UPDATED_MISTAKE_SUCCESS) {
        console.log(action)
    }

    if (action.type === READ_MISTAKE) {
        console.log(action.readMistake)
    }

    if (action.type === SAVE_COMMENT) {
        console.log(action.newComment)
    }
    
    if (action.type === GET_MY_MISTAKES) {
        console.log(action.getMyMistakes)
    }

    if (action.type === GET_MOST_DISCUSSED) {
        console.log(action.getMostDiscussed)
    }

    if (action.type === GET_MOST_RECENT) {
        console.log(action.getMostRecent)
    }

    return state;
};
