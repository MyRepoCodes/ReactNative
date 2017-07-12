import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
// import { persistStore, autoRehydrate } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import auth from './modules/auth/reducer';
import {logger} from 'redux-logger';
var defaultState = {};

const reducers = combineReducers({
  form: formReducer,
  auth
});

const store = createStore(reducers, {},compose(applyMiddleware(ReduxThunk,logger)));
// persistStore(store, { storage: AsyncStorage });
export default store;
