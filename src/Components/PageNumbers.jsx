import React from 'react'
import PropTypes from 'prop-types';

export default function PageNumbers(props) {
  return (
    <div className={'pagination-container d-flex justify-content-center'}>
      <ul className={'pagination-list d-flex justify-content-center'}>{
      props.pageNumbers.map(number => {
      return (
        <li
        className={'pagination-list-item' + (props.currentPage === number ? ' pagination-list-current':'')}
        key={number}
        id={number}
        onClick={props.handlePageClick}
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
    handlePageClick: PropTypes.func.isRequired
  };
