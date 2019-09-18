import React, { Component } from 'react';
import Container from '../Components/Container';
import Header from './../Components/Header';
import GridContainer from './GridContainer';
import Search from './../Components/Search';
import AudioContainer from './AudioContainer';
import './../index.scss';
import 'whatwg-fetch';


class App extends Component {


  render() {
    return (
      <div className = 'app'>
      <Container>
        <Header/>
        <Search
        {...this.props}
        />

        <GridContainer
            {...this.props}
        />

        <AudioContainer url={this.props.currentTrack}/>
      </Container>
    </div>
    );
  }
}

export default App;
