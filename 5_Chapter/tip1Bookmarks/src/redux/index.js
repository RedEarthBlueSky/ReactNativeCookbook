//  Redux index.js
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import fetchMiddleware from './middleware/fetchMiddleware';
import bookmarks from './modules/bookmarks/reducer';
import categories from './modules/categories/reducer';

const reducers = combineReducers({
  bookmarks,
  categories,
});

const createAppStore = applyMiddleware(fetchMiddleware)(createStore);

//  bug:  redux-persist only supports autoRehydrate at
//  V4.10.0 had to roll back, need an alternative to persist state
const store = autoRehydrate()(createAppStore)(reducers);

persistStore(store, { storage: AsyncStorage });

export default store;
