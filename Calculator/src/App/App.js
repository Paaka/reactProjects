import React from 'react';
import './App.scss';
import CalcWrapper from '../components/CalculatorWrapper/CalculatorWrapper'

class App extends React.Component{
    state = {  
        arr:[""] ,
        value :  "",
        operator : "plus",
        plusState: false,
        minusState:false,
    }   

    addValueToArrayOfNumbers = (e) =>{
        const lengthOfArr = this.state.arr.length-1;
        this.state.arr[lengthOfArr] += e.target.value;
        this.handleValueUpdate(e);
        this.forceUpdate();    
        
    }

    handleValueUpdate = (e) =>{
        const magic = e.target.value;
        this.setState((prevState) => ({
            value:prevState.value + magic
        }))
    }

    setValueToEmptyString = () =>{
        this.setState((prevState) => ({
            value:"",
        }))
    }

    doMathFn(operator){
        
        const  result = this.doSpecificMathFn(operator, this.state.arr);  
        console.log(result);     
        
        this.setState({
            value:result,
            arr: [result],
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

    handleMathOperations = (e) =>{
        const currentOperator = this.getOperatorState(e.target.id);
   
        if(currentOperator.valueOfThisState){
            this.doMathFn(this.state.operator);
            this.setState({
                [currentOperator.stateId]:false,
            })
        }else{
            const info = this.checkIfNotSecondOperatorActive();
            this.setState((prevState,porps) =>({
                arr :[...prevState.arr, ""],
                [currentOperator.stateId]: true,
                operator: currentOperator.symbol,
                value: prevState.arr[0],
            }))
            if(info){
                this.setValueToEmptyString();
            }else{
                //To do add event lisnter to clean the string :
                setTimeout(this.setValueToEmptyString, 10000)
            }

        
        }
        
    }

    checkIfNotSecondOperatorActive = () => {
        const shortName = this.state;
        if(!shortName.plusState && !shortName.minusState){
            return true;
        }else{
            this.doMathFn(this.getActiveOperator());
            this.setAllSymbolStatesToFalse();
            return false;
        }
    }
    
    getActiveOperator(){
        if(this.state.minusState)
        {
            return "minus"
        }
        else if(this.state.plusState)
        {
            return "plus"
        }
    }

    setAllSymbolStatesToFalse = () =>{
        this.setState(prevState => ({
            plusState:false,
            minusState:false,
        }))
    }

    getOperatorState =(id) =>({
            symbol:id,
            stateId:`${id}State`,
            // eslint-disable-next-line no-eval
            valueOfThisState: eval(`this.state.${id}State`)
    })


    handleEqualFn = () =>{
       this.doMathFn(this.state.operator)
    }

    render(){
        return(
            <>
             <h1>Hello</h1>
            <CalcWrapper 
            doSymbolTask={this.handleMathOperations} 
            valueOfInput={this.state.value} 
            henge={this.handleValueUpdate} 
            equal={this.handleEqualFn}
            addValueToArrayOfNumbers={this.addValueToArrayOfNumbers}></CalcWrapper>
            </>
        )
    }
}

export default App;
