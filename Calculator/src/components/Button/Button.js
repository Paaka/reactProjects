import React from 'react';
import styles from './Button.module.scss';

const Button = ({ value,children, x}) => (
    <button 
      className={styles.button}
      value={value}
      onClick={x}>
    {children}
    </button>
)

export default Button;
