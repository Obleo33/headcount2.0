import React from 'react'
import DistrictYears from '../DistrictYears/DistrictYears';

const CardCreator = ({index, value, handleClick}) => {
  return (
    <div className="district-card" key={index} onClick={() => handleClick(value.location)}>
      <h2 className="district-name">{value.location}</h2>
      <DistrictYears yearlyData={value.yearlyData}/>
    </div>
  )
}


export default CardCreator;
