import React from 'react';
import './App.scss';
import CalcWrapper from '../components/CalculatorWrapper/CalculatorWrapper'

class App extends React.Component{
    state = {  
        arr:[""] ,
        value :  0,
        plusState: false,
    }   
    addValueFn = (e) =>{
        const lengthOfArr = this.state.arr.length-1;
        const input = e.target.value;
        this.state.arr[lengthOfArr] += e.target.value;
        this.forceUpdate();    
    }

    handleValueChange = (e) =>{
        this.setState({
            value:e.target.value,
        })
    }

    handleAddingFn = () =>{
        if(this.state.plusState){
            let result = 0;
            this.state.arr.forEach(v=>{
                if(v ===""){
                    v=0;
                }
                result += parseFloat(v);
            })
            this.setState({
                value:result,
                arr: [""]
            })
            
        }else{
            this.setState(prevState =>({
                arr :[...prevState.arr, ""],
                plusState: !this.state.plusState,
            }))
        }
        
    }

    handleEqualFn = () =>{

    }

    render(){
        return(
            <>
             <h1>Hello</h1>
            <CalcWrapper 
            add={this.handleAddingFn} 
            valueOfInput={this.state.value} 
            henge={this.handleValueChange} 
            equal={this.handleEqualFn}
            addValueFn={this.addValueFn}></CalcWrapper>
            </>
        )
    }
}

export default App;
