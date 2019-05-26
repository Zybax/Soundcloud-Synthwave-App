import React from 'react'

export default function Grid(props) {
  return (
    <div className={"row grid"}>
    {props.children}
  </div>
  )
}
