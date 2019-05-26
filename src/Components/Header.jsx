import React from 'react';

export default function Header() {
return (
<header className={"header d-flex justify-content-center flex-wrap align-items-start align-content-arround"}>
  <div className={"text-container d-flex justify-content-center flex-wrap align-items-center "}>

  <div className={"logo-container d-flex flex-column align-items-center"}>
      <h1 className={"logo"}>RETRO</h1>
      <h3 className={"dreams"}>Dreams</h3>
  </div>

    <h4 className={"header__sub-title"}>
    Listen To Some Rad Synthwave Tracks <br/> Search by Album, Artist or Track Name </h4>
  </div>
</header>
)
}