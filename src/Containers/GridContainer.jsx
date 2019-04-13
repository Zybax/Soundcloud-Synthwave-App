import React, { Component, lazy, Suspense } from 'react';
import Grid from '../Components/Grid';
import PropTypes from 'prop-types';
import NotFound from '../Components/NotFound';
import PageNumbers from '../Components/PageNumbers';

const MusicItem = lazy(() => import('./../Containers/MusicItem'));
const clientID = process.env.REACT_APP_SC_API_KEY;

export default class GridContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      currentPage: 1,
      itemsPerPage: 18
    }
  }

  // Return tracks from the api
  apiRequest = () => {
    fetch(`https://api.soundcloud.com/tracks?genres=${this.props.genre}&client_id=${clientID}&q=${this.props.query}&limit=100`)
      .then((res) => res.json())
      .then((json) => this.setState({data : json}))
      .catch((err) => {
        console.error(err.message);
      })
  }

  // Calls the api when the component renders
  componentDidMount = () => {
    this.apiRequest();
  }

  // Calls the api when search query changes
  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.query !== this.props.query){
      this.setState({
        currentPage: 1
      });
      this.apiRequest();
    }
  }

  // Change page number
  handlePageClick = (event) => {
    this.setState({
      currentPage: parseInt(event.target.id)
    });
  }

  // Sets the current items of one page
  paginationItemsSetup = () => {
    const indexOfLastItem = this.state.currentPage * this.state.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
    const currentItems = this.state.data.slice(indexOfFirstItem, indexOfLastItem);

    return currentItems;
  }

  // Sets de number of pages 
  pageNumbersSetup = () => {
    const pageNumbers = [];

    // Number of pages
    for (let i = 1; i <= Math.ceil(this.state.data.length / this.state.itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  }

  render() {
    return (
      <div className = "grid-container">
        <Suspense fallback={<div>Loading...</div>}>  
          {this.state.data.length !== 0 ?
            <Grid>   
              {
                  this.paginationItemsSetup().map((track) =>{

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
            </Grid> : <NotFound/>    
            }
          </Suspense> 
           <PageNumbers
           pageNumbers = {this.pageNumbersSetup()}
           handlePageClick = {this.handlePageClick}
           currentPage={this.state.currentPage}
           />
            
      </div>
    )
  }
}

/***  Proptypes  ***/

GridContainer.propTypes = {
  currentTrackHandler: PropTypes.func,
  query: PropTypes.string.isRequired,
  genre:PropTypes.string.isRequired
};
