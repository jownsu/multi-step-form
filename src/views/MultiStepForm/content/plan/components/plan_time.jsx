import Form from 'react-bootstrap/Form';
import styles from "./plan_time.module.scss";

function PlanTime({isYearly = false, onSwitchClick = () => {}}) {

    return (
        <div className={styles.plant_time}>
            <p className={`${ !isYearly ? styles.active : "" }`}>Monthly</p>
            <Form.Check 
                type="switch"
                id="time_switch"
                className={styles.switch}
                checked={isYearly}
                onChange={onSwitchClick}
            />
            <p className={`${ isYearly ? styles.active : "" }`}>Yearly</p>
        </div>
    )
}

export default PlanTime;