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

    takeOperatorAndSetValue(operator){  
        const  result = this.doSpecificMathFn(operator, this.state.arr);    

        this.setState({
            value:result,
            arr: [result],
            plusState:false,
        })
    }

    doSpecificMathFn(operator, arr){       
       const firstItem = this.validateItemIfEmptyAndParseIntoFloat(arr[0]);
       const secondItem = this.validateItemIfEmptyAndParseIntoFloat(arr[1]); 
       const result = this.chooseOperatorAndDoOperation(operator,firstItem,secondItem);
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
                if(secondItem !== 0){
                    result = firstItem / secondItem;;
                }
                result = `Number can't be devided by zero`
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
            this.takeOperatorAndSetValue(this.getActiveOperator());
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

    handleEqualFn = () =>{
       this.takeOperatorAndSetValue(this.state.operator)
    }

    intensifiesItem = () =>{
        const arrayOfItems = this.getCurrentLengthAndItemFromArr();
        const itemToSquare = arrayOfItems.currentItem * arrayOfItems.currentItem;
        this.setState(prevState => {
            const array = prevState.arr;
            array[arrayOfItems.currentIndex] = itemToSquare
           return{
            arr: array,
            value: itemToSquare,
           }
           
        })
    }


    squareRootFn = () =>{
        
    }

    render(){
        return(
            <>
             <h1>Hello</h1>
            <CalcWrapper 
            doSymbolTask={this.handleMathOperations} 
            valueOfInput={this.state.value} 
            cleanState={this.cleanStateFn}
            cleanItem={this.cleanCurrentItemFn}
            intensifies={this.intensifiesItem}
            trim={this.backspaceFn}
            henge={this.handleValueUpdate} 
            equal={this.handleEqualFn}
            addValueToArrayOfNumbers={this.addValueToArrayOfNumbers}></CalcWrapper>
            </>
        )
    }
}

export default App;
