import React, { Component } from 'react';
import Container from './../Components/Container'
import Grid from './../Containers/Grid'
import MusicItem from './../Containers/MusicItem'
import Header from './../Components/Header'
import './../index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header/>
          <Grid>
             <MusicItem/>
             <MusicItem/>
             <MusicItem/>
             <MusicItem/>
             <MusicItem/>
             <MusicItem/>
             <MusicItem/>
             <MusicItem/>
             <MusicItem/>
             <MusicItem/>
             <MusicItem/>
             <MusicItem/>
           </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
