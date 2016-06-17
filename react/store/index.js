/**
 * Created by carvenzhang on 2016/6/16.
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const logger = createLogger();

const configureStore = applyMiddleware(
	thunk,
	logger
)(createStore);

export default configureStore;
