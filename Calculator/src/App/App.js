import React from 'react';
import './App.scss';
import CalcWrapper from '../components/CalculatorWrapper/CalculatorWrapper'

class App extends React.Component{
    state = {
        value:''
    }

    addValueFn = (e) =>{
        this.setState({
            value : this.state.value + e.target.value,
        })
    }

    idk = (e) =>{
        console.log(this.state.value)
        this.setState({
            value:e.target.value,
        })
    }

    render(){
        return(
            <>
             <h1>Hello</h1>
            <CalcWrapper valueOfInput={this.state.value} henge={this.idk} addValueFn={this.addValueFn}></CalcWrapper>
            </>
        )
    }
}

export default App;
