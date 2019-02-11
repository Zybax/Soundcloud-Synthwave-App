import React, { Component } from 'react'


export default class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className={"row"}>
        {this.props.children}
      </div>
    )
  }
}
