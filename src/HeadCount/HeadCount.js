import React, { Component } from 'react';
import DistrictCards from '../DistrictCards/DistrictCards';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';
import './HeadCount.css';


export default class HeadCount extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      search: []
    }
  }

  dataLoader() {
    this.setState({ data: new DistrictRepository(kinderData) })
  }

  componentWillMount() {
    this.dataLoader()
  }

  componentDidMount() {
    this.setState({ search: this.state.data.findAllMatches()})
  }

  Search(e){
    const match = this.state.data.findAllMatches(e.target.value)
    this.setState({ search: match })
  }

  render() {
    return(
      <div className="head-count">
        <div className="header-nav">
          <header>HeadCount2.0</header>
          <form className="search-form">
            <input className="search-input"
              placeholder="search"
              onChange={this.Search.bind(this)}
              />
          </form>
        </div>
        <DistrictCards data={this.state.search}/>
      </div>
    )
  }
}

HeadCount.propType = {
  data: React.PropTypes.object.isRequired,
  search: React.PropTypes.array.isRequired
}
