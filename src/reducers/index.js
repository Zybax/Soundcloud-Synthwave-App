import {combineReducers} from 'redux';

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

const rootreducer = combineReducers({currentTrack:changeTrack, searchInput: searchTrack, query:setApiQuery });

export default rootreducer;
