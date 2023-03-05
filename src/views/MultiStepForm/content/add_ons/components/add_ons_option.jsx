import { useState } from "react";
import Form from "react-bootstrap/Form";
import styles from "./add_ons_option.module.scss";

function AddOnsOption({add_ons}){

    const [isChecked, setIsChecked] = useState(false);
    const {title, info, price} = add_ons;

    return (
        <div 
            className={`${styles.add_ons_option} ${isChecked ? styles.active : ""}`}
            onClick={() => setIsChecked(prevState => !prevState)}    
        >
            <Form.Check
                inline
                type={"checkbox"}
                id={"inline-checkbox-1"}
                onChange={() => {}}
                checked={isChecked}
            />
            <div className={styles.add_ons_option_info}>
                <h4>{title}</h4>
                <p>{info}</p>
            </div>
            <p>{price}</p>
        </div>
    )
}

export default AddOnsOption;