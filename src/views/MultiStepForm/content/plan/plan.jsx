import { useState, useContext } from "react";
import { MultiFormContext } from "../../../../context/multi_form_context";
import { PrimaryButton, SecondaryButton } from "../../../global/button/button";
import PlanCard from "./components/plan_card";
import PlanTime from "./components/plan_time";
import ArcadeIcon from "../../../../assets/images/icon-arcade.svg";
import AdvanceIcon from "../../../../assets/images/icon-advanced.svg";
import ProIcon from "../../../../assets/images/icon-pro.svg";
import styles from "./plan.module.scss";

const PLANS = [
    {
        id: 1,
        name: "Arcade",
        time: "$9/mo",
        yearly: "2 months free",
        icon: ArcadeIcon
    },
    {
        id: 2,
        name: "Advanced",
        time: "$12/mo",
        yearly: "2 months free",
        icon: AdvanceIcon
    },
    {
        id: 3,
        name: "Pro",
        time: "$15/mo",
        yearly: "2 months free",
        icon: ProIcon
    },
];

function Plan() {
    const [activeCard, setActiveCard] = useState(0);
    const [isYearly, setIsYearly] = useState(false);
    const { nextStep, prevStep } = useContext(MultiFormContext);

    return (
        <div className={styles.plan}>
            <h3>Select your plan</h3>
            <p>You have the option of montyhle or yearly billing.</p>
            <div className={styles.plans_container}>
                {
                    PLANS.map(plan => (
                        <PlanCard
                            key={plan.id}
                            name={plan.name}
                            time={plan.time}
                            icon={plan.icon}
                            yearly={isYearly ? plan.yearly : false}
                            active={activeCard === plan.id}
                            onCardClick={() => setActiveCard(plan.id)}
                        />
                    ))
                }
            </div>

            <PlanTime 
                isYearly={isYearly}
                onSwitchClick={() => setIsYearly(prevState => !prevState)}
            />

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