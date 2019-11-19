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
         x={props.addValueFn}
         value="1">
             1
         </Btn>
         <Btn
          x={props.addValueFn}
          value="2">
             2
         </Btn>
         <Btn 
         x={props.addValueFn}
        value="3">
             3
         </Btn>
         <Btn>
          &#9587;
         </Btn>
         <Btn
          x={props.addValueFn}
          value="4">
            4
         </Btn>
         <Btn
         x={props.addValueFn}
         value="5">
            5
         </Btn>
         <Btn
         x={props.addValueFn}
          value="6">
           6
         </Btn>
         <Btn>
           &#9472;
         </Btn>
         <Btn
         x={props.addValueFn}
         value="7">
           7
         </Btn>
         <Btn
         x={props.addValueFn}
         value="8">
           8
         </Btn>
         <Btn
         x={props.addValueFn}
          value="9">
           9
         </Btn>
         <Btn x={props.add}>
           &#9535;
         </Btn>
         <Btn>
           <sup>+</sup>/<sub>-</sub>
         </Btn>
         <Btn x={props.addValueFn}
          value="0">
           0
         </Btn>
         <Btn x={props.addValueFn}
          value=".">
           ,
         </Btn>
         <Btn x={props.equal}>
           =
         </Btn>
    </div>
)

export default CalculatorWrapper;