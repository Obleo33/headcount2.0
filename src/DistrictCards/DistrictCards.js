import React from 'react';
import DistrictYears from './DistrictYears'

const DistrictCards = (data) => {
  return (
    <div className="district-container">
      {data.data.map((value, index) => {
        return (
          <div className="district-card" key={index}>
            <h2 className="district-name">{value.location}</h2>
            <DistrictYears yearlyData={value.yearlyData}/>
          </div>
        )
      })}
    </div>
  )
}

export default DistrictCards;
