import React from 'react';
import './App.scss';
import CalcWrapper from '../components/CalculatorWrapper/CalculatorWrapper'

class App extends React.Component{
    state = {  
        arr:[""] ,
        value :  1,
    }   
    addValueFn = (e) =>{
        const lengthOfArr = this.state.arr.length-1;
        const input = e.target.value;
        // console.log(lengthOfArr);
        // this.setState({
        //    arr : [...this.state.arr, this.state.arr[lengthOfArr-1] +input],
        // })
        this.state.arr[lengthOfArr] += e.target.value;
        this.forceUpdate();

        // this.setState(prevState =>({
        //     arr :[...prevState.arr, prevState.arr[lengthOfArr] = 23],
        //     arr : update()
        //     value: prevState.value+input
        // }))

        
    }

    idk = (e) =>{
        console.log(this.state.value)
        this.setState({
            value:e.target.value,
        })
    }

    addOne = () =>(
        this.setState(prevState =>({
            arr :[...prevState.arr, this.state.arr.push("")],
        }))
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
