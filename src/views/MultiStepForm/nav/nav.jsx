import { useContext } from "react";
import { MultiFormContext } from "../../../context/multi_form_context";
import styles from "./nav.module.scss";

function Nav() {

    const { step, setStep } = useContext(MultiFormContext); 

    return (
        <div className={styles.container}>
            <button 
                type="button"
                className={`${styles.step} ${step === 1 ? styles.active : ""}`}
                onClick={() => setStep(1)}
            >
                <span className={styles.step_num}>1</span>
                <div className={styles.step_desc_container}>
                    <p className={styles.step_num_name}>Step 1</p>
                    <p className={styles.step_name}>Your Info</p>
                </div>
            </button>
            <button 
                type="button"
                className={`${styles.step} ${step === 2 ? styles.active : ""}`}
                onClick={() => setStep(2)}
            >
                <span className={styles.step_num}>2</span>
                <div className={styles.step_desc_container}>
                    <p className={styles.step_num_name}>Step 2</p>
                    <p className={styles.step_name}>Select Plan</p>
                </div>
            </button>
            <button 
                type="button"
                className={`${styles.step} ${step === 3 ? styles.active : ""}`}
                onClick={(e) => setStep(3)}
            >
                <span className={styles.step_num}>3</span>
                <div className={styles.step_desc_container}>
                    <p className={styles.step_num_name}>Step 3</p>
                    <p className={styles.step_name}>Add-ons</p>
                </div>
            </button>
            <button 
                type="button"
                className={`${styles.step} ${step === 4 ? styles.active : ""}`}
                onClick={() => setStep(4)}
            >
                <span className={styles.step_num}>4</span>
                <div className={styles.step_desc_container}>
                    <p className={styles.step_num_name}>Step 4</p>
                    <p className={styles.step_name}>Summary</p>
                </div>
            </button>
        </div>
    )
}

export default Nav