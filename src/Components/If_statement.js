import React from 'react'

export default function Garage(props) {

    function Worked(){
        return <h3>Its working</h3>;
    }

    function Notworked(){
        return <h3>Its Not working</h3>;
    }

    const isGoal = props.isGoal;
    
    return(
        <>{isGoal ? <Worked/>: <Notworked/>}
        </>
    )

  
}
