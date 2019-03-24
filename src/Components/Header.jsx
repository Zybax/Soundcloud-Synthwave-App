import React from 'react'
import NavBar from './NavBar'

export default function Header() {
  return (
      <header className={"header d-flex justify-content-center flex-wrap align-items-start"}>
        <NavBar/>
        <div className={"cta-container d-flex justify-content-center flex-wrap align-items-center"}>
          <h1 className={"cta-title"}>Find Awesome Darksynth and Synthwave Tracks</h1>
          <h4 className={"cta-sub-title"}>Search by Artist, Name or Subgenre</h4>
        </div>
      </header>
  )
}
