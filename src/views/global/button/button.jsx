import React from 'react'
import styles from "./button.module.scss";

export const PrimaryButton = ({text = "", onClick = () => {}, className}) => {
    return (
        <button 
            type="button" 
            className={`${styles.btn_primary} ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export const SecondaryButton = ({text = "", onClick = () => {}, className}) => {
    return (
        <button 
            type="button" 
            className={`${styles.btn_secondary} ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}