import React, { Component } from 'react';
import Grid from '../Components/Grid';
import MusicItem from './../Containers/MusicItem';
import PropTypes from 'prop-types';
import NotFound from '../Components/NotFound';

const clientID = "95f22ed54a5c297b1c41f72d713623ef";

export default class GridContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
  }

  apiRequest = () => {
    fetch(`https://api.soundcloud.com/tracks?genres=synthwave&client_id=${clientID}&q=${this.props.query}&limit=50`).then(
      function(response) {
        return response.json()
      }).then((json) => {
        this.setState({data : json});

      }).catch((ex) => {
        console.log('parsing failed', ex);
      })
  }

  componentDidMount = () => {
    this.apiRequest();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.query !== this.props.query){
      this.apiRequest();
    }
  }

  render() {
    console.log(this.state.data);
    return this.state.data.length !== 0 ? (
      <div className = "grid-container">
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
                  currentTrackhandler = {this.props.currentTrackHandler}
              />)
            })
            }

           </Grid>
      </div>
    ): <NotFound/>
  }
}

/***  Proptypes  ***/

GridContainer.propTypes = {
  currentTrackHandler: PropTypes.func,
  query: PropTypes.string.isRequired
};
