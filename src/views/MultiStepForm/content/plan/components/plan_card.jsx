import styles from "./plan_card.module.scss";

function PlanCard(props) {
    let { 
        icon, 
        name, 
        time, 
        active = false, 
        onCardClick = () => {} 
    } = props

    return (
        <div 
            className={`${styles.plan_card} ${active ? styles.active : ""}` }
            onClick={onCardClick}
        >
            <img src={icon} alt={`icon of ${name}`} />
            <h4>{name}</h4>
            <p>{time}/</p>
        </div>
    )
}

export default PlanCard;