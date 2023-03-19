import styles from "./plan_card.module.scss";
import { useFormContext } from "react-hook-form";

function PlanCard({plan}) {
    const { 
        id,
        icon, 
        name, 
        yearly_desc,
        yearly,
        monthly
    } = plan;

    const { setValue, watch } = useFormContext();

    const onCardClick = () => {
        setValue("plan", id);
    }

    return (
        <div 
            className={`${styles.plan_card} ${(watch("plan") == id) ? styles.active : ""}` }
            onClick={onCardClick}
        >
            <img src={require(`../../../../../assets/images/${icon}`)} alt={`icon of ${name}`} />
            <div>
                <h4>{name}</h4>
                {
                    watch("is_yearly")
                    ? <p>${yearly}/yr</p>
                    : <p>${monthly}/mo</p>
                }
                {watch("is_yearly") && <p className={styles.plan_card_year}>{yearly_desc}</p>}
            </div>
        </div>
    )
}

export default PlanCard;