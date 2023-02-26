import { useState } from "react";
import styles from "./plan.module.scss";
import { PrimaryButton, SecondaryButton } from "../../../global/button/button";
import PlanCard from "./components/plan_card";
import PlanTime from "./components/plan_time";
import ArcadeIcon from "../../../../assets/images/icon-arcade.svg";
import AdvanceIcon from "../../../../assets/images/icon-advanced.svg";
import ProIcon from "../../../../assets/images/icon-pro.svg";

const PLANS = [
    {
        id: 1,
        name: "Arcade",
        time: "$9/mo",
        icon: ArcadeIcon
    },
    {
        id: 2,
        name: "Advanced",
        time: "$12/mo",
        icon: AdvanceIcon
    },
    {
        id: 3,
        name: "Pro",
        time: "$15/mo",
        icon: ProIcon
    },
];

function Plan() {
    const [activeCard, setActiveCard] = useState(0);

    return (
        <div className={styles.plan}>
            <h3>Select your plan</h3>
            <p className={styles.plan_desc}>You have the option of montyhle or yearly billing.</p>
            <div className={styles.plans_container}>
                {
                    PLANS.map(plan => (
                        <PlanCard
                            key={plan.id}
                            name={plan.name}
                            time={plan.time}
                            icon={plan.icon}
                            active={activeCard == plan.id}
                            onCardClick={() => setActiveCard(plan.id)}
                        />
                    ))
                }
            </div>

            <PlanTime />

            <div className={styles.plan_footer}>
                <SecondaryButton text="Go Back" />
                <PrimaryButton text="Next Step" />
            </div>
        </div>
    )
}

export default Plan;