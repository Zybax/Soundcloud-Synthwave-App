import React, { Component } from 'react';
import Container from '../Components/Container';
import Header from './../Components/Header';
import GridContainer from './GridContainer';
import Search from './../Components/Search';
import AudioContainer from './AudioContainer';
import './../index.scss';
import 'whatwg-fetch';


class App extends Component {

// Sets the search query for the api call
  searchSubmitHandler = (event) => {
    event.preventDefault();
    this.props.setApiQuery(this.props.searchInput);
  }

  // Calls searchSubmitHandler when you press enter in the search textbox
  searchKeyPressHandler = (event) => {
    if (event.key === 'Enter') {
      this.searchSubmitHandler(event);
    }
  }

  // Adds the value from the search textbox into the state
  searchValueHandler = (event) => {
    event.preventDefault();
    this.props.searchTrack(event.target.value);
  }

  // Sets the current track being played
  currentTrackHandler = (track) => {
    this.props.changeTrack(track);
  }

  render() {
    return (
      <div className = 'app'>
      <Container>
        <Header/>
        <Search
        searchKeyPressHandler={this.searchKeyPressHandler}
        searchValueHandler={this.searchValueHandler}
        searchSubmitHandler={this.searchSubmitHandler}
        />

        <GridContainer
            genre = {'synthwave'}
            query = {this.props.query}
            currentTrackHandler = {this.currentTrackHandler}
        />

        <AudioContainer url={this.props.currentTrack}/>
      </Container>
    </div>
    );
  }
}

export default App;
