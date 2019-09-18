import React from 'react'
import PropTypes from 'prop-types';

export default function Search(props) {
  return (
    <div className={'search-form-container d-flex justify-content-center flex-wrap align-items-center'}>
      <form className={'search-form d-flex justify-content-center  align-items-center'} action=''
      onKeyPress={(event)=> {
        const charCode = event.which || event.charCode || event.keyCode || 0;

        if(charCode === 13) {       
          event.preventDefault(); 
          props.setApiQuery(props.searchInput);
        }
      }
    }>
        <input
        onChange={(event)=> props.searchTrack(event.target.value) }
    
        className={'form-control input-search'} type='text' placeholder='Search' aria-label='Search'/>
        <button onClick={() => props.setApiQuery(props.searchInput)} type='button' className={'btn custom-btn btn-primary'}>Search</button>
      </form>
    </div>
  )
}

/***  Proptypes  ***/

Search.propTypes = {
  setApiQuery: PropTypes.func.isRequired,
  searchTrack: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired
}
