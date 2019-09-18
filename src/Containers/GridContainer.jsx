import React, { Component} from 'react';
import Grid from '../Components/Grid';
import PropTypes from 'prop-types';
import NotFound from '../Components/NotFound';
import PageNumbers from '../Components/PageNumbers';
import MusicItem from './../Containers/MusicItem';
const clientID = process.env.REACT_APP_SC_API_KEY;

export default class GridContainer extends Component {
 
  // Return tracks from the api
    apiRequest = () => {
    fetch(`https://api.soundcloud.com/tracks?genres=synthwave&client_id=${clientID}&q=${this.props.query}&limit=100`)
      .then((res) => res.json())
      .then((json) => this.props.sendQuery(json))
      .catch((err) => {
        console.error(err.message);
      })
  }

  // Calls the api when the component renders
  componentDidMount = () => {
    this.apiRequest();
  }

  // Calls the api when the search query changes
  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.query !== this.props.query){
      this.apiRequest();
    }
  }

  // Displayy the current items of one page
  paginationItemsSetup = () => {
    const indexOfLastItem = this.props.currentPage * this.props.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - this.props.itemsPerPage;
    const currentItems = this.props.data.slice(indexOfFirstItem, indexOfLastItem);


    return currentItems;
  }

  // Displays the number of pages
  pageNumbersSetup = () => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(this.props.data.length / this.props.itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  }

  render() {
    return (
      <div className = 'grid-container'>
       
          {this.props.data.length !== 0 ?
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
                    {...this.props}
                />)
              })
              }
            </Grid> : <NotFound/>
            }
           <PageNumbers
           pageNumbers = {this.pageNumbersSetup() }
           {...this.props}
           />

      </div>
    )
  }
}

/***  Proptypes  ***/

GridContainer.propTypes = {
  query: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  sendQuery: PropTypes.func.isRequired
};
