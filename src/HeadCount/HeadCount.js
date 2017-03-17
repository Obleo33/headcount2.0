import React, { Component } from 'react';
import DistrictCards from '../DistrictCards/DistrictCards';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';
import CompareDistricts from '../CompareDistricts/CompareDistricts'
import './HeadCount.css';
import './normalize.css'

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

  search(e){
    const match = this.state.data.findAllMatches(e.target.value)
    this.setState({ search: match })
  }

  handleClick(location) {
  const keys = this.state.compare.map(district => district.location)
  const index = keys.indexOf(location)

  index === -1 ? this.addCompare(location): this.removeComare(index);
  }

  addCompare(location){
    if(this.state.compare.length<2){
      this.state.compare.push(this.state.data.findByName(location))
    } else {
      this.state.compare.shift()
      this.state.compare.push(this.state.data.findByName(location))
    }
    this.setState({compare: this.state.compare})
  }

  removeComare(index){
    this.state.compare.splice(index,1)
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
                   onChange={this.search.bind(this)}
                   />
          </form>
        </div>
        <CompareDistricts data={this.state.data}
                          compare={this.state.compare}
                          handleClick={(location) => this.handleClick(location)}/>
        <DistrictCards data={this.state.search}
                       handleClick={(location) => this.handleClick(location)}
                       />
      </div>
    )
  }
}

HeadCount.propType = {
  data: React.PropTypes.object.isRequired,
  search: React.PropTypes.array.isRequired,
  compare: React.PropTypes.array
}
