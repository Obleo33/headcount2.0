import React, { Component } from 'react';
import DistrictCards from '../DistrictCards/DistrictCards';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';


export default class HeadCount extends Component {
  constructor() {
    super()
    this.state = {
      data: new DistrictRepository(kinderData),
      search: ''
    }
  }

  componentWillMount() {
    this.setState({ search: this.state.data.findAllMatches()})
  }

  Search(e){
    const match = this.state.data.findAllMatches(e.target.value)
    this.setState({ search: match })
  }


  render() {
    return(
      <div className="head-count">
        <h1>HeadCount2.0</h1>
        <form className="search-form">
          <input className="search-input"
                 placeholder="search"
                 onChange={this.Search.bind(this)}
                 />
        </form>
        <DistrictCards data={this.state.search}/>
      </div>
    )
  }
}


HeadCount.propType = {
  data: React.PropTypes.object.isRequired
}
