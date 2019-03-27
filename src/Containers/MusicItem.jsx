import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class MusicItem extends Component {
  constructor(props) {
  super(props)

  this.state = {

  }
}

  render() {
    return (
    <div className={"music-item-container d-flex flex-wrap justify-content-center align-items-start col-lg-3 col-md-4 col-sm-6 col-xs-12"}>
      <div className={"music-item d-flex flex-row flex-wrap center"}>
        <div style={{backgroundImage:`url(${this.props.background})`}} className={"music-item-image-container d-flex flex-wrap justify-content-center align-items-center"}>

          <div className={"play-icon d-flex flex-wrap justify-content-center align-items-center"}>
            <i className={"fas fa-play"}></i>
          </div>

          <div className={"music-options d-flex flex-wrap justify-content-end align-items-center"}>
            <i className={"fas fa-heart"}></i>
            <i className={"fas fa-ellipsis-h"}></i>
          </div>

        </div>

        <div className={"music-item-info"}>
          <h5 className={"track-name"}>{this.props.name}</h5>
          <span className={"artist-name"}>{this.props.artist}</span>
        </div>
      </div>
    </div>
    )
  }
}

MusicItem.propTypes = {
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  background: PropTypes.string,
  url: PropTypes.string.isRequired
};