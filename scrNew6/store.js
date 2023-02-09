import { createStore,applyMiddleware } from "redux";
import createSagaMiddleWare from 'redux-saga';
import reducer from "./reducers";
import sagas from './sagas';

const sagaMiddleware=createSagaMiddleWare();
const store=createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);
export default store;

