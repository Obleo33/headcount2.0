import React from 'react';

const DistrictYears = (yearlyData) => {
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

export default DistrictYears;
