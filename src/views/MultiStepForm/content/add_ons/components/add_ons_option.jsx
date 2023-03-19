import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import Form from "react-bootstrap/Form";
import styles from "./add_ons_option.module.scss";

function AddOnsOption({add_ons}){

    const { register, watch } = useFormContext();
    const {id, title, info, monthly, yearly} = add_ons;
    const checkbox_element = useRef(null);
    const {ref, ...rest} = register("adds_on");

    let price_text = `+${watch("is_yearly") ? yearly : monthly}/${watch("is_yearly") ? "yr" : "mo"}`;

    return (
        <div 
            className={`${styles.add_ons_option} ${watch("adds_on").includes(id.toString()) ? styles.active : ""}`}
            onClick={() => checkbox_element.current.click()}    
        >
            <Form.Check
                inline
                type={"checkbox"}
                value={id}
                {...rest}
                ref={(event) => {
                    ref(event);
                    checkbox_element.current = event;
                }}
            />
            <div className={styles.add_ons_option_info}>
                <h4>{title}</h4>
                <p>{info}</p>
            </div>
            <p>{price_text}</p>
        </div>
    )
}

export default AddOnsOption;