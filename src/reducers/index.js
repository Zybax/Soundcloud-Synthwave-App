import {combineReducers} from 'redux';

//change the current track being played
export function changeTrack(state = [], action){
    switch(action.type){
        case 'CHANGE_TRACK':
            const track = action.track;       
            const newStatePorperty = track;

            return newStatePorperty;
        default: 
            return state;

    }
}

 // Adds the value from the search textbox into the state 
export function searchTrack(state = [], action){
    switch(action.type){
        case 'SEARCH_TRACK':
            const searchInput = action.searchInput;

            const newStatePorperty = searchInput;

            return newStatePorperty;
        default: 
            return state;

    }
}

// Sets the search query for the soundcloud api call 
export function setApiQuery(state = [], action){
    switch(action.type){
        case 'CHANGE_QUERY':

        const newStatePorperty = action.query;

            return newStatePorperty;
        default: 
            return state;

    }
}

// Return tracks from the api
export function sendQuery(state = [], action){
    switch(action.type){
        case 'SEND_QUERY':
        const newStatePorperty = action.query;       

            return newStatePorperty;
        default: 
            return state;

    }
}

export function setCurrentPage(state = [], action){
    switch(action.type){
        case 'INCREMENT_PAGE':
            const newStatePorperty = action.page + 1;

            return newStatePorperty;

       case 'DECREMENT_PAGE':
            return action.page - 1;

       case 'SELECT_PAGE':
            return action.page;

        default: 
            return state;

    }
}

export function setItemsPerPage(state = [], action){
    switch(action.type){
        case 'SET_ITEMS_PER_PAGE':
            const newStatePorperty = '18'

            return newStatePorperty;

        default: 
            return state;

    }
}

const rootreducer = combineReducers({
    currentTrack:changeTrack,
    query:setApiQuery,
    searchInput: searchTrack, 
    data: sendQuery,
    currentPage: setCurrentPage,
    itemsPerPage: setItemsPerPage 
});

export default rootreducer;
