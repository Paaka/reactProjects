import React from 'react';
import styles from './Button.module.scss';

const Button = ({id, value,children, onClickFn}) => (
    <button 
      id={id}
      className={styles.button}
      value={value}
      onClick={onClickFn}>
    {children}
    </button>
)

export default Button;
