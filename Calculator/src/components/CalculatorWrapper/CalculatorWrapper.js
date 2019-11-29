import React from 'react';
import styles from './CalculatorWrapper.module.scss';
import Btn from '../Button/Button';

const CalculatorWrapper = (props)=>(
    <div className={styles.wrapper}>
        <input className={styles.input} value={props.valueOfInput} onChange={props.henge}></input>
         <Btn>
              %
         </Btn>
         <Btn>
             &radic;
         </Btn>
         <Btn>
             x<sup>2</sup>
         </Btn>
         <Btn>
             <sup>1</sup>/<sub>x</sub>
         </Btn>
         <Btn>
             CE
         </Btn>
         <Btn>
             C
         </Btn>
         <Btn>
           &#8678;
         </Btn>
         <Btn>
          &#8725;
         </Btn>
         <Btn 
         onClickFn={props.addValueToArrayOfNumbers}
         value="1">
             1
         </Btn>
         <Btn
          onClickFn={props.addValueToArrayOfNumbers}
          value="2">
             2
         </Btn>
         <Btn 
         onClickFn={props.addValueToArrayOfNumbers}
        value="3">
             3
         </Btn>
         <Btn>
          &#9587;
         </Btn>
         <Btn
          onClickFn={props.addValueToArrayOfNumbers}
          value="4">
            4
         </Btn>
         <Btn
         onClickFn={props.addValueToArrayOfNumbers}
         value="5">
            5
         </Btn>
         <Btn
         onClickFn={props.addValueToArrayOfNumbers}
          value="6">
           6
         </Btn>
         <Btn
          id="minus"
          onClickFn={e=>props.add(e)}>
           &#9472;
         </Btn>
         <Btn
         onClickFn={props.addValueToArrayOfNumbers}
         value="7">
           7
         </Btn>
         <Btn
         onClickFn={props.addValueToArrayOfNumbers}
         value="8">
           8
         </Btn>
         <Btn
         onClickFn={props.addValueToArrayOfNumbers}
          value="9">
           9
         </Btn>
         <Btn
          id="plus"
          onClickFn={e=>props.add(e)}>
           &#9535;
         </Btn>
         <Btn>
           <sup>+</sup>/<sub>-</sub>
         </Btn>
         <Btn onClickFn={props.addValueToArrayOfNumbers}
          value="0">
           0
         </Btn>
         <Btn onClickFn={props.addValueToArrayOfNumbers}
          value=".">
           ,
         </Btn>
         <Btn onClickFn={props.equal}>
           =
         </Btn>
    </div>
)

export default CalculatorWrapper;