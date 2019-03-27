import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class AudioContainer extends Component {
  render() {
    return (
      <div className ={"audio-container"}>
        <audio className = {"audio-player"} controls src={this.props.url}></audio>
      </div>
    )
  }
}

AudioContainer.propTypes = {
  name: PropTypes.string,
  artist: PropTypes.string,
  url: PropTypes.string
};

