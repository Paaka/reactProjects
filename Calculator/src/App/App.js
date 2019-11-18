import React from 'react';
import './App.scss';
import CalcWrapper from '../components/CalculatorWrapper/CalculatorWrapper'

class App extends React.Component{
    state = {  
        arr:[1] ,
        value :  1,
    }   
    addValueFn = (e) =>{
        const lengthOfArr = this.state.arr.length;
        this.setState({
            arr : [this.state.arr[lengthOfArr-1] + e.target.value],
        })
    }

    idk = (e) =>{
        console.log(this.state.value)
        this.setState({
            value:e.target.value,
        })
    }

    addOne = () =>(
        this.setState({
            value: parseInt(this.state.value) +1,
        })
    )

    render(){
        return(
            <>
             <h1>Hello</h1>
            <CalcWrapper add={this.addOne} valueOfInput={this.state.arr[0].value} henge={this.idk} addValueFn={this.addValueFn}></CalcWrapper>
            </>
        )
    }
}

export default App;
