import React from 'react';
import styles from './Button.module.scss';

const Button = ({props, value,children}) => (
    <button 
      className={styles.button}
      value={value}>
    {children}
    </button>
)

export default Button;
