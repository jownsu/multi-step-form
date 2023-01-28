import { PrimaryButton } from "../../../global/button/button";
import styles from "./personal_info.module.scss";

function PersonalInfo() {
    return (
        <div className={styles.personal_info}>
            <h3>Personal Info</h3>
            <p className={styles.personal_info_desc}>Please provide your name, email address, and phone number.</p>
            <div className={styles.personal_info_group}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div className={styles.personal_info_group}>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className={styles.personal_info_group}>
                <label htmlFor="phone_number">Phone Number
                <p className={styles.personal_info_error}>This field is required</p>
                </label>
                <input className={styles.personal_info_input_error} type="number" name="phone_number" id="phone_number" />
            </div>
            <PrimaryButton text="Next Step" className={styles.personal_info_next}/>
        </div>
    )
}

export default PersonalInfo;