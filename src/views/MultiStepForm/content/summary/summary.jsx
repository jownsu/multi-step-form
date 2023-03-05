import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../../../global/button/button";
import SummaryTable from "./components/summary_table";
import Thankyou from "./components/thankyou";
import styles from "./summary.module.scss";

function Summary() {

    const [isDone, setIsDone] = useState(true);

    return (
        <div className={styles.summary}>

            {
                isDone
                    ? <Thankyou onTyClick={() => setIsDone(prevState => !prevState)} />
                    : (
                        <>
                            <h3>Finishing up</h3>
                            <p>Double-check everything looks OK before confirming..</p>

                            <SummaryTable />

                            <div className={styles.summary_footer}>
                                <SecondaryButton text="Go Back" />
                                <PrimaryButton 
                                    text="Confirm" 
                                    className={styles.summary_confirm}
                                    onClick={() => setIsDone(prevState => !prevState)}
                                />
                            </div>
                        </>
                    )
            }

 
        </div>
    )
}

export default Summary;