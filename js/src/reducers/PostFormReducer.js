import {
    POST_EDIT,
    POST_CREATE
} from '../actions/types';

//Edm is the first option, so we default it to that
//if they never touched the picker it would return ''
const INITIAL_STATE = {
    title: '',
    artist: '',
    tags: [],
    tagInput: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_EDIT:
            //the part in brackets changes to whatever we use to call this
            //for example, the entire thing can change to title, artist, etc.
            return { ...state, [action.payload.prop]: action.payload.value };
        case POST_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};
