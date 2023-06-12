import React from "react";

// class components

class Car extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                    <div>
                    <h4 
                    // style= {{color:"red",
                    //  textAlign:"left",float:"inline-start"}}
                    > Name of the car: <span style={{color:"yellow"}}>{this.props.name}</span></h4> 
                    </div>
                    <h4>Color of car: <span style={{color:"brown"}}>{this.props.color}</span></h4>

            </div>
        );
    }
}

export default Car;