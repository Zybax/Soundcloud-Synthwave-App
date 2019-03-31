import React from 'react'
import NavBar from './NavBar'

export default function Header() {
return (
<header className={"header d-flex justify-content-center flex-wrap align-items-start align-content-arround"}>
  <NavBar />
  <div className={"cta-container d-flex justify-content-center flex-wrap align-items-center "}>

  <div className={"logo-container d-flex justify-content-center"}>
      <h1 className={"chrome"}>RETRO</h1>
      <h3 className={"dreams"}>Dreams</h3>
  </div>

    <h4 className={"cta-sub-title"}>
    Listen To Some Rad Synthwave Tracks <br/> Search by Album, Artist or Track Name </h4>
  </div>
</header>
)
}