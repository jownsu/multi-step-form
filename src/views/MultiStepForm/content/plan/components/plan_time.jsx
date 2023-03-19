import Form from "react-bootstrap/Form";
import styles from "./plan_time.module.scss";
import { useFormContext } from "react-hook-form";

function PlanTime() {
    const { register, watch, setValue } = useFormContext();

    const onSwitchClick = (event) => {
        setValue("is_yearly", !event.target.checked);
    }

    return (
        <div className={styles.plant_time}>
            <p className={`${ !watch("is_yearly") ? styles.active : "" }`}>Monthly</p>
            <Form.Check 
                type="switch"
                id="time_switch"
                className={styles.switch}
                onChange={onSwitchClick}
                {...register("is_yearly")}
            />
            <p className={`${ watch("is_yearly") ? styles.active : "" }`}>Yearly</p>
        </div>
    )
}

export default PlanTime;