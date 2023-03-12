import { useContext } from "react";
import { MultiFormContext } from "../../../../context/multi_form_context";
import { PrimaryButton } from "../../../global/button/button";
import styles from "./personal_info.module.scss";

function PersonalInfo() {
    const { nextStep } = useContext(MultiFormContext);

    return (
        <div className={styles.personal_info}>
            <h3>Personal Info</h3>
            <p>Please provide your name, email address, and phone number.</p>
            <div className={styles.personal_info_group}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="e.g. Stephen King" />
            </div>
            <div className={styles.personal_info_group}>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" />
            </div>
            <div className={styles.personal_info_group}>
                <label htmlFor="phone_number">Phone Number
                <p className={styles.personal_info_error}>This field is required</p>
                </label>
                <input 
                    className={styles.personal_info_input_error} 
                    type="number" 
                    name="phone_number" 
                    id="phone_number" 
                    placeholder="e.g +1 234 567 890"
                />
            </div>

            <div className={styles.personal_info_footer}>
                <PrimaryButton 
                    onClick={nextStep}
                    text="Next Step" 
                    className={styles.personal_info_next}
                />
            </div>
        </div>
    )
}

export default PersonalInfo;