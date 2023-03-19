import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { MultiFormContext } from "../../../../context/multi_form_context";
import { PrimaryButton } from "../../../global/button/button";
import styles from "./personal_info.module.scss";

function PersonalInfo() {

    const { register, formState: { errors } } = useFormContext(); 
    const { nextStep } = useContext(MultiFormContext);

    return (
        <div className={styles.personal_info}>
            <h3>Personal Info</h3>
            <p>Please provide your name, email address, and phone number.</p>
            <div className={styles.personal_info_group}>
                <label htmlFor="name">
                    Name
                    { errors.name && <p className={styles.personal_info_error}>{errors.name?.message}</p> }    
                </label>
                
                <input 
                    {...register("name")}
                    className={errors.name && styles.personal_info_input_error} 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="e.g. Stephen King" 
                />
            </div>
            <div className={styles.personal_info_group}>
                <label htmlFor="email">
                    Email Address
                    { errors.email && <p className={styles.personal_info_error}>{errors.email?.message}</p> }
                </label>
                
                <input 
                    {...register("email")}
                    className={errors.email && styles.personal_info_input_error} 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="e.g. stephenking@lorem.com" 
                />
            </div>
            <div className={styles.personal_info_group}>
                <label htmlFor="phone_number">
                    Phone Number
                    { errors.phone_number && <p className={styles.personal_info_error}>{errors.phone_number?.message}</p> }
                </label>
                <input 
                    {...register("phone_number")}
                    className={errors.phone_number && styles.personal_info_input_error} 
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