import React from 'react';
import styles from './CalculatorWrapper.module.scss';
import Btn from '../Button/Button';

const CalculatorWrapper = ()=>(
    <div className={styles.wrapper}>
        <input className={styles.input} ></input>
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
             CE
         </Btn>
         <Btn>
             CE
         </Btn>
         <Btn>
             &#8678;
         </Btn>
         <Btn>
             1
         </Btn>
         <Btn>
             2
         </Btn>
         <Btn>
             3
         </Btn>
         <Btn>
          &#9587;
         </Btn>
         <Btn>
            4
         </Btn>
         <Btn>
            5
         </Btn>
         <Btn>
           6
         </Btn>
         <Btn>
           &#9472;
         </Btn>
         <Btn>
           7
         </Btn>
         <Btn>
           8
         </Btn>
         <Btn>
           9
         </Btn>
         <Btn>
           &#9535;
         </Btn>
         <Btn>
           <sup>+</sup>/<sub>-</sub>
         </Btn>
         <Btn>
           0
         </Btn>
         <Btn>
           ,
         </Btn>
         <Btn>
           =
         </Btn>
    </div>
)

export default CalculatorWrapper;