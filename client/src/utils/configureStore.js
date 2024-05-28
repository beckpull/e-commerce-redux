import { configureStore } from 'redux';
import reducer from './reducers';

export const store = configureStore(reducer);