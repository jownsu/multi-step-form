import { useState, useContext } from "react";
import { MultiFormContext } from "../../../context/multi_form_context";
import PersonalInfo from "./personal_info/personal_info";
import Plan from "./plan/plan";
import AddsOns from "./add_ons/add_ons";
import Summary from "./summary/summary";
import styles from "./content.module.scss";

const renderContent = {
    1: <PersonalInfo />,
    2: <Plan />,
    3: <AddsOns />,
    4: <Summary />
}

function Content() {

    const { step } = useContext(MultiFormContext);

    return (
        <div className={styles.container}>
            {renderContent[step]}
        </div>
    )
}

export default Content;