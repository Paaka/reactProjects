import React from 'react';
import './App.scss';
import CalcWrapper from '../components/CalculatorWrapper/CalculatorWrapper'

class App extends React.Component{
    state = {  
        arr:[""] ,
        value :  0,
        operator : "plus",
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

    doMathFn(operator){
        
        const  result = this.doSpecificMathFn(operator, this.state.arr);       
        
        this.setState({
            value:result,
            arr: [""],
            plusState:false,
        })
    }

    doSpecificMathFn(operator, arr){
       let result = 0;
       let firstItem, secondItem;
       if(arr[0] === ""){
            firstItem = 0;
       }else{
        firstItem = parseFloat(arr[0]);
       }
       if(arr[1] === ""){
           secondItem = 0;
       }else{
         secondItem = parseFloat(arr[1]);
       }   
       
       switch(operator){
            case "plus":{
                result = firstItem + secondItem;;   
                break;   
            }
            case "minus":{
                result = firstItem - secondItem;;
                break;
            }
            case "times":{
                result = firstItem * secondItem;;
                break;
            }
                
                   default:{
                       console.log('Error');
                   }
                }

       return result;
    }

    handleAddingFn = () =>{
        if(this.state.plusState){
            this.doMathFn(this.state.operator);
            this.setState({
                plusState:false,
            })
        }else{
            this.setState(prevState =>({
                arr :[...prevState.arr, ""],
                plusState: true,
                operator: "plus"
            }))
        }
        
    }

    handleMinusFn = () => {

    }

    handleEqualFn = () =>{
       this.doMathFn(this.state.operator)
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
