import { combineReducers } from 'redux';
import usersReducers from './users_reducer';

const rootReducer = combineReducers({
    users: usersReducers
});

export default rootReducer;
