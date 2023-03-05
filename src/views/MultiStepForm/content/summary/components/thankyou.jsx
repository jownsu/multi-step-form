import ThankyouIcon from "../../../../../assets/images/icon-thank-you.svg";
import styles from "./thankyou.module.scss";

function Thankyou({onTyClick = () => {}}) {
    return (
        <div className={styles.thankyou}>
            <img src={ThankyouIcon} alt="check icon" onClick={onTyClick} />
            <h3>Thank you!</h3>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>    
    )
}

export default Thankyou;