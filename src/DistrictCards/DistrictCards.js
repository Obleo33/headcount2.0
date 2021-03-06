import React from 'react';
import './DistrictCards.css';
import CardCreator from '../CardCreator/CardCreator'

const DistrictCards = ({data, handleClick}) => {

  return (
    <div className="district-container">
      {data.map((value, index) => {
        return (
          <CardCreator  key={index}
                        value={value}
                        handleClick={(location) => handleClick(value.location)}/>
        )
      })}
    </div>
  )
}

export default DistrictCards;
