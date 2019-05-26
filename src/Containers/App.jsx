import React, { Component } from 'react';
import Container from '../Components/Container';
import Header from './../Components/Header';
import GridContainer from './GridContainer';
import Search from './../Components/Search';
import AudioContainer from './AudioContainer';
import './../index.scss';
import 'whatwg-fetch';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTrack: "",
      searchInput: "",
      query: "*"
    }
  }

  // Sets the search query for the api call
  searchSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({query: this.state.searchInput});
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
    this.setState({searchInput: event.target.value});
  }

  // Sets the current track being played
  currentTrackHandler = (track) => {
    this.setState({currentTrack : track});
  }

  render() {
    return (
      <div className = "app">
      <Container>
        <Header/>
        <Search
        searchKeyPressHandler={this.searchKeyPressHandler}
        searchValueHandler={this.searchValueHandler}
        searchSubmitHandler={this.searchSubmitHandler}
        />

        <GridContainer
            genre={"synthwave"}
            query={this.state.query}
            currentTrackHandler={this.currentTrackHandler}
        />

        <AudioContainer url={this.state.currentTrack}/>
      </Container>
    </div>
    );
  }
}

export default App;
