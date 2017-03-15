import React from 'react';

const DistrictCards = (data) => {
  return (
    <div className="district-container">
      {data.data.findAllMatches().map((value, index) => {
        return (
          <div className="district-card" key={index}>
            <h2 className="district-name">{value.location}</h2>
            <DataLoop yearlyData={value.yearlyData}/>
          </div>
        )
      })}
    </div>
  )
}

const DataLoop = (yearlyData) => {
  return (
    <div className="yearly-data">
      {Object.keys(yearlyData.yearlyData).map((year, index) => {
        return (
          <div key={index}>{year} : {yearlyData.yearlyData[year]}</div>
        )
      })}
    </div>
  )
}

export default DistrictCards;
