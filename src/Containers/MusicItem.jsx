import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class MusicItem extends Component {
  render() {
    return (
    <div className={'music-item-container d-flex flex-wrap justify-content-center align-items-start col-lg-2 col-md-3 col-sm-6 col-xs-6'}>
      <div className={'music-item d-flex flex-row flex-wrap justify-content-center'}>
        <div onClick = {() => this.props.changeTrack(this.props.url)} style={{backgroundImage:`url(${this.props.background})`}} className={'music-item-image-container d-flex flex-wrap justify-content-center align-items-center'}>

          <div className={'play-icon d-flex flex-wrap justify-content-center align-items-center'}>
            <i className={'fas fa-play'}></i>
          </div>

          <div className={'music-options d-flex flex-wrap justify-content-end align-items-center'}>
            <i className={'fas fa-heart'}></i>
            <i className={'fas fa-ellipsis-h'}></i>
          </div>

        </div>

        <div className={'music-item-info d-flex flex-wrap flex-column'}>
          <h5 className={'track-name'}>{this.props.name}</h5>
          <span className={'artist-name'}>{this.props.artist}</span>
        </div>
      </div>
    </div>
    )
  }
}

/***  Proptypes  ***/

MusicItem.propTypes = {
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  background: PropTypes.string, // Not all tracks have an image
  url: PropTypes.string.isRequired,
  changeTrack: PropTypes.func.isRequired
};
