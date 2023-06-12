import React from 'react'

export default function Garage2(props) {
const cars = props.car;
const bikes = props.bikes;

  return (
    <div>
        <h4>Cars Names</h4>
        {
            cars.length > 0 &&
            <p>Car List is Present</p>
        }
        {
            bikes.length === 0 &&
            <p>Bike List is Not Present</p>
        }
        <br/>


    </div>
  )

  
}
