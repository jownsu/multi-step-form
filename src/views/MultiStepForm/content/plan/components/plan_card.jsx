import styles from "./plan_card.module.scss";

function PlanCard(props) {
    const { 
        icon, 
        name, 
        time, 
        active = false, 
        yearly,
        onCardClick = () => {} 
    } = props

    return (
        <div 
            className={`${styles.plan_card} ${active ? styles.active : ""}` }
            onClick={onCardClick}
        >
            <img src={icon} alt={`icon of ${name}`} />
            <h4>{name}</h4>
            <p>{time}</p>
            {yearly && <p className={styles.plan_card_year}>{yearly}</p>}
        </div>
    )
}

export default PlanCard;