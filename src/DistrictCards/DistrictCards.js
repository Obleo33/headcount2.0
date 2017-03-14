import React, { Component } from 'react';
import HeadCount from '../HeadCount/HeadCount';
import DistrictRepository from '../helper';

const DistrictCards = (data) => {
  return (
    <div className="district-container">
      {data.data.findAllMatches().map((value, index) => {
        console.log(Object.keys(value.yearlyData));
        return (
          <div key={index}>
            <article className="district-card" >{value.location}</article>
            <article className="district-stats" >{Object.keys(value.yearlyData)}: {Object.values(value.yearlyData)}</article>
          </div>
        )
      })}
    </div>
  )
}

export default DistrictCards;
