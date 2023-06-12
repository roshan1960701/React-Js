import logo from './logo.svg';
import './App.css';
import Car from './Components/Car'
import CarData from './Components/Car_data';
import Avatar from './Components/Image'; 
import Student from './Components/student';
import BtnComponent from './Components/BtnComponent';
import Garage from './Components/If_statement';
import Garage2 from './Components/If_statement2';
import ListData from './Components/List';
import FormData from './Components/Form'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  function ButtonCLick(){
    return alert('Its clickedd!!!');
    
  }

  const carList = ['Jaguar','AM','Ferrari','Lambo'];

  return (
    <div className="App">
      
      {/* div 1 code bloack */}
      <div className='div1'><Car name = "Ferrari" color = "Red"/></div>
      
      {/* div 2 code block */}
      <div className='div2'>

      <CarData name = 'Ford' type = 'SUV' year = '2019'/>
      <CarData name = 'Lambo' type = 'Sports' year = '2005'/>
      </div>
      
      <div className='div3'
      ><Avatar name = 'Avatar1' avatarUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/1200px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg'/></div>
      
      <div className='div4'
      ><Student studentName= "Roshan" age={25}/></div>

      {/* <button 
      style={{
        backgroundColor: '#3FFADE',
        color: "Blue",
        border:0,
        fontSize:20,
        width:100,
        height:40,
    }} 
      onClick = {() => console.log('its me')}>Click me </button> */}
      
{/* remove this commented code */}

<div className='div5'><button onClick={ ButtonCLick}>Submit</button> 
     <br/><br/><br/>
    <BtnComponent name = 'Ronny Boy'/>
    <Garage isGoal ={false}/>
    
    <Garage2 car = {carList} bikes = {[]}/>
    <ListData/></div>
    <FormData/>

  
    </div>


  );
}


export default App;
