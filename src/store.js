import {createStore} from 'redux';
import rootReducer from './reducers'

const defaultState = {
    currentTrack: '',
    query: '*',
    searchInput:'',
    data: [],
    currentPage: 1,
    itemsPerPage: 18
};

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
