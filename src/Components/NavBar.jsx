import React from 'react'
import { BrowserRouter as Router, NavLink}  from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className={"nav d-flex flex-wrap justify-content-between"}>
        {/* <Router>
          <NavLink to="/" active ClassName="active">Home</NavLink>
          <NavLink to="/darksynth" active ClassName="active">Darksynth</NavLink>
          <NavLink to="/outrun" active ClassName="active">Outrun</NavLink>
          <NavLink to="/retrowave" active ClassName="active">Retrowave</NavLink>
        </Router>        */}
    </nav>
)
}
