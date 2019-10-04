import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    POST_EDIT,
    POST_CREATE,
    POSTS_FETCH_SUCCESS
} from './types';

export const postEdit = ({ prop, value }) => ({
        type: POST_EDIT,
        payload: { prop, value }
    });

export const postCreate = ({ title, artist, tags }) => {
    //firebase.auth().currentUser is the current user
    const { currentUser } = firebase.auth();

    //pretending to use redux thunk but not actually
    return (dispatch) => {
    //using ` instead of ' for the $userid 
    firebase.database().ref(`/users/${currentUser.uid}/posts`)
    //push creates a new instance of data
        .push({ title, artist, tags })
        .then(() => {
            dispatch({ type: POST_CREATE });
            Actions.main({ type: 'reset' });
        });
    };
};

export const postsFetch = () => {
    const { currentUser } = firebase.auth();
    //use redux for asynchronous
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/posts`)
        //any time any data comes accross from this ref or bucket, call this fat arrow function
        //with an object to describe the data sitting in there
        //snapshot describes, .val is the actual data
        .on('value', snapshot => {
            dispatch({ type: POSTS_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};

export const postDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/posts/${uid}`)
            .remove()
            .then(() => {
                Actions.main({ type: 'reset' });
        });
    };
};
