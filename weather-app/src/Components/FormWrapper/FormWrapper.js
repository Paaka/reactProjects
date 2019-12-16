import React from 'react';
import ReactDOM from 'react-dom';
import styles from './FormWrapper.module.scss';
import Card from './Card/Card';

class FormWrapper extends React.Component{
    state = {
        inputValue:"",
        opwApiKey :  '50d53005c0fd5f556bb4ef15224c4209'
    }


    updateInputValue(e){
        this.setState({
            inputValue:e.target.value,
        })
    }
    checkWeatherInLocation(e){
        e.preventDefault();
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&APPID=${this.state.opwApiKey}`;
        const weather = fetch(openWeatherUrl);
        weather
        .then((respObject)=>{return respObject.json()})
        .then(pogoda=>{
            ReactDOM.render(<Card weatherObj={pogoda} />, document.getElementById('Card'));
        })
        
    }

    render(){
        return(
            <div className={styles.FormWrapper}>
            <form>
                <h2 className={styles.FormWrapper__header}>Check weather in your location</h2>
                <label className={styles.FormWrapper__label} htmlFor="location">Location</label>
                <input 
                    id="location" 
                    className={styles.FormWrapper__input}
                    required
                    type="text"
                    onChange={(e)=>this.updateInputValue(e)} ></input>
                <button 
                    className={styles.FormWrapper__btn}
                    type="submit"
                    onClick={e=>this.checkWeatherInLocation(e)}> Check</button>
            </form>
            
        </div>
        )
    }
}
   


export default FormWrapper;