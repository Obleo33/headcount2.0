import React, { Component } from 'react';
import HeadCount from '../HeadCount/HeadCount';


const DistrictCards = (data) => {


  return (
    <div className="district-container">
      {data.data.findAllMatches().map((value, index) => {
        return (
          <article className="district-card" key={index}>{value}</article>
        )
      })}
    </div>
  )
}

export default DistrictCards;
