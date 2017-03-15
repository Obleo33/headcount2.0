import React, { Component } from 'react';
import DistrictCards from '../DistrictCards/DistrictCards';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';


export default class HeadCount extends Component {
  constructor() {
    super()
    this.state = {
      data: new DistrictRepository(kinderData),
    }
  }

  displayMatches(e){
    const match = this.state.data.findAllMatches(e.target.value)
    console.log(match);
  }


  render() {
    return(
      <div className="head-count">
        <h1>HeadCount2.0</h1>
        <form className="search-form">
          <input className="search-input"
                 placeholder="search"
                 onChange={this.displayMatches.bind(this)}
                 />
        </form>
        <DistrictCards data={this.state.data}/>
      </div>
    )
  }
}


HeadCount.propType = {
  data: React.PropTypes.object.isRequired
}
