const Player = function(){
    const audioTrack  = document.querySelector('#audio-player');
    const playButton = document.querySelector('#playButton');
    const timeline = document.querySelector('#timeline');
    const progressionBar = document.querySelector('#progression-bar ');
    const playhead = document.querySelector('#playhead');
    const totalTime = document.querySelector('#timer-total-time');
    const currentTime = document.querySelector('#timer-current-time');
    const volumeIcon = document.querySelector('#volume-icon');
    const volumeBar = document.querySelector('#volume-bar');
    const volumeLine = document.querySelector('#volume-line');
    const volumeHead = document.querySelector('#volume-head');
    let duration;
    
    // Play and pause audio
    function toogleAudio(){
        if (audioTrack.paused){
          playButton.classList.replace("fa-play","fa-pause");
          audioTrack.play();
        } 
        else 
        {
          playButton.classList.replace("fa-pause","fa-play");
          audioTrack.pause();      
        }
     }
    
     // Update the timer and the progression bar
    function timeUpdate() {
      if (!duration) getTrackDuration();   
      if ( audioTrack.currentTime === duration){
        playButton.classList.replace("fa-pause","fa-play");
      }
      
      timerUpdate();
      progressionUpdate();
    }
     
    
    // Update the timer
    function timerUpdate() {
     const totalMinutes = parseInt(duration / 60, 10);
     const totalSeconds = parseInt(duration % 60);
      
     let currentMinutes = parseInt(audioTrack.currentTime / 60, 10);
     let currentSeconds = parseInt(audioTrack.currentTime % 60);
        
     totalTime.innerHTML = totalMinutes + ":" + totalSeconds;
     currentTime.innerHTML = currentMinutes + ":" + currentSeconds;
      
    }
    
    // Fills the progression bar
    function progressionUpdate() {  
      let playPercent = 100 * (audioTrack.currentTime / duration);
      timeline.style.width = playPercent + "%";
      playhead.style.marginLeft = (playPercent - 1.2) + "%";
    }
    
    
    // Gets audio file duration
    function getTrackDuration(){
      if(audioTrack.readyState > 0) 
        {
            duration = audioTrack.duration;
        }
    }
    
    
    // Returns elements left position relative to top-left of viewport
    function getPosition(el) {
        return el.offsetLeft;
    }
    
    
    // Sets new position of the progression bar when clicked
    function setProgressionPosition(event){
        if (!duration) getTrackDuration();
        audioTrack.currentTime = (clickPercent(event, progressionBar) * duration);
      }
    
     // Toggle the volume
    function toogleVolume(){
        if (audioTrack.muted){
          volumeIcon.classList.replace("fa-volume-mute","fa-volume-up");
          volumeLine.style.display = 'block';
          volumeHead.style.display = 'block';
          audioTrack.muted = false;
        } 
        else 
        {
          volumeIcon.classList.replace("fa-volume-up","fa-volume-mute");
          volumeLine.style.display = 'none';
          volumeHead.style.display = 'none';
          audioTrack.muted = true;     
        }
     }
    
    // Update the volume and the volume bar
    function volumeUpdate(event) {
      volumeLine.style.display = 'block';
      volumeHead.style.display = 'block';
      setVolume(event);
      volumeBarUpdate();
    }
    
    
    // Sets audio volume
    function setVolume(event){
        audioTrack.volume = clickPercent(event, volumeBar);
    }
    
    
    // Fills the volume  bar
    function volumeBarUpdate() { 
      let volumePercent = 100 * (audioTrack.volume / 1); 
      volumeLine.style.width = volumePercent + "%"; 
      volumeHead.style.marginLeft = (volumePercent - 6) + "%";
    }
    
   
    // Returns the percent of the bar when clicked related to the bar's width
    function clickPercent(event, bar) {   
      const newPercent = (event.clientX - getPosition(bar)) / bar.offsetWidth;
      return newPercent;
    }
    
    // Removes events on mouse up
    function mouseUpEventRemove()
    {
        window.removeEventListener('mousemove', playHeadMove, true);
        window.removeEventListener('mousemove', volumeHeadMove, true);
    }
  
    // Adds mousemove event on mousedown with a specified function
    function mouseDown(event, func){
      window.addEventListener('mousemove', func, true);
    }
    
    function playHeadMove(event){
      setProgressionPosition(event);
    }
    
    function volumeHeadMove(event){
      volumeUpdate(event);
    }
    
    
    // Listeners
    function addListeners(){
      audioTrack.addEventListener("timeupdate", timeUpdate, false);
      playButton.addEventListener('click', toogleAudio, false);
      progressionBar.addEventListener("click", setProgressionPosition, false);
      progressionBar.addEventListener("mousedown", function(event){mouseDown(event, playHeadMove)}, false);
      playhead.addEventListener('mousedown', function(event){mouseDown(event, playHeadMove)}, false);
      volumeBar.addEventListener("click", volumeUpdate, false);
      volumeBar.addEventListener('mousedown', function(event){mouseDown(event, volumeHeadMove)}, false);
      volumeIcon.addEventListener("click",toogleVolume, false);
      volumeHead.addEventListener('mousedown', function(event){mouseDown(event, volumeHeadMove)}, false);
      window.addEventListener('mouseup', mouseUpEventRemove, false);
    }
  
    window.onload = addListeners();
  }


  
  