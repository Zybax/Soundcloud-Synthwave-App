import React, { Component } from 'react';
import Container from './Container'
import Grid from './../Containers/Grid'
import MusicItem from './../Containers/MusicItem'
import Header from './../Components/Header'
import Search from './../Components/Search'
import './../index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header/>
          <Search />
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
