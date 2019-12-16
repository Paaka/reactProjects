import React from 'react';
import './App.css';
import Styles from './App.module.scss'
import Form from './Components/FormWrapper/FormWrapper'

class App extends React.Component {
  render(){
    return(
    <div className={Styles.App}>
      <h2 className={Styles.App__heading}>WeatherIO</h2>
      <Form></Form>
    </div>
    )
  };
}

export default App;
