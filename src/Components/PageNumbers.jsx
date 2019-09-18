import React from 'react'
import PropTypes from 'prop-types';

export default function PageNumbers(props) {
  return (
    <div className={'pagination-container d-flex justify-content-center'}>
      <ul className={'pagination-list d-flex justify-content-center'}>{
      props.pageNumbers.map(number => {

      return (
        <li
        className={'pagination-list-item' + (parseInt(props.currentPage) === number ? ' pagination-list-current':'')}
        key={number}
        id={number}
        onClick={(event) =>{ 
          props.selectPage(event.target.id) }}
        >
          {number}
        </li>
      );
      })
    }
      </ul>
    </div>
  )
}

PageNumbers.propTypes = {
    pageNumbers: PropTypes.array.isRequired,
    selectPage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
  };
