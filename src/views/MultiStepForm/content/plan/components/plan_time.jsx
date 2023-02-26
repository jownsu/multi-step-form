import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import styles from "./plan_time.module.scss";

function PlanTime() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className={styles.plant_time}>
            <p className={`${ !isYearly ? styles.active : "" }`}>Monthly</p>
            <Form.Check 
                type="switch"
                id="custom-switch"
                className={styles.switch}
                checked={isYearly}
                onClick={() => setIsYearly(prevState => !prevState)}
            />
            <p className={`${ isYearly ? styles.active : "" }`}>Yearly</p>
        </div>
    )
}

export default PlanTime;