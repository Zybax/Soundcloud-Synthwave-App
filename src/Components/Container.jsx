import React, { Component } from 'react'
import Grid from './../Containers/Grid'
import MusicItem from './../Containers/MusicItem'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className={'container'}>
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
      </div>
    )
  }
}

