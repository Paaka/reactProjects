import React from 'react';
import './App.css';
import Styles from './App.module.scss'
import Form from './Components/FormWrapper/FormWrapper'
import {location} from './'

class App extends React.Component {
  showGeoLocation(){
    navigator.geolocation.getCurrentPosition((position)=> this.showPosition(position));
   
  }
 
  showPosition(position) {
    console.log(position)
  }
  render(){
    return(
    <div className={Styles.App}>
      <h2 onClick={()=>this.showGeoLocation()} className={Styles.App__heading}>WeatherIO</h2>
      <Form></Form>
      <div id="Card"></div>
    </div>
    )
  };
}

export default App;
