//  Redux index.js filter

import { combineReducers } from 'redux';
import bookmarks from './modules/bookmarks/reducer';

//  use combineReducers to merge all the reducers into a single global object
//  that will be saved in the store
const reducers = combineReducers({ bookmarks, });
