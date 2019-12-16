import React from 'react';
import styles from './FormWrapper.module.scss';

class FormWrapper extends React.Component{
    state = {
        inputValue:"",
    }
    updateInputValue(e){
        this.setState({
            inputValue:e.target.value,
        })
    }
    checkWeatherInLocation(e){
        e.preventDefault();
        console.log(this.state.inputValue)
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