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

