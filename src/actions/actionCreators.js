// Change audio track
export function changeTrack(track){
  return {
      'type': 'CHANGE_TRACK',
      'track':track
  }
}

// Change search query input value
export function searchTrack(searchInput){
    return{
        'type': 'SEARCH_TRACK',
        'searchInput': searchInput
    }
}

// Change search query paramaters
export function setApiQuery(query){
    return{
        'type': 'CHANGE_QUERY',
        'query': query
    }
}

// Go to the next page
export function incrementPage(page){
    return{
        'type': 'INCREMENT_PAGE',
        'page': page
    }
}

// Go to the previous page
export function decrementPage(page){
    return{
        'type': 'DECREMENT_PAGE',
        'page': page
    }
}

// Select a page to go
export function selectPage(page){
    return{
        'type': 'SELECT_PAGE',
        'page': page
    }
}

// Return tracks from the api
export function sendQuery(query){
    return{
        'type': 'SEND_QUERY',
        'query': query
    }
}

// Set the quantity of tracks per page
export function setItemsPerPage(query){
    return{
        'type': 'SET_ITEMS_PER_PAGE',
        'query': query
    }
}


