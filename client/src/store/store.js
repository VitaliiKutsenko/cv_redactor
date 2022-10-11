import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

export const configureStore = preloadState =>
  createStore(reducer, preloadState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
export const store = configureStore({});
sagaMiddleware.run(rootSaga);
