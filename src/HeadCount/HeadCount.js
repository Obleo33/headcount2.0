import React, { Component } from 'react';
import DistrictCards from '../DistrictCards/DistrictCards';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';
import CompareDistricts from '../CompareDistricts/CompareDistricts'
import './HeadCount.css';


export default class HeadCount extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      search: [],
      compare: []
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

  handleClick(location) {
    if(this.state.compare.length<2){
      this.state.compare.push(this.state.data.findByName(location))
    }
    this.state.compare.shift()
    this.state.compare.push(this.state.data.findByName(location))
    this.setState({compare: this.state.compare})
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
        <CompareDistricts data={this.state.compare}/>
        <DistrictCards data={this.state.search} handleClick={(location) => this.handleClick(location)}/>
      </div>
    )
  }
}

HeadCount.propType = {
  data: React.PropTypes.object.isRequired,
  search: React.PropTypes.array.isRequired,
  compare: React.PropTypes.array
}
