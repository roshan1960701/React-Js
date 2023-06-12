import React from 'react'

export default function BtnComponent(props) {

    const btnClick = (name)=> {
        console.log('Clicked me!!')
        console.log(name);
        return alert('btn clicked!!! '+name)    
    }


// function btnClick(name){
//     console.log(name);
//     return alert('btn clicked!!! '+name)
// }

  return (
    <>
    <button className = "Btn-clicked" onClick={ ()=> btnClick(props.name)}>
        <h2>CLick here</h2>
    </button>
    </>
  )
}
