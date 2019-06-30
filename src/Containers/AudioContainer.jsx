import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class AudioContainer extends Component {

  // Plays a track when received through props
  componentDidUpdate = (prevProps) => {
    if (this.props.url !== prevProps.url) {
      this.toogleAudio();
    }
  }

  componentDidMount = () => {
    this.audioTrack  = document.querySelector('#audio-player');
    this.playButton = document.querySelector('#playButton');
    this.timeline = document.querySelector('#timeline');
    this.progressionBar = document.querySelector('#progression-bar ');
    this.playhead = document.querySelector('#playhead');
    this.totalTime = document.querySelector('#timer-total-time');
    this.currentTime = document.querySelector('#timer-current-time');
    this.volumeIcon = document.querySelector('#volume-icon');
    this.volumeBar = document.querySelector('#volume-bar');
    this.volumeLine = document.querySelector('#volume-line');
    this.volumeHead = document.querySelector('#volume-head');
    this.duration = '';
    window.onload = this.addListeners();
  }

  // Play and pause audio
  toogleAudio = () => {
    if (this.audioTrack.getAttribute('src') !== ''){
      if (this.audioTrack.paused){
        this.playButton.classList.replace('fa-play','fa-pause');
        this.audioTrack.play();
      }
      else
      {
        this.playButton.classList.replace('fa-pause','fa-play');
        this.audioTrack.pause();
      }
    }
 }

 // Update the timer and the progression bar
timeUpdate = () => {
  if (this.duration === this.getTrackDuration())  this.getTrackDuration();
  if (this.audioTrack.currentTime ===  this.duration){
    this.playButton.classList.replace('fa-pause','fa-play');
  }

  this.timerUpdate();
  this.progressionUpdate();
}

// this funtions format the time so it is shown as mm:ss
formatTime(minutes, seconds){
 let formattedMin = minutes.toString().length === 1 ? `0${minutes}`: minutes;
 let formattedSec = seconds.toString().length === 1 ? `0${seconds}`: seconds;

 return `${formattedMin}:${formattedSec}`
}

// Update the timer
timerUpdate = () => {
 const totalMinutes = parseInt( this.duration / 60, 10);
 const totalSeconds = parseInt( this.duration % 60);

 let currentMinutes = parseInt( this.audioTrack.currentTime / 60, 10);
 let currentSeconds = parseInt( this.audioTrack.currentTime % 60);

 this.totalTime.innerHTML = this.formatTime( totalMinutes, totalSeconds);
 this.currentTime.innerHTML = this.formatTime( currentMinutes, currentSeconds);

}

// Fills the progression bar
progressionUpdate = () => {
  let playPercent = 100 * ( this.audioTrack.currentTime /  this.duration);
  this.timeline.style.width = playPercent + '%';
  this.playhead.style.marginLeft = (playPercent - 1.2) + '%';
}

// Gets audio file duration
getTrackDuration = () =>{
  if( this.audioTrack.readyState > 0)
    {
      this.duration = this.audioTrack.duration;
    }
}

// Returns elements left position relative to top-left of viewport
getPosition = (el) => {
    return el.offsetLeft;
}

// Sets new position of the progression bar when clicked
setProgressionPosition = (event) => {
    if (!this.duration) this.getTrackDuration();
    this.audioTrack.currentTime = ( this.clickPercent(event,  this.progressionBar) *  this.duration);
  }

 // Toggles the volume
toogleVolume = () => {
    if ( this.audioTrack.muted){
      this.volumeIcon.classList.replace('fa-volume-mute','fa-volume-up');
      this.volumeLine.style.display = 'block';
      this.volumeHead.style.display = 'block';
      this.audioTrack.muted = false;
    }
    else
    {
      this.volumeIcon.classList.replace('fa-volume-up','fa-volume-mute');
      this.volumeLine.style.display = 'none';
      this.volumeHead.style.display = 'none';
      this.audioTrack.muted = true;
    }
 }

// Update the volume and the volume bar
volumeUpdate = (event) => {
  this.volumeLine.style.display = 'block';
  this.volumeHead.style.display = 'block';
  this.setVolume(event);
  this.volumeBarUpdate();
}

// Sets audio volume
setVolume = (event) => {
  let volumeLevel = this.clickPercent(event,  this.volumeBar);

  if(volumeLevel <= 0){
    this.audioTrack.volume = 0;
  }
  else if(volumeLevel >= 1){
    this.audioTrack.volume = 1;
  }
  else{
    this.audioTrack.volume = volumeLevel;
  }

}

// Fills the volume  bar
volumeBarUpdate = () => {
  let volumePercent = 100 * ( this.audioTrack.volume / 1);
  this.volumeLine.style.width = volumePercent + '%';
  this.volumeHead.style.marginLeft = (volumePercent - 6) + '%';
}

// Returns the percent of the bar when clicked related to the bar's width
clickPercent = (event, bar) => {
  const newPercent = (event.clientX -  this.getPosition(bar)) / bar.offsetWidth;
  return newPercent;
}

// Removes events on mouse up
mouseUpEventRemove = () => {
    window.removeEventListener('mousemove',  this.playHeadMove, true);
    window.removeEventListener('mousemove',  this.volumeHeadMove, true);
}

// Adds mousemove event on mousedown with a specified function
mouseDown = (event, func) => {
  window.addEventListener('mousemove', func, true);
}

playHeadMove = (event) => {
  this.setProgressionPosition(event);
}

volumeHeadMove = (event) => {
  this.volumeUpdate(event);
}

// Listeners
addListeners = () =>{
  this.audioTrack.addEventListener('timeupdate',  this.timeUpdate, false);
  this.playButton.addEventListener('click',  this.toogleAudio, false);
  this.progressionBar.addEventListener('click',  this.setProgressionPosition, false);
  this.progressionBar.addEventListener('mousedown', (event) => { this.mouseDown(event,  this.playHeadMove)}, false);
  this.playhead.addEventListener('mousedown', (event) => { this.mouseDown(event, this.playHeadMove)}, false);
  this.volumeBar.addEventListener('click',  this.volumeUpdate, false);
  this.volumeBar.addEventListener('mousedown', (event) => {  this.mouseDown(event, this.volumeHeadMove)}, false);
  this.volumeIcon.addEventListener('click',  this.toogleVolume, false);
  this.volumeHead.addEventListener('mousedown', (event) => { this.mouseDown(event, this.volumeHeadMove)}, false);
  window.addEventListener('mouseup',  this.mouseUpEventRemove, false);
}

  render() {
    return (
      <div className ={'audio-container'}>
        <div className={'audio-player'}>
          <div className={'audio-player__controls'}>
            <div className={'audio-player__button-container'}>
              <i id='playButton' className={'fas fa-play play-button'}></i>
            </div>

            <div className={'audio-player__timer-container'}>
              <span id='timer-current-time' className={'timer-current-time'}> 00:00 </span>
              <span className={'timer-divider'}> / </span>
              <span id='timer-total-time' className={'timer-total-time'}> 00:00 </span>
            </div>

            <div className={'audio-player__range-container'}>
              <div id='progression-bar' className={'progression-bar'}>
                <div id='timeline' className={'progression-bar__timeline'}></div>
                <div id='playhead' className={'progression-bar__playhead'}></div>
              </div>
            </div>

            <div className={'audio-player__volume-container'}>
              <div className={'volume-icon-container'}>
                <i id='volume-icon' className={'fas fa-volume-up'}></i>
              </div>

              <div className={'volume-range'}>
                <div id='volume-bar' className={'volume-bar'}>
                  <div id='volume-line' className={'volume-bar__line'}></div>
                  <div id='volume-head' className={'volume-bar__head'}></div>
                </div>
              </div>
            </div>

              <audio id={'audio-player'} src={this.props.url}></audio>

          </div>
        </div>
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
