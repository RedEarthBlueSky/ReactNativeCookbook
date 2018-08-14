//  REDUX INDEX ******  src/redux/index.js
//  combine all the reducers we have

import { combineReducers } from 'redux';
import bookmarks from './modules/bookmarks/reducer';

const reducers = combineReducers({ bookmarks, });
