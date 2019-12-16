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
        divideState:false,
        timesState:false,
    }   

    cleanStateFn = () => {
        this.setState({
            arr:[""],
            value:"",
            operator : "plus",
            plusState: false,
            minusState:false,
            divideState:false,
            timesState:false,
        })
    }

    cleanCurrentItemFn = () => {
        const cleanValue = "";
        const returnObj = this.getCurrentLengthAndItemFromArr();
        const copyOfArr = this.createCopyAndReturnPreparedObjectToInsert(cleanValue,returnObj.currentIndex)
        this.setState(prevState => ({
            arr:copyOfArr,
            value:"",
        }))
    }

    backspaceFn = () =>{
        const returnObj = this.getCurrentLengthAndItemFromArr();
        const str = this.popLastLetterOfCurrentIndex(returnObj.currentIndex)
        const copyOfArr = this.createCopyAndReturnPreparedObjectToInsert(str, returnObj.currentIndex)
        this.setState(prevState => ({
            arr:copyOfArr,
            value:str,
        }))
    }

    popLastLetterOfCurrentIndex = (index) =>{
        let str = this.state.arr[index];
        str = str.toString().substring(0, str.length - 1);
        return str;
    }

    createCopyAndReturnPreparedObjectToInsert = (value, index) =>{
        let copyOfArr = JSON.parse(JSON.stringify(this.state.arr));
        copyOfArr[index]=value;
        return copyOfArr;
    }

    getCurrentLengthAndItemFromArr = () =>{
       const lengthOfArr = this.state.arr.length-1;
       return {
           currentIndex: lengthOfArr,
           currentItem : this.state.arr[lengthOfArr],
       }
    }

    addValueToArrayOfNumbers = (e) =>{
        const lengthOfArr = this.state.arr.length-1;
        this.state.arr[lengthOfArr] += e.target.value;
        this.handleValueUpdate(e);
        this.forceUpdate();    
        
    }

    handleValueUpdate = (e) =>{
        const value = e.target.value;
        const currentIndex= this.getCurrentLengthAndItemFromArr().currentIndex;
        const copyOfArr = this.createCopyAndReturnPreparedObjectToInsert(value, currentIndex)
        // const copyOfArr = this.state.arr;
        // copyOfArr[result.currentIndex] = value;
        this.setState((prevState) => ({
            value:value,
            arr:copyOfArr,
        }))
    }

    setValueToEmptyString = () =>{
        this.setState((prevState) => ({
            value:"",
        }))
    }

    takeOperatorAndSetValue(operator = this.state.operator){ 
        const  result = this.doSpecificMathFn(operator, this.state.arr);    
        this.setState({
            value:result,
            arr: [result],
            plusState:false,
            minusState:false,
            divideState:false,
            timesState:false,
        })
    }

    doSpecificMathFn(operator, arr){       
       const firstItem = this.validateItemIfEmptyAndParseIntoFloat(arr[0]);
       const secondItem = this.validateItemIfEmptyAndParseIntoFloat(arr[1]); 
       let result = this.chooseOperatorAndDoOperation(operator,firstItem,secondItem);
       if(isNaN(result)){
           result = firstItem;
       }
       return result;
    }

    validateItemIfEmptyAndParseIntoFloat(item){
        let temporaryItem;
        if(item === ""){
            temporaryItem = 0;
        }else{
        temporaryItem = parseFloat(item);
        }
        return temporaryItem;
    }

    chooseOperatorAndDoOperation = (symbol,firstItem,secondItem) => {
        let result = 0;
        switch(symbol){
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
            case "divide":{
                console.log(secondItem)
                if(secondItem === 0){
                    result = `Number can't be devided by zero`
                }
                   result = firstItem / secondItem;
                break;
            }     
            case "exponentiation":{
                result = firstItem * firstItem;
                break;
            }
            case "squareRoot":{
                if(firstItem !== 0){
                    result = Math.sqrt(firstItem);
                }
                break;
            }
            case "negation":{
                result = parseFloat(firstItem) * -1;
                break;
            }
            case "revelsal":{
                result = 1/firstItem;
                break;
            }
            case "percentage":{
                console.log(secondItem, firstItem)
                result = (parseFloat(secondItem)/100) *parseFloat(firstItem);
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
            this.takeOperatorAndSetValue(this.state.operator);
            this.setState({
                [currentOperator.stateId]:false,
            })
        }else{
            const info = this.checkIfNotSecondOperatorActive(e.target.id);
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

    checkIfNotSecondOperatorActive = (id) => {
        const state = this.state;
        if(!state.plusState && !state.minusState && !state.timesState  && !state.divideState){
            return true;
        }else{
            this.takeOperatorAndSetValue(id);
            this.setAllSymbolStatesToFalse();
            return false;
        }
    }
    

    setAllSymbolStatesToFalse = () =>{
        this.setState(prevState => ({
            plusState:false,
            minusState:false,
            divideState:false,
            timesState:false,
        }))
    }

    getOperatorState =(id) =>({
            symbol:id,
            stateId:`${id}State`,
            // eslint-disable-next-line no-eval
            valueOfThisState: eval(`this.state.${id}State`)
    })


    firstRowActionsAndReversalFn= (e) =>{
        const arrayOfItems = this.getCurrentLengthAndItemFromArr();
        const operatorType = e.target.id;
        const value = this.determinateIfEventIsPercentage(arrayOfItems, operatorType);
        this.setState(prevState => {
            const updatedArray = this.createCopyAndReturnPreparedObjectToInsert(value, arrayOfItems.currentIndex)
           return{
            arr: updatedArray,
            value: value,
           }   
        })
    }

    determinateIfEventIsPercentage = (array, operator) =>{
        const checkIfThisIsPercentage = 1;
        if(array.currentIndex === checkIfThisIsPercentage){
             return this.chooseOperatorAndDoOperation(operator, this.state.arr[array.currentIndex-1], array.currentItem);
        }else{
             return this.chooseOperatorAndDoOperation(operator, array.currentItem);
        }
    }

    render(){
        return(
            <>
            <CalcWrapper 
            doSymbolTask={this.handleMathOperations} 
            valueOfInput={this.state.value} 
            cleanState={this.cleanStateFn}
            cleanItem={this.cleanCurrentItemFn}
            unusualTasks={this.firstRowActionsAndReversalFn}
            trim={this.backspaceFn}
            changeValue={this.handleValueUpdate} 
            equal={() =>this.takeOperatorAndSetValue()}
            addValueToArrayOfNumbers={this.addValueToArrayOfNumbers}></CalcWrapper>
            </>
        )
    }
}

export default App;
