import { useContext } from "react";
import { MultiFormContext } from "../../../../context/multi_form_context";
import AddOnsOption from "./components/add_ons_option";
import { SecondaryButton, PrimaryButton } from "../../../global/button/button";
import styles from "./add_ons.module.scss";


const ADD_ONS_OPTIONS = [
    {
        id: 1,
        title: "Online service",
        info: "Access to multiplayer games",
        price: "+$1/mo"
    },
    {
        id: 2,
        title: "Larger storage",
        info: "Extra 1TB of cloud save",
        price: "+$2/mo"
    },
    {
        id: 3,
        title: "Customizable Profile",
        info: "Custom theme on your profile",
        price: "+$2/mo"
    }
];


function AddsOns() {

    const { nextStep, prevStep } = useContext(MultiFormContext);

    return (
        <div className={styles.add_ons}>
            <h3>Pick add-ons</h3>
            <p>Add-ons help enhance your gaming experience.</p>

            {
                ADD_ONS_OPTIONS.map(add_ons => (
                    <AddOnsOption 
                        key={add_ons.id}
                        add_ons={add_ons}
                    />
                ))
            }

            <div className={styles.add_ons_footer}>
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

export default AddsOns;