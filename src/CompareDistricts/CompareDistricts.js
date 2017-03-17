import React from 'react';
import CardCreator from '../CardCreator/CardCreator';
import "./CompareDistricts.css";


const CompareDistricts = ({data, compare, handleClick}) => {
  function compareDistricts() {
    if (compare.length > 1) {
      const dataCompare = data.compareDistrictAverages(compare[0].location, compare[1].location);
      const keys = Object.keys(dataCompare)
      return (
        <div className="compare district-card">
          <h3>{keys[0]}:</h3>
          <p> {dataCompare[keys[0]]}</p>
          <h2>{keys[2]}:</h2>
          <p>{dataCompare[keys[2]]}</p>
          <h3>{keys[1]}:</h3>
          <p>{dataCompare[keys[1]]}</p>
        </div>
    )
    }
  }

  return (
    <div className='compare-districts-container'>
      <CardCreator  value={compare[0]} handleClick={(location) => handleClick(compare[0].location)} key='one'/>
      {compareDistricts()}
      <CardCreator  value={compare[1]} handleClick={(location) => handleClick(compare[1].location)} key='two'/>
    </div>
  )
}

export default CompareDistricts;
