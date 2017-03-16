import React from 'react'
import CardCreator from '../CardCreator/CardCreator'

const CompareDistricts = ({data}) => {
  console.log(data)
  return (
    <div className='compare-districts-container'>
        {data.map((value, index) => {
          return (
            <CardCreator  key={index}
                          value={value}/>
          )
        })}
    </div>
  )
}

export default CompareDistricts;
