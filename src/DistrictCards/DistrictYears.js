import React from 'react';

const DistrictYears = (yearlyData) => {
  const Data = yearlyData.yearlyData;

  return (
    <div className="yearly-data">
      {Object.keys(Data).map((year, index) => {
        if(Data[year] >= .5){
          return <div className="year over" key={index}>{year} : {Data[year]}</div>
        }
        return <div className="year under" key={index}>{year} : {Data[year]}</div>
      })}
    </div>
  )
}

export default DistrictYears;
