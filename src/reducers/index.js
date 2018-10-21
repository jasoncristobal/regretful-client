import {SAVE_NEW_MISTAKE, SAVE_UPDATED_MISTAKE, READ_MY_MISTAKE,
        READ_OTHERS_MISTAKE, SAVE_COMMENT} from './actions/index';

const initialState = "add this later";

export default (state = initialState, action) => {
    if (action.type === SAVE_NEW_MISTAKE) {
        // add this later
    }

    if (action.type === SAVE_UPDATED_MISTAKE) {
        // add this later
    }

    if (action.type === READ_MY_MISTAKE) {
        // add this later
    }

    if (action.type === READ_OTHERS_MISTAKE) {
        // add this later
    }
    
    if (action.type === SAVE_COMMENT) {
        // add this later
    }
    
    return state;
};
