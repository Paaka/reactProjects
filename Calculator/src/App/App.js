import React from 'react';
import './App.scss';
import CalcWrapper from '../components/CalculatorWrapper/CalculatorWrapper'

class App extends React.Component{
    render(){
        return(
            <>
             <h1>Hello</h1>
            <CalcWrapper></CalcWrapper>
            </>
        )
    }
}

export default App;
