import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { MultiFormContext } from "../../../../../context/multi_form_context";
import { ADD_ONS, PLANS } from "../../../../../assets/constans";
import styles from "./summary_table.module.scss";

function SummaryTable() {

    const { setStep } = useContext(MultiFormContext);
    const { getValues } = useFormContext();

    let total = 0; 
    const selected_plan = PLANS.find(add_on => add_on.id == getValues("plan"));
    const is_yearly = getValues("is_yearly");
    total += is_yearly ? selected_plan.yearly : selected_plan.monthly;
    const all_adds_on = getValues("adds_on");
    const adds_on_list = ADD_ONS.filter(add_on => all_adds_on.includes(add_on.id.toString()));


    return (
        <div className={styles.summary_table}>
            <div className={styles.summary_table_main}>
                <div>
                    <p>{selected_plan.name} ({is_yearly ? "Yearly" : "Monthly"})<span onClick={() => setStep(2)}>Change</span></p>
                    {
                        is_yearly 
                        ? <p>${selected_plan.yearly}/yr</p>
                        : <p>${selected_plan.monthly}/mo</p>
                    }
                </div>
                { 
                    adds_on_list.map(add_on => {
                        total += is_yearly ? add_on.yearly : add_on.monthly;
                        return (
                            <div className={styles.summary_table_misc} key={add_on.id}>
                                <p>{add_on.title}</p>
                                {
                                    is_yearly
                                    ? <p>+${add_on.yearly}/yr</p>
                                    : <p>+${add_on.monthly}/mo</p>
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.summary_table_total}>
                <p>Total (per {is_yearly ? "year" : "month"})</p>
                <p>${total}/{is_yearly ? "yr" : "mo"}</p>
            </div>
        </div>
    )
}

export default SummaryTable;