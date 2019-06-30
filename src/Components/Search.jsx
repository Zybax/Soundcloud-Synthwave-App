import React from 'react'
import PropTypes from 'prop-types';

export default function Search(props) {
  return (
    <div className={'search-form-container d-flex justify-content-center flex-wrap align-items-center'}>
      <form className={'search-form d-flex justify-content-center  align-items-center'} action=''>
        <input
        onChange={props.searchValueHandler}
        onKeyPress={props.searchKeyPressHandler}
        className={'form-control input-search'} type='text' placeholder='Search' aria-label='Search'/>
        <button onClick={props.searchSubmitHandler} type='button' className={'btn custom-btn btn-primary'}>Search</button>
      </form>
    </div>
  )
}

/***  Proptypes  ***/

Search.propTypes = {
  searchSubmitHandler: PropTypes.func,
  searchValueHandler: PropTypes.func,
  searchKeyPressHandler: PropTypes.func
}
