import React from 'react'

export default function ListData() {

    const cars = ['acnac','aDAd','Dd','Dadd'];
    const bikes = [
        {id:1,name:'Pulser'},
        {id:2,name:'Ducati'},
        {id:3,name:'Yamaha'},
    ];

  return (
    <>
        <h2>Name of the cars</h2>
        <center><div style={{
            // marginLeft:'20px',
            width:'10%',
            backgroundColor:'#EC8D69'            
        }}>
        <ul>{
            cars.map((car)=> <li>{car}</li>)
            }</ul>

        <h2>Name of the Bikes</h2>    
        <ol>{
            bikes.map((bike)=> <li>{bike.name}</li>)
            }</ol>



    </div></center>
    </>
  )
}

