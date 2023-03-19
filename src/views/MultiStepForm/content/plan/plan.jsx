import React, { useContext } from "react";
import { MultiFormContext } from "../../../../context/multi_form_context";
import { useFormContext } from "react-hook-form";
import { PrimaryButton, SecondaryButton } from "../../../global/button/button";
import PlanCard from "./components/plan_card";
import PlanTime from "./components/plan_time";
import { PLANS } from "../../../../assets/constans";
import styles from "./plan.module.scss";

function Plan() {
    const { register } = useFormContext();
    const { nextStep, prevStep } = useContext(MultiFormContext);

    return (
        <div className={styles.plan}>
            <h3>Select your plan</h3>
            <p>You have the option of montyhle or yearly billing.</p>
            <div className={styles.plans_container}>
                    <input type="hidden" {...register("plan")} />
                    {
                        PLANS.map(plan => (
                                <PlanCard
                                    key={plan.id}
                                    plan={plan}
                                />
                        ))
                    }
            </div>

            <PlanTime />

            <div className={styles.plan_footer}>
                <SecondaryButton 
                    onClick={prevStep}
                    text="Go Back" 
                />
                <PrimaryButton 
                    onClick={nextStep}
                    text="Next Step" 
                />
            </div>
        </div>
    )
}

export default Plan;