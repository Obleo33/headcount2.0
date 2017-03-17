import React from 'react'
import DistrictYears from '../DistrictYears/DistrictYears';


const CardCreator = ({index, value, handleClick}) => {
  if (!value) {
    return null
  };
  const districtClass = 'district-card'
  return (
    <div  className={districtClass}
          key={index}
          onClick={() => handleClick(value.location)}>
      <div className='card-header'>
        <h2 className="district-name">{value.location.toUpperCase()}</h2>
      </div>
      <DistrictYears yearlyData={value.yearlyData}/>
    </div>
  )
}


export default CardCreator;
