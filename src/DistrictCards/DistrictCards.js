import React from 'react';
import DistrictYears from './DistrictYears';
import './DistrictCards.css';

const DistrictCards = (data) => {

  function handleClick() {
    // this.toggleClass('clicked')
    return console.log('this was clicked');
  }

  return (
    <div className="district-container">
      {data.data.map((value, index) => {
        return (
          <div className="district-card" key={index} onClick={() => handleClick()}>
            <h2 className="district-name">{value.location}</h2>
            <DistrictYears yearlyData={value.yearlyData}/>
          </div>
        )
      })}
    </div>
  )
}

export default DistrictCards;
