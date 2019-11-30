import {combineReducers} from 'redux';

import todo from './todo';
import auth from './auth';

const reducers = combineReducers({
  todo,
  auth,
});

export default reducers;
