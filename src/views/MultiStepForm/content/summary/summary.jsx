import { useState, useContext } from "react";
import { MultiFormContext } from "../../../../context/multi_form_context";
import { PrimaryButton, SecondaryButton } from "../../../global/button/button";
import SummaryTable from "./components/summary_table";
import Thankyou from "./components/thankyou";
import styles from "./summary.module.scss";

function Summary() {

    const { prevStep, is_done, setIsDone } = useContext(MultiFormContext);

    return (
        <div className={styles.summary}>
            {
                is_done
                    ? <Thankyou onTyClick={() => setIsDone(prevState => !prevState)} />
                    : (
                        <>
                            <h3>Finishing up</h3>
                            <p>Double-check everything looks OK before confirming.</p>

                            <SummaryTable />

                            <div className={styles.summary_footer}>
                                <SecondaryButton 
                                    onClick={prevStep}
                                    text="Go Back" 
                                />
                                <PrimaryButton 
                                    text="Confirm"
                                    type="submit" 
                                    className={styles.summary_confirm}
                                />
                            </div>
                        </>
                    )
            }
        </div>
    )
}

export default Summary;