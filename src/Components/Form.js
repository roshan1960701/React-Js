import React, { useState } from 'react'

export default function FormPrac() {

    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        
        // console.log(event.preventDefault())
        alert(`The name you entered was: ${name}`)

    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Enter Your name</label>
            <input type = 'text' value={name}
            onChange={(e) => setName(e.target.value)}
            ></input>
            <input type = 'submit'></input>

        </form>
    </div>
  )
}
