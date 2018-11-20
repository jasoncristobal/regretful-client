import {SAVE_NEW_MISTAKE_SUCCESS, SAVE_UPDATED_MISTAKE_SUCCESS, READ_MISTAKE_SUCCESS,
        SAVE_COMMENT_SUCCESS, GET_MY_MISTAKES_SUCCESS, GET_MOST_DISCUSSED_SUCCESS, 
        GET_MOST_RECENT_SUCCESS} from '../actions/index';

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

    if (action.type === READ_MISTAKE_SUCCESS) {
        return Object.assign({}, state, { mistake: action.mistake })
    }

    if (action.type === SAVE_COMMENT_SUCCESS) {
        return Object.assign({}, state, { comment: action.comment })
    }
    
    if (action.type === GET_MY_MISTAKES_SUCCESS) {
        return Object.assign({}, state, { mistakes: action.myMistakes })
    }

    if (action.type === GET_MOST_DISCUSSED_SUCCESS) {
        console.log(action.mostDiscussed[0].comments.length)
        //return Object.assign({}, state, { mistakes: action.mostDiscussed })
    }

    if (action.type === GET_MOST_RECENT_SUCCESS) {
        return Object.assign({}, state, { mistakes: action.mostRecent })
    }


    return state;
};
