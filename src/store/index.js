import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { watchMusic } from './sagas';
import rootReducer from './reducers';

const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(watchMusic);
