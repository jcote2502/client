
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// Define initial state
const initialState = {
    isSignedIn: false,
    uid: null,
    role: null,
    accountInfo: {
        userName: '',
        email:'',
        fname: '',
        lname: '',
        address: '',
        created_on:null,
        favorite_team: '',
    },
};

// Define actions
const signInAction = () => ({
    type: 'SIGN_IN',
});

const signOutAction = () => ({
    type: 'SIGN_OUT',
});

// Define reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                isSignedIn: true,
            };
        case 'SIGN_OUT':
            return initialState
            ;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    auth: authReducer,
});

// Create the store
const store = configureStore({
    reducer: {
        rootReducer
    }
});

export default store;