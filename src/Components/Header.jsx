import React from 'react'
import NavBar from './NavBar'

export default function Header() {
  return (
      <header className={"header d-flex justify-content-center flex-wrap align-items-start align-content-arround"}>
        <NavBar/>
        <div className={"cta-container d-flex justify-content-center flex-wrap align-items-center "}>
          <h1 className={"cta-title"}>Listen to Awesome Tracks</h1>
          <h4 className={"cta-sub-title"}>Filter by Artist, Name or Genre</h4>
        </div>
      </header>
  )
}
