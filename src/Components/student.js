import React from 'react'
import PropTypes from 'prop-types'


export default function Student({studentName,age,education}) {

  return (
    <>

    <div style={{
      backgroundColor:'red',
      height:'20%',
      width:'30%',
      padding:'0px',
      margin:'None',
      alignContent:'center'
      // alignContent:"center",
      // display : "contents",
      // justifyContent : "space-around"
    }}><p>Name: <b>{studentName}</b></p>
    <p>Age: <b>{age}</b></p>
    <p>education: <b>{education}</b></p>
    </div>
    
    </>
  )
}

Student.defaultProps = {

  education : "B.Tech"
}

Student.PropType = {
  studentName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  education: PropTypes.string.isRequired,

}
