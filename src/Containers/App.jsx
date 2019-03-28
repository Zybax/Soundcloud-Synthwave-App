import React, { Component } from 'react';
import Container from './Container';
import Grid from './../Containers/Grid';
import MusicItem from './../Containers/MusicItem';
import Header from './../Components/Header';
import Search from './../Components/Search';
import AudioContainer from './../Components/AudioContainer';
import './../index.css';
import 'whatwg-fetch';

const clientID = "95f22ed54a5c297b1c41f72d713623ef";
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data: [],
      currentTrack: ""
    }
  }

  componentDidMount = () => {
    fetch(`https://api.soundcloud.com/tracks/?client_id=${clientID}`).then(function(response) {
        return response.json()
      }).then((json) => {
        console.log('parsed json', json);
        this.setState({data : json});

      }).catch((ex) => {
        console.log('parsing failed', ex);
      })
  }

  currentTrackhandler = (track) =>{
      this.setState({currentTrack : track});

  }
  
  render() {
    console.log(this.state);
    return (
      <div className="app">
        <Container>
          <Header/>
          <Search />
          <Grid>
            {      
              this.state.data.map((track) =>{

                let background = track.artwork_url;
                let artist = track.user.username;
                let name = track.title;
                let url = `${track.stream_url}?client_id=${clientID}`;

              return( <MusicItem 
                key = {url}
                background = {background}
                artist = {artist}
                name = {name}
                url = {url}
                currentTrackhandler = {this.currentTrackhandler}
              />)
            })
            }
             
           </Grid>
           <AudioContainer url={this.state.currentTrack}/>
        </Container>
      </div>
    );
  }
}

export default App;
