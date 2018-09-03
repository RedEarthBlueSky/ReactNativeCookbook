//  Redux - Redux Store - index.js file
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import bookmarks from './modules/bookmarks/reducer';
import categories from './modules/categories/reducer';
import fetchMiddleware from './middleware/fetchMiddleware';

// import { loadCategories } from './modules/categories/actions';

//  use combineReducers to merge all the reducers into a single global object
//  that will be saved in the store
const reducers = combineReducers({
  bookmarks,
  categories,
});

// const store = createStore(reducers, applyMiddleware(fetchMiddleware));
const createAppStore = applyMiddleware(fetchMiddleware)(createStore);

const store = autoRehydrate()(createAppStore)(reducers);
persistStore(store, { storage: AsyncStorage });

export default store;
