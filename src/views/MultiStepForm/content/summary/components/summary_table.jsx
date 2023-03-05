
import styles from "./summary_table.module.scss";

function SummaryTable() {
    return (
        <div className={styles.summary_table}>
            <div className={styles.summary_table_main}>
                <div>
                    <p>Arcade (Yearly)<span>Change</span></p>
                    <p>$90/yr</p>
                </div>
                <div className={styles.summary_table_misc}>
                    <p>Online service</p>
                    <p>+$10/yr</p>
                </div>
                <div className={styles.summary_table_misc}>
                    <p>Larger storage</p>
                    <p>+$20/yr</p>
                </div>
            </div>
            <div className={styles.summary_table_total}>
                <p>Total (per year)</p>
                <p>$120/yr</p>
            </div>
        </div>
    )
}

export default SummaryTable;