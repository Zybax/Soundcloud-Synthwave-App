import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class AudioContainer extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      document.querySelector('#audio-player').play();
    }
  }


  render() {
    return (
      <div className ={"audio-container"}>
        <audio id = "audio-player" className = {"audio-player"} controls src={this.props.url}></audio>
      </div>
    )
  }
}

/***  Proptypes  ***/

AudioContainer.propTypes = {
  name: PropTypes.string,
  artist: PropTypes.string,
  url: PropTypes.string
};

