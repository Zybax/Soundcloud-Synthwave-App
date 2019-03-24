import React from 'react'

export default function Search() {
  return (
    <div className={"search-form-container d-flex justify-content-center flex-wrap align-items-center"}>
      <form className={"search-form d-flex justify-content-center  align-items-center"} action="">
        <input className={"form-control input-search"} type="text" placeholder="Search" aria-label="Search"/>
        <button type="submit" className={"btn btn-primary"}>Search</button>
      </form>
    </div>
  )
}
